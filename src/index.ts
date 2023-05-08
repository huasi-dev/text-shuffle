import { clamp01, quadInOut, quartOut, random, pick } from './utils';
import {
  DEFAULT_ANIMATION,
  DEFAULT_DELAY,
  DEFAULT_DELAY_RESOLVE,
  DEFAULT_DIRECTION,
  DEFAULT_DURATION,
  DEFAULT_FPS,
  DEFAULT_GLYPHS,
} from './constants';
import { ITextShuffleProps, animations, directions } from './types';

const shuffle = ({
  text = '',
  duration = DEFAULT_DURATION,
  delay = DEFAULT_DELAY,
  delayResolve = DEFAULT_DELAY_RESOLVE,
  fps = DEFAULT_FPS,
  glyphs = DEFAULT_GLYPHS,
  animation = DEFAULT_ANIMATION,
  direction = DEFAULT_DIRECTION,
  onUpdate = null,
  onComplete = null,
}: ITextShuffleProps) => {
  const _glyphs = glyphs.split('');
  const _text = text.split('');
  const _delta = 1000 / fps;

  let _now = Date.now();
  let _start = Date.now();

  let _tindices = _text.map((t, i) => i);

  if (animation == animations.HIDE) {
    if (direction == directions.LEFT) direction = directions.RIGHT;
    else if (direction == directions.RIGHT) direction = directions.LEFT;
  }

  if (direction == directions.LEFT) _tindices.reverse();
  if (direction == directions.RANDOM) _tindices = random(_tindices);

  let uLen, vLen;
  let glyph, output, complete;
  let tidx;
  let t, u, v;

  const _onUpdate = () => {
    if (Date.now() - _now < _delta) {
      requestAnimationFrame(_onUpdate);
      return;
    }

    _now = Date.now();
    output = '';

    t = ((_now - _start) * 0.001) / duration;
    if (animation == animations.HIDE) t = 1 - t;

    u = clamp01(t - delay);
    u = quartOut(u);

    v = clamp01(t - delay - delayResolve);
    v = v * (1 / (1 - delayResolve));
    v = quadInOut(v);

    uLen = Math.round(u * text.length);
    vLen = Math.round(v * text.length);

    for (let i = 0; i < text.length; i++) {
      tidx = _tindices[i];
      glyph = _text[i];

      if (tidx >= uLen && animation != animations.STAY) glyph = ' ';
      if (glyph != ' ' && tidx >= vLen) glyph = pick(_glyphs);

      output = `${output}${glyph}`;
    }

    if (animation == animations.HIDE) complete = u <= 0;
    else complete = u >= 1;

    if (!complete) requestAnimationFrame(_onUpdate);
    else output = animation == animations.HIDE ? '' : text;

    if (onUpdate) onUpdate(output);
    if (complete && onComplete) onComplete(output);
  };

  _onUpdate();
};

export default shuffle;
