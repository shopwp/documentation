/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import Loader from './loader'
import { jwt } from './data'
import React, { useEffect, useState, useRef } from 'react'
import ReactDOM from 'react-dom'

import BrowserOnly from '@docusaurus/BrowserOnly'
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment'

if (ExecutionEnvironment.canUseDOM) {
	window.React = React
	window.ReactDOM = ReactDOM
	window.wp = {}
	window.wp.element = React
}

const settings = {
	icon: false,
	type: 'inline',
	showCounter: true,
	iconColor: '#ffffff',
	backgroundColor: '#070114',
	counterBackgroundColor: '#6ae06a',
	counterTextColor: '#ffffff',
}

function CartIcon(props) {
	const ref = React.useRef()

	var finalSettings = {
		...settings,
		...props.settings,
	}

	const id = btoa(JSON.stringify(finalSettings))

	return (
		<>
			<div ref={ref}></div>
			<BrowserOnly>
				{() => {
					const { Shop, CartIcon: CI, Cart } = require('@shopwp/components')

					return (
						<>
							<Shop country='US' language='EN' currency='USD' jwt={jwt}>
								<CI settings={finalSettings} element={ref.current} id={id} />
								<Cart id={id} />
							</Shop>
						</>
					)
				}}
			</BrowserOnly>
		</>
	)
}

export { CartIcon }
