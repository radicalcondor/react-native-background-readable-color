# @radicalcondor/react-native-background-readable-color

A React Native package that provides:
  - A component that takes a `backgroundColor` and returns a readable color
    through a render prop
  - A text component that takes a `backgroundColor` and changes its color to a
    readable color
  - A hook that returns a readable color given another color
  - Memoized versions of the above
  - Mechanism for getting/setting preset colors

## Background

I wanted a text component that was background color aware. Initially, I 
thought I could get a reference to the parent component and retrieve the
background color, but I couldn't find a way to reliably achieve that. So I
came up with the next best thing I could think of, a wrapper component that
receives a `backgroundColor` and renders any text inside it with a readable 
color.

## Installation

```sh
yarn add @radicalcondor/react-native-background-readable-color
```

## Example

You can run the example project by doing
```sh
yarn bootstrap
```
and then
```sh
yarn example ios
```
or 
```sh
yarn example android
```

## Usage

### useBackgroundReadableColor / useBackgroundReadableColorMemo
```
    backgroundColor?: string;
    presetName?: string;
```
```js
import { Text } from 'react-native' 
import { useBackgroundReadableColorMemo } from "@radicalcondor/react-native-background-readable-color";

const props = {
  backgroundColor: '#000',
  presetName: undefined,
};

const color = useBackgroundReadableColorMemo(props);
```

### <BackgroundReadableColorText />
```
    backgroundColor?: string;
    children: string;
    presetName?: string;
    render: any;
    useMemo?: boolean;
```
```js
import { Text } from 'react-native' 
import BackgroundReadableColorText from "@radicalcondor/react-native-background-readable-color";

const bgColor = 'black';

<BackgroundReadableColorText backgroundColor={bgColor} render={Text}>
    A readable color text in white
</BackgroundReadableColorText>
```

### <BackgroundReadableColor />
```
    backgroundColor?: string;
    presetName?: string;
    render: (color?: string) => React.ReactNode;
    useMemo?: boolean;
```
```js
import { Text } from 'react-native' 
import { BackgroundReadableColor } from "@radicalcondor/react-native-background-readable-color";

const bgColor = 'white';

<ReadableBackgroundColor
    backgroundColor={bgColor}
    render={(color?: string) => <Text style={{color: color || 'cyan'}}>A readable color text in black</Text>}
/>
```

### using ReadablePresets
You can create presets for your readable colors, it takes a name and an object with a dark color, that will try to be used
on a dark background and a light color for light backgrounds. 
ReadablePresets is a singleton and the configuration can be done anywhere in your project.
```
    dark?: string;
    light?: string;
```
```js
import { Text } from 'react-native' 
import BackgroundReadableColorText, { ReadablePresets } from "@radicalcondor/react-native-background-readable-color";

ReadablePresets.setPreset('RED', {
    dark: '#ff9c9c', // color to be used if its a dark background
    light: '#6d0000', // color to be used if its a light background
});

const bgColor = 'black';

<BackgroundReadableColorText backgroundColor={bgColor} render={Text}>
    A readable color text in #ff9c9c
</BackgroundReadableColorText>
```

`This package uses readableColor function from [polished](https://www.npmjs.com/package/polished) lib to compute the colors. If you would like to read more check [here](https://polished.js.org/docs/#readablecolor)`

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
