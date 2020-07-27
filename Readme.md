# molten-type

A set of modular scales for fluid typography that responds to viewport changes. It combines the relationship between a text's font size, its line height and its line length. Instead of adjusting just the font size on a breakpoint by breakpoint basis, a molten type will adjust all three for every viewport size, _as the viewport changes_.

> So what is a modular scale? To put it simply, a modular type scale is a list of font sizes that work well together because they increase by the same ratio. We start with a base font size and multiply it by the ratio to obtain the font sizes we can then use in our CSS.
>
> For example, having a base size of 16px and a ratio of 1.5 will yeild us a list of 16px, 24px, 36px, 54px, 81px, etc.

In addition to changing the font size based on a ratio, **molten type** will also adjust the font's line height and, if a variable font is used, its font weight. It all happens automatically for each viewport width, and each viewport width will take into account the type scale ratio.

![molten type demo](./images/demo.gif)

Out of the box, **molten type** has the following type scales:

| Name             | Ratio | File                   |
| :--------------- | :---- | :--------------------- |
| Base             | 1.000 | `index.css`            |
| Minor Second     | 1.067 | `minor-second.css`     |
| Major Second     | 1.125 | `major-second.css`     |
| Minor Third      | 1.200 | `minor-third.css`      |
| Major Third      | 1.250 | `major-third.css`      |
| Perfect Fourth   | 1.333 | `perfect-fourth.css`   |
| Augmented Fourth | 1.414 | `augmented-fourth.css` |
| Perfect Fifth    | 1.500 | `perfect-fifth.css`    |
| Golden Ratio     | 1.618 | `golden-ratio.css`     |

Additionally, you can set the ratio yourself by adding the `index.css` file and overwriting the root CSS property for `--type-scale`.

```html
<link rel="stylesheet" href="node_modules/molten-type/index.css" />
<style>
  :root {
    --type-scale: 0.8;
  }
</style>
```

## Usage

First install the package from `npm`:

```sh
npm install --save molten-type
```

Or with yarn

```sh
yarn add molten-type
```

Then link to the stylesheet you want to use:

```html
<link rel="stylesheet" href="node_modules/molten-type/major-third.css" />
```

Or use it in your SPA or similar. For example, in a [Gatsby][gatsby] website, in `gatsby-browser.js`:

```js
import 'molten-type/major-third.css';
```

### Browser support

> If you _still have to_ care about IE11 and below, you cannot use [CSS variables](https://caniuse.com/#search=css%20var). You also need to support _[calc()](https://caniuse.com/#search=calc)_, which is a bit flaky in IE11 and below, as well Safari and iOS Safari 6 and 7 (which won't support viewport units in calc()). Sad face!

|                Browser                |              Supported               |
| :-----------------------------------: | :----------------------------------: |
| ![Google Chrome](./images/chrome.png) | ![Supported](./images/checkmark.png) |
|    ![Safari](./images/safari.png)     | ![Supported](./images/checkmark.png) |
|   ![Firefox](./images/firefox.png)    | ![Supported](./images/checkmark.png) |
|      ![Edge](./images/edge.png)       | ![Supported](./images/checkmark.png) |
|     ![Opera](./images/opera.png)      | ![Supported](./images/checkmark.png) |
| ![Internet Explorer](./images/ie.png) | ![Not supported](./images/cross.png) |

### Contributing

For details, check out the [Contributing](./Contributing.md) guide.

#### LICENSE

MIT

##### Further reading

**molten type** would not be possible without the teachings and writings of these folks:

- [https://www.smashingmagazine.com/2016/05/fluid-typography/](https://www.smashingmagazine.com/2016/05/fluid-typography/)
- [https://type-scale.com/](https://type-scale.com/)
- [https://medium.com/sketch-app-sources/exploring-responsive-type-scales-cf1da541be54](https://medium.com/sketch-app-sources/exploring-responsive-type-scales-cf1da541be54)
- [https://www.rawkblog.com/2018/05/modular-scale-typography-with-css-variables-and-sass/](https://www.rawkblog.com/2018/05/modular-scale-typography-with-css-variables-and-sass/)
- [https://moderncss.dev/generating-font-size-css-rules-and-creating-a-fluid-type-scale/](https://moderncss.dev/generating-font-size-css-rules-and-creating-a-fluid-type-scale/)

[gatsby]: https://www.gatsbyjs.org/
