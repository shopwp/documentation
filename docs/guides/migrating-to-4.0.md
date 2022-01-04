---
sidebar_position: 1
---

# Migrating Guide 4.0

:::info
After updating, the plugin will be deactivated. Once the update is finished you'll need to manually re-active the plugin.
:::

ShopWP 4.0 is a major update to the plugin. With it comes a new name, new features, and many updates that _may_ require some migration steps on your end.

If you haven't used any of the plugin's JavaScript or PHP hooks in your project, then you should be fine upgrading without any migration steps. However if you _have_, the hooks have probably changed. You'll need to perform a few steps to make them work again.

## Things to do _before_ updating

1. Please backup your site. In the unlikely event that something goes wrong, it's nice to have a recent backup to restore.
2. If possible, perform the update on a staging site. This will allow you to test the changes without affecting your live site. If you don't have a staging site or need help setting one up, please contact your webhost. Most modern webhosts are happy to do this for you. And if they're not, move to [WP Engine](https://wpengine.com) 😃
3. Ensure that your ShopWP license key is activated inside the plugin. If your key is not set, you won't see the update notification.
4. Compile a list of all the PHP and JavaScript customizations that you've made for reference.

## Things to do _after_ updating

1. After updating, the plugin will be deactivated. You'll need to manually reactivate it again.
2. After reactivating, some of you may see an error regarding "ShopWP\Bootstrap". In this case, you'll need to reactivate the plugin one more time.
3. We recommend that you reconnect your Shopify store after updating to `4.0`. Doing so will ensure you're using the new connection process. Please note that **nothing will be lost when you do this**. Your product detail pages and plugin settings will remain unchanged.

To reconnect, go to the "Connect" tab of the plugin settings and click the "Disconnect your Shopify store" button. After this completes, click the "Begin the connection process" button and follow the connection wizard.

## What has _not_ changed?

1. Template overrides. Any template that you have customized will continue working as expected.
2. CSS class names.
3. Shortcode names.
4. License keys and your https://wpshop.io subscription have remained the same

## What _has_ changed?

1. Some shortcode attributes have either been renamed or removed.
2. Most of the JavaScript hook names have changed.
3. Most of the PHP hook names have changed.
4. The Orders and Customers functionality has been removed.

## JavaScript hooks

Any custom JavaScript from your theme _must_ be loaded _after_ ShopWP loads it's JavaScript. This differs from previous versions. If not done, you will see an error that looks like this:

```
Uncaught ReferenceError: wp is not defined
```

In order to ensure your custom JavaScript is added correctly, reference the [Using JavaScript Hooks](/guides/javascript-hooks) guide.

## Product detail page links

If you’re linking to product detail pages, after updating to 4.0 you’ll need to go into the plugin settings, re-assign your “default” pages, and save the settings again. After saving, the links should work as expected.

## Full list of breaking changes

Below is a full list of breaking changes in 4.0.

To check whether you need to update your customizations, copy each JavaScript or PHP hook that you're using and do a search on this page. If the hook has changed, use the updated name provided below. If the hook was removed completely, simply implement the workaround provided.

- Removed shortcode attribute: `title_size`. Use `title_type_font_size` instead.
- Removed shortcode attribute: `title_font` Use `title_type_font_family` instead.
- Removed shortcode attribute: `title_font_weight`. Use `title_type_font_weight` instead.
- Removed shortcode attribute: `description_size`. Use `description_type_font_size` instead.
- Removed shortcode attribute: `description_font`. Use `description_type_font_family` instead.
- Removed shortcode attribute: `description_font_weight`. Use `description_type_font_weight`.
- Removed shortcode attribute: `add_to_cart_button_font`. Use `add_to_cart_button_type_font_family` instead.
- Removed shortcode attribute: `add_to_cart_button_font_weight`. Use `add_to_cart_button_type_font_weight` instead.
- Removed shortcode attribute: `add_to_cart_button_font_size`. Use `add_to_cart_button_type_font_size` instead.
- Removed shortcode attribute: `pricing_font`. Use `pricing_type_font_family` instead.
- Removed shortcode attribute: `pricing_font_weight`. Use `pricing_type_font_weight` instead.
- Removed shortcode attribute: `variant_dropdown_font`. Use `variant_dropdown_type_font_family` instead.
- Removed shortcode attribute: `variant_dropdown_font_weight`. Use `variant_dropdown_type_font_weight` instead.
- Removed shortcode attribute: `variant_dropdown_font_size`. Use `variant_dropdown_type_font_size` instead.
- Removed shortcode attribute: `hide_wrapper`. This attribute wasn't used before, so it's probably not applicable.
- Removed shortcode attribute `created_at`. Use `sort_by` instead
- Removed shortcode attribute `updated_at`. Use `sort_by` instead
- Changed shortcode attribute `variant_button_color` to `variant_dropdown_button_color`
- Removed JS hook `product.addToCart.text`. Use shortcode attribute `add_to_cart_button_text` instead
- Removed JS hook `products.showOutOfStockVariants`. Use shortcode attribute `show_out_of_stock_variants` instead
- Removed JS hook `misc.inventory.leftInStock.total`. Use shortcode attribute `left_in_stock_threshhold` instead
- Removed JS hook `wpshopify.carousel.settings`. Use shortcode attribute `carousel_settings` instead
- Removed JS hook `default.cart.title`. Use shortcode attribute `cart_title` instead
- Removed JS hook `default.cart.checkout.text`. Use shortcode attribute `checkout_text` instead
- Removed JS hook `before.checkout.message`. Use shortcode attribute `checkout_failed_message` instead
- Removed JS hook `misc.show.inventoryLevels`. Use shortcode attribute `show_inventory_levels` instead
- Removed JS hook `cart.lineItems.disableLink`. Use shortcode attribute `lineitems_disable_link` instead
- Removed JS hook `cart.lineItems.maxQuantity`. Use shortcode attribute `lineitems_max_quantity` instead
- Removed JS hook `cart.lineItems.minQuantity`. Use shortcode attribute `lineitems_min_quantity` instead
- Removed JS hook `cart.lineItems.quantityStep`. Use shortcode attribute `lineitems_quantity_step` instead
- Removed JS hook `default.cart.notes.label`. Use shortcode attribute `notes_label` instead
- Removed JS hook `cart.note.placeholder`. Use shortcode attribute `notes_placeholder` instead
- Removed JS hook `wpshopify.cache.templates`. Use shortcode attribute `cache_templates` instead
- Removed JS hook `misc.link.target`. Use shortcode attribute `link_target` instead
- Removed JS hook `misc.layout.containerWidth`. Use shortcode attribute `container_width` instead
- Removed JS hook `misc.layout.mobileColumns`. Use shortcode attribute `mobile_columns` instead
- Removed JS hook `product.buyButton.selectFirstVariant`. Use shortcode attribute `select_first_variant` instead
- Removed JS hook `product.buyButton.resetVariantsAfterAdding`. Use shortcode attribute `reset_variants_after_adding` instead
- Removed JS hook `product.buyButton.addedText`. Use shortcode attribute `after_added_text` instead
- Removed JS hook `product.clearSelection.text`. Use shortcode attribute `clear_selections_text` instead
- Removed JS hook `product.modal.settings`. Use shortcode attribute `modal_settings` instead
- Removed JS hook `buyButton.quantityStep`. Use shortcode attribute `quantity_step` instead
- Removed JS hook `product.variant.styles.colorSwatch.names`. Use shortcode attribute `color_swatch_names` instead
- Removed JS hook `default.image.zoom.options`. Use shortcode attribute `image_zoom_options` instead
- Removed JS hook `product.showSaleNotice`. Use shortcode attribute `show_sale_notice` instead
- Removed JS hook `product.showOutOfStockNotice`. Use shortcode attribute `show_out_of_stock_notice` instead
- Removed JS hook `default.image.placeholder`. Use shortcode attribute `image_placeholder` instead
- Removed JS hook `product.title.class`. Use shortcode attribute `title_class_name` instead
- Removed JS hook `search.placeholder.text`. Use shortcode attribute `search_placeholder_text` instead
- Removed JS hook `shopwp.storefront.filterablePriceValues`. Use shortcode attribute `filterable_price_values` instead
- Removed JS hook `cart.empty.text`. Use shortcode attribute `empty_cart_text` instead
- Removed JS hook `cart.subtotal.text`. Use shortcode attribute `subtotal_label_text` instead
- Removed JS hook `notice.unavailable.text`. Use shortcode attribute `notice_unavailable_text` instead
- Removed JS hook `cart.lineItem.remove.text`. Use shortcode attribute `lineitem_remove_text` instead
- Removed JS hook `cart.lineItem.price.sale`. Use shortcode attribute `lineitem_sale_label_text` instead
- Removed JS hook `before.cart.ready`
- Removed JS hook `after.cart.ready`
- Removed JS hook `pagination.loadMore.text`. Use shortcode attribute `pagination_load_more_text` instead
- Removed JS hook `notice.product.addToCart.text`. Use shortcode attribute `notice_add_to_cart_text` instead
- Removed JS hook `product.onSale.text`. Use shortcode attribute `sale_label_text` instead
- Removed JS hook `product.image.soldOut.text`. Use shortcode attribute `sold_out_image_label_text` instead
- Removed JS hook `notice.storefront.noGroup.text`. Use shortcode attribute `no_filter_group_found_text` instead
- Removed JS hook `storefront.selections.filter.label`. Use shortcode attribute `filter_by_label_text` instead
- Removed JS hook `storefront.selections.clear.text`. Use shortcode attribute `clear_filter_selections_text` instead
- Removed JS hook `storefront.selections.available.text`. Use shortcode attribute `selections_available_for_sale_text` instead
- Removed JS hook `storefront.sortBy.label`. Use shortcode attribute `sort_by_label_text` instead
- Removed JS hook `show.cart.title`. Use shortcode attribute `show_cart_title` instead
- Removed JS hook `show.cart.close`. Use shortcode attribute `show_cart_close_icon` instead
- Removed JS hook `cart.title.text`. Use shortcode attribute `cart_title` instead
- Removed JS hook `notice.product.addToCart.text`. Use shortcode attribute `out_of_stock_notice_text` instead
- Removed JS hook `products.quantity.label.text`. Use shortcode attribute `quantity_label_text` instead
- Removed JS hook `default.storefront.vendors.heading`. Use shortcode attribute `vendors_heading` instead
- Removed JS hook `default.storefront.tags.heading`. Use shortcode attribute `tags_heading` instead
- Removed JS hook `default.storefront.types.heading`. Use shortcode attribute `types_heading` instead
- Removed JS hook `default.storefront.collections.heading`. Use shortcode attribute `collections_heading` instead
- Removed JS hook `default.storefront.price.heading`. Use shortcode attribute `price_heading` instead
- Changed JS hook `before.checkout` to `cart.isCheckingOut`
- Changed JS hook `wpshopify.render` to `shopwp.render`
- Changed JS hook `cart.lineItems.link` to `cart.lineItemsLink`
- Changed JS hook `cart.lineItem.variant.title` to `cart.lineItemVariantTitleText`
- Changed JS hook `cart.lineItem.title.text` to `cart.lineItemTitleText`
- Changed JS hook `product.buyButton.preSelectVariant` to `product.preSelectVariantById`
- Changed JS hook `before.addToCart.lineItemOptions` to `product.lineItemOptions`
- Changed JS hook `product.variant.styles.colorSwatch.value` to `product.colorSwatchValue`
- Changed JS hook `product.variant.styles` to `product.variantStyles`
- Changed JS hook `product.title.text` to `product.titleText`
- Changed JS hook `products.variant.title.text` to `product.variantValue`
- Changed JS hook `products.option.title.text` to `product.optionName`
- Changed JS hook `product.missingSelection.text` to `product.missingSelectionText`
- Changed JS hook `product.modal.settings` to `product.modalSettings`
- Changed JS hook `products.buyButton.unavailable.html` to `product.unavailableHtml`
- Changed JS hook `misc.link.href` to `misc.linkHref`
- Changed JS hook `misc.link.target` to `misc.linkTarget`
- Changed JS hook `wpshopify.carousel.settings` to `misc.carouselSettings`
- Changed JS hook `on.cart.toggle` to `on.cartToggle`
- Changed JS hook `on.cart.load` to `on.cartLoad`
- Changed JS hook `on.checkout.update` to `on.checkoutUpdate`
- Changed JS hook `before.checkout.redirect` to `on.checkoutRedirect`
- Changed JS hook `on.checkout.note` to `on.checkoutNoteChange`
- Changed JS hook `after.cart.lineItem.remove` to `on.lineItemRemove`
- Changed JS hook `before.payload.update` to `on.beforePayloadUpdate`
- Changed JS hook `after.payload.update` to `on.afterPayloadUpdate`
- Changed JS hook `after.variants.selection` to `on.variantsSelection`
- Changed JS hook `before.product.addToCart` to `on.beforeAddToCart`
- Changed JS hook `after.product.addToCart` to `on.afterAddToCart`
- Changed JS hook `before.product.variantDropdown.toggle` to `on.beforeVariantDropdownToggle`
- Changed JS hook `after.product.variant.selection` to `on.variantsSelection`
- Changed JS hook `product.addToCart` to `do.addToCart`
- Changed JS hook `cart.toggle` to `do.cartToggle`
- Changed JS hook `checkout.url` to `cart.checkoutUrl`
- Changed JS hook `update.checkout.attributes` to `do.updateCheckoutAttributes`
- Changed JS hook `add.checkout.lineItems` to `do.addLineItems`
- Changed JS hook `remove.checkout.lineItems` to `do.removeLineItems`
- Changed JS hook `set.checkout.attributes` to `do.setCheckoutAttributes`
- Changed JS hook `set.checkout.note` to `do.setCheckoutNote`
- Changed JS hook `set.checkout.discount` to `do.setCheckoutDiscount`
- Changed JS hook `before.cart.checkout.button` to `before.cartCheckoutButton`
- Changed JS hook `after.cart.checkout.button` to `after.cartCheckoutButton`
- Changed JS hook `before.lineItem.title` to `before.lineItemTitle`
- Changed JS hook `after.lineItem.title` to `after.lineItemTitle`
- Changed JS hook `before.cart.title` to `before.cartTitle`
- Changed JS hook `after.cart.title` to `after.cartTitle`
- Changed JS hook `before.product.buyButton` to `before.productBuyButton`
- Changed JS hook `after.product.buyButton` to `after.productBuyButton`
- Changed JS hook `before.product.thumbnail` to `before.productThumbnail`
- Changed JS hook `after.product.thumbnail` to `after.productThumbnail`
- Changed JS hook `before.product.pricing` to `before.productPricing`
- Changed JS hook `after.product.pricing` to `after.productPricing`
- Changed JS hook `before.product.title` to `before.productTitle`
- Changed JS hook `after.product.title` to `after.productTitle`
- Changed PHP hook `wps_breadcrumbs_show` to `shopwp_show_breadcrumbs`
- Changed PHP hook `wps_breadcrumbs` to `shopwp_breadcrumbs`
- Changed PHP hook `wps_collections_all_args` to `shopwp_collections_all_args`
- Changed PHP hook `wps_collections_single_args` to `shopwp_collections_single_args`
- Changed PHP hook `wps_products_all_args` to `shopwp_products_all_args`
- Changed PHP hook `wps_products_show_sidebar` to `shopwp_products_show_sidebar`
- Changed PHP hook `wps_products_single_args` to `shopwp_products_single_args`
- Changed PHP hook `wps_register_collections_args` to `shopwp_register_collections_args`
- Changed PHP hook `wps_register_products_args` to `shopwp_register_products_args`
- Completely removed Orders and Customers functionality from the plugin. If you still need this data, send me a message on the Slack channel and I can provide a workaround.
