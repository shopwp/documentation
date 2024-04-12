---
sidebar_position: 2
---

# Connecting

Connecting your [Shopify](https://shopify.pxf.io/5bPL0L) store to WordPress is the first step in using ShopWP.

It takes just a few moments, so let's begin!

<iframe width="560" height="315" src="https://www.youtube.com/embed/YypIUgOvoqA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## How to connect

### 1. Start the connection

To begin, navigate to the "Connect" tab within the plugin Settings. You should see a screen that says "Disconnected". Click the button that says `Connect your Shopify store`. This will open a wizard to guide you through the process.

![ShopWP Disconnect page](./assets/connecting-1.jpg)

### 2. Enter your Shopify domain

Once you're on the wizard page, enter your `.myshopify.com` domain and click the `Connect your Shopify store` button.

:::info

The `.myshopify.com` domain is what you use to login to Shopify. It can be found inside the Shopify admin. It will be the domain that's displayed in the address bar.

By default, your domain uses the format: `abc.myshopify.com`.

:::

![ShopWP Disconnect page](./assets/connecting-2.jpg)

### 3. Authorize the connection

If this is your first time connecting, you will be asked to authorize the connection within Shopify. Click the `Install app` button toward the bottom.

![ShopWP Disconnect page](./assets/connecting-3.png)

If you see a Shopify notice that says something like, `ShopWP is currently unsupported ...` you can ignore this and install anyway.

The notice will show to some users incorrectly and we're currently working with Shopify to have this removed.

![ShopWP not supported notice](./assets/connecting-3-5.jpg)

### 4. Finish the wizard

After authorizing the connection you'll be redirected back to WordPress in order to finish the wizard process. You can either skip the wizard at this point or continue to set some basic plugin settings.

![ShopWP Disconnect page](./assets/connecting-4.jpg)

Once you finish the wizard you're done! You're now connected to Shopify and can begin [displaying](/getting-started/displaying) your products.

![ShopWP Disconnect page](./assets/connecting-5.jpg)

## Disconnecting

Disconnecting your Shopify store is very easy. Simply open the `Connect` tab within the plugin settings and click the `Disconnect your Shopify store` button. After the process finishes, your store will no longer be connected to WordPress.

You won't be able to display products or use the cart when disconnected.

![ShopWP Disconnect page](./assets/disconnecting-1.jpg)

## The Shopify App

During the connection process, ShopWP installs a companion Shopify app to your store. The purpose of this app is to manage API keys and make secure connections between the two sites. The Shopify app is unlisted, and can only be installed from inside the ShopWP WordPress plugin. The app itself provides zero functionality or features. You can think of it simply as an extension of the WordPress plugin.

While you're using ShopWP, please do not delete the companion Shopify app. If you do, you may notice that the plugin stops working properly. You must have this Shopify app installed if you wish to use ShopWP.

If the app is deleted for whatever reason, you can always "disconnect" your store from inside the WordPress plugin and reconnect again.

![ShopWP Shopify app](./assets/app-1.png)

![ShopWP Shopify app index page](./assets/app-2.png)
