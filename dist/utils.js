"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pick = exports.quadInOut = exports.quartOut = exports.clamp01 = exports.random = void 0;
const random = (arr) => {
    if (!Array.isArray(arr)) {
        throw new TypeError('Expected Array, got ' + typeof arr);
    }
    var rand;
    var tmp;
    var len = arr.length;
    var ret = arr.slice();
    while (len) {
        rand = Math.floor(Math.random() * len--);
        tmp = ret[len];
        ret[len] = ret[rand];
        ret[rand] = tmp;
    }
    return ret;
};
exports.random = random;
const clamp = (value, min, max) => min < max
    ? value < min
        ? min
        : value > max
            ? max
            : value
    : value < max
        ? max
        : value > min
            ? min
            : value;
const clamp01 = (v) => clamp(v, 0, 1);
exports.clamp01 = clamp01;
const quartOut = (t) => Math.pow(t - 1.0, 3.0) * (1.0 - t) + 1.0;
exports.quartOut = quartOut;
const quadInOut = (t) => {
    t /= 0.5;
    if (t < 1)
        return 0.5 * t * t;
    t--;
    return -0.5 * (t * (t - 2) - 1);
};
exports.quadInOut = quadInOut;
const currentRandom = () => Math.random();
const value = () => currentRandom();
const range = (min, max) => {
    if (max === undefined) {
        max = min;
        min = 0;
    }
    if (typeof min !== 'number' || typeof max !== 'number') {
        throw new TypeError('Expected all arguments to be numbers');
    }
    return value() * (max - min) + min;
};
const rangeFloor = (min, max) => {
    if (max === undefined) {
        max = min;
        min = 0;
    }
    if (typeof min !== 'number' || typeof max !== 'number') {
        throw new TypeError('Expected all arguments to be numbers');
    }
    return Math.floor(range(min, max));
};
const pick = (array) => {
    if (array.length === 0)
        return undefined;
    return array[rangeFloor(0, array.length)];
};
exports.pick = pick;
