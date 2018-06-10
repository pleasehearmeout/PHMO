// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/ellalee/Workspace_projs/phmo/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/ellalee/Workspace_projs/phmo/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/ellalee/Workspace_projs/phmo/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/ellalee/Workspace_projs/phmo/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/ellalee/Workspace_projs/phmo/src/pages/page-2.js")),
  "component---src-pages-success-js": preferDefault(require("/Users/ellalee/Workspace_projs/phmo/src/pages/success.js"))
}

exports.json = {
  "layout-index.json": require("/Users/ellalee/Workspace_projs/phmo/.cache/json/layout-index.json"),
  "404.json": require("/Users/ellalee/Workspace_projs/phmo/.cache/json/404.json"),
  "about.json": require("/Users/ellalee/Workspace_projs/phmo/.cache/json/about.json"),
  "index.json": require("/Users/ellalee/Workspace_projs/phmo/.cache/json/index.json"),
  "page-2.json": require("/Users/ellalee/Workspace_projs/phmo/.cache/json/page-2.json"),
  "success.json": require("/Users/ellalee/Workspace_projs/phmo/.cache/json/success.json"),
  "404-html.json": require("/Users/ellalee/Workspace_projs/phmo/.cache/json/404-html.json")
}