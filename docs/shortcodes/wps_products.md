---
sidebar_position: 1
---

# [wps_products]

The `[wps_products]` shortcode allows you to display one or more products in a list or grid.

While you _can_ show a single product using this shortcode, the real power comes from showing a general list of products. You can filter and sort your products in various combinations. For example, you can choose to display products from a single collection using the [collection](#collection) attribute. Or, combine different filtering groups to search for very a specific combination such as [tag](#tag) and [vendor](#vendor).

Every attribute below can also be used with the following shortcodes:

- [[wps_products_title]](/shortcodes/wps_products_title)
- [[wps_products_pricing]](/shortcodes/wps_products_pricing)
- [[wps_products_gallery]](/shortcodes/wps_products_gallery)
- [[wps_products_description]](/shortcodes/wps_products_description)
- [[wps_products_buy_button]](/shortcodes/wps_products_buy_button)

## Shortcode Examples

```js
// Display products from a collection named Featured
[wps_products collection="featured"]

// Displays the cheapest 10 products
[wps_products sort_by="lowest_price" limit="10"]

// Displays products in rows of 5, sorted by best selling
[wps_products items_per_row="5" sort_by="best_selling"]

// Link products to the Shopify detail pages and show only the featured image
[wps_products link_to="shopify" show_featured_only="true"]
```

## Available Attributes

### title

Display products based on one or more product titles. Comma-separate to display products with multiple titles.

| Possible values                    |
| :--------------------------------- |
| Any valid Shopify product title(s) |

**Example**

```js
// Display a product with the title "Example Product"
[wps_products title="Example Product"]

// Display two products
[wps_products title="Example Product 1, Example Product 2"]
```

### tag

Display products based on one or more product tags. Comma-separate to display products from multiple tags.

| Possible values          |
| :----------------------- |
| Any valid product tag(s) |

**Example**

```js
// Display products that contain "Tag A"
[wps_products tag="Tag A"]

// Display products that contain "Tag A" or "Tag B"
[wps_products tag="Tag A, Tag B"]
```

### vendor

Display products based on one or more product vendors. Comma-separate to display products from multiple vendors.

| Possible values             |
| :-------------------------- |
| Any valid product vendor(s) |

**Example**

```js
// Display products that contain "Vendor A"
[wps_products vendor="Vendor A"]

// Display products that contain "Vendor A" or "Vendor B"
[wps_products vendor="Vendor A, Vendor B"]
```

### collection

Display products from one or more collections. Comma-separate to display products from multiple collections.

| Possible values                 |
| :------------------------------ |
| One or more collection title(s) |

**Example**

```js
// Display products from collection "Featured Products"
[wps_products collection="Featured Products"]

// Display products from collection "Featured Products" or "Games"
[wps_products collection="Featured Products, Games"]
```

### product_type

Display products based on one or more product type(s). Comma-separate to display products from multiple product types.

| Possible values           |
| :------------------------ |
| Any valid product type(s) |

**Example**

```js
// Display products of Audiobook product types
[wps_products product_type="Audiobook"]

// Display products of Audiobook or Hardcover product types
[wps_products product_type="Audiobook, Hardcover"]
```

### available_for_sale

Display products based on their availability. Setting to `true` will only show products that are in stock. Setting to `any` will show products that are also out of stock.

| Possible values |
| :-------------- |
| true            |
| any (default)   |

**Example**

```js
// Show only products that are in-stock
[wps_products available_for_sale="true"]
```

### product_id

Display products based on one or more product ids. The product id can be found within your Shopify admin. Open the product edit screen and examine the URL in your browser's address bar. The numeric product id will be at the end.

For more information, Shopify has a [tutorial you can follow here](https://help.shopify.com/en/manual/products/variants/find-variant-id).

| Possible values              |
| :--------------------------- |
| Any valid Shopify product id |

**Example**

```js
// Show product with id: "93283473232"
[wps_products product_id="93283473232"]

 // Show products with ids: "2216928411696" or "93283473232"
[wps_products product_id="2216928411696, 93283473232"]
```

### post_id

Display products based on one or more WordPress post id(s).

| Possible values           |
| :------------------------ |
| Any valid product post id |

**Example**

```js
// Show product with post id: "35421"
[wps_products post_id="35421"]

// Show products with post ids: "35421" or "35418"
[wps_products post_id="35421, 35418"]
```

### sort_by

Determines the sort order when displaying multiple products.

| Possible values                                |
| :--------------------------------------------- |
| title `Default`                                |
| best_selling                                   |
| created_at                                     |
| id                                             |
| price                                          |
| product_type                                   |
| updated_at                                     |
| vendor                                         |
| collection_default (filter by collection only) |
| manual (filter by collection only)             |
| created (filter by collection only)            |

**Example**

```js
// Sort products by lowest price
[wps_products sort_by="price"]

// Sort products by highest price
[wps_products sort_by="price" reverse="true"]

// Sort products by best selling
[wps_products sort_by="best_selling"]

// Sort products alphabetically (A-Z)
[wps_products sort_by="title"]

// Sort products reverse alphabetically (Z-A)
[wps_products sort_by="title" reverse="true"]
```

### reverse

Reverse the order of products. Useful when used in combination with [sort_by](#sort_by).

| Possible values |
| :-------------- |
| true            |
| false           |

**Example**

```js
// Low to high ($0 - $100)
[wps_products sort_by="price"]

// High to low ($100 - $0)
[wps_products sort_by="price" reverse="true"]
```

### page_size

Determines the number of products to show per page. Only applicable when [pagination](#pagination) is turned on.

Will default to the plugin's global [products per page](getting-started/settings?id=products-per-page) setting.

| Possible values |
| :-------------- |
| Any number      |

**Example**

```js
// Shows 4 products per page
[wps_products page_size="4"]
```

### limit

Limits the overall number of products that show. Max limit is `250`.

| Possible values |
| :-------------- |
| Any number      |

**Example**

```js
// Show two products per page, up to 10
[wps_products page_size="2" limit="10"]

// Only show one product
[wps_products limit="1"]
```

### connective

The connective attribute determines how the products are found when combining _other_ filtering attributes.

For example, the below shortcode will only display products with both `Tag 1` and `Tag 2`.

```js
[wps_products tag="Tag 1, Tag 2" connective="and"]
```

| Possible values |
| :-------------- |
| and             |
| or `Default`    |

**Example**

```js
// Products with either title will show
[wps_products title="Awesome product, Even better product" connective="or"]

// Only products with both Tag1 and Tag2 will show
[wps_products tag="Tag1, Tag2" connective="and"]
```

### subscriptions

Determines whether to enable subscriptions for the specific product.

:::info
Subscription products are only available with the [ShopWP Recharge extension](https://wpshop.io/extensions/recharge).
:::

**_This feature is only available with [ShopWP Pro](https://wpshop.io/pricing)._**

| Possible values |
| :-------------- |
| true            |
| false `Default` |

**Example**

```js
// Turn subscriptions on
[wps_products subscriptions="true"]
```

### subscriptions_select_on_load

Determines whether to auto select the subscription option when the product loads. This is useful if you provide both "one-time" and subscription options for your products.

**_This feature is only available with [ShopWP Pro](https://wpshop.io/pricing)._**

| Possible values |
| :-------------- |
| true            |
| false `Default` |

**Example**

```js
// Select the subscriptions option automatically when the product loads
[wps_products subscriptions_select_on_load="true"]
```

### keep_commas

By default, if you have a product with commas in the title, ShopWP will treat this as multiple different product titles. Setting `keep_commas` to true will allow you to search products with commas in their title.

| Possible values |
| :-------------- |
| true            |
| false (default) |

**Example**

```js
[wps_products title="This, is my, product" keep_commas="true"]
```

### direct_checkout

Allows for linking customers directly to the Shopify checkout process. This will bypass the default ShopWP cart experience altogether.

**_This feature is only available with [ShopWP Pro](https://wpshop.io/pricing)._**

| Possible values |
| :-------------- |
| true            |
| false `Default` |

**Example**

```js
[wps_products direct_checkout="true"]
```

### align_height

Attempts to "align" the height of products when displayed in a grid. This is useful if you want to keep the buy buttons on the same level.

| Possible values |
| :-------------- |
| true            |
| false (default) |

**Example**

```js
[wps_products align_height="true"]
```

### grid_column_gap

Specifies the space between products. This is useful when showing products in a grid layout.

The value you set will be interpreted as pixels, so do not add the `px` to the end. For example, if you want to set the space to 50 pixels, set the value to `50`, _not_ `50px`.

| Possible values     |
| :------------------ |
| Any number or false |

**Example**

```js
// Set the gutter between products to 50 pixels
[wps_products grid_column_gap="50"]
```

### html_template

Specifies a custom template to be used for the product html. If displaying more than one product, this template will be used for each one in the list.

To learn how this attribute works, see our [guide on using html templates](/guides/html-templates).

**_This feature is only available with [ShopWP Pro](https://wpshop.io/pricing)._**

| Possible values          |
| :----------------------- |
| Any valid .php file name |

**Example**

```js
// Load a template named "custom-product.php" to be used
[wps_products html_template="custom-product.php"]
```

### show_price_under_variant_button

Determines whether to show the variant price next to the variant button. This will only work when the product has one available option.

**_This feature is only available with [ShopWP Pro](https://wpshop.io/pricing)._**

| Possible values |
| :-------------- |
| true            |
| false `Default` |

**Example**

```js
// Show the variant price next to the variant button
[wps_products show_price_under_variant_button="true"]
```

### show_images_carousel

Determines whether to show the product images as a carousel.

**_This feature is only available with [ShopWP Pro](https://wpshop.io/pricing)._**

| Possible values |
| :-------------- |
| true            |
| false `Default` |

**Example**

```js
// Align the featured image to the left
[wps_products show_images_carousel="true"]
```

### variant_style

Determines the visual style of the product variant controls. "Dropdowns" will show by default.

**_The buttons style is only available with [ShopWP Pro](https://wpshop.io/pricing)._**

| Possible values    |
| :----------------- |
| dropdown `Default` |
| buttons            |

**Example**

```js
// Show variants as buttons instead of dropdowns
[wps_products variant_style="buttons"]
```

### hide_quantity

Determines whether to hide the product quantity input.

| Possible values |
| :-------------- |
| true            |
| false           |

**Example**

```js
// Hide the quantity input
[wps_products hide_quantity="true"]
```

### show_quantity_label

Determines whether to show or hide the "label" to the quantity selection element. Shows the word "Quantity" when turned on.

| Possible values |
| :-------------- |
| true            |
| false           |

**Example**

```js
[wps_products show_quantity_label="false"]
```

### min_quantity

Sets a "minimum" number to the quantity field. The user will not be able to add _less than_ this number to the cart at any given time.

**Example**

```js
[wps_products min_quantity="4"]
```

### max_quantity

Sets a "maximum" number to the quantity field. The user will not be able to add _more than_ this number to the cart at any given time.

**Example**

```js
[wps_products max_quantity="20"]
```

### excludes

Allows for excluding certain product components like the title, description, etc. Takes a comma separated string of values.

| Possible values |
| :-------------- |
| images          |
| title           |
| pricing         |
| description     |
| buy-button      |

**Example**

```js
// Don't show the title or pricing
[wps_products excludes="title, pricing"]
```

### items_per_row

Determines how many products will appear in each row.

| Possible values |
| :-------------- |
| Any text string |

**Example**

```js
[wps_products items_per_row="5"]
```

### show_price_range

Determines whether to show price ranges for each product. Only applicable when `pricing` is not set within the [excludes](#excludes) attribute.

| Possible values |
| :-------------- |
| true            |
| false           |

**Example**

```js
[wps_products show_price_range="true"]
```

### show_compare_at

Determines whether to show the compare at price for each product. Only applicable when `pricing` is not set within the [excludes](#excludes) attribute.

| Possible values |
| :-------------- |
| true            |
| false           |

**Example**

```js
[wps_products show_compare_at="true"]
```

### quantity_label_text

Customizes the label text next to the quantity input field.

| Possible values |
| :-------------- |
| Any text string |

**Example**

```js
[wps_products quantity_label_text="Custom quantity text"]
```

### show_featured_only

Determines whether to only show the product feature image. By default, all product images will show as thumbnails below the featured image.

| Possible values |
| :-------------- |
| true            |
| false           |

**Example**

```js
[wps_products show_featured_only="true"]
```

### show_zoom

Determines whether to enable product image zooming. When enabled, zoom will be triggered on the featured image.

**_This feature is only available with [ShopWP Pro](https://wpshop.io/pricing)._**

| Possible values |
| :-------------- |
| true            |
| false           |

**Example**

```js
[wps_products show_zoom="true"]
```

### pagination

Determines whether to hide or show pagination.

| Possible values |
| :-------------- |
| true            |
| false           |

**Example**

```js
[wps_products pagination="false"]
```

### no_results_text

The text to show when no products are found.

| Possible values |
| :-------------- |
| Any text string |

**Example**

```js
[wps_products no_results_text="Nothing found!"]
```

### description_length

Determines how long the product description should be in characters. Useful for only showing a specific excerpt.

| Possible values                                  |
| :----------------------------------------------- |
| Number of characters to limit the description by |

**Example**

```js
[wps_products_description description_length="50"]
```

### infinite_scroll

When turned on, the next page of items will automatically append to the container. Only works when pagination is used.

**_This feature is only available with [ShopWP Pro](https://wpshop.io/pricing)._**

| Possible values |
| :-------------- |
| true            |
| false           |

**Example**

```js
[wps_products infinite_scroll="true"]
```

### infinite_scroll_offset

Determines the offset from the edge of the items container. For example, a value of `-100` will begin loading additional items 100px before the end of the items container. Offset can be a positive or negative value.

**_This feature is only available with [ShopWP Pro](https://wpshop.io/pricing)._**

| Possible values                 |
| :------------------------------ |
| Any positive or negative number |

**Example**

```js
[wps_products infinite_scroll_offset="-100"]
```

### full_width

When set to `true`, will force the product to span the width of its container.

| Possible values |
| :-------------- |
| true            |
| false           |

**Example**

```js
[wps_products full_width="true"]
```

### link_to

Allows for determining where products link to, if anywhere.

**_The modal option is only available with [ShopWP Pro](https://wpshop.io/pricing)._**

| Possible values     |
| :------------------ |
| none                |
| wordpress `Default` |
| shopify             |
| modal               |

**Example**

```js
[wps_products link_to="none"]
```

### link_target

Allows for determining whether links open in a new tab or not. Default: `_self`.

| Possible values |
| :-------------- |
| \_self          |
| \_blank         |

**Example**

```js
[wps_products link_target="_blank"]
```

### link_with_buy_button

Allows for determining whether to show the buy button controls when linking to WordPress or Shopify. Default: `false`.

| Possible values |
| :-------------- |
| true            |
| false           |

**Example**

```js
[wps_products link_with_buy_button="true" link_to="wordpress"]
```

### carousel

Allows for showing products in a carousel style.

**_This feature is only available with [ShopWP Pro](https://wpshop.io/pricing)._**

| Possible values |
| :-------------- |
| true            |
| false `Default` |

**Example**

```js
[wps_products carousel="true"]
```

### carousel_dots

Determines whether to show the carousel dots or not.

| Possible values |
| :-------------- |
| true `Default`  |
| false           |

**Example**

```js
[wps_products carousel="true" carousel_dots="false"]
```

### carousel_infinite

Determines whether to continue sliding through products endlessly.

| Possible values |
| :-------------- |
| true `Default`  |
| false           |

**Example**

```js
[wps_products carousel="true" carousel_infinite="false"]
```

### carousel_speed

Determines the carousel speed. Default: `500`ms.

| Possible values        |
| :--------------------- |
| Number of milliseconds |

**Example**

```js
[wps_products carousel="true" carousel_speed="1000"]
```

### carousel_slides_to_show

Determines the number of carousel slides to show at once. Default: `4`.

| Possible values          |
| :----------------------- |
| Number of slides to show |

**Example**

```js
[wps_products carousel="true" carousel_slides_to_show="3"]
```

### carousel_slides_to_scroll

Determines the number of carousel slides to scroll at once. Default: `4`.

| Possible values            |
| :------------------------- |
| Number of slides to scroll |

**Example**

```js
[wps_products carousel="true" carousel_slides_to_scroll="3"]
```

### carousel_prev_arrow

Allows to specifying a custom "previous slide" arrow icon. Defaults to a black arrow.

| Possible values                                                       |
| :-------------------------------------------------------------------- |
| A URL to a custom icon, or any valid CSS image url prop like data uri |

**Example**

```js
[wps_products carousel="true" carousel_prev_arrow="https://mysite.com/pre_arrow.png"]
```

### carousel_next_arrow

Allows to specifying a custom "next slide" arrow icon. Defaults to a black arrow.

| Possible values                                                       |
| :-------------------------------------------------------------------- |
| A URL to a custom icon, or any valid CSS image url prop like data uri |

**Example**

```js
[wps_products carousel="true" carousel_next_arrow="https://mysite.com/pre_arrow.png"]
```

### images_align

Allows for determining how the featured image is positioned horizontally.

| Possible values |
| :-------------- |
| left `Default`  |
| center          |
| right           |

**Example**

```js
// Align the featured image to the left
[wps_products images_align="left"]

// Align the featured image to the right
[wps_products images_align="right"]

// Align the featured image to the center
[wps_products images_align="center"]
```

### images_show_next_on_hover

Determines whether to show the next image when hovering over the featured image.

**_This feature is only available with [ShopWP Pro](https://wpshop.io/pricing)._**

| Possible values |
| :-------------- |
| true            |
| false `Default` |

**Example**

```js
// Align the featured image to the left
[wps_products images_show_next_on_hover="true"]
```

### images_sizing_toggle

Determines whether to enable custom image sizing. This must be set to `true` before using the other `image_sizing*` attributes.

| Possible values |
| :-------------- |
| true            |
| false `Default` |

**Example**

```js
// Turn on custom image sizing
[wps_products images_sizing_toggle="true"]
```

### images_sizing_width

Sets the width when using custom image sizing. You must set [images_sizing_toggle](#images_sizing_toggle) to `true` before using this attribute.

The value you set will be interpreted as pixels, so do not add the `px` to the end. For example, if you want to set the width to 200px, set the value to `200` not `200px`.

| Possible values     |
| :------------------ |
| Any number or false |

**Example**

```js
// Set the image width to 200px
[wps_products images_sizing_width="200"]
```

### images_sizing_height

Sets the height when using custom image sizing. You must set [images_sizing_toggle](#images_sizing_toggle) to `true` before using this attribute.

The value you set will be interpreted as pixels, so do not add the `px` to the end. For example, if you want to set the width to 200px, set the value to `200` not `200px`.

| Possible values     |
| :------------------ |
| Any number or false |

**Example**

```js
// Set the image height to 300px
[wps_products images_sizing_height="300"]
```

### images_sizing_scale

Sets a custom "scale" for the product images. The number here will be multiplied by the width / height dimensions (if set). For example, an image originally `500x500` will return an image `1000x1000` pixels if scale is set to `2`.

Will only scale up if the original image is large enough. If original image is too small, the closest image in size will be returned.

| Possible values |
| :-------------- |
| None `Default`  |
| 2               |
| 3               |

**Example**

```js
// Show an image twice as big
[wps_products images_sizing_scale="2"]
```

### images_sizing_crop

Specifies a "crop" position for the image. This is needed if the image is larger than the specified width / height dimensions. If the entire image won't fit in the requested dimensions, the crop parameter determines which part of the image to show.

| Possible values |
| :-------------- |
| None `Default`  |
| Top             |
| Center          |
| Bottom          |
| Left            |
| Right           |

**Example**

```js
// Crop the image so the "top" part shows
[wps_products images_sizing_crop="top"]

// Crop the image in the center
[wps_products images_sizing_crop="center"]
```

### thumbnail_images_sizing_toggle

Determines whether to enable custom image sizing for the product thumbnails. This must be set to `true` before using the other `thumbnail_images_sizing*` attributes.

| Possible values |
| :-------------- |
| true            |
| false `Default` |

**Example**

```js
// Turn on custom thumbnail sizing
[wps_products thumbnail_images_sizing_toggle="true"]
```

### thumbnail_images_sizing_width

Sets the width of the product thumbnails. You must set [thumbnail_images_sizing_toggle](#thumbnail_images_sizing_toggle) to `true` before using this attribute.

The value you set will be interpreted as pixels, so do not add the `px` to the end. For example, if you want to set the width to 50px, set the value to `50` not `50px`.

| Possible values     |
| :------------------ |
| Any number or false |

**Example**

```js
// Set the thumbnail width to 50px
[wps_products thumbnail_images_sizing_width="50"]
```

### thumbnail_images_sizing_height

Sets the height of the product thumbnails. You must set [thumbnail_images_sizing_toggle](#thumbnail_images_sizing_toggle) to `true` before using this attribute.

The value you set will be interpreted as pixels, so do not add the `px` to the end. For example, if you want to set the width to 50px, set the value to `50` not `50px`.

| Possible values     |
| :------------------ |
| Any number or false |

**Example**

```js
// Set the thumbnail height to 50px
[wps_products thumbnail_images_sizing_height="50"]
```

### thumbnail_images_sizing_scale

Sets a custom "scale" for the product thumbnails. The number here will be multiplied by the width / height dimensions (if set). For example, a thumbnail originally `100x100` will return an thumbnail `200x200` pixels if scale is set to `2`.

Will only scale up if the original thumbnail is large enough. If original thumbnail is too small, the closest thumbnail in size will be returned.

| Possible values |
| :-------------- |
| None `Default`  |
| 2               |
| 3               |

**Example**

```js
// Show an image twice as big
[wps_products images_sizing_scale="2"]
```

### thumbnail_images_sizing_crop

Specifies a "crop" position for the thumbnail image. This is needed if the thumbnail is larger than the specified width / height dimensions. If the entire thumbnail won't fit in the requested dimensions, the crop parameter determines which part of the thumbnail to show.

| Possible values |
| :-------------- |
| None `Default`  |
| Top             |
| Center          |
| Bottom          |
| Left            |
| Right           |

**Example**

```js
// Crop the thumbnail so the "top" part shows
[wps_products thumbnail_images_sizing_crop="top"]

// Crop the thumbnail in the center
[wps_products thumbnail_images_sizing_crop="center"]
```

### show_out_of_stock_variants

Determines whether to show out of stock variants or not. By default, the plugin will _not_ show out of stock variants.

| Possible values |
| :-------------- |
| true            |
| false `Default` |

**Example**

```js
// Show out of stock variants
[wps_products show_out_of_stock_variants="true"]
```

### show_inventory_levels

Determines whether to show the inventory levels notice or not.

| Possible values |
| :-------------- |
| true `Default`  |
| false           |

**Example**

```js
// Turn the inventory levels notification off
[wps_products show_inventory_levels="false"]
```

### left_in_stock_threshold

Determines the threshold for showing the "left in stock" inventory notice. For example, if set to `10`, the plugin will not show the left in stock notice until the variant's inventory drops to `9`.

| Possible values                   |
| :-------------------------------- |
| Any positive number. Default `10` |

**Example**

```js
// Only show the notice if there are 4 left in stock
[wps_products left_in_stock_threshold="4"]
```

### cache_templates

Determines whether to cache the html template response. This is only useful if you're using the [html_template](#html_template) feature. By default, the plugin will not attempt to cache these templates.

| Possible values |
| :-------------- |
| true            |
| false `Default` |

**Example**

```js
// Only show the notice if there are 4 left in stock
[wps_products left_in_stock_threshold="4"]
```

### container_width

Determines the product's max container width. Useful for making your layout wider or more narrow.

| Possible values                          |
| :--------------------------------------- |
| Any valid pixel amount. Default `1300px` |

**Example**

```js
// Make a narrow layout
[wps_products container_width="600px"]
```

### mobile_columns

Determines the number of columns to show on mobile. By default, products will stack on-top of each other in one column.

| Possible values               |
| :---------------------------- |
| Any valid number. Default `1` |

**Example**

```js
// Make a two column mobile layout
[wps_products mobile_columns="2"]
```

### select_first_variant

Allows for selecting the first product variant on page load. This will only work with products that have one "option" to choose from. For example, it will work with a product that provides a color option, but not with products that provide color _and_ size.

| Possible values |
| :-------------- |
| true            |
| false `Default` |

**Example**

```js
// Automatically select the first product variant on page load
[wps_products select_first_variant="true"]
```

### reset_variants_after_adding

Determines whether to reset the variant selections after adding to cart.

| Possible values |
| :-------------- |
| true `Default`  |
| false           |

**Example**

```js
// Keep the variants selected, even after adding to cart
[wps_products reset_variants_after_adding="false"]
```

### after_added_text

Determines the button text that shows after adding to cart. By default, the text says: `We like that one too!`.

| Possible values  |
| :--------------- |
| Any valid string |

**Example**

```js
[wps_products reset_variants_after_adding="Added to cart"]
```

### clear_selections_text

Allows for customizing the "clear selections" text that shows when selecting product variants.

| Possible values  |
| :--------------- |
| Any valid string |

**Example**

```js
// Customize the clear selections text
[wps_products reset_variants_after_adding="Reset selections"]
```

### quantity_step

Allows for customizing the "quantity step" for the product quantity input. This allows you to force the input to increment by the number provided. For example, if you set this to `three`, each time the user increments it will do so by threes: 3, 6, 9, etc.

| Possible values               |
| :---------------------------- |
| Any valid number. Default `1` |

**Example**

```js
// Force users to purchase the product in quantities of two
[wps_products quantity_step="2"]
```

### color_swatch_names

Allows for setting the option names that the plugin looks for to generate the automatic color swatches.

For more information on how this works, see the [using color swatches guide](/guides/using-color-swatches.md).

| Possible values                                |
| :--------------------------------------------- |
| An array of option names. Default: `['color']` |

**Example**

```js
add_filter('shopwp_products_default_payload_settings', function ($settings) {
	$settings['color_swatch_names'] = ['fabric', 'color']

	return $settings
})
```

### image_zoom_options

Allows for customizing the image zoom options. The plugin uses the [Drift library](https://github.com/imgix/drift) created by Imgix.

For a full list of available options, reference the [Drift docs here](https://github.com/imgix/drift#options--defaults).

**Example**

```js
add_filter('image_zoom_options', function ($settings) {
	$settings['image_zoom_options'] = [
        'zoomFactor' => 3
    ]

	return $settings
})
```

### show_sale_notice

Determines whether to show the "sale" notice on product images.

| Possible values |
| :-------------- |
| true `Default`  |
| false           |

**Example**

```js
// Hide the sale notice
[wps_products show_sale_notice="false"]
```

### show_out_of_stock_notice

Determines whether to show the "out of stock" notice on products

| Possible values |
| :-------------- |
| true `Default`  |
| false           |

**Example**

```js
// Hide the out of stock notice
[wps_products show_out_of_stock_notice="false"]
```

### image_placeholder

Allows for customizing the product placeholder image.

**Example**

```js
add_filter('shopwp_products_default_payload_settings', function($settings) {
    $settings['image_placeholder'] = plugin_dir_url(dirname(__FILE__)) . 'public/imgs/placeholder.png');

    return $settings;
});
```

### title_class_name

Allows for adding a custom class name to the product title

| Possible values      |
| :------------------- |
| Any valid class name |

**Example**

```js
[wps_products title_class_name="my-custom-class-name"]
```

### notice_unavailable_text

Allows for customizing the text shown when a product is unavailable to purchase.

| Possible values  |
| :--------------- |
| Any valid string |

**Example**

```js
[wps_products notice_unavailable_text="This is a custom message"]
```

### pagination_load_more_text

Allows for customizing the "load more" button text shown for product pagination.

| Possible values  |
| :--------------- |
| Any valid string |

**Example**

```js
[wps_products pagination_load_more_text="Custom load more text"]
```

### out_of_stock_notice_text

Allows for customizing the "out of stock" message shown. Defaults to: `Out of stock. Please try selecting a different variant combination.`.

| Possible values  |
| :--------------- |
| Any valid string |

**Example**

```js
[wps_products out_of_stock_notice_text="Custom out of stock message"]
```

### sale_label_text

Allows for customizing the "sale" label text displayed on the product images. Defaults to: `Sale!`.

| Possible values  |
| :--------------- |
| Any valid string |

**Example**

```js
[wps_products sale_label_text="Custom sale text"]
```

### sold_out_image_label_text

Allows for customizing the "sold out" label text. Defaults to: `Sold out`.

| Possible values  |
| :--------------- |
| Any valid string |

**Example**

```js
[wps_products sold_out_image_label_text="Custom sold out text"]
```

### title_color

Customizes the `background-color` of an add to cart button.

| Possible values                          |
| :--------------------------------------- |
| Any valid CSS color (Default: `#14273b`) |

**Example**

```js
// Set the button color to black
[wps_products title_color="#000"]

// Set the button color to red
[wps_products title_color="red"]
```

### title_type_font_family

Customizes the `font-family` of an add to cart button.

| Possible values                                                                                                       |
| :-------------------------------------------------------------------------------------------------------------------- |
| Any valid CSS font family value. [See a full list here](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family) |

**Example**

```js
[wps_products title_type_font_family="Helvetica"]
```

### title_type_font_size

Customizes the `font-size` of an add to cart button.

| Possible values                                                                                                   |
| :---------------------------------------------------------------------------------------------------------------- |
| Any valid CSS font size value. [See a full list here](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size) |

**Example**

```jsx
// Set the size in pixels
[wps_products title_type_font_size="24px"]

// Set the size in ems
[wps_products title_type_font_size="2em"]
```

### title_type_font_style

Customizes the `font-style` of an add to cart button.

| Possible values                                                                                                     |
| :------------------------------------------------------------------------------------------------------------------ |
| Any valid CSS font style value. [See a full list here](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style) |

**Example**

```js
// Set the text to italic
[wps_products title_type_font_style="italic"]
```

### title_type_font_weight

Customizes the `font-weight` of an add to cart button.

| Possible values                                                                                                       |
| :-------------------------------------------------------------------------------------------------------------------- |
| Any valid CSS font weight value. [See a full list here](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight) |

**Example**

```js
// Set the text to bold
[wps_products title_type_font_style="bold"]

// Set the text to an ultra light weight
[wps_products title_type_font_style="100"]
```

### title_type_letter_spacing

Customizes the `letter-spacing` of an add to cart button.

| Possible values                                                                                                             |
| :-------------------------------------------------------------------------------------------------------------------------- |
| Any valid CSS letter spacing value. [See a full list here](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing) |

**Example**

```js
// Set the letter spacing using ems
[wps_products title_type_letter_spacing="1em"]

// Set the letter spacing using pixels
[wps_products title_type_letter_spacing="2px"]
```

### title_type_line_height

Customizes the `line-height` of an add to cart button.

| Possible values                                                                                                       |
| :-------------------------------------------------------------------------------------------------------------------- |
| Any valid CSS line height value. [See a full list here](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height) |

**Example**

```js
// Set the line height to a relative value
[wps_products title_type_line_height="2"]

// Set the line height using pixels
[wps_products title_type_line_height="10px"]
```

### title_type_text_decoration

Customizes the `text-decoration` of an add to cart button.

| Possible values                                                                                                               |
| :---------------------------------------------------------------------------------------------------------------------------- |
| Any valid CSS text decoration value. [See a full list here](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration) |

**Example**

```js
// Set the text to underline
[wps_products title_type_text_decoration="underline"]

// Set the text to wavy overline
[wps_products title_type_text_decoration="wavy overline"]
```

### title_type_text_transform

Customizes the `text-transform` of the product's add to cart button.

| Possible values                                                                                                             |
| :-------------------------------------------------------------------------------------------------------------------------- |
| Any valid CSS text transform value. [See a full list here](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform) |

**Example**

```js
// Set the text to underline
[wps_products title_type_text_decoration="underline"]

// Set the text to wavy overline
[wps_products title_type_text_decoration="wavy overline"]
```

### pricing_color

Customizes the `background-color` of an add to cart button.

| Possible values                          |
| :--------------------------------------- |
| Any valid CSS color (Default: `#14273b`) |

**Example**

```js
// Set the button color to black
[wps_products pricing_color="#000"]

// Set the button color to red
[wps_products pricing_color="red"]
```

### pricing_type_font_family

Customizes the `font-family` of an add to cart button.

| Possible values                                                                                                       |
| :-------------------------------------------------------------------------------------------------------------------- |
| Any valid CSS font family value. [See a full list here](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family) |

**Example**

```js
[wps_products pricing_type_font_family="Helvetica"]
```

### pricing_type_font_size

Customizes the `font-size` of an add to cart button.

| Possible values                                                                                                   |
| :---------------------------------------------------------------------------------------------------------------- |
| Any valid CSS font size value. [See a full list here](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size) |

**Example**

```jsx
// Set the size in pixels
[wps_products pricing_type_font_size="24px"]

// Set the size in ems
[wps_products pricing_type_font_size="2em"]
```

### pricing_type_font_style

Customizes the `font-style` of an add to cart button.

| Possible values                                                                                                     |
| :------------------------------------------------------------------------------------------------------------------ |
| Any valid CSS font style value. [See a full list here](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style) |

**Example**

```js
// Set the text to italic
[wps_products pricing_type_font_style="italic"]
```

### pricing_type_font_weight

Customizes the `font-weight` of an add to cart button.

| Possible values                                                                                                       |
| :-------------------------------------------------------------------------------------------------------------------- |
| Any valid CSS font weight value. [See a full list here](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight) |

**Example**

```js
// Set the text to bold
[wps_products pricing_type_font_style="bold"]

// Set the text to an ultra light weight
[wps_products pricing_type_font_style="100"]
```

### pricing_type_letter_spacing

Customizes the `letter-spacing` of an add to cart button.

| Possible values                                                                                                             |
| :-------------------------------------------------------------------------------------------------------------------------- |
| Any valid CSS letter spacing value. [See a full list here](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing) |

**Example**

```js
// Set the letter spacing using ems
[wps_products pricing_type_letter_spacing="1em"]

// Set the letter spacing using pixels
[wps_products pricing_type_letter_spacing="2px"]
```

### pricing_type_line_height

Customizes the `line-height` of an add to cart button.

| Possible values                                                                                                       |
| :-------------------------------------------------------------------------------------------------------------------- |
| Any valid CSS line height value. [See a full list here](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height) |

**Example**

```js
// Set the line height to a relative value
[wps_products pricing_type_line_height="2"]

// Set the line height using pixels
[wps_products pricing_type_line_height="10px"]
```

### pricing_type_text_decoration

Customizes the `text-decoration` of an add to cart button.

| Possible values                                                                                                               |
| :---------------------------------------------------------------------------------------------------------------------------- |
| Any valid CSS text decoration value. [See a full list here](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration) |

**Example**

```js
// Set the text to underline
[wps_products pricing_type_text_decoration="underline"]

// Set the text to wavy overline
[wps_products pricing_type_text_decoration="wavy overline"]
```

### pricing_type_text_transform

Customizes the `text-transform` of the product's add to cart button.

| Possible values                                                                                                             |
| :-------------------------------------------------------------------------------------------------------------------------- |
| Any valid CSS text transform value. [See a full list here](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform) |

**Example**

```js
// Set the text to underline
[wps_products pricing_type_text_decoration="underline"]

// Set the text to wavy overline
[wps_products pricing_type_text_decoration="wavy overline"]
```

### description_color

Customizes the `background-color` of an add to cart button.

| Possible values                          |
| :--------------------------------------- |
| Any valid CSS color (Default: `#14273b`) |

**Example**

```js
// Set the button color to black
[wps_products description_color="#000"]

// Set the button color to red
[wps_products description_color="red"]
```

### description_type_font_family

Customizes the `font-family` of an add to cart button.

| Possible values                                                                                                       |
| :-------------------------------------------------------------------------------------------------------------------- |
| Any valid CSS font family value. [See a full list here](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family) |

**Example**

```js
[wps_products description_type_font_family="Helvetica"]
```

### description_type_font_size

Customizes the `font-size` of an add to cart button.

| Possible values                                                                                                   |
| :---------------------------------------------------------------------------------------------------------------- |
| Any valid CSS font size value. [See a full list here](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size) |

**Example**

```jsx
// Set the size in pixels
[wps_products description_type_font_size="24px"]

// Set the size in ems
[wps_products description_type_font_size="2em"]
```

### description_type_font_style

Customizes the `font-style` of an add to cart button.

| Possible values                                                                                                     |
| :------------------------------------------------------------------------------------------------------------------ |
| Any valid CSS font style value. [See a full list here](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style) |

**Example**

```js
// Set the text to italic
[wps_products description_type_font_style="italic"]
```

### description_type_font_weight

Customizes the `font-weight` of an add to cart button.

| Possible values                                                                                                       |
| :-------------------------------------------------------------------------------------------------------------------- |
| Any valid CSS font weight value. [See a full list here](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight) |

**Example**

```js
// Set the text to bold
[wps_products description_type_font_style="bold"]

// Set the text to an ultra light weight
[wps_products description_type_font_style="100"]
```

### description_type_letter_spacing

Customizes the `letter-spacing` of an add to cart button.

| Possible values                                                                                                             |
| :-------------------------------------------------------------------------------------------------------------------------- |
| Any valid CSS letter spacing value. [See a full list here](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing) |

**Example**

```js
// Set the letter spacing using ems
[wps_products description_type_letter_spacing="1em"]

// Set the letter spacing using pixels
[wps_products description_type_letter_spacing="2px"]
```

### description_type_line_height

Customizes the `line-height` of an add to cart button.

| Possible values                                                                                                       |
| :-------------------------------------------------------------------------------------------------------------------- |
| Any valid CSS line height value. [See a full list here](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height) |

**Example**

```js
// Set the line height to a relative value
[wps_products description_type_line_height="2"]

// Set the line height using pixels
[wps_products description_type_line_height="10px"]
```

### description_type_text_decoration

Customizes the `text-decoration` of an add to cart button.

| Possible values                                                                                                               |
| :---------------------------------------------------------------------------------------------------------------------------- |
| Any valid CSS text decoration value. [See a full list here](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration) |

**Example**

```js
// Set the text to underline
[wps_products description_type_text_decoration="underline"]

// Set the text to wavy overline
[wps_products description_type_text_decoration="wavy overline"]
```

### description_type_text_transform

Customizes the `text-transform` of the product's add to cart button.

| Possible values                                                                                                             |
| :-------------------------------------------------------------------------------------------------------------------------- |
| Any valid CSS text transform value. [See a full list here](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform) |

**Example**

```js
// Set the text to underline
[wps_products description_type_text_decoration="underline"]

// Set the text to wavy overline
[wps_products description_type_text_decoration="wavy overline"]
```

### variant_dropdown_text_color

Customizes the `background-color` of an add to cart button.

| Possible values                          |
| :--------------------------------------- |
| Any valid CSS color (Default: `#14273b`) |

**Example**

```js
// Set the button color to black
[wps_products variant_dropdown_text_color="#000"]

// Set the button color to red
[wps_products variant_dropdown_text_color="red"]
```

### variant_dropdown_type_font_family

Customizes the `font-family` of an add to cart button.

| Possible values                                                                                                       |
| :-------------------------------------------------------------------------------------------------------------------- |
| Any valid CSS font family value. [See a full list here](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family) |

**Example**

```js
[wps_products variant_dropdown_type_font_family="Helvetica"]
```

### variant_dropdown_type_font_size

Customizes the `font-size` of an add to cart button.

| Possible values                                                                                                   |
| :---------------------------------------------------------------------------------------------------------------- |
| Any valid CSS font size value. [See a full list here](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size) |

**Example**

```jsx
// Set the size in pixels
[wps_products variant_dropdown_type_font_size="24px"]

// Set the size in ems
[wps_products variant_dropdown_type_font_size="2em"]
```

### variant_dropdown_type_font_style

Customizes the `font-style` of an add to cart button.

| Possible values                                                                                                     |
| :------------------------------------------------------------------------------------------------------------------ |
| Any valid CSS font style value. [See a full list here](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style) |

**Example**

```js
// Set the text to italic
[wps_products variant_dropdown_type_font_style="italic"]
```

### variant_dropdown_type_font_weight

Customizes the `font-weight` of an add to cart button.

| Possible values                                                                                                       |
| :-------------------------------------------------------------------------------------------------------------------- |
| Any valid CSS font weight value. [See a full list here](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight) |

**Example**

```js
// Set the text to bold
[wps_products variant_dropdown_type_font_style="bold"]

// Set the text to an ultra light weight
[wps_products variant_dropdown_type_font_style="100"]
```

### variant_dropdown_type_letter_spacing

Customizes the `letter-spacing` of an add to cart button.

| Possible values                                                                                                             |
| :-------------------------------------------------------------------------------------------------------------------------- |
| Any valid CSS letter spacing value. [See a full list here](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing) |

**Example**

```js
// Set the letter spacing using ems
[wps_products variant_dropdown_type_letter_spacing="1em"]

// Set the letter spacing using pixels
[wps_products variant_dropdown_type_letter_spacing="2px"]
```

### variant_dropdown_type_line_height

Customizes the `line-height` of an add to cart button.

| Possible values                                                                                                       |
| :-------------------------------------------------------------------------------------------------------------------- |
| Any valid CSS line height value. [See a full list here](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height) |

**Example**

```js
// Set the line height to a relative value
[wps_products variant_dropdown_type_line_height="2"]

// Set the line height using pixels
[wps_products variant_dropdown_type_line_height="10px"]
```

### variant_dropdown_type_text_decoration

Customizes the `text-decoration` of an add to cart button.

| Possible values                                                                                                               |
| :---------------------------------------------------------------------------------------------------------------------------- |
| Any valid CSS text decoration value. [See a full list here](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration) |

**Example**

```js
// Set the text to underline
[wps_products variant_dropdown_type_text_decoration="underline"]

// Set the text to wavy overline
[wps_products variant_dropdown_type_text_decoration="wavy overline"]
```

### variant_dropdown_type_text_transform

Customizes the `text-transform` of the product's add to cart button.

| Possible values                                                                                                             |
| :-------------------------------------------------------------------------------------------------------------------------- |
| Any valid CSS text transform value. [See a full list here](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform) |

**Example**

```js
// Set the text to underline
[wps_products variant_dropdown_type_text_decoration="underline"]

// Set the text to wavy overline
[wps_products variant_dropdown_type_text_decoration="wavy overline"]
```

### variant_dropdown_button_color

Determines the variant dropdown color. Default: `#52a7a6`.

| Possible values     |
| :------------------ |
| Any valid CSS color |

**Example**

```js
[wps_products variant_dropdown_button_color="#000"]
```

### add_to_cart_button_text

Determines the buy button text. Default: `Add to cart`.

| Possible values |
| :-------------- |
| Any text string |

**Example**

```js
[wps_products add_to_cart_button_text="Add to bag"]
```

### add_to_cart_button_text_color

Determines the buy button text color. Default: `#FFFFFF`.

| Possible values     |
| :------------------ |
| Any valid CSS color |

**Example**

```js
[wps_products add_to_cart_button_text_color="#000"]
```

### add_to_cart_button_color

Customizes the `background-color` of an add to cart button.

| Possible values                          |
| :--------------------------------------- |
| Any valid CSS color (Default: `#14273b`) |

**Example**

```js
// Set the button color to black
[wps_products add_to_cart_button_color="#000"]

// Set the button color to red
[wps_products add_to_cart_button_color="red"]
```

### add_to_cart_button_type_font_family

Customizes the `font-family` of an add to cart button.

| Possible values                                                                                                       |
| :-------------------------------------------------------------------------------------------------------------------- |
| Any valid CSS font family value. [See a full list here](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family) |

**Example**

```js
[wps_products add_to_cart_button_type_font_family="Helvetica"]
```

### add_to_cart_button_type_font_size

Customizes the `font-size` of an add to cart button.

| Possible values                                                                                                   |
| :---------------------------------------------------------------------------------------------------------------- |
| Any valid CSS font size value. [See a full list here](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size) |

**Example**

```jsx
// Set the size in pixels
[wps_products add_to_cart_button_type_font_size="24px"]

// Set the size in ems
[wps_products add_to_cart_button_type_font_size="2em"]
```

### add_to_cart_button_type_font_style

Customizes the `font-style` of an add to cart button.

| Possible values                                                                                                     |
| :------------------------------------------------------------------------------------------------------------------ |
| Any valid CSS font style value. [See a full list here](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style) |

**Example**

```js
// Set the text to italic
[wps_products add_to_cart_button_type_font_style="italic"]
```

### add_to_cart_button_type_font_weight

Customizes the `font-weight` of an add to cart button.

| Possible values                                                                                                       |
| :-------------------------------------------------------------------------------------------------------------------- |
| Any valid CSS font weight value. [See a full list here](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight) |

**Example**

```js
// Set the text to bold
[wps_products add_to_cart_button_type_font_style="bold"]

// Set the text to an ultra light weight
[wps_products add_to_cart_button_type_font_style="100"]
```

### add_to_cart_button_type_letter_spacing

Customizes the `letter-spacing` of an add to cart button.

| Possible values                                                                                                             |
| :-------------------------------------------------------------------------------------------------------------------------- |
| Any valid CSS letter spacing value. [See a full list here](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing) |

**Example**

```js
// Set the letter spacing using ems
[wps_products add_to_cart_button_type_letter_spacing="1em"]

// Set the letter spacing using pixels
[wps_products add_to_cart_button_type_letter_spacing="2px"]
```

### add_to_cart_button_type_line_height

Customizes the `line-height` of an add to cart button.

| Possible values                                                                                                       |
| :-------------------------------------------------------------------------------------------------------------------- |
| Any valid CSS line height value. [See a full list here](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height) |

**Example**

```js
// Set the line height to a relative value
[wps_products add_to_cart_button_type_line_height="2"]

// Set the line height using pixels
[wps_products add_to_cart_button_type_line_height="10px"]
```

### add_to_cart_button_type_text_decoration

Customizes the `text-decoration` of an add to cart button.

| Possible values                                                                                                               |
| :---------------------------------------------------------------------------------------------------------------------------- |
| Any valid CSS text decoration value. [See a full list here](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration) |

**Example**

```js
// Set the text to underline
[wps_products add_to_cart_button_type_text_decoration="underline"]

// Set the text to wavy overline
[wps_products add_to_cart_button_type_text_decoration="wavy overline"]
```

### add_to_cart_button_type_text_transform

Customizes the `text-transform` of the product's add to cart button.

| Possible values                                                                                                             |
| :-------------------------------------------------------------------------------------------------------------------------- |
| Any valid CSS text transform value. [See a full list here](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform) |

**Example**

```js
// Set the text to underline
[wps_products add_to_cart_button_type_text_decoration="underline"]

// Set the text to wavy overline
[wps_products add_to_cart_button_type_text_decoration="wavy overline"]
```

### dropzone_product_title

Customizes where the product title should display. This is useful if you want the title to show somewhere else in your layout.

When using any "dropzone" attribute, you'll want to create a dedicated HTML element for the target to render inside. You'll then pass a CSS selector to the dropzone attribute which points to this HTML element. See the example below.

:::info
The HTML element you specify will be completely emptied and replaced with the load more component.
:::

| Possible values                           |
| :---------------------------------------- |
| Any valid CSS selector (Default: `false`) |

**Example**

```js
// Add the html element somewhere in your layout
<div id="title-container"></div>

// Will display the product title inside the HTML element <div id="title-container"></div>
[wps_products dropzone_product_title="#title-container"]
```

### dropzone_product_pricing

Customizes where the product pricing component should display. This is useful if you want the pricing to show somewhere else in your layout.

When using any "dropzone" attribute, you'll want to create a dedicated HTML element for the target to render inside. You'll then pass a CSS selector to the dropzone attribute which points to this HTML element. See the example below.

:::info
The HTML element you specify will be completely emptied and replaced with the load more component.
:::

| Possible values                           |
| :---------------------------------------- |
| Any valid CSS selector (Default: `false`) |

**Example**

```js
// Add the html element somewhere in your layout
<div id="pricing-container"></div>

// Will display the product pricing inside the HTML element <div id="pricing-container"></div>
[wps_products dropzone_product_pricing="#pricing-container"]
```

### dropzone_product_description

Customizes where the product description component should display. This is useful if you want the description to show somewhere else in your layout.

When using any "dropzone" attribute, you'll want to create a dedicated HTML element for the target to render inside. You'll then pass a CSS selector to the dropzone attribute which points to this HTML element. See the example below.

:::info
The HTML element you specify will be completely emptied and replaced with the load more component.
:::

| Possible values                           |
| :---------------------------------------- |
| Any valid CSS selector (Default: `false`) |

**Example**

```js
// Add the html element somewhere in your layout
<div id="description-container"></div>

// Will display the product description inside the HTML element <div id="description-container"></div>
[wps_products dropzone_product_description="#description-container"]
```

### dropzone_product_gallery

Customizes where the product images component should display. This is useful if you want the images to show somewhere else in your layout.

When using any "dropzone" attribute, you'll want to create a dedicated HTML element for the target to render inside. You'll then pass a CSS selector to the dropzone attribute which points to this HTML element. See the example below.

:::info
The HTML element you specify will be completely emptied and replaced with the load more component.
:::

| Possible values                           |
| :---------------------------------------- |
| Any valid CSS selector (Default: `false`) |

**Example**

```js
// Add the html element somewhere in your layout
<div id="gallery-container"></div>

// Will display the product gallery inside the HTML element <div id="gallery-container"></div>
[wps_products dropzone_product_gallery="#gallery-container"]
```

### dropzone_product_buy_button

Customizes where the product buy button component should display. This is useful if you want the buy button to show somewhere else in your layout.

When using any "dropzone" attribute, you'll want to create a dedicated HTML element for the target to render inside. You'll then pass a CSS selector to the dropzone attribute which points to this HTML element. See the example below.

:::info
The HTML element you specify will be completely emptied and replaced with the load more component.
:::

| Possible values                           |
| :---------------------------------------- |
| Any valid CSS selector (Default: `false`) |

**Example**

```js
// Add the html element somewhere in your layout
<div id="buy-button-container"></div>

// Will display the product buy button inside the HTML element <div id="buy-button-container"></div>
[wps_products dropzone_product_buy_button="#buy-button-container"]
```

### dropzone_load_more

When `pagination` is set to true, this allows for specifying a custom location in the DOM to place the pagination "load more" control component. Takes any valid CSS selector. When set to false, the load more button will be placed directly below the products output. Default: `false`.

:::info
The HTML element you specify will be completely emptied and replaced with the load more component.
:::

| Possible values                           |
| :---------------------------------------- |
| Any valid CSS selector (Default: `false`) |

**Example**

```js
// Add the html element somewhere in your layout
<div id="my-custom-load-more-container"></div>

[wps_products dropzone_load_more="#my-custom-load-more-container"]
```