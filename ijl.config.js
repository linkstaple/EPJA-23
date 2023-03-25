const pkg = require('./package.json')
const tsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  apiPath: 'stubs/api',
  webpackConfig: {
    output: {
      publicPath: `/static/${pkg.name}/${process.env.VERSION || pkg.version}/`,
    },
    resolve: {
      // @ts-expect-error
      plugins: [new tsconfigPathsPlugin({ extensions: ['.ts', '.tsx', 'js'] })],
      extensions: ['.js', '.ts', '.tsx'],
    },
  },
  navigations: {
    'epja-123.main': '/epja-123',
  },
  features: {
    'epja-23': {
      // add your features here in the format [featureName]: { value: string }
    },
  },
  config: {
    key: 'value',
  },
}
