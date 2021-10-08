**TEST BRANCH**
# Tailwind CSS UI for Immersive Reader
* main entry point is `bundle.js`

An npm project for demonstrating Azure Immersive Reader using TailwindCSS. Using:
* `node-sass` which compiles `.scss` files in CSS
* `autoprefixer` & `postcss-cli` to add vendor prefixes to compiled CSS
* `stylelint` to check for errors in CSS
* `onchange` to rebuild CSS whenever a change occurs in an `.scss` file
* `browser-sync` to run a local web server
* `bpm-run-all` to run multiple npm-scripts in parallel or sequential mainly for Windows systems
* `imagemin-cli` to minify images
* `webpack` & `babel` to use modern JS syntax and transpile into browser compatible JS
* `eslint` to keep the code more consistent and to avoid bugs
* `posthtml` & `posthtml-modules` to use HTML partials i.e. `<module href="/components/head.html"></module>`
* `postcss` imports the tailwindcss CSS and outputs to a combined `tailwind.css` file in the `/dist` directory
* `htmlnano` to compress outputted HTML

## Javascript
* Always import Javascript modules into `main.js` to keep things tidy

## SCSS
* Always import scss modules into `index.scss` to keep things tidy

## CSS
* tailwind imports are in `/src/tailwind.css`

## npm commands
* `npm run build` runs all `build:*` scripts in parallel
* `npm run watch` runs all `watch:*` scripts and starts the local web server in parallel
* `npm run serve` runs a web server using files in the `/dist` directory

## Quickstart
1. run `npm i` to install all dependecies
2. run `npm run build` to build to the output `/dist` directory

## Notes
* Turned off `no-unused-vars`, `no-undef` in `.eslintrc` to overcome trivial build errors with JQuery
* JQuery file is now ignored as part of the build process by residing in its own directory
* `CopyWebpackPlugin` is used to pass the JQuery file through to `/dist` without transformation taking place
* bundles two types of Javascript, JQuery is unchanged and passed through whilst regular Javascript is transformed and combined through webpack

## Todo
* Replace JQuery support

