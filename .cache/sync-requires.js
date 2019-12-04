const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("C:\\Users\\stf01290\\Documents\\git\\hobby_blog\\src\\templates\\blog-post.js"))),
  "component---src-pages-about-css-modules-js": hot(preferDefault(require("C:\\Users\\stf01290\\Documents\\git\\hobby_blog\\src\\pages\\about-css-modules.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("C:\\Users\\stf01290\\Documents\\git\\hobby_blog\\src\\pages\\about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("C:\\Users\\stf01290\\Documents\\git\\hobby_blog\\src\\pages\\contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\stf01290\\Documents\\git\\hobby_blog\\src\\pages\\index.js"))),
  "component---src-pages-my-files-js": hot(preferDefault(require("C:\\Users\\stf01290\\Documents\\git\\hobby_blog\\src\\pages\\my-files.js")))
}

