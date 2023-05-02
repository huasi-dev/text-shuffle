"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const constants_1 = require("./constants");
const types_1 = require("./types");
const shuffle = ({ text = '', duration = constants_1.DEFAULT_DURATION, delay = constants_1.DEFAULT_DELAY, delayResolve = constants_1.DEFAULT_DELAY_RESOLVE, fps = constants_1.DEFAULT_FPS, glyphs = constants_1.DEFAULT_GLYPHS, animation = constants_1.DEFAULT_ANIMATION, direction = constants_1.DEFAULT_DIRECTION, onUpdate = null, onComplete = null, }) => {
    const _glyphs = glyphs.split('');
    const _text = text.split('');
    const _delta = 1000 / fps;
    let _now = Date.now();
    let _start = Date.now();
    // text indices
    let _tindices = _text.map((t, i) => i);
    // flip direction when hiding
    if (animation == types_1.animations.HIDE) {
        if (direction == types_1.directions.LEFT)
            direction = types_1.directions.RIGHT;
        else if (direction == types_1.directions.RIGHT)
            direction = types_1.directions.LEFT;
    }
    // reverse text indices
    if (direction == types_1.directions.LEFT)
        _tindices.reverse();
    // randomise text indices
    if (direction == types_1.directions.RANDOM)
        _tindices = (0, utils_1.random)(_tindices);
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
        // t = linear time
        t = ((_now - _start) * 0.001) / duration;
        if (animation == types_1.animations.HIDE)
            t = 1 - t;
        // u = shuffle curve
        // u starts at delay
        u = (0, utils_1.clamp01)(t - delay);
        u = (0, utils_1.quartOut)(u);
        // v = resolve curve
        // v starts at u + it's own delay
        v = (0, utils_1.clamp01)(t - delay - delayResolve);
        // v duration is deducted from it's delay (increase speed)
        v = v * (1 / (1 - delayResolve));
        v = (0, utils_1.quadInOut)(v);
        uLen = Math.round(u * text.length);
        vLen = Math.round(v * text.length);
        for (let i = 0; i < text.length; i++) {
            tidx = _tindices[i];
            glyph = _text[i];
            if (tidx >= uLen && animation != types_1.animations.STAY)
                glyph = ' ';
            if (glyph != ' ' && tidx >= vLen)
                glyph = (0, utils_1.pick)(_glyphs);
            output = `${output}${glyph}`;
        }
        // loop until u reaches 0
        if (animation == types_1.animations.HIDE)
            complete = u <= 0;
        // loop until u reaches 1
        else
            complete = u >= 1;
        if (!complete)
            requestAnimationFrame(_onUpdate);
        else
            output = animation == types_1.animations.HIDE ? '' : text;
        if (onUpdate)
            onUpdate(output);
        if (complete && onComplete)
            onComplete(output);
    };
    _onUpdate();
};
exports.default = shuffle;
