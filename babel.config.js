module.exports = api => {
	api.cache(false)

	const presets = ['@babel/preset-env', '@babel/preset-react']

	const plugins = [
		'@babel/plugin-transform-regenerator',
		'@babel/plugin-transform-runtime',
		'@babel/plugin-syntax-dynamic-import',
		'@babel/plugin-syntax-import-meta',
		'@babel/plugin-proposal-class-properties',
		'@babel/plugin-proposal-json-strings',
		'@babel/plugin-transform-arrow-functions',
		'lodash',
		[
			'transform-imports',
			{
				lodash: {
					transform: 'lodash/${member}',
					preventFullImport: true,
				},
			},
		],
		[
			'@emotion',
			{
				autoLabel: 'always',
				cssPropOptimization: true,
			},
		],
	]

	return {
		presets: presets,
		plugins: plugins,
		retainLines: true,
	}
}
