const isProduction = process.env.NODE_ENV === 'production'

const plugins = [
  [
    'import',
    { libraryName: 'ant-design-vue', libraryDirectory: 'es', style: true }
  ]
]

if (isProduction) {
  plugins.push(['transform-remove-console', { exclude: ['error', 'warn'] }])
}

module.exports = {
  presets: [
    // '@vue/cli-plugin-babel/preset',
    '@vue/app',
    [
      '@babel/preset-env',
      {
        corejs: { version: 3, proposals: true },
        useBuiltIns: 'entry'
      }
    ]
  ],
  plugins
}
