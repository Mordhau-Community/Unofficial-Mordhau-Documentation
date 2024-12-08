import { defineConfig } from "vitepress";
import { version } from "../package.json";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "uMordhau Documentation",
  description: "Mordhau Documentation",
  srcDir: "docs",
  outDir: ".vitepress/dist/docs",
  base: "/docs/",
  ignoreDeadLinks: true,
  cleanUrls: true,
  rewrites(id) {
    return id.replace(/\/en\//, "/");
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // logo: "/logo.webp",
    i18nRouting: false,
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/Mordhau-Community/Unofficial-Mordhau-Documentation",
      },
      { icon: "discord", link: "https://discord.gg/zuX58yRV84" },
    ],
  },

  // https://vitepress.dev/guide/i18n
  locales: {
    root: {
      label: "English",
      lang: "en",
      link: "/en/",
      dir: "ltr",
      themeConfig: {
        nav: [
          { text: "Home", link: "/en/" },
          { text: "contributing", link: "/en/contributing/" },
          { text: "RCON", link: "/en/rcon-guide/" },
          { text: "MordhauSDK", link: "/en/mordhauSDK-guide/" },
          {
            text: "Dedicated server",
            link: "/en/dedicated-server-guide/",
          },
          {
            text: version,
            items: [
              {
                text: "changelog",
                link: "https://github.com/Mordhau-Community/Unofficial-Mordhau-Documentations/blob/main/CHANGELOG.md",
              },
            ],
          },
        ],
        sidebar: [
          {
            text: "Get Started",
            items: [
              {
                text: "Contributing in Mordhau Documentations",
                link: "/en/contributing/",
              },
              {
                text: "How to understand the docs?",
                link: "/en/mordhauSDK-guide/",
              },
            ],
          },
        ],
      },
    },
    ar: {
      label: "العربية",
      lang: "ar",
      dir: "rtl",
      themeConfig: {
        nav: [
          { text: "الرئسية", link: "/ar/" },
          { text: "contributing", link: "/ar/contributing/" },
          { text: "RCON", link: "/ar/rcon-guide/" },
          { text: "MordhauSDK", link: "/ar/mordhauSDK-guide/" },
          {
            text: "Dedicated Server",
            link: "/ar/dedicated-server-guide/",
          },
          {
            text: version,
            items: [
              {
                text: "changelog",
                link: "https://github.com/Mordhau-Community/Unofficial-Mordhau-Documentations/blob/main/CHANGELOG.md",
              },
            ],
          },
        ],
        sidebar: [
          {
            text: "Get Started",
            items: [
              {
                text: "Contributing in Mordhau Documentations",
                link: "/en/contributing/",
              },
              {
                text: "How to understand the docs?",
                link: "/en/mordhauSDK-guide/",
              },
            ],
          },
        ],
      },
    },
    ru: {
      label: "Русский",
      lang: "ru",
      dir: "ltr",
      themeConfig: {
        nav: [
          { text: "Home", link: "/ru/" },
          { text: "contributing", link: "/ru/contributing/" },
          { text: "RCON", link: "/ru/rcon-guide/" },
          { text: "MordhauSDK", link: "/ru/mordhauSDK-guide/" },
          {
            text: "Create your own server",
            link: "/ru/dedicated-server-guide/",
          },
          {
            text: version,
            items: [
              {
                text: "changelog",
                link: "https://github.com/Mordhau-Community/Unofficial-Mordhau-Documentations/blob/main/CHANGELOG.md",
              },
            ],
          },
        ],
        sidebar: [
          {
            text: "Get Started",
            items: [
              {
                text: "Contributing in Mordhau Documentations",
                link: "/ru/contributing/",
              },
              {
                text: "How to understand the docs?",
                link: "/ru/mordhauSDK-guide/",
              },
            ],
          },
        ],
      },
    },
    ja: {
      label: "日本語",
      lang: "ja",
      dir: "ltr",
      themeConfig: {
        nav: [
          { text: "Home", link: "/ja/" },
          { text: "contributing", link: "/ja/contributing/" },
          { text: "RCON", link: "/ja/rcon-guide/" },
          { text: "MordhauSDK", link: "/ja/mordhauSDK-guide/" },
          {
            text: "Create your own server",
            link: "/ja/dedicated-server-guide/",
          },
          {
            text: version,
            items: [
              {
                text: "changelog",
                link: "https://github.com/Mordhau-Community/Unofficial-Mordhau-Documentations/blob/main/CHANGELOG.md",
              },
            ],
          },
        ],
        sidebar: [
          {
            text: "Get Started",
            items: [
              {
                text: "Contributing in Mordhau Documentations",
                link: "/ja/contributing/",
              },
              {
                text: "How to understand the docs?",
                link: "/ja/mordhauSDK-guide/",
              },
            ],
          },
        ],
      },
    },
    fr: {
      label: "Français",
      lang: "fr",
      dir: "ltr",
      themeConfig: {
        nav: [
          { text: "Home", link: "/fr/" },
          { text: "contributing", link: "/fr/contributing/" },
          { text: "RCON", link: "/fr/rcon-guide/" },
          { text: "MordhauSDK", link: "/fr/mordhauSDK-guide/" },
          {
            text: "Create your own server",
            link: "/fr/dedicated-server-guide/",
          },
          {
            text: version,
            items: [
              {
                text: "changelog",
                link: "https://github.com/Mordhau-Community/Unofficial-Mordhau-Documentations/blob/main/CHANGELOG.md",
              },
            ],
          },
        ],
        sidebar: [
          {
            text: "Get Started",
            items: [
              {
                text: "Contributing in Mordhau Documentations",
                link: "/fr/contributing/",
              },
              {
                text: "How to understand the docs?",
                link: "/fr/mordhauSDK-guide/",
              },
            ],
          },
        ],
      },
    },
    zh: {
      label: "中文",
      lang: "zh",
      dir: "ltr",
      themeConfig: {
        nav: [
          { text: "Home", link: "/zh/" },
          { text: "contributing", link: "/zh/contributing/" },
          { text: "RCON", link: "/zh/rcon-guide/" },
          { text: "MordhauSDK", link: "/zh/mordhauSDK-guide/" },
          {
            text: "Create your own server",
            link: "/zh/dedicated-server-guide/",
          },
          {
            text: version,
            items: [
              {
                text: "changelog",
                link: "https://github.com/Mordhau-Community/Unofficial-Mordhau-Documentations/blob/main/CHANGELOG.md",
              },
            ],
          },
        ],
        sidebar: [
          {
            text: "Get Started",
            items: [
              {
                text: "Contributing in Mordhau Documentations",
                link: "/zh/contributing/",
              },
              {
                text: "How to understand the docs?",
                link: "/zh/mordhauSDK-guide/",
              },
            ],
          },
        ],
      },
    },
  },
});
