---
sidebar_position: 10
---

# [wps_storefront]

Displays the "storefront" component containing filtering, pagination, and sorting. Only available in [ShopWP Pro](https://wpshop.io/purchase?utm_medium=docs&utm_source=features&utm_campaign=upgrade). Take note that this shortcode contains three required attributes.

Watch our [quick video tutorial](https://www.youtube.com/watch?v=lYm6G35e8sI) to learn how to use this.

## Example Usage

```js
// Render the storefront without tag filters
[wps_storefront show_tags="false"]

// Force two products per row and sort by price
[wps_storefront items_per_row="2" sort_by="price"]

// Show products without the description present
[wps_storefront excludes="description"]
```

## Available Attributes

### dropzone_payload

Specifies where the actual filter results should render. Takes any valid CSS selector.

**Example**

```js
[wps_storefront dropzone_payload="#dropzone-payload"]
```

### dropzone_options

Specifies where the selectable filter options should render. Takes any valid CSS selector.

**Example**

```js
[wps_storefront dropzone_options="#dropzone-options"]
```

### dropzone_selections

Specifies where the selected user choices should render. Takes any valid CSS selector. Omitting will hide user selections all together.

**Example**

```js
[wps_storefront dropzone_selections="#dropzone-selections"]
```

### sort_by

Determines the products sort order. Corresponds to the [Shopify API values](https://help.shopify.com/en/api/custom-storefronts/storefront-api/reference/enum/productsortkeys). Will be overwritten if user uses the provided sorting dropdown.

| Possible values |
| :-------------- |
| title (default) |
| vendor          |
| id              |
| price           |
| best_selling    |
| product_type    |
| created_at      |
| updated_at      |

**Example**

```js
[wps_storefront sort_by="price"]
```

### reverse

Reverses the order of products. Useful when used in combination with `sort_by`. Will be overwritten if user uses the provided sorting dropdown.

| Possible values |
| :-------------- |
| true            |
| false           |

**Example**

```js
// Smallest to largest (A to Z) (old to new)
[wps_storefront sort_by="title" reverse="true"]
```

### page_size

Determines the number of products to show per page. Only applicable when pagination is turned on. Will default to the plugin's global [products per page](getting-started/settings?id=products-per-page) setting. Will be overwritten if user uses the provided page size dropdown.

| Possible values |
| :-------------- |
| Any number      |

**Example**

```js
// Shows 4 products per page
[wps_storefront page_size="4"]
```

### limit

Limits the overall number of products that show. Max limit is `250`.

| Possible values |
| :-------------- |
| Any number      |

**Example**

```js
// Show two products per page, up to 10
[wps_storefront page_size="2" limit="10"]

// Only show one product
[wps_storefront limit="1"]
```

### excludes

Allows for excluding certain product components like the title, description, etc. Takes a comma separated string of values.

| Possible values |
| :-------------- |
| images          |
| title           |
| pricing         |
| description     |
| buy-button      |

**Example**

```js
// Don't show the title or pricing
[wps_storefront excludes="title, pricing"]
```

### items_per_row

Determines how many products will appear in each row.

| Possible values |
| :-------------- |
| Any text string |

**Example**

```js
[wps_storefront items_per_row="5"]
```

### pagination

Determines whether to hide or show pagination.

| Possible values |
| :-------------- |
| true            |
| false           |

**Example**

```js
[wps_storefront pagination="false"]
```

### no_results_text

Specifies the text to use when no filter results are found. Default: `No results found`.

```js
[wps_storefront no_results_text="Custom no results text with emojis 🚨"]
```

### infinite_scroll

When turned on, the next page of items will automatically append to the container. Only works when pagination is used.

| Possible values |
| :-------------- |
| true            |
| false           |

**Example**

```js
[wps_storefront infinite_scroll="true"]
```

### infinite_scroll_offset

Determines the offset from the edge of the items container. For example, a value of `-100` will begin loading additional items 100px before the end of the items container. Offset can be a positive or negative value.

| Possible values                 |
| :------------------------------ |
| Any positive or negative number |

**Example**

```js
[wps_storefront infinite_scroll_offset="-100"]
```

### dropzone_sorting

Specifies where the sorting component should render. Takes any valid CSS selector. Omitting will hide sorting all together.

**Example**

```js
[wps_storefront dropzone_sorting="#dropzone-sorting"]
```

### dropzone_pagination

Specifies where the pagination should render. Takes any valid CSS selector. Omitting will hide pagination all together.

**Example**

```js
[wps_storefront dropzone_pagination="#dropzone-pagination"]
```

### show_tags

Specifies whether to allow the user to filer by product tags. Setting to false will hide the ability to filter by tags.

**Example**

```js
[wps_storefront show_tags="false"]
```

### show_vendors

Specifies whether to allow the user to filer by product vendors. Setting to false will hide the ability to filter by vendors.

**Example**

```js
[wps_storefront show_vendors="false"]
```

### show_types

Specifies whether to allow the user to filer by product types. Setting to false will hide the ability to filter by types.

**Example**

```js
[wps_storefront show_types="false"]
```

### show_options_heading

Specifies whether to show the default "Filter by" options heading.

**Example**

```js
[wps_storefront show_options_heading="false"]
```

### available_for_sale

Display products based on their availability. Setting to `true` will only show products that are in stock.

| Possible values |
| :-------------- |
| true            |
| any (default)   |

**Example**

```js
[wps_storefront available_for_sale="true"]
```

### price_heading

Allows for customizing the heading of the "Pricing" filter group. Default: `Price`.

| Possible values  |
| :--------------- |
| Any valid string |

**Example**

```js
[wps_storefront price_heading="Custom price heading"]
```

### collections_heading

Allows for customizing the heading of the "Collections" filter group. Default: `Price`.

| Possible values  |
| :--------------- |
| Any valid string |

**Example**

```js
[wps_storefront collections_heading="Custom collections heading"]
```

### types_heading

Allows for customizing the heading of the "Types" filter group. Default: `Price`.

| Possible values  |
| :--------------- |
| Any valid string |

**Example**

```js
[wps_storefront types_heading="Custom types heading"]
```

### tags_heading

Allows for customizing the heading of the "Tags" filter group. Default: `Price`.

| Possible values  |
| :--------------- |
| Any valid string |

**Example**

```js
[wps_storefront tags_heading="Custom tags heading"]
```

### vendors_heading

Allows for customizing the heading of the "Vendors" filter group. Default: `Price`.

| Possible values  |
| :--------------- |
| Any valid string |

**Example**

```js
[wps_storefront vendors_heading="Custom vendors heading"]
```

### filter_by_label_text

Allows for customizing the "Filter by" label. Default: `Filter by:`.

| Possible values  |
| :--------------- |
| Any valid string |

**Example**

```js
[wps_storefront filter_by_label_text="Custom filter by text"]
```

### page_size_label_text

Allows for customizing the "Page size" label. Default: `Page size:`.

| Possible values  |
| :--------------- |
| Any valid string |

**Example**

```js
[wps_storefront page_size_label_text="Custom page size text"]
```

### clear_filter_selections_text

Allows for customizing the "Clear selections" text that shows after selecting a filter. Default: `Clear selections`.

| Possible values  |
| :--------------- |
| Any valid string |

**Example**

```js
[wps_storefront clear_filter_selections_text="Custom clear selections"]
```

### selections_available_for_sale_text

Allows for customizing the "Available for sale" text. Default: `Available for sale`.

| Possible values  |
| :--------------- |
| Any valid string |

**Example**

```js
[wps_storefront selections_available_for_sale_text="Custom available for sale"]
```

### sort_by_label_text

Allows for customizing the "Sort by" text. Default: `Sort by:`.

| Possible values  |
| :--------------- |
| Any valid string |

**Example**

```js
[wps_storefront sort_by_label_text="Custom sort by text"]
```

### no_filter_group_found_text

Allows for customizing the text shown when no filter group is found. Default: `No %s found`.

| Possible values                                                              |
| :--------------------------------------------------------------------------- |
| Any valid string. Use the %s character to dynamically show filter group type |

**Example**

```js
[wps_storefront no_filter_group_found_text="Custom text"]
```

### filterable_price_values

Allows for customizing the available price values that users can select.

**Example**

```js
add_filter(
	'shopwp_storefront_default_payload_settings',
	function ($storefront_settings) {
		$storefront_settings['filterable_price_values'] = [
			'$0.00 - $15.00',
			'$15.00 - $25.00',
			'$25.00 - $50.00',
			'$50.00 - $100.00',
			'$100.00 +',
		]

		return $storefront_settings
	}
)
```
