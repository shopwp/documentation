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
						jwt='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvd3BzaG9waWZ5ZGVtby53cGVuZ2luZS5jb20iLCJpYXQiOjE2NTMzMTI3ODksIm5iZiI6MTY1MzMxMjc4OSwiZXhwIjoxNjUzOTE3NTg5LCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxIn19fQ.eDd0_PL2WOFiPX9QxW7Vl8_Hb9Hjt88Bsh909dRRdEs'>
						{children}
						{showCart && <Cart fallback='weee cart' />}
					</Shop>
				)
			}}
		</BrowserOnly>
	)
}

export default ShopWP
