import { animations, directions } from './types';

export const DEFAULT_ANIMATION = animations.STAY;
export const DEFAULT_DIRECTION = directions.RIGHT;
export const DEFAULT_GLYPHS =
  ' !#$&%()*+0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuüvwxyz{|}~';
export const DEFAULT_DURATION = 1;
export const DEFAULT_FPS = 60;
export const DEFAULT_DELAY = 0;
export const DEFAULT_DELAY_RESOLVE = 0.2;

export const BARS = {
  BARS_ANIMATION: animations.SHOW,
  BARS_DIRECTION: directions.RIGHT,
  GLYPHS: '▁▃▅▇',
  DURATION: 0.5,
  FPS: 40,
  DELAY: 0,
  DELAY_RESOLVE: 0.2,
};
