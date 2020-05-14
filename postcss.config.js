const postcssimport = require("postcss-import");
const purgecss = require("@fullhuman/postcss-purgecss");
const darkTheme = require("postcss-dark-theme-class");

module.exports = {
  plugins: [
    // parses `import()`s
    postcssimport(),
    // Removes unused CSS
    // https://github.com/FullHuman/purgecss/tree/master/packages/postcss-purgecss
    purgecss({
      content: ["./layouts/**/*.html"],
      // whitelist determines the selectors I deliberately want to avoid purging
      // Because some of the selectors in styles.css aren't created until after
      // being converted to HTML, these must be whitelisted so the styles are
      // still added.
      whitelist: ["a", "pre", "code"]
    }),
    darkTheme({
      darkSelector: '[data-theme="dark"]',
      lightSelector: '[data-theme="light"]'
    })
  ]
};
