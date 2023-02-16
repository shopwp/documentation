# Using JavaScript Hooks

ShopWP provides many different types of JavaScript hooks. These hooks allow you to customize the plugin.

For example, you can detect when the cart opens or when a user clicks the checkout button. When these "actions" run, you can then execute your own code—making the desired customization.

Let's see how this works.

## What are they?

JavaScript (JS) hooks were introduced to WordPress in version `5.0` with the advent of the highly anticipated Gutenberg release. These hooks are very similar to the PHP hooks that WordPress developers have been familiar with for years.

Like PHP hooks, JS hooks allow you to "filter" data and listen to unique "actions". This guide won't be a comprehensive tutorial on how to use WordPress hooks. For that, please take a look at the [official WordPress documentation](https://developer.wordpress.org/block-editor/packages/packages-hooks/) first.

## How to use them

ShopWP injects its JavaScript in the footer to improve performance. However, it's possible that your theme's JavaScript may run _before_ ShopWP. If this occurs, none of the custom JavaScript hooks you write will work.

To get around this, be sure to set `shopwp-public` (or `shopwp-admin` if writing code for the backend) as a dependency in your theme's `wp_enqueue_script`.

Like this:

```php
function theme_assets() {
	wp_enqueue_script( 'your-js', get_stylesheet_directory_uri() . '/scripts.js', ['shopwp-public'], '', true);
}

add_action('wp_enqueue_scripts', 'theme_assets');
```

## Adding actions

Let's say we want to detect when a product is added to the cart. We can do this by hooking into the [`on.afterAddToCart`](/javascript-actions#onafteraddtocart) action hook, like this:

```js
// Runs after a user adds something to the cart
wp.hooks.addAction('on.afterAddToCart', 'shopwp', function (lineItem, variant) {
	console.log('lineItem :: ', lineItem)
	console.log('variant :: ', variant)
})
```

The `on.afterAddToCart` action is given two parameters `lineItem` and `variant`. Each hook will have useful parameters like this to aid you along your customization journey.

We've listed all of the [available JavaScript hooks](#list-of-available-hooks) in this documentation.

## Adding filters

The filters allow you to do two things:

1. Customize simple text or boolean values
2. Add custom HTML to the ShopWP layout

The second variation can provide a lot of flexibility in customizing the product layout. Many of these filters will allow you to add raw HTML before or after various components of the layout.

For example, let's say we want to add the product vendor name before the product title. We can do this by hooking into the `before.productTitle` filter. We have access to a "props" argument which we can use like this:

```js
wp.hooks.addFilter(
	'before.productTitle',
	'shopwp',
	function (defaultValue, productState) {
		return '<p>Vendor: ' + productState.payload.vendor + '</p>'
	}
)
```

## List of available hooks

### Actions

- [on.itemsLoad](/javascript-actions#onitemsload)
- [on.cartToggle](/javascript-actions#oncarttoggle)
- [on.cartLoad](/javascript-actions#oncartload)
- [on.cartUpdate](/javascript-actions#oncartupdate)
- [on.cartNoteChange](/javascript-actions#oncartnotechange)
- [on.checkout](/javascript-actions#oncheckoutredirect)
- [on.lineItemRemove](/javascript-actions#onlineitemremove)
- [on.beforePayloadUpdate](/javascript-actions#onbeforepayloadupdate)
- [on.afterPayloadUpdate](/javascript-actions#onafterpayloadupdate)
- [on.variantsSelection](/javascript-actions#onvariantsselection)
- [on.allVariantsSelected](/javascript-actions#onallvariantsselected)
- [on.beforeAddToCart](/javascript-actions#onbeforeaddtocart)
- [on.afterAddToCart](/javascript-actions#onafteraddtocart)
- [on.variantDropdownToggle](/javascript-actions#onvariantdropdowntoggle)
- [on.syncStatus](/javascript-actions#onsyncstatus)
- [do.addToCart](/javascript-actions#doaddtocart)
- [do.cartToggle](/javascript-actions#docarttoggle)
- [do.updateCartAttributes](/javascript-actions#doupdatecartattributes)
- [do.removeLineItems](/javascript-actions#doremovelineitems)
- [do.setCartNote](/javascript-actions#dosetcartnote)
- [do.setCartDiscount](/javascript-actions#dosetcartdiscount)
- [do.shopRender](/javascript-actions#doshoprender)
- [do.toggleCartTerms](/javascript-actions#dotogglecartterms)
- [do.directCheckout](/javascript-actions#dodirectcheckout)

### Filters

- [product.titleText](/javascript-filters/#producttitletext)
- [product.optionName](/javascript-filters/#productoptionname)
- [product.labelHtml](/javascript-filters/#productlabelhtml)
- [product.variantButtonHtml](/javascript-filters/#productvariantbuttonhtml)
- [product.subscriptionsInfoHTML](/javascript-filters/#productsubscriptionsinfohtml)
- [product.missingSelectionText](/javascript-filters/#productmissingselectiontext)
- [product.variantValue](/javascript-filters/#productvariantvalue)
- [product.preSelectVariantById](/javascript-filters/#productpreselectvariantbyid)
- [product.lineItemOptions](/javascript-filters/#productlineitemoptions)
- [product.colorSwatchValue](/javascript-filters/#productcolorswatchvalue)
- [product.variantStyles](/javascript-filters/#productvariantstyles)
- [product.modalSettings](/javascript-filters/#productmodalsettings)
- [product.addToCartText](/javascript-filters/#productaddtocarttext)
- [product.thumbnails](/javascript-filters/#productthumbnails)
- [product.imageSrc](/javascript-filters/#productimagesrc)
- [product.modalLayout](/javascript-filters/#productmodallayout)
- [product.subscriptionLabel](/javascript-filters/#productsubscriptionlabel)
- [product.unavailableHtml](/javascript-filters/#productunavailablehtml)
- [product.titleHtml](/javascript-filters/#producttitlehtml)
- [cart.checkoutUrl](/javascript-filters/#cartcheckouturl)
- [cart.isCheckingOut](/javascript-filters/#cartischeckingout)
- [cart.lineItemsLink](/javascript-filters/#cartlineitemslink)
- [cart.lineItemSubscriptionDescription](/javascript-filters/#cartlineitemsubscriptiondescription)
- [cart.lineItemVariantTitleText](/javascript-filters/#cartlineitemvarianttitletext)
- [cart.lineItemTitleText](/javascript-filters/#cartlineitemtitletext)
- [cart.lineItemThumbnailUrl](/javascript-filters/#cartlineitemthumbnailurl)
- [cart.directCheckoutSettings](/javascript-filters/#cartdirectcheckoutsettings)
- [cart.createSettings](/javascript-filters/#cartcreatesettings)
- [cart.lineItemAttributes](/javascript-filters/#cartlineitemattributes)
- [misc.linkHref](/javascript-filters/#misclinkhref)
- [misc.linkTarget](/javascript-filters/#misclinktarget)
- [misc.carouselSettings](/javascript-filters/#misccarouselsettings)
- [storefront.availableCollections](/javascript-filters/#storefrontavailablecollections)
- [storefront.availableTags](/javascript-filters/#storefrontavailabletags)
- [storefront.availableVendors](/javascript-filters/#storefrontavailablevendors)
- [storefront.availableTypes](/javascript-filters/#storefrontavailabletypes)
- [storefront.availablePricing](/javascript-filters/#storefrontavailablepricing)
- [storefront.collectionsToFetch](/javascript-filters/#storefrontcollectionstofetch)
- [before.cartCheckoutButton](/javascript-filters/#beforecartcheckoutbutton)
- [after.cartCheckoutButton](/javascript-filters/#aftercartcheckoutbutton)
- [before.lineItemTitle](/javascript-filters/#beforelineitemtitle)
- [after.lineItemTitle](/javascript-filters/#afterlineitemtitle)
- [before.cartTitle](/javascript-filters/#beforecarttitle)
- [after.cartTitle](/javascript-filters/#aftercarttitle)
- [before.cartLineItems](/javascript-filters/#beforecartlineitems)
- [after.cartLineItems](/javascript-filters/#aftercartlineitems)
- [before.productBuyButton](/javascript-filters/#beforeproductbuybutton)
- [after.productBuyButton](/javascript-filters/#afterproductbuybutton)
- [before.productThumbnail](/javascript-filters/#beforeproductthumbnail)
- [after.productThumbnail](/javascript-filters/#afterproductthumbnail)
- [before.productPricing](/javascript-filters/#beforeproductpricing)
- [after.productPricing](/javascript-filters/#afterproductpricing)
- [before.productTitle](/javascript-filters/#beforeproducttitle)
- [after.productTitle](/javascript-filters/#afterproducttitle)
- [before.productImages](/javascript-filters/#beforeproductimages)
- [after.productImages](/javascript-filters/#afterproductimages)
- [block.productsAttributes](/javascript-filters/#blockproductsattributes)
- [block.productsSupports](/javascript-filters/#blockproductssupports)
