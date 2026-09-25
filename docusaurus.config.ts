import { themes as prismThemes } from "prism-react-renderer"
import type { Config } from "@docusaurus/types"

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

export default {
  plugins: ["docusaurus-plugin-sass"],

  title: "BME4 教程",
  favicon: "img/bme4.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: { v4: true },

  // Set the production url of your site here
  url: "https://withered-flower-0422.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/bme4-tutorial/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "withered-flower-0422", // Usually your GitHub org/user name.
  projectName: "bme4-tutorial", // Usually your repo name.

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh",
    locales: ["zh", "en"],
  },

  presets: [
    [
      "classic",
      {
        docs: { sidebarPath: "./sidebars.ts" },
        theme: { customCss: "./src/css/custom.scss" },
      },
    ],
  ],

  themeConfig: {
    image: "img/ballex.ico",
    navbar: {
      title: "BME4 教程",
      logo: { alt: "BME4 Logo", src: "img/ballex.ico" },
      items: [
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: "https://github.com/withered-flower-0422/bme4-tutorial",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://store.steampowered.com/app/1114430",
          label: "Steam",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `版权所有 © ${new Date().getFullYear()} 枯萎の花，基于 Docusaurus 构建。`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
} satisfies Config
