import React from 'react'
import ReactDOM from 'react-dom'
import { Shop, Products } from '@shopwp/components'
import { shopwpGlobal, multipleProducts } from './data'

window.React = React
window.ReactDOM = ReactDOM
window.wp = {}
window.wp.element = React
window.shopwp = shopwpGlobal

const settings = {
	collection: false,
	variantStyle: 'buttons',
	linkTo: 'shopify',
	subscriptions: false,
	pageSize: 2,
	excludes: ['description'],
	linkTarget: '_blank',
	pagination: true,
}

const payload = multipleProducts

function Highlight() {
	return (
		<Shop country='US' language='EN' currency='USD'>
			<Products
				payload={payload}
				initialFetch={false}
				settings={settings}
				id='123'
			/>
			<div id='shopwp-root' />
		</Shop>
	)
}

export default Highlight
