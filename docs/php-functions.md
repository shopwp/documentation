# PHP Functions

The below PHP functions allow you to fetch product data

### get_product()

Allows you to fetch a single product by `post_id`, `product_id`, or `storefront_id`.

If you pass the `schema` key, you can explicitly choose which "fields" to return during the request. By default, all product fields will be returned. The full list of available fields can be [found here](https://shopify.dev/api/storefront/reference/products/product).

You must pass one of the below keys: `$params` argument must contain one of three keys:

```
post_id
product_id
storefront_id
```

| Argument | Description |
| :------- | :---------- |
| $params  | An array    |

**Example**:
Get product title and description by post id

```php
$Products = ShopWP\Factories\API\Items\Products_Factory::build();
$post_id = 16563; // required

$result = $Products->get_product([
   'post_id' => $post_id,
   'schema' => '
      title
      description
   '
]);
```

**Example**:
Get product images by storefront_id

```php
$Products = ShopWP\Factories\API\Items\Products_Factory::build();
$storefront_id = 'gid://shopify/Product/2216988573744'; // required

$result = $Products->get_product([
   'storefront_id' => $storefront_id,
   'schema' => '
      images
   '
]);
```
