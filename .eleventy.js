module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/images");

  // Render markdown body sections as labelled divs
  eleventyConfig.addPairedShortcode("cssection", function(content, label) {
    return `<div class="cs-section"><span class="cs-section__label">${label}</span><div class="cs-section__body">${content}</div></div>`;
  });

  eleventyConfig.addShortcode("csstat", function(number, label) {
    return `<div class="cs-stat"><span class="cs-stat__number">${number}</span><p class="cs-stat__label">${label}</p></div>`;
  });

  eleventyConfig.addShortcode("csbanner", function(label, quote) {
    return `<div class="cs-banner"><p class="cs-banner__label">${label}</p><p class="cs-banner__quote">${quote}</p></div>`;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};
