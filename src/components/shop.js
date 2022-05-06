/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import BrowserOnly from '@docusaurus/BrowserOnly'
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment'

if (ExecutionEnvironment.canUseDOM) {
	window.React = React
	window.ReactDOM = ReactDOM
	window.wp = {}
	window.wp.element = React
}

function ShopWP({ children, showCart = false }) {
	return (
		<BrowserOnly>
			{() => {
				const { Shop, Cart } = require('@shopwp/components')

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
