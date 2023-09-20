const config = {
  staticDirs: ['../public'],
  stories: ["../src/components/**/storires.tsx"],
  addons: [
    "@storybook/addon-essentials",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: true,
  },
  webpackFinal: (config) => {
    config.resolve?.modules?.push(`${process.cwd()}/src`)
    return config
  }
};
export default config;
