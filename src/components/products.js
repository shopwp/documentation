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
	query: 'title:super*',
	sortBy: 'title',
	reverse: false,
	pageSize: 8,
	product: false,
	productId: false,
	postId: false,
	availableForSale: 'any',
	productType: false,
	tag: false,
	collection: false,
	title: false,
	titleColor: '#111',
	titleTypeFontFamily: false,
	titleTypeFontSize: false,
	titleTypeFontWeight: false,
	titleTypeTextTransform: false,
	titleTypeFontStyle: false,
	titleTypeTextDecoration: false,
	titleTypeLineHeight: false,
	titleTypeLetterSpacing: false,
	descriptionLength: false,
	descriptionColor: '#111',
	descriptionTypeFontFamily: false,
	descriptionTypeFontSize: false,
	descriptionTypeFontWeight: false,
	descriptionTypeTextTransform: false,
	descriptionTypeFontStyle: false,
	descriptionTypeTextDecoration: false,
	descriptionTypeLineHeight: false,
	descriptionTypeLetterSpacing: false,
	variantsPrice: false,
	vendor: false,
	postMeta: false,
	connective: 'OR',
	limit: 1,
	random: false,
	excludes: ['description'],
	itemsPerRow: 3,
	gridColumnGap: '20px',
	noResultsText: 'No products left to show',
	alignHeight: false,
	pagination: true,
	dropzonePageSize: false,
	dropzoneLoadMore: false,
	dropzoneProductBuyButton: false,
	dropzoneProductTitle: false,
	dropzoneProductDescription: false,
	dropzoneProductPricing: false,
	dropzoneProductGallery: false,
	skipInitialRender: false,
	queryType: 'products',
	infiniteScroll: false,
	infiniteScrollOffset: -200,
	isSingleComponent: false,
	isSingular: false,
	linkTo: 'none',
	linkTarget: '_blank',
	linkWithBuyButton: false,
	directCheckout: false,
	htmlTemplate: false,
	type: 'products',
	fullWidth: false,
	keepCommas: false,
	showPriceUnderVariantButton: false,
	addToCartButtonText: 'Add to cart',
	addToCartButtonTextColor: false,
	addToCartButtonColor: '#415aff',
	addToCartButtonTypeFontFamily: false,
	addToCartButtonTypeFontSize: false,
	addToCartButtonTypeFontWeight: false,
	addToCartButtonTypeTextTransform: false,
	addToCartButtonTypeFontStyle: false,
	addToCartButtonTypeTextDecoration: false,
	addToCartButtonTypeLineHeight: false,
	addToCartButtonTypeLetterSpacing: false,
	variantDropdownButtonColor: '#000000',
	variantDropdownTextColor: '#FFFFFF',
	variantDropdownTypeFontFamily: false,
	variantDropdownTypeFontSize: false,
	variantDropdownTypeFontWeight: false,
	variantDropdownTypeTextTransform: false,
	variantDropdownTypeFontStyle: false,
	variantDropdownTypeTextDecoration: false,
	variantDropdownTypeLineHeight: false,
	variantDropdownTypeLetterSpacing: false,
	variantStyle: 'buttons',
	hideQuantity: false,
	minQuantity: false,
	maxQuantity: false,
	showQuantityLabel: true,
	quantityLabelText: 'Quantity',
	pricingTypeFontFamily: false,
	pricingTypeFontSize: false,
	pricingTypeFontWeight: false,
	pricingTypeTextTransform: false,
	pricingTypeFontStyle: false,
	pricingTypeTextDecoration: false,
	pricingTypeLineHeight: false,
	pricingTypeLetterSpacing: false,
	pricingColor: false,
	showPriceRange: true,
	showCompareAt: false,
	showFeaturedOnly: false,
	showZoom: false,
	imagesSizingToggle: true,
	imagesSizingWidth: 400,
	imagesSizingHeight: 400,
	imagesSizingCrop: 'center',
	imagesSizingScale: 0,
	imagesAlign: 'left',
	imagesShowNextOnHover: false,
	thumbnailImagesSizingToggle: true,
	thumbnailImagesSizingWidth: 70,
	thumbnailImagesSizingHeight: 70,
	thumbnailImagesSizingCrop: 'center',
	thumbnailImagesSizingScale: 0,
	showImagesCarousel: false,
	carousel: false,
	carouselDots: true,
	carouselInfinite: true,
	carouselSpeed: 500,
	carouselSlidesToShow: 3,
	carouselSlidesToScroll: 3,
	carouselPrevArrow:
		"data:image/svg+xml,%3Csvg aria-hidden='true' focusable='false' data-prefix='far' data-icon='angle-left' class='svg-inline--fa fa-angle-left fa-w-6' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 192 512'%3E%3Cpath fill='currentColor' d='M4.2 247.5L151 99.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17L69.3 256l118.5 119.7c4.7 4.7 4.7 12.3 0 17L168 412.5c-4.7 4.7-12.3 4.7-17 0L4.2 264.5c-4.7-4.7-4.7-12.3 0-17z'%3E%3C/path%3E%3C/svg%3E",
	carouselNextArrow:
		"data:image/svg+xml,%3Csvg aria-hidden='true' focusable='false' data-prefix='far' data-icon='angle-right' class='svg-inline--fa fa-angle-right fa-w-6' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 192 512'%3E%3Cpath fill='currentColor' d='M187.8 264.5L41 412.5c-4.7 4.7-12.3 4.7-17 0L4.2 392.7c-4.7-4.7-4.7-12.3 0-17L122.7 256 4.2 136.3c-4.7-4.7-4.7-12.3 0-17L24 99.5c4.7-4.7 12.3-4.7 17 0l146.8 148c4.7 4.7 4.7 12.3 0 17z'%3E%3C/path%3E%3C/svg%3E",
	subscriptions: false,
	subscriptionsSelectOnLoad: false,
	subscriptionsDetailsText:
		'Products are automatically delivered on your schedule. No obligation, modify or cancel your subscription anytime.',
	subscriptionsDetailsHeading: 'How subscriptions work:',
	subscriptionsDetailsLabel: 'Subscription details',
	showOutOfStockVariants: false,
	leftInStockThreshold: 10,
	showInventoryLevels: true,
	cacheTemplates: false,
	containerWidth: '1300px',
	mobileColumns: 1,
	selectFirstVariant: false,
	resetVariantsAfterAdding: true,
	openCartAfterAdding: true,
	afterAddedText: 'Added',
	clearSelectionsText: 'Clear selections',
	quantityStep: false,
	colorSwatchNames: ['color'],
	imageZoomOptions: {
		inlinePane: false,
		inlineOffsetX: 0,
		inlineOffsetY: 0,
		touchDelay: 100,
	},
	showSaleNotice: true,
	showOutOfStockNotice: true,
	imagePlaceholder:
		'https://shopwp.loc/wp-content/plugins/shopwp-pro/public/imgs/placeholder.png',
	titleClassName: 'wps-products-title',
	noticeUnavailableText: 'Out of stock',
	paginationLoadMoreText: 'Load more',
	outOfStockNoticeText:
		'Out of stock. Please try selecting a different variant combination.',
	variantNotAvailableText:
		'Sorry, this variant is not available. Please try a different combination.',
	saleLabelText: 'Sale!',
	soldOutImageLabelText: 'Sold out',
}

function Products(props) {
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
					const { Shop, Cart, Products: Prods } = require('@shopwp/components')

					return (
						<>
							<Shop
								country='US'
								language='EN'
								currency='USD'
								jwt='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvd3BzaG9waWZ5ZGVtby53cGVuZ2luZS5jb20iLCJpYXQiOjE2NTMzMTI3ODksIm5iZiI6MTY1MzMxMjc4OSwiZXhwIjoxNjUzOTE3NTg5LCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxIn19fQ.eDd0_PL2WOFiPX9QxW7Vl8_Hb9Hjt88Bsh909dRRdEs'>
								<Prods settings={finalSettings} id={id} />
								{props.showCart && <Cart />}
							</Shop>
						</>
					)
				}}
			</BrowserOnly>
		</>
	)
}

export { Products }
