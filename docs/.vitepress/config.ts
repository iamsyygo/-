import nav from './configs/nav';
import sidebar from './configs/sidebar';
import algolia from './configs/algolias';
import socialLinks from './configs/socialLinks';
import { defineConfig } from 'vitepress';
import { demoBlockPlugin } from 'vitepress-theme-demoblock';

export default defineConfig({
  title: 'Sea-UI',
  titleTemplate: '%s - sea-ui', // 标题模板
  description: '组件库文档',
  appearance: true, // 默认主题将由用户的首选配色方案决定
  base: '',
  lastUpdated: true, // 最近更新时间,使用 git commit 获取时间戳,通过 themeConfig.lastUpdatedText 选项自定义文本
  cleanUrls: 'disabled',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/logo.svg',
      },
    ],
  ],
  themeConfig: {
    logo: '/logo.svg',
    nav,
    sidebar,
    algolia,
    socialLinks,
    lastUpdatedText: '更新于', // 显示在最后更新时间之前的前缀文本
    docFooter: {
      // 用于自定义出现在上一个和下一个链接上方的文本。如果不是用英语编写文档,则很有帮助
      prev: '🚝 上一章',
      next: '🚀 下一章',
    },
    footer: {
      // message: '',
      copyright: 'MIT Licensed | Copyright © 2022-present Evan You',
    },
  },

  // 配置 Markdown 解析器选项。VitePress 使用 Markdown-it 作为解析器，使用 Shiki 来高亮语言语法 https://vitepress.vuejs.org/config/app-configs
  markdown: {
    theme: 'material-palenight',
    lineNumbers: true,
    config: (md) => {
      md.use(demoBlockPlugin);
    },
  },
});
