---
sidebar_position: 4
---

# Displaying

ShopWP comes with various methods for displaying your products and collections:

- [Default pages](/guides/default-pages)
- [Shortcodes](/shortcodes/wps_products)
- [Gutenberg Blocks](/guides/gutenberg-blocks) (Requires ShopWP Pro)
- [Elementor Extension](/guides/elementor-extension) (Requires ShopWP Pro)
- [Beaver Builder Extension](/guides/beaver-builder) (Requires ShopWP Pro)
- [Render API](/guides/render-api)

## Caching

We've tried to make ShopWP as fast as possible. One of the strategies we've taken is caching the product and collection data.

When products first load, a fresh request is made to the Shopify servers to fetch product info. The plugin then cache's this data to prevent additional network requests on consecutive page loads.

However, this means that if you change your product information you'll need to manually flush the ShopWP cache. To do this, you can follow our [Clear Cache guide](/guides/clear-cache).