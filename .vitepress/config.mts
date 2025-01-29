/*
 * @Description:
 * @Author: 安知鱼
 * @Email: anzhiyu-c@qq.com
 * @Date: 2023-08-22 11:34:10
 * @LastEditTime: 2023-09-02 21:53:30
 * @LastEditors: 安知鱼
 */
import { defineConfig } from "vitepress";
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs";

const commitRef = process.env.COMMIT_REF?.slice(0, 8) || "dev";

const ogDescription = "Amazing Hacker Project\n";
const ogImage = "";
const ogTitle = "Voyage Project";
const ogUrl = "https://Voyage.show";

export default defineConfig({
  title: "Voyage Project",
  description: "Amazing Hacker Project",
  lang: "zh",
  head: [
    ["link", { rel: "icon", type: "image/png", href: "/logo.png" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: ogTitle }],
    ["meta", { property: "og:image", content: ogImage }],
    ["meta", { property: "og:url", content: ogUrl }],
    ["meta", { property: "og:description", content: ogDescription }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:site", content: "@LittleXiaYuan" }],
    ["meta", { name: "theme-color", content: "#646cff" }],
    [
      "script",
      {},
    ],
  ],
  themeConfig: {
    nav: [{ text: "论坛", link: "https://forum.Voyage.show" }],

    sidebar: [
      {
        text: "最终用户许可协议",
        link: "/intro",
      },
      {
        text: "快速上手",
        items: [
          { text: "程序使用 💻", link: "/install" },
          {
            text: "常见问题 📖",
            link: "/FAQ",
          },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/VoyageCheat/VoyageDocs" }],

    algolia: {
      appId: "CITURDDECN",
      apiKey: "e5c83518b67da17a254574c31759596b",
      indexName: "Voyage",
      // searchParameters: {
      //   facetFilters: ["tags:en"],
      // },
      locales: {
        zh: {
          placeholder: "搜索文档",
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              searchBox: {
                resetButtonTitle: "清除查询条件",
                resetButtonAriaLabel: "清除查询条件",
                cancelButtonText: "取消",
                cancelButtonAriaLabel: "取消",
              },
              startScreen: {
                recentSearchesTitle: "搜索历史",
                noRecentSearchesText: "没有搜索历史",
                saveRecentSearchButtonTitle: "保存至搜索历史",
                removeRecentSearchButtonTitle: "从搜索历史中移除",
                favoriteSearchesTitle: "收藏",
                removeFavoriteSearchButtonTitle: "从收藏中移除",
              },
              errorScreen: {
                titleText: "无法获取结果",
                helpText: "你可能需要检查你的网络连接",
              },
              footer: {
                selectText: "选择",
                navigateText: "切换",
                closeText: "关闭",
                searchByText: "搜索提供者",
              },
              noResultsScreen: {
                noResultsText: "无法找到相关结果",
                suggestedQueryText: "你可以尝试查询",
                reportMissingResultsText: "你认为该查询应该有结果？",
                reportMissingResultsLinkText: "点击反馈",
              },
            },
          },
        },
      },
    },

    footer: {
      message: `This project is licensed under the Apache 2.0 License. (${commitRef})`,
      copyright: "Copyright © 2025 Voyage Teams",
    },

    editLink: {
      pattern: "https://github.com/VoyageCheat/VoyageDocs/edit/main/:path",
      text: "Edit this page on GitHub",
    },
  },
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
    config(md) {
      md.use(tabsMarkdownPlugin);
    },
  },
  locales: {
    root: { label: "简体中文", lang: "zh" },
  },
});
