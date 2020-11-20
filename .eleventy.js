module.exports = (config) => {
  // Set directories to pass through to the dist folder
  config.addPassthroughCopy('./src/images/');
  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
