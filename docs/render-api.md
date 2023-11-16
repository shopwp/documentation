# Render API

ShopWP allows you to display your Shopify products and collections programmatically with PHP. This is called the "Render API".

The Render API is a set of PHP classes and functions which you can use inside your own files. Each class has various methods which allow you to display your products.

Let's see how it's done.

## Getting started

Start by placing the following near the top of your file:

```php
$Products = ShopWP\Factories\Render\Products\Products_Factory::build();
```

The `$Products` variable is now assigned an "instance" of the Render API's Products class. The build method takes no parameters and should be called directly.

See the [full list of available classes](#list-of-available-classes).

## Using the methods

Now that we have the class built, we can begin using it!

Let's say we want to show a product based on the post title. We can do so like this:

```js
global $post;

$Products->products([
   'title' => $post->post_title
]);
```

We pass the WordPress post title to a parameter called `title`. We have conveniently matched the Render API method parameters to the [available shortcode attributes](/shortcodes/wps_products).

So all shortcode attributes can be used with the Render API.

It's important to note that the `Products()` method is responsible for outputting one or more "full" products. By "full", we simply mean they contain all the _other_ product components like title, description, buy button, etc. Here is a [live demo](https://wpshop.io/features) of a "full" product.

## List of available classes

- [Products](/)
- [Collections](/)
- [Search](/)
- [Storefront](/)
- [Cart Icon](/)

## List of available class methods

- [Products->products()](/)
- [Products->title()](/)
- [Products->buy_button()](/)
- [Products->description()](/)
- [Products->pricing()](/)
- [Products->gallery()](/)
- [Collections->collections()](/)
- [Search->search()](/)
- [Storefront->storefront()](/)
- [Cart->cart_icon()](/)
