##React Boilerplate

This project is built with ES2018, React, Sass, Webpack 4 & Babel 7.

[Prettier](https://github.com/prettier/prettier) is used for code style guideline. Every major editor has a Prettier extension allowing auto-styling on save.

[PostCSS](https://github.com/postcss/postcss) is used within the webpack pipeline for automatic appending of vendor prefixes based on `.browserslistrc`.

[webpack-dev-server](https://github.com/webpack/webpack-dev-server) is used for quick iterative development, allowing for [hot module replacement](https://webpack.js.org/concepts/hot-module-replacement/) in-browser.

#Getting Started  
Install the latest version of [nodejs](https://nodejs.org/en/download/).  
`npm install -g windows-build-tools prettier`  
`npm install`  
`npm run dev`

This will start webpack dev server on port 80. The project is compiled to `build`.

#Deployment  
`npm start`

This will run webpack in production mode. By default, this means the bundle will be minified and libraries that rely on the NODE_ENV variable will transpile to their production versions.
