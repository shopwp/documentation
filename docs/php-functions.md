# PHP Functions

The below PHP functions allow you to programmatically fetch raw product data. There are two important things to know:

1. These functions will make a network request the first time they run. The payload will then be cached for any consecutive calls.

2. If a cached payload is found, these functions will return the cached version instead, skipping the network request. This is usually ok, but if you're noticing that the product data is stale you'll need to clear the plugin cache within the plugin settings under the "Sync" menu.

### get_product()

Allows you to fetch a single product by `post_id`, `product_id`, or `storefront_id`.

You must pass one of the below keys to the `$params` argument:

```
post_id
product_id
storefront_id
```

Additional fields you can pass:

```
page_size
reverse
sort_by
schema
```

:::info
Note: If you pass the `schema` key, you can explicitly choose which product fields to return during the request. By default, all product fields will be returned. The full list of available fields can be [found here](https://shopify.dev/api/storefront/reference/products/product#fields-2021-10).
:::

| Argument | Description               |
| :------- | :------------------------ |
| $params  | An array of query options |

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

### get_products()

Allows you to fetch multiple products by using a Shopify [search query](https://shopify.dev/api/usage/search-syntax).

`get_products()` takes a single configuration parameter as an array. This parameter accepts the below keys:

| Keys      | Description                                                                                                                                                                                 |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| query     | Determines which products to search for. You can pass any complex search query as long as it follows the rules of the [Shopify search syntax](https://shopify.dev/api/usage/search-syntax). |
| page_size | Sets how many products to show per page of results. If more products exist than this number, a load more button will display at the bottom.                                                 |
| reverse   | Whether to reverse the order of the results                                                                                                                                                 |
| sort_by   | Determines how the returned products should be sorted. Uses the same values from the [`sort_by` shortcode attribute](/shortcodes/wps_products#sort_by).                                     |
| schema    | Allows for determining which product fields are returned. Useful if you only need a couple fields like `id` or `title`.                                                                     |

:::info
Note: If you pass the `schema` key, you can explicitly choose which product fields to return during the request. By default, all product fields will be returned. The full list of available fields can be [found here](https://shopify.dev/api/storefront/reference/products/product#fields-2021-10).
:::

**Example**:
Get all products with the tag `book`.

```php
$Products = ShopWP\Factories\API\Items\Products_Factory::build();

$result = $Products->get_products([
   'query' => 'tag:book'
]);
```

**Example**:
Get all products from the collection "super" and only return the product `id` and `title`.

```php
$Products = ShopWP\Factories\API\Items\Products_Factory::build();

$result = $Products->get_products([
   'query' => 'collection:super',
   'page_size' => 12,
   'schema' => '
      id
      title
   '
]);
```

### get_products_by_collection_ids()

Allows you to fetch products by one or more collection ids.

The `$params` argument requires that you pass the `collection_ids` key.

If you pass the `schema` key, you can explicitly choose which product fields to return during the request. By default, all product fields will be returned. The full list of available fields can be [found here](https://shopify.dev/api/storefront/reference/products/product#fields-2021-10).

Additional fields you can pass:

```
page_size
reverse
sort_by
schema
```

:::info
Note: If you pass the `schema` key, you can explicitly choose which product fields to return during the request. By default, all product fields will be returned. The full list of available fields can be [found here](https://shopify.dev/api/storefront/reference/products/product#fields-2021-10).
:::

| Argument | Description               |
| :------- | :------------------------ |
| $params  | An array of query options |

**Example**:
Get products from two collections

```php
$Products = ShopWP\Factories\API\Items\Products_Factory::build();

$result = $Products->get_products_by_collection_ids([
   'collection_ids' => [164430086192, 159962693680],
   'page_size' => 250,
   'schema' => '
      title
   '
]);
```
