# HTML Templates

The ShopWP HTML templates feature allows you to specify a custom HTML template to be used for the product layout.

This can be done by using the `html_template` attribute, either with a shortcode or through the Render API. This is different from the `products-single.php` and `products-all.php` templates since **it will only apply to the product itself** and not every product detail page.

If displaying more than one product, this template will be used for each product in the list.

## How to use it

The `html_template` attribute must be set to a valid `.php` file, like this:

```js
[wps_products html_template="product.php"]
```

**Or using the Render API:**

```php
$Products = ShopWP\Factories\Render\Products\Products_Factory::build();

$Products->products([ 'html_template' => 'product.php' ]);
```

You will only specify the file name—not the path. This template file will be placed inside your theme in a special folder.

Let's see how to do that now.

## Where to place it

Since you can specify any `.php` file, you'll need to add your files to a special folder so ShopWP can find them. This special folder is called `custom`, and must be placed directly inside the `wps-templates` folder within the root of your theme.

For example, if your template file is called `product.php`, the folder structure would look like this:

```php
/wp-content/your-theme/wps-templates/custom/product.php
```

:::info
If you're using the [ShopWP Beaver Builder](https://wpshop.io/extensions/beaver-builder/) or [Elementor extensions](https://wpshop.io/extensions/elementor/), you don't need to worry about this. The builder's module will handle the actual template loading so you don't have to. These two extensions will allow you to paste your template content directly into the widget.
:::

## Follow the rules

There are four rules when using HTML Templates:

1. Any PHP used must output valid HTML. For example, if you have a PHP function called `doStuff()`, this function must return HTML. Therefore you must echo it.
2. Any HTML syntax errors can cause render issues—so be sure your HTML is valid.
3. Using `<style>` tags inside the template is currently unsupported
4. In order to output the various product components (Title, Pricing, etc), you must use them like this:

```js
<ProductImages />
<ProductTitle />
<ProductPricing />
<ProductDescription />
<ProductBuyButton />
```

Notice how they're self closing? These "special" HTML tags are actually React JS components. When you use them inside your templates, ShopWP will understand what they are and expand them accordingly.

## Examples

Two column layout with images on the left and product info on the right.

```js
<div class='row'>
	<div class='col-2'>
		<ProductImages />
	</div>
	<div class='col-2'>
		<ProductTitle />
		<ProductPricing />
		<ProductDescription />
		<ProductBuyButton />
	</div>
</div>
```

:::info
You can't currently add `<style>` tags to the template. This may change in the future. Therefore you will need to add any necessary CSS for your template in your theme or the Customizer.
:::

## Available template components

```js
<ProductImages />
<ProductTitle />
<ProductPricing />
<ProductDescription />
<ProductBuyButton />
<Reviews />
```

## Skip the template file

One neat feature of `html_template` is the ability to pass template data directly, without the need for a template file. You can do this with the `html_template_data` attribute.

Using `html_template_data` involves [base64 encoding your template](https://www.base64encode.org/) and passing it to the shortcode or Render API.

For example, let's say this is your template data:

```html
<p>Hello</p>
```

The base64 encoded string of the above template data is: `PHA+SGVsbG88L3A+` So you can then pass that to the `html_template_data` attribute, like this:

```js
[wps_products html_template_data="PHA+SGVsbG88L3A+"]
```

**Or using the Render API:**

```php
$Products = ShopWP\Factories\Render\Products\Products_Factory::build();

$Products->products([ 'html_template_data' => 'PHA+SGVsbG88L3A+' ]);
```
