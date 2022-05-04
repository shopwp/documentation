/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { Products } from '@shopwp/components'
import Loader from './loader'

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

function mergeSettings(customSettings) {
	return {
		...settings,
		...customSettings,
	}
}

function ProductsSingle() {
	// console.log('customSettings', customSettings)

	// const settings = mergeSettings(customSettings)

	const id = btoa(JSON.stringify(settings))

	return <Products settings={settings} id={id} loader={<Loader />} />
}

function ProductsSubscriptions() {
	// console.log('customSettings', customSettings)

	// const settings = mergeSettings(customSettings)

	var newSettings = settings
	newSettings.subscriptions = true
	newSettings.query = 'title:"Super awesome sunglasses"'

	const id = btoa(JSON.stringify(newSettings))

	return <Products settings={newSettings} id={id} loader={<Loader />} />
}

export { ProductsSingle, ProductsSubscriptions }
