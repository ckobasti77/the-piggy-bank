const tailwindcss = require("tailwindcss");
const postCssPresetEnv = require("postcss-preset-env");

module.exports = {
  plugins: [postCssPresetEnv, tailwindcss],
};
