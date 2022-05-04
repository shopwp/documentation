---
sidebar_position: 8
---

# [wps_cart_icon]

The `[wps_cart_icon]` shortcode displays a cart icon anywhere it's placed. It will open the slide-in cart when clicked.

## Example Usage

```js
// Overrides the default cart icon
[wps_cart_icon icon="https://yoursite.com/icon.svg"]

// Changes the icon background color
[wps_cart_icon icon_color="red"]

// Show icon without counter
[wps_cart_icon show_counter="false"]
```

## Available Attributes

### icon

Changes the actual cart icon. Takes a URL to an icon image. Default: `false`.

**Example**:

```js
[wps_cart_icon icon="https://yoursite.com/icon.svg"]
```

### icon_color

Changes the color of the cart icon. Only works when not using the [icon](#icon) attribute. Default: `#000`.

**Example**:

```js
[wps_cart_icon icon_color="#FFF"]
```

### counter_background_color

Changes the background color of the cart counter. Default: `#6ae06a`.

**Example**:

```js
[wps_cart_icon counter_background_color="#FFF"]
```

### counter_text_color

Changes the text color of the cart counter. Default: `#000`.

**Example**:

```js
[wps_cart_icon counter_text_color="#FFF"]
```

### background_color

Changes the background color of the cart icon. Default: `#000`.

**Example**:

```js
[wps_cart_icon background_color="#FFF"]
```

### show_counter

Whether to display a "counter" next to the icon indicating the cart quantity. Default: `true`.

**Example**:

```js
[wps_cart_icon show_counter="false"]
```
