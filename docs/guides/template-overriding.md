# Template Overriding

[ShopWP Pro](https://wpshop.io/purchase?utm_medium=docs&utm_source=features&utm_campaign=upgrade) allows you to customize the templates used for the product detail pages and product listing pages. The process works very similar to WooCommerce.

:::info
This is not the same as the [HTML Templates feature](/guides/html-templates)
:::

## Setting up your theme

First, create a folder inside your theme (or child theme) called `wps-templates`.

## How to override

Once you've created the `wps-templates` folder inside your theme, you need to figure which template to override. Have a look at our full [list of available templates](#list-of-available-templates).

The plugin templates can be found within the `wp-content/plugins/wp-shopify-pro/public/templates/` directory. Once you find the template you want, copy the file from the plugin into your `wps-templates` folder.

It's important that you keep the same folder structure that the plugin uses. The plugin's "templates" folder acts as the root, similar to the "wps-templates" folder that you create.

For example, if your intention is to customize the product single pages you’ll need to ...

**Copy from:**

```
wp-shopify-pro/public/templates/products-single.php
```

**Copy to:**

```
<theme>/wps-templates/products-single.php
```

Notice how the `products-single.php` file sits at the same directory level in both cases.

The copied file will now override the ShopWP default template file. When you update the plugin none of the changes in your theme’s `wps-templates` will be lost. However, if you want to override a template that lives in a nested sub-folder, you'll need to also add those sub-folders. For example:

**Copy from:**

```
wp-shopify-pro/public/templates/webhooks/products/product-update.php
```

**Copy to:**

```
<theme>/wps-templates/webhooks/products/product-update.php
```

Notice how you need also create the `webhooks` and `products` sub-folders in the above example?

:::info
Do not edit the core plugin template files. If you do, your changes will be overwritten when the plugin updates and any customizations will be lost.
:::

## Available templates

- [products-all.php](#products-allphp)
- [products-single.php](#products-singlephp)
- [collections-all.php](#collections-allphp)
- [collections-single.php](#collections-singlephp)

### products-all.php

This template controls the default products listing page.

**Copy from:**

```
shopwp-pro/public/templates/products-all.php
```

**Copy to:**

```
<your-theme>/wps-templates/products-all.php
```

### products-single.php

This template controls the product detail pages.

**Copy from:**

```
shopwp-pro/public/templates/products-single.php
```

**Copy to:**

```
<your-theme>/wps-templates/products-single.php
```

### collections-all.php

This template controls the default collection listing page.

**Copy from:**

```
shopwp-pro/public/templates/collections-all.php
```

**Copy to:**

```
<your-theme>/wps-templates/collections-all.php
```

### collections-single.php

This template controls the collection detail pages.

**Copy from:**

```
shopwp-pro/public/templates/collections-single.php
```

**Copy to:**

```
<your-theme>/wps-templates/collections-single.php
```
