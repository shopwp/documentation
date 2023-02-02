# Webhooks

Webhooks functionality is available through the [official webhooks extension](https://wpshop.io/extensions/webhooks/).

This guide is only applicable if you have this extension installed.

## Available events

There are currently 12 events that you can list to. Here's a full list:

```
Product create
Product update
Product delete
Product added to sales channel
Product removed from sales channel
Collection create
Collection update
Collection delete
Order create
Order delete
Order edited
Shop update
```

Each event comes with a companion PHP action hook that will fire when the webhook runs.

## PHP hooks

Before these hooks will work, you must connect the corresponding webhook within the ShopWP "Sync" tab.

Each hook below is linked to an example of how to use it.

- [shopwp_webhook_after_product_update](/php-actions#shopwp_webhook_after_product_update)
- [shopwp_webhook_after_product_create](/php-actions#shopwp_webhook_after_product_create)
- [shopwp_webhook_after_product_delete](/php-actions#shopwp_webhook_after_product_delete)
- [shopwp_webhook_after_product_listings_remove](/php-actions#shopwp_webhook_after_product_listings_remove)
- [shopwp_webhook_after_product_listings_add](/php-actions#shopwp_webhook_after_product_listings_add)
- [shopwp_webhook_after_collection_create](/php-actions#shopwp_webhook_after_collection_create)
- [shopwp_webhook_after_collection_update](/php-actions#shopwp_webhook_after_collection_update)
- [shopwp_webhook_after_collection_delete](/php-actions#shopwp_webhook_after_collection_delete)
- [shopwp_webhook_after_shop_update](/php-actions#shopwp_webhook_after_shop_update)
- [shopwp_webhook_after_order_create](/php-actions#shopwp_webhook_after_order_create)
- [shopwp_webhook_after_order_edit](/php-actions#shopwp_webhook_after_order_edit)
- [shopwp_webhook_after_order_delete](/php-actions#shopwp_webhook_after_order_delete)

## Using the PHP hooks

To use the hooks, you need to add the PHP snippet to your WordPress theme's `functions.php` file.

**Here's an example of using the product update hook:**

```php
add_action('shopwp_webhook_after_product_update', function($data) {
    // Do something with new product $data
});
```

The `$data` variable will contain all the new product information from Shopify.

It's recommended to use a [child theme](https://developer.wordpress.org/themes/advanced-topics/child-themes/) when adding PHP hooks so they're not removed when updating your theme.
