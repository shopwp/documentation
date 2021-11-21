# Using JavaScript Hooks

JavaScript hooks were introduce in WordPress version `5.0` with the advent of the highly anticipated Gutenberg release. These hooks are very similar to the standard PHP hooks that WordPress developers have been familiar with for years.

Like PHP hooks, these JavaScript-based hooks allow you to "filter" data and listen to unique "actions". This guide won't be a comprehensive tutorial on how to use WordPress hooks. For that, please take a look at the [official WordPress documentation](https://developer.wordpress.org/block-editor/packages/packages-hooks/) first.

ShopWP provides many JavaScript hooks allowing you to hook into various parts of the plugin. This enables you to do things such as detect when the cart opens, or when the user clicks the checkout button. You can then run your own code from a callback function to make any customizations you want. Let's see how this works.

## Setting things up

ShopWP injects its JavaScript in the footer to improve performance. However, it's possible that your theme's JavaScript may run _before_ ShopWP. If this occurs, none of the custom JavaScript hooks you write will work.

To get around this, be sure to set `shopwp-public` as a dependency in your theme's wp_enqueue_script. Like this:

```php
function theme_assets() {
	wp_enqueue_script( 'your-js', '<your-path>/scripts.js', ['shopwp-public'], '', true);
}

add_action('wp_enqueue_scripts', 'theme_assets');
```

## Adding actions

Let's say we want to detect when a product is added to the cart. We can do this by hooking into the [`on.afterAddToCart`](/javascript-actions#onafteraddtocart) action like this:

```js
wp.hooks.addAction('on.afterAddToCart', 'shopwp', function (lineItem, variant) {
	// Do something after adding to cart ...
	console.log('lineItem :: ', lineItem)
	console.log('variant :: ', variant)
})
```

The `on.afterAddToCart` action is given two parameters `lineItem` and `variant` that you can inspect. Each hook will have useful parameters like this to aid you along the way.

We've listed all of the [available JavaScript hooks](#list-of-available-hooks) in this documentation.

## Adding filters

The JavaScript filters can provide a lot of flexibility when it comes to the product layout. Many of these filters will allow you to add raw HTML before or after various components of the layout.

For example, let's say we want to add the product vendor name before the product title. We can do this by hooking into the [before.productTitle](js/filters/cart?id=defaultcartcheckouttext) filter. We have access to a "props" argument which we can use like this:

```js
wp.hooks.addFilter(
	'before.productTitle',
	'shopwp',
	function (defaultValue, props) {
		return '<p>Vendor: ' + props.product.vendor + '</p>'
	}
)
```

## List of available hooks

### Actions

- [on.cartToggle](/javascript-actions#oncarttoggle)
- [on.cartLoad](/javascript-actions#oncartload)
- [on.checkoutUpdate](/javascript-actions#oncheckout)
- [on.checkout](/javascript-actions#oncheckoutredirect)
- [on.checkoutRedirect](/javascript-actions#oncheckoutredirect)
- [on.checkoutNoteChange](/javascript-actions#oncheckoutnotechange)
- [on.lineItemRemove](/javascript-actions#onlineitemremove)
- [on.beforePayloadUpdate](/javascript-actions#onbeforepayloadupdate)
- [on.afterPayloadUpdate](/javascript-actions#onafterpayloadupdate)
- [on.variantsSelection](/javascript-actions#onvariantsselection)
- [on.beforeAddToCart](/javascript-actions#onbeforeaddtocart)
- [on.afterAddToCart](/javascript-actions#onafteraddtocart)
- [on.beforeVariantDropdownToggle](/javascript-actions#onbeforevariantdropdowntoggle)
- [on.variantsSelection](/javascript-actions#onvariantsselection-1)
- [do.addToCart](/javascript-actions#doaddtocart)
- [do.cartToggle](/javascript-actions#docarttoggle)
- [do.updateCheckoutAttributes](/javascript-actions#doupdatecheckoutattributes)
- [do.addLineItems](/javascript-actions#doaddlineitems)
- [do.removeLineItems](/javascript-actions#doremovelineitems)
- [do.setCheckoutAttributes](/javascript-actions#dosetcheckoutattributes)
- [do.setCheckoutNote](/javascript-actions#dosetcheckoutnote)
- [do.setCheckoutDiscount](/javascript-actions#dosetcheckoutdiscount)

### Filters

- [product.titleText](/javascript-filters#producttitletext)
- [product.optionName](/javascript-filters#productoptionname)
- [product.subscriptionsInfoHTML](/javascript-filters#productsubscriptionsinfohtml)
- [product.missingSelectionText](/javascript-filters#productmissingselectiontext)
- [product.variantValue](/javascript-filters#productvariantvalue)
- [product.preSelectVariantById](/javascript-filters#productpreselectvariantbyid)
- [product.lineItemOptions](/javascript-filters#productlineitemoptions)
- [product.colorSwatchValue](/javascript-filters#productcolorswatchvalue)
- [product.variantStyles](/javascript-filters#productvariantstyles)
- [product.modalSettings](/javascript-filters#productmodalsettings)
- [cart.checkoutUrl](/javascript-filters#cartcheckouturl)
- [cart.isCheckingOut](/javascript-filters#cartischeckingout)
- [cart.lineItemsLink](/javascript-filters#cartlineitemslink)
- [cart.lineItemSubscriptionDescription](/javascript-filters#cartlineitemsubscriptiondescription)
- [cart.lineItemVariantTitleText](/javascript-filters#cartlineitemvarianttitletext)
- [cart.lineItemTitleText](/javascript-filters#cartlineitemtitletext)
- [misc.linkHref](/javascript-filters#misclinkhref)
- [misc.linkTarget](/javascript-filters#misclinktarget)
- [misc.carouselSettings](/javascript-filters#misccarouselsettings)
- [before.cartCheckoutButton](/javascript-filters#beforecartcheckoutbutton)
- [after.cartCheckoutButton](/javascript-filters#aftercartcheckoutbutton)
- [before.lineItemTitle](/javascript-filters#beforelineitemtitle)
- [after.lineItemTitle](/javascript-filters#afterlineitemtitle)
- [before.cartTitle](/javascript-filters#beforecarttitle)
- [after.cartTitle](/javascript-filters#aftercarttitle)
- [before.productBuyButton](/javascript-filters#beforeproductbuybutton)
- [after.productBuyButton](/javascript-filters#afterproductbuybutton)
- [before.productThumbnail](/javascript-filters#beforeproductthumbnail)
- [after.productThumbnail](/javascript-filters#afterproductthumbnail)
- [before.productPricing](/javascript-filters#beforeproductpricing)
- [after.productPricing](/javascript-filters#afterproductpricing)
- [before.productTitle](/javascript-filters#beforeproducttitle)
- [after.productTitle](/javascript-filters#afterproducttitle)
