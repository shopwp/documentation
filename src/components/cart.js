/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import Loader from './loader'

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
	console.log('finalSettingsfinalSettings', finalSettings)
	return (
		<>
			<div ref={ref}></div>
			<BrowserOnly>
				{() => {
					const { Shop, CartIcon: CI, Cart } = require('@shopwp/components')

					return (
						<>
							<Shop
								country='US'
								language='EN'
								currency='USD'
								jwt='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvd3BzaG9waWZ5ZGVtby53cGVuZ2luZS5jb20iLCJpYXQiOjE2NTE3NzYxNTMsIm5iZiI6MTY1MTc3NjE1MywiZXhwIjoxNjUyMzgwOTUzLCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxIn19fQ._lNzUp9fzOjNZFxc9O1VSCGCTEEwA1Lk-3lwep_TES4'>
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
