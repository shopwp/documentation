# PHP Actions

ShopWP comes with action hooks that can be used to customize the plugin. Simply add these to your WordPress theme's `functions.php` file.

### shopwp_breadcrumbs

Allows you to customize the ShopWP breadcrumbs execution.

**Examples**

```php
// Remove ShopWP breadcrumbs
$Templates = ShopWP\Factories\Templates_Factory::build();

remove_action('shopwp_breadcrumbs', [$Templates, 'shopwp_breadcrumbs']);
```

### shopwp_on_plugin_activate

Allows you to run code when ShopWP is activated

**Examples**

```php
add_action('shopwp_on_plugin_activate', function() {
    error_log('Plugin is activated!');
});
```

### shopwp_on_plugin_deactivate

Allows you to run code when ShopWP is deactivated

**Examples**

```php
add_action('shopwp_on_plugin_deactivate', function() {
    error_log('Plugin is deactivated!');
});
```

### shopwp_is_ready

This action will fire after ShopWP has fully loaded during the WordPress lifecycle. Useful for building other plugins that depend on ShopWP.

**Examples**

```php
add_action('shopwp_is_ready', function() {
    error_log('Plugin is ready and loaded!');
});
```

### shopwp_webhook_after_product_update

This action runs after a product is updated within Shopify. Connect the corresponding webhook first.

**Examples**

```php
add_action('shopwp_webhook_after_product_update', function($data) {
    // Do something with new product $data
});
```

### shopwp_webhook_after_product_create

This action runs after a product is created within Shopify. Connect the corresponding webhook first.

**Examples**

```php
add_action('shopwp_webhook_after_product_create', function($data) {
    // Do something with new product $data
});
```

### shopwp_webhook_after_product_delete

This action runs after a product is deleted within Shopify. Connect the corresponding webhook first.

**Examples**

```php
add_action('shopwp_webhook_after_product_delete', function($data) {
    // Do something with new product $data
});
```

### shopwp_webhook_after_product_listings_remove

This action runs after a product is removed from the ShopWP sales channel. Connect the corresponding webhook first.

**Examples**

```php
add_action('shopwp_webhook_after_product_listings_remove', function($data) {
    // Do something with new product $data
});
```

### shopwp_webhook_after_product_listings_add

This action runs after a product is added to the ShopWP sales channel. Connect the corresponding webhook first.

**Examples**

```php
add_action('shopwp_webhook_after_product_listings_add', function($data) {
    // Do something with new product $data
});
```

### shopwp_webhook_after_collection_create

This action runs after a collection is created within Shopify. Connect the corresponding webhook first.

**Examples**

```php
add_action('shopwp_webhook_after_collection_create', function($data) {
    // Do something with new collection $data
});
```

### shopwp_webhook_after_collection_update

This action runs after a collection is updated within Shopify. Connect the corresponding webhook first.

**Examples**

```php
add_action('shopwp_webhook_after_collection_update', function($data) {
    // Do something with new collection $data
});
```

### shopwp_webhook_after_collection_delete

This action runs after a collection is deleted within Shopify. Connect the corresponding webhook first.

**Examples**

```php
add_action('shopwp_webhook_after_collection_delete', function($data) {
    // Do something with new collection $data
});
```

### shopwp_webhook_after_shop_update

This action runs after any shop settings are changed. Connect the corresponding webhook first.

**Examples**

```php
add_action('shopwp_webhook_after_shop_update', function($shop) {
    // Do something with new shop data
});
```

### shopwp_webhook_after_order_create

This action runs after any order is created inside Shopify. Connect the corresponding webhook first.

**Examples**

```php
add_action('shopwp_webhook_after_order_create', function($shop) {
    // Do something with new shop data
});
```

### shopwp_webhook_after_order_edit

This action runs after any order is edited inside Shopify. Connect the corresponding webhook first.

**Examples**

```php
add_action('shopwp_webhook_after_order_edit', function($shop) {
    // Do something with new shop data
});
```

### shopwp_webhook_after_order_delete

This action runs after any order is deleted inside Shopify. Connect the corresponding webhook first.

**Examples**

```php
add_action('shopwp_webhook_after_order_delete', function($shop) {
    // Do something with new shop data
});
```
