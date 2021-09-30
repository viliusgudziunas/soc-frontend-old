const path = require('path');

module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },

  webpack: {
    alias: {
      components: path.resolve(__dirname, './src/components/'),
      contexts: path.resolve(__dirname, './src/contexts/'),
      lib: path.resolve(__dirname, './src/lib/'),
      models: path.resolve(__dirname, './src/models/'),
      pages: path.resolve(__dirname, './src/pages/'),
      services: path.resolve(__dirname, './src/services/'),
      shared: path.resolve(__dirname, './src/shared/'),
    },
    extensions: ['.ts', '.tsx'],
  },
};
