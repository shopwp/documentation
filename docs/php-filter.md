# PHP Filters

ShopWP comes with a variety of PHP filter hooks can be used to customize the plugin. Simply add these to your WordPress theme's functions.php file.

### shopwp_products_all_args

Allows you to customize the settings used by the default products listing page.

| Parameter       | Description                                                  |
| :-------------- | :----------------------------------------------------------- |
| payloadSettings | Represents all available settings for the products shortcode |

**Example**

```php
add_filter('shopwp_use_products_all_template', function($use_plugin_template) {
   return false;
});
```

### shopwp_products_single_args

### shopwp_register_products_args

### shopwp_products_show_sidebar

### shopwp_use_products_all_template

Allows you to turn off the default products archive template. Useful if you want to use your own wordpress templates.

| Parameter           | Description                                                                  |
| :------------------ | :--------------------------------------------------------------------------- |
| use_plugin_template | Represents whether to use default products archive template. Default: `true` |

**Example**

```php
add_filter('shopwp_use_products_all_template', function($use_plugin_template) {
   return false;
});
```

### shopwp_use_products_single_template

Allows you to turn off the default products single template. Useful if you want to use your own wordpress templates.

| Parameter           | Description                                                                 |
| :------------------ | :-------------------------------------------------------------------------- |
| use_plugin_template | Represents whether to use default products single template. Default: `true` |

**Example**

```php
add_filter('wpshopify_use_products_single_template', function($use_plugin_template) {
   return false;
});
```

### shopwp_collections_all_args

### shopwp_collections_single_args

### shopwp_register_collections_args

### shopwp_use_collections_all_template

Allows you to turn off the default collections archive template. Useful if you want to use your own wordpress templates.

| Parameter           | Description                                                                     |
| :------------------ | :------------------------------------------------------------------------------ |
| use_plugin_template | Represents whether to use default collections archive template. Default: `true` |

**Example**

```php
add_filter('wpshopify_use_collections_all_template', function($use_plugin_template) {
   return false;
});
```

### shopwp_use_collections_single_template

Allows you to turn off the default collections single template. Useful if you want to use your own wordpress templates.

| Parameter           | Description                                                                    |
| :------------------ | :----------------------------------------------------------------------------- |
| use_plugin_template | Represents whether to use default collections single template. Default: `true` |

**Example**

```php
add_filter('wpshopify_use_collections_single_template', function($use_plugin_template) {
   return false;
});
```

### shopwp_cart_default_payload_settings

Allows you to customize the "default" settings for the global cart.

For a full list of available settings, reference the [attributes of the [wps_collections] shortcode](/shortcodes/wps_collections.md).

| Parameter               | Description                                       |
| :---------------------- | :------------------------------------------------ |
| payloadSettings (array) | Represents all available settings for collections |

| Available settings      | Description                                       |
| :---------------------- | :------------------------------------------------ |
| payloadSettings (array) | Represents all available settings for collections |

#### Example

```php
// Exclude the collection descriptions from the layout
add_filter('shopwp_cart_default_payload_settings', function($payloadSettings) {

   $payloadSettings['excludes'] = ['description'];

   return $payloadSettings;
});
```

### shopwp_collections_default_payload_settings

Allows you to customize the default collections settings.

For a full list of available settings, reference the [attributes of the [wps_collections] shortcode](/shortcodes/wps_collections.md).

This filter will be applied "globally" to every instance of a collection whether single or in a list.

| Parameter               | Description                                       |
| :---------------------- | :------------------------------------------------ |
| payloadSettings (array) | Represents all available settings for collections |

#### Example

```php
// Exclude the collection descriptions from the layout
add_filter('shopwp_collections_default_payload_settings', function($payloadSettings) {

   $payloadSettings['excludes'] = ['description'];

   return $payloadSettings;
});
```

### shopwp_products_default_payload_settings

Allows you to customize default product settings.

For a full list of available settings, reference the [attributes of the [wps_products] shortcode](/shortcodes/wps_products.md).

This filter will be applied "globally" to every instance of a product whether single or in a list.

| Parameter               | Description                                    |
| :---------------------- | :--------------------------------------------- |
| payloadSettings (array) | Represents all available settings for products |

#### Example

```php
// Set the product title to "green"
add_filter('shopwp_products_default_payload_settings', function($payloadSettings) {

   $payloadSettings['title_color'] = 'green';

   return $payloadSettings;
});
```

### shopwp_search_default_payload_settings

### shopwp_storefront_default_payload_settings

Allows you to customize the default storefront options.

| Parameter | Description                               |
| :-------- | :---------------------------------------- |
| $options  | Represents the default storefront options |

**Example**

```php
add_filter('shopwp_storefront_default_payload_settings', function($options) {

    $options['collections_heading'] = 'New collections heading';
    $options['price_heading'] = 'New price heading';
    $options['tags_heading'] = 'New tags heading';
    $options['types_heading'] = 'New type heading';
    $options['vendors_heading'] = 'New vendors heading';

    return $options;
});
```

### shopwp_show_breadcrumbs

### shopwp_cart_data

### shopwp_compatibility_enable_theme

### shopwp_flush_permalinks_after_sync

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
