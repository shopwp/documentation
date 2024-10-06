# Useful PHP Snippets

Below are some useful PHP snippets for custom ShopWP overrides.

## Conditionally render different Elementor templates for the PDP

The below snippet does the following:

1. Grabs all the collections associated with the product that you may have synced
2. If no collections are found, stops rendering (might want to handle this differently)
3. If the product is assigned to the collection `Sale`, then it renders the Elementor shortcode [elementor_shortcode_for_sale](this shortcode will be different. You can find it listed in the Elementor template page)
4. Checks if the product belongs to any other collections, etc

```php
<?php

use ShopWP\Utils;

defined('ABSPATH') ?: die();

get_header('wpshopify');

global $post;

$DB_Products         = ShopWP\Factories\DB\Products_Factory::build();
$post_id             = $post->ID;
$product_data        = $DB_Products->get_product($post_id);
$product_collections = \maybe_unserialize($product_data->collections);

if (empty($product_collections)) {
   exit;
}

function in_collection($collection_name, $product_collections) {
   return in_array($collection_name, array_column($product_collections, 'name'));
}

if (in_collection('Sale', $product_collections)) {
   echo do_shortcode('[elementor_shortcode_for_sale]');

} else if (in_collection('Another', $product_collections)) {
   echo do_shortcode('[elementor_shortcode_for_another]');

} else if (in_collection('And another', $product_collections)) {
   echo do_shortcode('[elementor_shortcode_for_and_another]');

} else if (in_collection('And yet another', $product_collections)) {
   echo do_shortcode('[elementor_shortcode_for_and_yet_another]');
}

get_footer('wpshopify');
```

## Add custom attributes to the ShopWP script tags

The below snippet uses the native WordPress `wp_script_attributes` hook to customize the ShopWP script tag attributes.

```php
function update_shopwp_script_attrs($attrs) {

	if ( empty( $attrs['id'] ) || empty( $attrs['src'] ) ) {
		return $attrs;
	}

	if ( str_contains( $attrs['id'], 'shopwp' ) ) {
		$attrs = array_merge(['data-cfasync' => true], $attrs);
	}

	return $attrs;
}

add_filter('wp_script_attributes', 'update_shopwp_script_attrs', 10, 1);
```

## Display products based on tags of current WordPress post

The below snippet will use the tags added to the post as criteria for filtering your Shopify products. Make sure the WordPress tag name matches the tag in Shopify exactly for this to work.

```php
$Products = ShopWP\Factories\Render\Products\Products_Factory::build();

$tags = get_tags([
  'hide_empty' => false
]);

if (!empty($tags)) {
  $Products->products([
    'tag' => $tags,
    'connective' => 'and'
  ]);
}
```

## Whitelisting metafields globally

If you want to whitelist multiple Shopify metafields—to be used in any JavaScript used for ShopWP—you can do so using the below code.

The `product_metafields` and `product_variant_metafields` attributes need to be set to a base64 encoded string. The base64 encoded string must be a JavaScript array, containing one or more objects with a `namespace` and `key` property, like this:

```
[{ namespace: "custom", key: "hello" }]
```

```php
add_filter('shopwp_products_default_settings', function($settings) {

   $settings['product_metafields'] = "W3sgbmFtZXNwYWNlOiAiY3VzdG9tIiwga2V5OiAiYXdhcmRzX2FuZF9jZXJ0aWZpY2F0aW9ucyIgfV0=";
   // $settings['product_variant_metafields'] = "...";

   return $settings;

});
```
