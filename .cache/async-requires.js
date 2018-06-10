// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": require("gatsby-module-loader?name=component---src-pages-404-js!/Users/ellalee/Workspace_projs/phmo/src/pages/404.js"),
  "component---src-pages-about-js": require("gatsby-module-loader?name=component---src-pages-about-js!/Users/ellalee/Workspace_projs/phmo/src/pages/about.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/Users/ellalee/Workspace_projs/phmo/src/pages/index.js"),
  "component---src-pages-page-2-js": require("gatsby-module-loader?name=component---src-pages-page-2-js!/Users/ellalee/Workspace_projs/phmo/src/pages/page-2.js"),
  "component---src-pages-success-js": require("gatsby-module-loader?name=component---src-pages-success-js!/Users/ellalee/Workspace_projs/phmo/src/pages/success.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/ellalee/Workspace_projs/phmo/.cache/json/layout-index.json"),
  "404.json": require("gatsby-module-loader?name=path---404!/Users/ellalee/Workspace_projs/phmo/.cache/json/404.json"),
  "about.json": require("gatsby-module-loader?name=path---about!/Users/ellalee/Workspace_projs/phmo/.cache/json/about.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/ellalee/Workspace_projs/phmo/.cache/json/index.json"),
  "page-2.json": require("gatsby-module-loader?name=path---page-2!/Users/ellalee/Workspace_projs/phmo/.cache/json/page-2.json"),
  "success.json": require("gatsby-module-loader?name=path---success!/Users/ellalee/Workspace_projs/phmo/.cache/json/success.json"),
  "404-html.json": require("gatsby-module-loader?name=path---404-html!/Users/ellalee/Workspace_projs/phmo/.cache/json/404-html.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/Users/ellalee/Workspace_projs/phmo/.cache/layouts/index.js")
}