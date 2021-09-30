const path = require('path');

module.exports = {
  style: {
    postcss: { plugins: [require('tailwindcss'), require('autoprefixer')] },
  },
  webpack: {
    alias: {
      services: path.resolve(__dirname, './src/services/'),
    },
  },
};

// console.log('=======================');
// console.log(
//   "path.join(path.resolve(__dirname, './src/services')):",
//   path.resolve(__dirname, './src/services')
// );
// console.log('=======================');
