# PHP Functions

The below PHP functions will allow you to programmatically fetch raw Shopify data. There are two important things to know:

1. These functions will make a network request the first time they run. The payload will then be cached for any consecutive calls.

2. If a cached payload is found, these functions will return the cached version instead, skipping the network request. This is usually ok, but if you're noticing that the data is stale you'll need to clear the plugin cache within the plugin settings under the "Sync" menu.

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
language
country
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

**Example**:
Get a list of collections that belong to a product, by post id

```php
$Products = ShopWP\Factories\API\Items\Products_Factory::build();
$post_id = 16563; // required

$result = $Products->get_product([
   'post_id' => $post_id,
   'schema' => '
      collections(first: 250) {
        edges {
            node {
                id
                title
            }
        }
      }
   '
]);
```

### get_products()

Allows you to fetch multiple products by using a Shopify [search query](https://shopify.dev/api/usage/search-syntax).

`get_products()` takes a single configuration parameter as an array. This parameter accepts the below keys:

| Keys      | Description                                                                                                                                                                                                            |
| :-------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| query     | Determines which products to search for. You can pass any complex search query as long as it follows the rules of the [Shopify search syntax](https://shopify.dev/api/usage/search-syntax). This property is required. |
| page_size | Sets how many products to show per page of results. If more products exist than this number, a load more button will display at the bottom.                                                                            |
| reverse   | Whether to reverse the order of the results                                                                                                                                                                            |
| sort_by   | Determines how the returned products should be sorted. Uses the same values from the [`sort_by` shortcode attribute](/shortcodes/wps_products#sort_by).                                                                |
| schema    | Allows for determining which product fields are returned. Useful if you only need a couple fields like `id` or `title`.                                                                                                |
| language  | Allows for receiving translated content. Accepts a language code, e.g.: `EN`, `ES`, etc.                                                                                                                               |
| country   | Allows for converting product prices. Accepts a country code, e.g.: `US`, `MX`, etc.                                                                                                                                   |

:::info
Note: If you pass the `schema` key, you can explicitly choose which product fields to return during the request. By default, all product fields will be returned. The full list of available fields can be [found here](https://shopify.dev/api/storefront/reference/products/product#fields-2021-10).
:::

**Example**:
Get all products.

```php
$Products = ShopWP\Factories\API\Items\Products_Factory::build();

$result = $Products->get_products([
   'query' => '*'
]);
```

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

### get_orders()

Allows for fetching multiple Shopify orders at once using a Shopify [search query](https://shopify.dev/api/admin-graphql/2022-04/objects/Order#queries).

`get_orders()` takes a single configuration parameter as an array. This parameter accepts the below keys:

| Keys      | Description                                                                                                                                                                                                         |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| query     | (Required) Determines which orders to search for. You can pass any complex search query that follows the [Order filter syntax](https://shopify.dev/api/admin-graphql/2022-04/objects/Order#query-orders-arguments). |
| page_size | Determines how many orders to return.                                                                                                                                                                               |
| reverse   | Whether to reverse the order of the results                                                                                                                                                                         |
| sort_by   | Determines how the orders should be sorted. Refer to the [OrderSortKeys](https://shopify.dev/api/admin-graphql/2022-04/enums/OrderSortKeys) for a full list.                                                        |
| schema    | Allows for customizing which [order fields](https://shopify.dev/api/admin-graphql/2022-04/objects/Order#fields) are returned. Useful if you only need a couple fields like `id` or `lineItems`.                     |

:::info
Note: If you pass the `schema` key, you can explicitly choose which order fields to return during the request. By default, a curated list of order fields will be returned. The full list of available fields can be [found here](https://shopify.dev/api/admin-graphql/2022-04/objects/Order#fields).
:::

**Example**:
Get orders from a specific user email.

```php
$Orders = ShopWP\Factories\API\Items\Orders_Factory::build();

$params = [
   'query' => 'email:asda@asdasdad.com'
];

$result = $Orders->get_orders($params);
```

**Example**:
Get orders from a specific user email and only return the fields `name`, `email`, and `tags`.

```php
$Orders = ShopWP\Factories\API\Items\Orders_Factory::build();

$params = [
   'query' => 'email:asda@asdasdad.com',
   'schema' => '
      name
      email
      tags
   '
];

$result = $Orders->get_orders($params);
```
