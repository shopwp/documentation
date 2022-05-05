/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import Loader from './loader'
import BrowserOnly from '@docusaurus/BrowserOnly'

const settings = {
	collection: false,
	variantStyle: 'buttons',
	linkTo: 'none',
	subscriptions: false,
	excludes: ['description'],
	linkTarget: '_blank',
	pagination: false,
	query: 'title:super*',
	availableForSale: true,
	limit: 1,
}

function ProductsSingle() {
	const id = btoa(JSON.stringify(settings))

	return (
		<BrowserOnly>
			{() => {
				const { Products } = require('@shopwp/components')
				console.log('ProductsSingle', Products)
				return <Products settings={settings} id={id} loader={<Loader />} />
			}}
		</BrowserOnly>
	)
}

function ProductsSubscriptions() {
	var newSettings = settings
	newSettings.subscriptions = true
	newSettings.query = 'title:"Super awesome sunglasses"'

	const id = btoa(JSON.stringify(newSettings))

	return (
		<BrowserOnly>
			{() => {
				const { Products } = require('@shopwp/components')
				console.log('ProductsSubscriptions', Products)
				return <Products settings={newSettings} id={id} loader={<Loader />} />
			}}
		</BrowserOnly>
	)
}

export { ProductsSingle, ProductsSubscriptions }
