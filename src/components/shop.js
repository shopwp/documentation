/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import React from 'react'
import ReactDOM from 'react-dom'
import { Shop, Cart } from '@shopwp/components'
import BrowserOnly from '@docusaurus/BrowserOnly'

window.React = React
window.ReactDOM = ReactDOM
window.wp = {}
window.wp.element = React

const jwt =
	'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvd3BzaG9waWZ5ZGVtby53cGVuZ2luZS5jb20iLCJpYXQiOjE2NTA5MDQxMzIsIm5iZiI6MTY1MDkwNDEzMiwiZXhwIjoxNjUxNTA4OTMyLCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxIn19fQ.i6l6vE-mgzY-6r4-SRCZGpoRcjsGeRVWOs665v97z08'

function ShopWP({ children, showCart = false }) {
	return (
		<BrowserOnly>
			{() => (
				<Shop country='US' language='EN' currency='USD' jwt={jwt}>
					{children}
					{showCart && <Cart />}
				</Shop>
			)}
		</BrowserOnly>
	)
}

export default ShopWP
