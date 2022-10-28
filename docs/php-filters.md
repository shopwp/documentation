# PHP Filters

ShopWP comes with filter hooks that can be used to customize the plugin. Simply add these to your WordPress theme's `functions.php` file.

### shopwp_products_all_args

Allows you to customize the settings used by the default products listing (PLP) page.

| Parameter | Description                                                                                           |
| :-------- | :---------------------------------------------------------------------------------------------------- |
| $settings | Represents all available product settings. A full list can be [found here](/shortcodes/wps_products). |

**Example**

```php
// Sort products by newest first
add_filter('shopwp_products_all_args', function($settings) {

   $settings['sort_by'] = 'created_at';

   return $settings;

});
```

### shopwp_products_single_args

Allows you to customize the settings used by the product detail (PDP) pages.

| Parameter | Description                                                                                           |
| :-------- | :---------------------------------------------------------------------------------------------------- |
| $settings | Represents all available product settings. A full list can be [found here](/shortcodes/wps_products). |

**Example**

```php
// Link products to Shopify on the detail pages only
add_filter('shopwp_products_single_args', function($settings) {

   $settings['link_to'] = 'shopify';

   return $settings;

});
```

### shopwp_register_products_args

Allows you to customize the custom post type settings of ShopWP products.

| Parameter | Description                                                                                                                                                 |
| :-------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| $settings | Represents the default custom post type settings. A full list can be [found here](https://developer.wordpress.org/reference/functions/register_post_type/). |

**Example**

```php
// Turn off the archive pages for ShopWP Products
add_filter('shopwp_register_products_args', function($settings) {

   $settings['has_archive'] = false;

   return $settings;

});
```

### shopwp_products_show_sidebar

Allows you to toggle the WordPress sidebar on the products listing page.

| Parameter            | Description                                                                       |
| :------------------- | :-------------------------------------------------------------------------------- |
| $show_sidebar (bool) | Whether to show a WordPress sidebar on the products listing page. Default: `true` |

**Example**

```php
add_filter('shopwp_products_show_sidebar', function($use_plugin_template) {
   return false;
});
```

### shopwp_use_products_all_template

Allows you to turn off the default products archive template. Useful if you want to use your own wordpress templates.

| Parameter                   | Description                                                                  |
| :-------------------------- | :--------------------------------------------------------------------------- |
| $use_plugin_template (bool) | Represents whether to use default products archive template. Default: `true` |

**Example**

```php
add_filter('shopwp_use_products_all_template', function($use_plugin_template) {
   return false;
});
```

### shopwp_use_products_single_template

Allows you to turn off the default products single template. Useful if you want to use your own wordpress templates.

| Parameter            | Description                                                                 |
| :------------------- | :-------------------------------------------------------------------------- |
| $use_plugin_template | Represents whether to use default products single template. Default: `true` |

**Example**

```php
add_filter('shopwp_use_products_single_template', function($use_plugin_template) {
   return false;
});
```

### shopwp_admin_rest_api_version

Allows you to specify a custom API version for the [Shopify Admin REST API](https://shopify.dev/api/admin-rest)

| Parameter    | Description                        |
| :----------- | :--------------------------------- |
| $api_version | Represents the default API version |

**Example**

```php
add_filter('shopwp_admin_rest_api_version', function($api_version) {
   return '2022-07';
});
```

### shopwp_collections_all_args

Allows you to customize the settings used by the default collections listing page.

| Parameter | Description                                                                                                 |
| :-------- | :---------------------------------------------------------------------------------------------------------- |
| $settings | Represents all available collection settings. A full list can be [found here](/shortcodes/wps_collections). |

**Example**

```php
// Don't show collection images or products on listing page
add_filter('shopwp_collections_all_args', function($settings) {

   $settings['excludes'] = ['images', 'products'];

   return $settings;

});
```

### shopwp_collections_single_args

Allows you to customize the settings used by the collection detail pages.

| Parameter | Description                                                                                                 |
| :-------- | :---------------------------------------------------------------------------------------------------------- |
| $settings | Represents all available collection settings. A full list can be [found here](/shortcodes/wps_collections). |

**Example**

```php
// Sort products by price
add_filter('shopwp_collections_single_args', function($settings) {

   $settings['products_sort_by'] = 'price';

   return $settings;

});
```

### shopwp_register_collections_args

Allows you to customize the custom post type settings of ShopWP collections.

| Parameter | Description                                                                                                                                                 |
| :-------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| $settings | Represents the default custom post type settings. A full list can be [found here](https://developer.wordpress.org/reference/functions/register_post_type/). |

**Example**

```php
// Turn off the archive pages for ShopWP Products
add_filter('shopwp_register_collections_args', function($settings) {

   $settings['has_archive'] = false;

   return $settings;

});
```

### shopwp_use_collections_all_template

Allows you to turn off the default collections archive template. Useful if you want to use your own wordpress templates.

| Parameter            | Description                                                                     |
| :------------------- | :------------------------------------------------------------------------------ |
| $use_plugin_template | Represents whether to use default collections archive template. Default: `true` |

**Example**

```php
add_filter('shopwp_use_collections_all_template', function($use_plugin_template) {
   return false;
});
```

### shopwp_use_collections_single_template

Allows you to turn off the default collections single template. Useful if you want to use your own wordpress templates.

| Parameter            | Description                                                                    |
| :------------------- | :----------------------------------------------------------------------------- |
| $use_plugin_template | Represents whether to use default collections single template. Default: `true` |

**Example**

```php
add_filter('shopwp_use_collections_single_template', function($use_plugin_template) {
   return false;
});
```

### shopwp_cart_default_settings

Allows you to customize the default settings for the ShopWP cart.

| Parameter                  | Description                                                                              | Default                                                     | Type   |
| :------------------------- | :--------------------------------------------------------------------------------------- | :---------------------------------------------------------- | :----- |
| `icon`                     | Specified the cart icon.                                                                 | `false`                                                     | string |
| `show_counter`             | Whether to show the cart icon counter.                                                   | `true`                                                      | bool   |
| `icon_color`               | The color of the default cart icon.                                                      | `#000`                                                      | string |
| `background_color`         | The background color of the fixed cart icon tab.                                         | `#000`                                                      | string |
| `counter_background_color` | The background color of the cart counter.                                                | `#6ae06a`                                                   | string |
| `counter_text_color`       | The text color of the cart counter.                                                      | `#FFF`                                                      | string |
| `show_inventory_levels`    | Whether to show the inventory levels of each cart line item.                             | `true`                                                      | bool   |
| `left_in_stock_threshold`  | If showing inventory levels, determines the threshold before a "low stock" notice shows. | `10`                                                        | int    |
| `cart_title`               | The shopping cart title.                                                                 | `Shopping cart`                                             | string |
| `checkout_text`            | The text of the checkout button.                                                         | `Begin checkout`                                            | string |
| `updating_text`            | The text shown during cart updates.                                                      | `Updating...`                                               | string |
| `checkout_failed_message`  | The text shown when the checkout fails.                                                  | `Unable to checkout. Please reload the page and try again.` | string |
| `lineitem_remove_text`     | The text shown for removing a lineitem.                                                  | `Remove`                                                    | string |
| `lineitem_sale_label_text` | The sale text shown for lineitems.                                                       | `Sale`                                                      | string |
| `lineitems_disable_link`   | Whether to disable linking line items to their PDP pages.                                | `false`                                                     | bool   |
| `lineitems_link_target`    | Determines how line item links should open.                                              | `_self`                                                     | string |
| `lineitems_max_quantity`   | The maximum number of items you can purchase per line item.                              | `false`                                                     | int    |
| `lineitems_min_quantity`   | The minimum number of items you can purchase per line item.                              | `false`                                                     | bool   |
| `lineitems_quantity_step`  | The number by which the quantity changes in increments.                                  | `false`                                                     | int    |
| `notes_label`              | The label above the cart notes field.                                                    | `Checkout notes`                                            | string |
| `notes_placeholder`        | The placeholder text shown within the cart notes field.                                  | `Enter note for checkout`                                   | string |
| `notes_update_frequency`   | How quickly the cart should update when entering a note                                  | `450`                                                       | int    |
| `empty_cart_text`          | The text to show when the cart is empty                                                  | `Your cart is empty`                                        | string |
| `subtotal_label_text`      | The text to show next to the cart subtotal amount.                                       | `Subtotal:`                                                 | string |
| `show_cart_close_icon`     | Whether to show the close icon within the ShopWP cart                                    | `true`                                                      | bool   |
| `show_cart_title`          | Whether to show the cart title within the ShopWP cart                                    | `true`                                                      | bool   |

**Example**: Customize the shopping cart title

```php
add_filter('shopwp_cart_default_settings', function($settings) {

   $settings['show_cart_title'] = 'Custom cart title';

   return $settings;

});
```

### shopwp_collections_default_settings

Allows you to customize the default collections settings.

For a full list of available settings, reference the [attributes of the [wps_collections] shortcode](/shortcodes/wps_collections.md).

This filter will be applied "globally" to every instance of a collection, whether single or in a list.

| Parameter        | Description                                       |
| :--------------- | :------------------------------------------------ |
| settings (array) | Represents all available settings for collections |

**Example**

```php
// Exclude the collection descriptions from the layout
add_filter('shopwp_collections_default_settings', function($settings) {

   $settings['excludes'] = ['description'];

   return $settings;

});
```

### shopwp_products_default_settings

Allows you to customize default product settings.

For a full list of available settings, reference the [attributes of the [wps_products] shortcode](/shortcodes/wps_products.mdx).

This filter will be applied "globally" to every instance of a product whether single or in a list.

| Parameter        | Description                                    |
| :--------------- | :--------------------------------------------- |
| settings (array) | Represents all available settings for products |

**Example**

```php
// Set the product title to "green"
add_filter('shopwp_products_default_settings', function($settings) {

   $settings['title_color'] = 'green';

   return $settings;

});
```

### shopwp_search_default_settings

Allows you to customize default search settings.

For a full list of available settings, reference the attributes of the [[wps_search] shortcode](/shortcodes/wps_search.md).

| Parameter        | Description                                                           |
| :--------------- | :-------------------------------------------------------------------- |
| settings (array) | Represents all available [search settings](/shortcodes/wps_search.md) |

**Example**

```php
// Set the product title to "green"
add_filter('shopwp_search_default_settings', function($settings) {

   $settings['title_color'] = 'green';

   return $settings;
});
```

### shopwp_storefront_default_settings

Allows you to customize the default storefront options.

| Parameter | Description                               |
| :-------- | :---------------------------------------- |
| $settings | Represents the default storefront options |

**Example**

```php
add_filter('shopwp_storefront_default_settings', function($settings) {

    $settings['collections_heading'] = 'New collections heading';
    $settings['price_heading'] = 'New price heading';
    $settings['tags_heading'] = 'New tags heading';
    $settings['types_heading'] = 'New type heading';
    $settings['vendors_heading'] = 'New vendors heading';

    return $settings;
});
```

### shopwp_translator_default_settings

Allows you to customize the default translator settings

| Parameter | Description                                |
| :-------- | :----------------------------------------- |
| $settings | Represents the default translator settings |

**Example**

```php
add_filter('shopwp_translator_default_settings', function($settings) {
    return $settings;
});
```

### shopwp_reviews_default_settings

Allows for customizing the default reviews settings.

| Parameter         | Description                        |
| :---------------- | :--------------------------------- |
| $settings (array) | The default Yotpo reviews settings |

**Example**

```php
// Change the language to German
add_filter('shopwp_reviews_default_settings', function($settings) {

   $settings['reviews_shown'] = 60;

   return $settings;

}, 10, 2);
```

### shopwp_show_breadcrumbs

Allows you to hide / show the ShopWP breadcrumbs.

| Parameter                | Description                                   |
| :----------------------- | :-------------------------------------------- |
| $show_breadcrumbs (bool) | Whether to show breadcrumbs. Default: `false` |

**Example:**

```php
add_filter('shopwp_show_breadcrumbs', function($show_breadcrumbs) {
   return false;
});
```

### shopwp_flush_permalinks_after_sync

Determines whether to flush permalinks after syncing.

| Parameter            | Description                                                     |
| :------------------- | :-------------------------------------------------------------- |
| $should_flush (bool) | Represents whether to skip compatibility mode. Default: `false` |

**Example**

```php
add_filter('shopwp_flush_permalinks_after_sync', function($should_flush) {
   return false;
});
```

### shopwp_skip_compatibility

Allows you to turn off compatibility mode. Useful if you're running into errors.

| Parameter   | Description                                                     |
| :---------- | :-------------------------------------------------------------- |
| should_skip | Represents whether to skip compatibility mode. Default: `false` |

**Example**

```php
add_filter('shopwp_skip_compatibility', function($should_skip) {
   return true;
});
```

### shopwp_get_collections_query_params

Allows for customizing the query params used when fetching collections for the Storefront component

| Parameter | Description                 |
| :-------- | :-------------------------- |
| $settings | Represents the query params |

**Example**

```php
add_filter('shopwp_get_collections_query_params', function($settings) {

    $settings['first'] = 40;

    return $settings;

});
```

### shopwp_show_dashboard

Allows for customizing whether the ShopWP admin settings are visible or not

| Parameter           | Description                          |
| :------------------ | :----------------------------------- |
| $should_show (bool) | Whether to show the ShopWP dashboard |
| $user (object)      | The current WordPress user           |

**Example**

```php
// Hides the ShopWP dashboard
add_filter('shopwp_show_dashboard', function($should_show, $user) {
    return false;
}, 10, 2);
```

### shopwp_settings

Allows for customizing the main ShopWP settings object. Useful for customizing things like language / currency, etc.

| Parameter         | Description                 |
| :---------------- | :-------------------------- |
| $settings (array) | The default ShopWP settings |

**Example**

```php
// Change the language to German
add_filter('shopwp_settings', function($settings) {

   $settings['general']['language_code'] = 'de';

   return $settings;

}, 10, 2);
```
