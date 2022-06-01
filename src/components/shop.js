/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import BrowserOnly from '@docusaurus/BrowserOnly'
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment'
import { jwt } from './data'

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
					<Shop country='US' language='EN' currency='USD' jwt={jwt}>
						{children}
						{showCart && <Cart fallback='weee cart' />}
					</Shop>
				)
			}}
		</BrowserOnly>
	)
}

export default ShopWP
