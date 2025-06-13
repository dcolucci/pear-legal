module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.setInputDirectory("src");
    eleventyConfig.setOutputDirectory("_site");
};