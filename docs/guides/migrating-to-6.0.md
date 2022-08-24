---
sidebar_position: 2
---

# Migrating to 6.0

ShopWP 6.0 is a major update to the plugin which _may_ require some migration steps on your end depending on whether you're using deprecated features or not. Read below to find out.

## What has changed?

- The syncing process has been re-built from the ground up
- The default product and collection templates have been slightly modified
- Webhooks have been removed and replaced with auto syncing

### Syncing

Thankfully, there isn't any action you need to take for the syncing. However it's important that you visit the plugin settings and open the `Syncing` section. Look through the settings and become familiar with how they work.

### Template changes

As mentioned above, there have been minor changes to the default products and collections templates. If you're not customizing these templates in your theme you won't need to take any action.

However if you are customizing these templates, read below.

The easiest way to ensure that your templates contain the latest changes is to copy the contents into your customized template. From there, add back in the changes you've made.

**To make this easier, try using an online diff tool like this one: [https://www.diffchecker.com/](https://www.diffchecker.com/)**

### Disconnecting old webhooks

If you're currently using webhooks in ShopWP `5.x` or earlier, you'll want to manually disconnect them before updating to version `6.0`. The reason is because ShopWP `6.0` does not provide a tool to disconnect old webhooks.

To disconnect any currently active webhooks, open the ShopWP settings page and click the `Sync` sub nav. From there, find the tool called `Remove automatic post syncing`.

Once the removal process finishes, you'll be ready to upgrade to `6.0`.
