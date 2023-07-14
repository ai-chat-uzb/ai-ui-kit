const path = require('path');
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5'
  },
  webpackFinal: config => {
    config.resolve = {
      ...(config.resolve || {}),
      extensions: ['.ts', '.tsx', '.js'],
      alias: {
        components: path.resolve(__dirname, '../src', 'components')
      }
    };

    return {
      ...config,
      plugins: config.plugins.filter(plugin => {
        return plugin.constructor.name !== 'ESLintWebpackPlugin';
      })
    };
  }
};
