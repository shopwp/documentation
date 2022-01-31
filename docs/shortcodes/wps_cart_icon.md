---
sidebar_position: 8
---

# [wps_cart_icon]

Displays the cart icon component.

Watch our [quick video tutorial](https://www.youtube.com/watch?v=v3AC2SPK40o&t=0s) to learn how to use this.

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

```js
[wps_cart_icon icon="https://yoursite.com/icon.svg"]
```

### icon_color

Changes the color of the cart icon. Only works when not using the [icon](#icon) attribute. Default: `#000`.

```js
[wps_cart_icon icon_color="#FFF"]
```

### counter_background_color

Changes the background color of the cart counter. Default: `#6ae06a`.

```js
[wps_cart_icon counter_background_color="#FFF"]
```

### counter_text_color

Changes the text color of the cart counter. Default: `#000`.

```js
[wps_cart_icon counter_text_color="#FFF"]
```

### show_counter

Whether to display a "counter" next to the icon indicating the cart quantity. Default: `true`.

```js
[wps_cart_icon show_counter="false"]
```

### type

Whether to display the icon as inline or fixed. Default: `inline`.

```js
[wps_cart_icon type="fixed"]
```

### cart_title

Allows for customizing the cart title. Default: `Shopping Cart`.

#### Example

```php
add_filter('shopwp_cart_default_payload_settings', function($cart_settings) {
    $cart_settings['cart_title'] = 'Custom Shopping Cart Title';

    return $cart_settings;
});
```

### checkout_text

### checkout_failed_message

### lineitem_remove_text

### lineitem_sale_label_text

### lineitems_disable_link

### lineitems_max_quantity

### lineitems_min_quantity

### lineitems_quantity_step

### notes_label

### notes_placeholder

### empty_cart_text

### subtotal_label_text

### show_cart_title

### show_cart_close_icon
