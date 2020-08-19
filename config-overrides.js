const { override, addBabelPlugin } = require('customize-cra')
const path = require('path')

module.exports = override(
  addBabelPlugin([
    'styled-jsx/babel',
    {
      plugins: [
        ['styled-jsx-plugin-sass', { plugins: ['styled-jsx-plugin-sass'] }],
      ],
    },
  ]),
)
