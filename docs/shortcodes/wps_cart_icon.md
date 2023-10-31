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

Changes the actual cart icon. Takes a URL to an icon image.

While you _can_ use any type of image (.jpg, .png, etc) it's best to use an .svg.

**Example**: Customize the actual cart icon

```js
[wps_cart_icon icon="https://wpshop.io/assets/basket-shopping-light.svg"]
```

<p className="live-example-heading cart-icon-custom"><strong>Live Example:</strong></p>

### inline_icon_color

Changes the color of the cart icon itself. Default: `#000`.

Only works when not using the [icon](#icon) attribute.

**Shortcode Example**: Changes the icon color to `#ff891e`

```js
[wps_cart_icon inline_icon_color="#ff891e"]
```

### counter_background_color

Changes the background color of the cart counter. Default: `#6ae06a`.

**Example**: Change the counter background color to red

```js
[wps_cart_icon counter_background_color="red"]
```

### counter_text_color

Changes the text color of the cart counter.

**Example**: Change the counter text color to black

```js
[wps_cart_icon counter_text_color="black"]
```

### show_counter

Whether to display a "counter" next to the icon indicating the cart quantity. Default: `true`.

**Example**: Hide the cart counter

```js
[wps_cart_icon show_counter="false"]
```
