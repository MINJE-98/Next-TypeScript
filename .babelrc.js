module.exports = {
  presets: [
    [
      "next/babel",
      {
        "preset-react": {
          runtime: "automatic",
          importSource: "@emotion/react",
        },
      },
    ],
    "@emotion/babel-preset-css-prop",
  ],
  plugins: [
    "@emotion/babel-plugin",
    "babel-plugin-twin",
    "babel-plugin-macros",
  ],
};
