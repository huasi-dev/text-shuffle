export const random = (arr: any) => {
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

const clamp = (value: any, min: any, max: any) =>
  min < max
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

export const clamp01 = (v: any) => clamp(v, 0, 1);

export const quartOut = (t: any) => Math.pow(t - 1.0, 3.0) * (1.0 - t) + 1.0;

export const quadInOut = (t: any) => {
  t /= 0.5;
  if (t < 1) return 0.5 * t * t;
  t--;
  return -0.5 * (t * (t - 2) - 1);
};

const currentRandom = () => Math.random();

const value = () => currentRandom();

const range = (min: any, max: any) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }

  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError('Expected all arguments to be numbers');
  }

  return value() * (max - min) + min;
};

const rangeFloor = (min: any, max: any) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }

  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError('Expected all arguments to be numbers');
  }

  return Math.floor(range(min, max));
};

export const pick = (array: any) => {
  if (array.length === 0) return undefined;
  return array[rangeFloor(0, array.length)];
};
