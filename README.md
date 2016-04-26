<a href="https://codeship.com/projects/148366" target="_blank">
  <img src="https://img.shields.io/codeship/6d829490-ed16-0133-063d-7e789489b0a6/master.svg?style=flat-square"
       alt="Build Status" />
</a>
<a href="https://npmjs.org/package/react-baseline" target="_blank">
  <img src="https://img.shields.io/npm/v/react-baseline.svg?style=flat-square"
       alt="NPM Version" />
</a>

# React Baseline

This project provides a `<Baseline>` component that allows you to easily render a baseline overlay. To actually place the text on the baseline, check out <a href="https://github.com/mjt01/basekick" target="_blank">basekick</a>.

## Installation

```shell
npm install react-baseline
```

## Basic Usage

```js
import Baseline from 'react-baseline';

// Then, just wrap some element with <Baseline>
render() {
  return (
    <Baseline lineHeight={12}>
      <div>
        Some element
      </div>
    </Baseline>
  );
}
```

## Props

* [`isVisible`](#isVisibleProp)
* [`type`](#typeProp)
* [`lineHeight`](#lineHeightProp)
* [`color`](#colorProp)
* You can also pass any other props like `className`, `style`, etc.

<a name="isVisibleProp"></a>
#### isVisible (optional)

Controls whether the baseline overlay will be rendered or not. Default: `true`

<a name="typeProp"></a>
#### type (optional)

Baseline overlay comes with two types: `'line'` and `'bar'`

Default: `'line'`

<a name="lineHeightProp"></a>
#### lineHeight (optional)

The distance in `px` between two consecutive baselines.

Default: `9`

<a name="colorProp"></a>
#### color (optional)

The color of the baseline overlay. 

All the usual CSS color formats are suppoted: `'#123456'`, `'#555'`, `'blue'`, `'rgb(100, 200, 300)'`

Default: `'rgba(0, 0, 0, 0.15)'`

## Development

```shell
$ npm install
$ npm start
```

## License

<a href="http://moroshko.mit-license.org" target="_blank">MIT</a>
