# Related products

Below are some code snippets for showing related products based on post id.

## Related products by collection

```php
$Render_Products    = ShopWP\Factories\Render\Products\Products_Factory::build();
$Products           = ShopWP\Factories\API\Items\Products_Factory::build();
$post_id            = 157189; // required

$result = $Products->get_product([
    'post_id' => $post_id,
    'query_exclude' => 'current',
    'schema' => '
        collections(first: 1) {
            edges {
                node {
                    id
                    title
                }
            }
        }
    '
]);

if (!empty($result->collections->edges)) {
    $first_collection = $result->collections->edges[0]->node->title;

    $Render_Products->products([
        'collection' => $first_collection
    ]);
}
```
