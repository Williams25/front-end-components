module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/**/*.stories.tsx",
    "../src/components/**/*.stories.mdx",
    "../src/components/repositories/**/*.stories.tsx",
    "../src/components/repositories/**/*.stories.mdx"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: "@storybook/react"
};
