const withNextra = require("nextra")({
  latex: true,
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  latex: true,
});

module.exports = withNextra();
