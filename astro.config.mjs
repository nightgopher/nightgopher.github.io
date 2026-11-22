// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 个人主站：GitHub Pages user site 根路径，极简主页 + 产品托管层。
// /skills/ 只是旧技能广场的 meta refresh 跳转页（noindex），排除出 sitemap；
// /easy-suite/（含技能广场与博客）是产品官网自己的 project Pages，与本仓库部署共存。
export default defineConfig({
  site: 'https://nightgopher.github.io',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/skills'),
    }),
  ],
  output: 'static',
});
