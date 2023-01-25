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
