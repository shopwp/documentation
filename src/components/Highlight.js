import React from 'react'
import ReactDOM from 'react-dom'
import { Shop, Products, Cart } from '@shopwp/components'
import { shopwpGlobal, multipleProducts } from './data'

window.React = React
window.ReactDOM = ReactDOM
window.wp = {}
window.wp.element = React
// window.shopwp = shopwpGlobal
const jwt =
	'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvd3BzaG9waWZ5ZGVtby53cGVuZ2luZS5jb20iLCJpYXQiOjE2NTA5MDQxMzIsIm5iZiI6MTY1MDkwNDEzMiwiZXhwIjoxNjUxNTA4OTMyLCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxIn19fQ.i6l6vE-mgzY-6r4-SRCZGpoRcjsGeRVWOs665v97z08'

const settings = {
	collection: false,
	variantStyle: 'buttons',
	linkTo: 'shopify',
	subscriptions: false,
	pageSize: 2,
	excludes: ['description'],
	linkTarget: '_blank',
	pagination: false,
	query: 'Super awesome tie',
}

const payload = multipleProducts

function Highlight() {
	const productsElement = React.useRef()

	return (
		<Shop country='US' language='EN' currency='USD' jwt={jwt}>
			<div ref={productsElement}>
				<Products
					settings={settings}
					id='123'
					loader={<p>Loading ...</p>}
					element={productsElement}
				/>
			</div>
			<Cart />
			<div id='shopwp-root' />
		</Shop>
	)
}

export default Highlight
