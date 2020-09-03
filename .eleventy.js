const pluginSass = require("eleventy-plugin-sass");

module.exports = function (eleventyConfig) {
    eleventyConfig
        .addPassthroughCopy("./src/assets")
        .addPassthroughCopy("./src/admin");
    
    return {
        passthroughFileCopy: true,
        markdownTemplateEngine: "njk",
        templateFormats: ["html", "md", "njk", "eot", "ttf", "woff", "woff2", "svg", "jpg", "png", "css", "svg", "yml"],
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes"
        }

    }
};


