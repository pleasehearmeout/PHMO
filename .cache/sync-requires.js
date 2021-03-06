// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/ellalee/Workspace_projs/phmo/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/ellalee/Workspace_projs/phmo/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/ellalee/Workspace_projs/phmo/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/ellalee/Workspace_projs/phmo/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/ellalee/Workspace_projs/phmo/src/pages/index.js")),
  "component---src-pages-how-it-works-js": preferDefault(require("/Users/ellalee/Workspace_projs/phmo/src/pages/how-it-works.js"))
}

exports.json = {
  "layout-index.json": require("/Users/ellalee/Workspace_projs/phmo/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/ellalee/Workspace_projs/phmo/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/ellalee/Workspace_projs/phmo/.cache/json/404.json"),
  "about.json": require("/Users/ellalee/Workspace_projs/phmo/.cache/json/about.json"),
  "index.json": require("/Users/ellalee/Workspace_projs/phmo/.cache/json/index.json"),
  "404-html.json": require("/Users/ellalee/Workspace_projs/phmo/.cache/json/404-html.json"),
  "how-it-works.json": require("/Users/ellalee/Workspace_projs/phmo/.cache/json/how-it-works.json")
}