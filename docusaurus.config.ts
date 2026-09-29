import { themes as prismThemes } from "prism-react-renderer"
import type { Config } from "@docusaurus/types"

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const titles = {
  zh: "BME4 教程",
  en: "BME4 Tutorial",
}

const locale = (process.env.DOCUSAURUS_CURRENT_LOCALE ??
  "zh") as keyof typeof titles

export default {
  plugins: ["docusaurus-plugin-sass"],

  title: titles[locale],
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
    metadata: [
      { name: "algolia-site-verification", content: "926664E87D2F88BA" },
    ],
    // algolia: {
    //   appId: "IBJX10182H",
    //   apiKey: "a8190d972d00e43848168f769afd39f8",
    //   indexName: "YOUR_INDEX_NAME",
    // },
    image: "img/ballex.ico",
    colorMode: { defaultMode: "dark" },
    navbar: {
      title: "BME4 教程",
      logo: { alt: "BME4 Logo", src: "img/ballex.ico" },
      items: [
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: `https://withered-flower-0422.github.io/BMT/${locale === "zh" ? "" : locale}`,
          position: "right",
          label: "Ballex²",
        },
        {
          href: "https://discord.gg/ZaXwUuCYZ",
          position: "right",
          className: "header-link discord",
        },
        {
          href: "https://github.com/withered-flower-0422/bme4-tutorial",
          position: "right",
          className: "header-link github",
        },
        {
          href: "https://store.steampowered.com/app/1114430",
          position: "right",
          className: "header-link steam",
        },
      ],
    },
    footer: {
      copyright: `版权所有 © ${new Date().getFullYear()} 枯萎の花，基于 Docusaurus 构建。`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
} satisfies Config
