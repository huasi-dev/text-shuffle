# @huasi/text-shuffle

## Install

```bash
# with yarn
yarn add txt-shuffle

# with pnpm
pnpm i @huasi/text-shuffle

# with npm
npm i @huasi/text-shuffle
```

## Usage

```js
import shuffle from '@huasi/text-shuffle';

shuffle({
  text: 'Hello world! from Huasi.dev',
  onUpdate: shuffleStr => {
    console.log(shuffleStr);
  },
  onComplete: () => {
    console.log('Shuffle complete!');
  },
});
```

## Props

### text

Text to shuffle.

| Type   | Required | Default |
| ------ | -------- | ------- |
| string | true     | ''      |

### duration = DEFAULT_DURATION,

Animation duration in seconds.

| Type   | Required | Default |
| ------ | -------- | ------- |
| number | false    | 1       |

### delay

Time to spend before starting the animation.

| Type   | Required | Default |
| ------ | -------- | ------- |
| number | false    | 0       |

### delayResolve

Time to spend to resolving the animation.

| Type   | Required | Default |
| ------ | -------- | ------- |
| number | false    | 0.2     |

### fps

Frames per second.

| Type   | Required | Default |
| ------ | -------- | ------- |
| number | false    | 60      |

### glyphs

String of characters to use in the shuffle animation

| Type   | Required |
| ------ | -------- |
| string | false    |

Default: `' !#$&%()*+0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_abcdefghijklmnopqrstuüvwxyz{|}~'`

### animation

Animation type, possible values: `show`, `hide`, `stay`

| Type   | Required | Default |
| ------ | -------- | ------- |
| string | false    | 'show'  |

### direction

Direction of the animation, possible values: `left`, `right`, `random`

| Type   | Required | Default |
| ------ | -------- | ------- |
| string | false    | 'left'  |

## Methods

### onUpdate = null,

Callback function to be called on each frame of the animation.

```js
onUpdate = string => {
  console.log(string);
};
```

### onComplete

Callback function to be called when the animation is complete.

```js
onComplete = string => {
  console.log('Shuffle complete!', string);
};
```

## License

MIT, see [LICENSE](LICENSE) for details.

## References

- [eases](https://github.com/mattdesl/eases) - [License](https://github.com/mattdesl/eases/blob/master/LICENSE.md)
- [canvas-sketch-util](https://github.com/mattdesl/canvas-sketch-util) - [License](https://github.com/mattdesl/canvas-sketch-util/blob/master/LICENSE.md)
- [txt-shuffle](https://github.com/brunoimbrizi/txt-shuffle) - [License](https://github.com/brunoimbrizi/txt-shuffle/blob/main/LICENSE)
