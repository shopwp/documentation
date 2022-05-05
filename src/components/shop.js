/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import BrowserOnly from '@docusaurus/BrowserOnly'
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment'

function ShopWP({ children, showCart = false }) {
	useEffect(() => {
		console.log('Made it', ExecutionEnvironment)

		if (ExecutionEnvironment.canUseDOM) {
			console.log('Can access')
			window.React = React
			window.ReactDOM = ReactDOM
			window.wp = {}
			window.wp.element = React
		} else {
			console.log('Can NOT access')
		}
	}, [])

	return (
		<BrowserOnly>
			{() => {
				const { Shop, Cart } = require('@shopwp/components')
				console.log('Shop', Shop)
				console.log('Cart', Cart)
				return (
					<Shop
						country='US'
						language='EN'
						currency='USD'
						jwt='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvd3BzaG9waWZ5ZGVtby53cGVuZ2luZS5jb20iLCJpYXQiOjE2NTA5MDQxMzIsIm5iZiI6MTY1MDkwNDEzMiwiZXhwIjoxNjUxNTA4OTMyLCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxIn19fQ.i6l6vE-mgzY-6r4-SRCZGpoRcjsGeRVWOs665v97z08'>
						{children}
						{showCart && <Cart fallback='weee cart' />}
					</Shop>
				)
			}}
		</BrowserOnly>
	)
}

export default ShopWP
