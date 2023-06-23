---
sidebar_position: 7
---

# [wps_collections]

The `[wps_collections]` shortcode will display one or more collections in a grid. By default, each collection will link to a detail page containing the products that belong to it. You can optionally show the products that belong to each collection as well by using the [`collections_excludes`](#collections_excludes) attribute.

If you wish to customize the products that show with a collection, just add any attribute from the [products shortcode](/shortcodes/wps_products).

## Example Usage

```js
[wps_collections sort_by="lowest_price" limit="10"]
```

## Available Attributes

### collections_title

Displays collections based on one or more collection title(s).

| Possible values                                        |
| :----------------------------------------------------- |
| Any valid Shopify collection title, separated by comma |

**Example:** Filter collections by a single title

```js
[wps_collections collections_title="Featured"]
```

**Example:** Show two collections

```js
[wps_collections collections_title="Featured, Games"]
```

:::info
When filtering by title, ShopWP does not apply strict equality. It will return any collection that "contains" the word. So if you have more than one collection with the same group of words in the title, both will be returned.

If you want to filter by a strict equality, use the `collections_query` attribute instead and pass in a Shopify collection id.
:::

### collections_query

Allows you to construct your own query based on the [Shopify search syntax](https://shopify.dev/docs/api/usage/search-syntax).

| Possible values                                                                       |
| :------------------------------------------------------------------------------------ |
| Any valid Shopify [search criteria](https://shopify.dev/docs/api/usage/search-syntax) |

**Example**

```js
[wps_collections collections_query="id:159099748452 OR id:159100010596"]
```

### collections_updated_at

Display collections based on the date it was updated. Must use an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. Default: `false`. Example can be [found based on orders](https://help.shopify.com/en/api/reference/orders/order#created-at-property-2019-07).

| Possible values         |
| :---------------------- |
| Any valid ISO 8601 date |

**Example**

```js
[wps_collections collections_updated_at="2019-02-21 03:16:41"]
```

### collections_connective

The "connective" attribute determines how the collections are found when combining _other_ shortcode attributes. For example when set to `and`, every provided attribute must match the searched collections. With `or`, _any_ provided attribute will return the matched collections. Default: `or`.

| Possible values |
| :-------------- |
| and             |
| or              |

**Example**

```js
// collections with either title will show
[wps_collections collections_title="Awesome collection, Even better collection" collections_connective="or"]
```

### collections_sort_by

Determines the collections sort order. Corresponds to the [Shopify Storefront API](https://help.shopify.com/en/api/storefront-api/reference/enum/collectionsortkeys). Default: `title`

| Values     |
| :--------- |
| title      |
| updated_at |

```js
[wps_collections collections_sort_by="title"]
```

### collections_reverse

Reverses the order that the collections are displayed in

Default: `false`

```js
// Smallest to largest (A to Z) (old to new)
[wps_collections collections_sort_by="title" collections_reverse="true"]

```

### collections_page_size

Determines the number of collections to show per page. Only applicable when pagination is turned on. Will default to the plugin's global "products per page" setting.

| Possible values |
| :-------------- |
| Any number      |

**Example**

```js
// Shows 4 collections per page
[wps_collections collections_page_size="4"]
```

### collections_limit

Limits the number of collections. Max allowed is `250`.

Default: `10`

| Values     |
| :--------- |
| Any number |

```js
// Shows up to 250 at any time
[wps_collections collections_limit="25"]

// Only show one
[wps_collections collections_limit="1"]
```

### collections_items_per_row

Determines how many collections will appear in each row.

| Possible values |
| :-------------- |
| Any text string |

**Example**

```js
[wps_collections collections_items_per_row="5"]
```

### collections_excludes

Allows for excluding certain collection components like the title. Takes a comma separated string of values.

| Possible values |
| :-------------- |
| image           |
| title           |
| description     |

**Example**

```js
[wps_collections collections_excludes="title, description"]
```

### collections_single

Determines whether to show the collection products or not. Useful for only showing one collection with it's products. Enables the `products_` shortcode attributes.

| Possible values |
| :-------------- |
| true            |
| false           |

**Example**

```js
[wps_collections collections_single="true"]
```

### collections_pagination

Determines whether to hide or show pagination.

| Possible values |
| :-------------- |
| true            |
| false           |

**Example**

```js
[wps_collections collections_pagination="false"]
```

### collections_dropzone_load_more

When [pagination](#pagination) is set to true, this allows for specifying a custom location in the DOM to place the pagination "load more" control component for collections. Takes any valid CSS selector. When set to false, the load more button will be placed directly below the products output. Default: `false`.

:::info
The HTML element specified will be completely emptied and replaced with the load more component.
:::

**Example**

```js
[wps_collections collections_dropzone_load_more="#my-custom-load-more-container"]
```

### collections_dropzone_collection_title

When [single](#single) is set to true, this allows for specifying a custom location in the DOM to place the collection title. Takes any valid CSS selector.

:::info
The HTML element specified will be completely emptied and replaced with the load more component.
:::

**Example**

```js
[wps_collections single="true" collections_dropzone_collection_title="#title-container"]
```

### collections_dropzone_collection_image

When [single](#single) is set to true, this allows for specifying a custom location in the DOM to place the collection image. Takes any valid CSS selector.

:::info
The HTML element specified will be completely emptied and replaced with the load more component.
:::

**Example**

```js
[wps_collections single="true" collections_dropzone_collection_image="#image-container"]
```

### collections_dropzone_collection_description

When [single](#single) is set to true, this allows for specifying a custom location in the DOM to place the collection description. Takes any valid CSS selector.

:::info
The HTML element specified will be completely emptied and replaced with the load more component.
:::

**Example**

```js
[wps_collections single="true" collections_dropzone_collection_description="#description-container"]
```

### collections_dropzone_collection_products

When [single](#single) is set to true, this allows for specifying a custom location in the DOM to place the collection products. Takes any valid CSS selector.

:::info
The HTML element specified will be completely emptied and replaced with the load more component.
:::

**Example**

```js
[wps_collections single="true" collections_dropzone_collection_products="#products-container"]
```

### collections_infinite_scroll` (Pro only

When turned on, the next page of collections will automatically append to the container. Only works when pagination is used.

| Possible values |
| :-------------- |
| true            |
| false           |

**Example**

```js
[wps_collections collections_infinite_scroll="true"]
```

### collections_infinite_scroll_offset` (Pro only

Determines the offset from the edge of the collections container. For example, a value of `-100` will begin loading additional collections 100px before the end of the collections container. Offset can be a positive or negative value.

| Possible values                 |
| :------------------------------ |
| Any positive or negative number |

**Example**

```js
[wps_collections collections_infinite_scroll_offset="-100"]
```
