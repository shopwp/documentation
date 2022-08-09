---
sidebar_position: 2
---

# Migrating Guide 5.0

ShopWP 5.0 is a major update to the plugin which _may_ require some migration steps on your end depending on whether you're using deprecated features or not.

## What changed?

- There are a handful of JavaScript and PHP hooks that have changed names. [Scroll to the list of breaking changes](#full-list-of-breaking-changes) to review.
- The response object has changed when using internal PHP functions
- Renamed the global JavaScript variable from `wpshopify` to `shopwp`.
- Language and currency settings have been revamped
- The `get_product_by_id()` method changed to `api_get_product_by_id()`

## Language and currency settings

Version `5.0` has improved the language and currency settings of the plugin. In order to use these new settings, you must [reconnect your Shopify store](/getting-started/connecting).

These new language settings will allow you to easily show products in a different language / currency. This is not a switcher that users can use on the front-end, that feature will be here shortly!

## Internal PHP functions

The response objects have changed slightly for the internal PHP functions `get_product()` and `get_products()`. If you're using one of these functions, you must update your code to reflect the change.

### get_product()

The `product` key is no longer added to the response, see below:

**Before**

```php
// An example response from calling get_product() in 4.0
stdClass Object
(
    [product] => stdClass Object
        (
            [title] => Super awesome shades
            [description] => Dummy text refers to the bits of content that are used to ...
        )

)
```

**Now in 5.0:**

```php
// An example response from calling get_product() in 5.0
stdClass Object
(
    [title] => Super awesome shades
    [description] => Dummy text refers to the bits of content that are used to ...
)
```

### get_products()

The `products` key is no longer added to the response, see below:

**Before**

```php
// An example response from calling get_products() in 4.0
stdClass Object
(
    [products] => stdClass Object
        (
            [pageInfo] => stdClass Object
                (
                    [hasNextPage] => 1
                    [hasPreviousPage] =>
                )

            [edges] => Array
                (
                    [0] => stdClass Object
                        (
                            [cursor] => eyJsYXN0X2lkIjoyMzIzOTI0NzEzNTIwLCJsYXN0X3ZhbHVlIjoiYWVyb2R5bmFtaWMgYWx1bWludW0gZG9udXQifQ==
                            [node] => stdClass Object
                                (
                                    [title] => Aerodynamic Aluminum Donut
                                    [description] => Lorem ipsum dolor sit amet, consectetur adipiscing elit ...
                                )

                        )

                )
        )
)
```

**Now in 5.0:**

```php
// An example response from calling get_products() in 5.0
stdClass Object
(
    [pageInfo] => stdClass Object
        (
            [hasNextPage] => 1
            [hasPreviousPage] =>
        )

    [edges] => Array
        (
            [0] => stdClass Object
                (
                    [cursor] => eyJsYXN0X2lkIjoyMzIzOTI0NzEzNTIwLCJsYXN0X3ZhbHVlIjoiYWVyb2R5bmFtaWMgYWx1bWludW0gZG9udXQifQ==
                    [node] => stdClass Object
                        (
                            [title] => Aerodynamic Aluminum Donut
                            [description] => Lorem ipsum dolor sit amet, consectetur adipiscing elit ...
                        )

                )

        )

)
```

## Full list of breaking changes

Below is a full list of breaking changes in 5.0.

To check whether you need to update, copy each custom hook that you're using and do a search on this page. If the hook has been renamed use the updated name provided below. If the hook has been removed completely, simply implement the workaround provided.

- Renamed global JavaScript variable `wpshopify` to `shopwp`.
- The internal PHP function `get_product()` no longer returns "product" key. Just returns data instead. [See more](#get_product)
- The internal PHP function `get_products()` now returns "edges" instead of "products" as the key. [See more](#get_products)
- The `do.setCheckoutAttributes` JavaScript hook has been aliased to `do.updateCheckoutAttributes`.
- Renamed `do.updatedCheckoutAttributes` to `do.updateCartAttributes`.
- Removed `do.setCheckoutAttributes`. Use `do.updateCartAttributes` instead.
- Renamed `do.setCheckoutNote` to `do.setCartNote`.
- Renamed `do.setCheckoutDiscount` to `do.setCartDiscount`.
- Renamed `on.checkoutNoteChange` to `on.cartNoteChange`.
- Renamed the PHP filter `shopwp_currency_code` to `shopwp_country_code`
- Renamed the PHP filter `shopwp_currency_symbol` to `shopwp_language_code`
