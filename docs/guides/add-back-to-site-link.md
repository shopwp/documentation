# Add back to site link

Shopify does not provide a "back to site" link out of the box so you'll need to add it yourself.

Thankfully, it's fairly easy to do with ShopWP!

:::info
This will only show on the checkout confirmation (order status) page.
:::

## Find the checkout settings

Within the Shopify dashboard, open your Settings page and click the "Checkout and accounts" section.

![ShopWP Sync the Detail Pages](./assets/add-back-to-site-link/0.jpg)

![ShopWP Sync the Detail Pages](./assets/add-back-to-site-link/1.jpg)

From there, find the "Order status page" area.

![Shopify order status page section](./assets/add-back-to-site-link/3.jpg)

## Add the custom JavaScript

Within Order status section there will be an _**Additional scripts**_ input box. Any customizations you add here will show on the order status page. You can add any valid HTML (including script tags), liquid code, etc. Shopify does a great job of explaining how this works in detail [here](https://help.shopify.com/en/manual/orders/status-tracking/customize-order-status#add-additional-scripts).

For our purposes, we want to add a piece of JavaScript that will add a little HTML to the page for us. This HTML will contain a link pointing back to our WordPress site.

![Additional scripts settings input](./assets/add-back-to-site-link/4.jpg)

:::info
If you have existing code inside Additional scripts, place this at the very bottom below everything else.
:::

Place the below code inside Additional scripts (including the script tags) and click save.

Make sure to change `https://google.com` in the below snippet to your WordPress domain.

```html
<script>
	var element = document.querySelector('.main__header .logo')

	if (element) {
		element.insertAdjacentHTML(
			'beforebegin',
			'<a href="https://google.com" style="display:block;margin-bottom:0px;margin-bottom:15px;">< Back to site</a>'
		)
	}
</script>
```

## Confirm that it shows

The final step is to confirm that the back to site link is showing up. Navigate to your checkout confirmation page and look toward the top left. You should see it there.

If you'd like to have the link show somewhere else on the page, you'll need to modify the `document.querySelector` in the above code. You can always email us at hello@wpshop.io for additional help.

![Order status page with back to site link](https://wpshop.io/wp-content/uploads/2021/02/back-to-cart-5.jpg)
