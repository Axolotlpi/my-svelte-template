const path = require('path');

module.exports = {
    // You can specify any options from https://postcss.org/api/#processoptions here
    plugins: [
      // Plugins for PostCSS
      "postcss-preset-env", //autoprefixer included here
      ["postcss-import",{
          path: path.join(__dirname, '/src/css/'),
        }],
    ],
  };

console.log("ran postcss config");
