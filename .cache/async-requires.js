// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-js": () => import("../src/templates/blog-post.js" /* webpackChunkName: "component---src-templates-blog-post-js" */),
  "component---src-pages-about-css-modules-js": () => import("../src/pages/about-css-modules.js" /* webpackChunkName: "component---src-pages-about-css-modules-js" */),
  "component---src-pages-about-js": () => import("../src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-contact-js": () => import("../src/pages/contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-index-js": () => import("../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-my-files-js": () => import("../src/pages/my-files.js" /* webpackChunkName: "component---src-pages-my-files-js" */)
}

