# HTML Templates

The HTML Templates feature allows you to specify a custom template to be used for product output. This can be done by using the `html_template` shortcode attribute either with a shortcode or through the Render API.

This is different from the `products-single.php` and `products-all.php` templates in that **it will only apply to the product itself**. If displaying more than one product, this template will be ran for each product in the list.

It's also different because of the [specific rules of when using it](#rules-of-using-html-templates).

### Using the html_template attribute

When using `html_template` you must specify the name of a valid .php file you wish to use, like this:

Shortcode:

```js
[wps_products html_template="product.php"]
```

Render API:

```php
$Products = ShopWP\Factories\Render\Products\Products_Factory::build();

$Products->products([ 'html_template' => 'product.php' ]);
```

### Locating the custom html_template files

Because you can specify any file to be used, you'll need to add your files to a special folder so the plugin can look for them. This special folder is called `custom`, and must be placed directly inside the `wps-templates` folder.

For example, if your template file is called `product.php`, the folder structure must look like this:

```php
wp-content/my-theme/wps-templates/custom/product.php
```

:::info
If you're using a page builder you don't need to worry about this. The builder's module will handle the actual template content so you don't have to.
:::

### Rules of using HTML Templates

There are a couple rules when using HTML Templates.

1. Any PHP that you use must output valid HTML. For example, if you have a PHP function called `doStuff()`, this function must return HTML and therefore you must echo it.

2. Any HTML syntax errors can cause render issues so be sure your HTML is valid.

3. In order to output the various product components (Title, Pricing, etc), you must use them like this:

```js
<ProductImages />
<ProductTitle />
<ProductPricing />
<ProductDescription />
<ProductBuyButton />
```

For example, to create a two column layout with images on the left and product title on the right, you could do something like this:

```js
<div class='row'>
	<div class='col-2'>
		<ProductImages />
	</div>
	<div class='col-2'>
		<ProductTitle />
	</div>
</div>
```

You cannot currently modify the HTML contents of the template components.

### Available HTML Template components

```js
<ProductImages />
<ProductTitle />
<ProductPricing />
<ProductDescription />
<ProductBuyButton />
```
