# Web Meta
<a href="https://www.npmjs.org/package/web-meta"><img src="https://img.shields.io/npm/v/web-meta.svg?style=flat" alt="npm"></a>


Data based on [atom/autocomplete-css](https://github.com/atom/autocomplete-css), [ChromeDevTools/devtools-frontend](https://github.com/ChromeDevTools/devtools-frontend/blob/master/front_end/sdk/CSSMetadata.js) and [adobe/brackets](https://github.com/adobe/brackets/blob/master/src/extensions/default/CSSCodeHints/CSSProperties.json)

## Install

```
npm i web-meta
```

## Usage

#### CSS Properties list

```js
import { cssProperties } from 'web-meta';
/*
  ...
  "animation-name",
  "animation-play-state",
  "animation-timing-function",
  "animation",
  "backface-visibility",
  "background-attachment",
  "background-blend-mode",
  "background-clip",
  "background-color",
  ...
*/
```

#### CSS Properties Map

Lookup table for css property values

```js
import { cssPropertyMap } from 'web-meta';
/*
  ...
  "align-content": ["center", "flex-end", "flex-start","space-around", "space-between", "stretch"],
  "align-items": ["baseline", "center", "flex-end", "flex-start", "stretch"],
  "align-self": ["auto", "baseline", "center", "flex-end", "flex-start", "stretch"],
  ...
*/
```

#### CSS Color properties list

List of css properties (keys) related to color

```js
import { cssColorProps } from 'web-meta';
// e.g "background-color"
```

#### CSS Distance properties list

List of css properties (keys) related to distance

```js
import { cssDistanceProps } from 'web-meta';
```

#### CSS Pseudo selectors list

List of css pseudo selectors(keys)

```js
import { cssPseudoSelectors } from 'web-meta';
// e.g  "::after"
```

#### HTML Tags list

```js
import { htmlTags } from 'web-meta';
/*
  ...
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "code",
  "div",
  "em",
  "form",
  "footer",
  "h1",
  "h2",
  ...
*/
```

#### HTML Tag Attributes map

Lookup table for available attributes on html tags.

```js
import { htmlTagAttributesMap } from 'web-meta';
/*
  ...
  "br": [],
  "button": [
    "autofocus",
    "disabled",
    "form",
    "formaction",
    "formenctype",
    "formmethod",
    "formnovalidate",
    "formtarget",
    "name",
    "type",
    "value"
  ],
  "canvas": ["height", "width"],
  ...
*/
```

#### HTML Attributes map

Lookup table for values on html attributes

```js
import { htmlAttributeMap } from 'web-meta';
/*
  ...
  "preload": ["auto", "metadata", "none"],
  "input/type": [
    "button",
    "checkbox",
    "color",
    "date",
    "datetime",
    "datetime-local",
    "email",
    "file",
    "hidden",
    "image",
    "month",
    "number",
    "password",
    "radio",
  ...
*/
```
