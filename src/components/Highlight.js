import React from 'react'

function Highlight({ children, color }) {
	const Shop = shopwpComponents.Shop
	return (
		<Shop>
			<span
				style={{
					backgroundColor: color,
					borderRadius: '2px',
					color: '#fff',
					padding: '0.2rem',
				}}>
				{children}
			</span>
		</Shop>
	)
}

export default Highlight
