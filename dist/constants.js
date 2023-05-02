"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BARS = exports.DEFAULT_DELAY_RESOLVE = exports.DEFAULT_DELAY = exports.DEFAULT_FPS = exports.DEFAULT_DURATION = exports.DEFAULT_GLYPHS = exports.DEFAULT_DIRECTION = exports.DEFAULT_ANIMATION = void 0;
const types_1 = require("./types");
exports.DEFAULT_ANIMATION = types_1.animations.STAY;
exports.DEFAULT_DIRECTION = types_1.directions.RIGHT;
exports.DEFAULT_GLYPHS = ' !#$&%()*+0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuüvwxyz{|}~';
exports.DEFAULT_DURATION = 1;
exports.DEFAULT_FPS = 60;
exports.DEFAULT_DELAY = 0;
exports.DEFAULT_DELAY_RESOLVE = 0.2;
exports.BARS = {
    BARS_ANIMATION: types_1.animations.SHOW,
    BARS_DIRECTION: types_1.directions.RIGHT,
    GLYPHS: '▁▃▅▇',
    DURATION: 0.5,
    FPS: 40,
    DELAY: 0,
    DELAY_RESOLVE: 0.2,
};
