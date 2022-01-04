# Common Issues

Below are some of the most common issues people experience and how to fix them.

## Products not showing

When your products are failing to show, it usually means that you need to assign them to the ShopWP sales channel. This sales channel is created automatically when you initially connect your store. It's used to control what products are visible in ShopWP. Below are the steps for assigning your products to the sales channel.

1. Open the product inside Shopify and look for the section called, "Sales channels and apps". Click the manage link.

![ShopWP Pro Common Issues 1](./assets/common-issues/visible-1.png)

2. Assign the product to the ShopWP sales channel and click "Done". Now head back to WordPress to see if the product shows up. Sometimes this can take 1-2 minutes.

![ShopWP Pro Common Issues 1](./assets/common-issues/visible-2.png)

## Error: while calling undefined

When you receive this error, there's a good chance it's because your web server is running out of memory, OR it has hit the max execution time during the syncing process. Both of these things can be increased below:

```
To increase the Max Execution Time: https://wpastra.com/docs/increase-php-time-limit-wordpress-sites
To increase the Memory Limit: https://wpastra.com/docs/increasing-php-memory-limit-website/
```

## Error: Failed to assign Shopify ID 0

When you see this error, it's usually because a previous sync failed which resulted in stale data. To fix, you can follow these two steps:

1. First, go to the Tools tab within the plugin settings and use the `Remove all synced data` button

2. Once that’s done, use the `Sync Product & Collection Detail Pages` button once more.

Note: this will remove any custom fields applied to your product posts, and any product post menu items.