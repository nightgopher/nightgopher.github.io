// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 个人主站：GitHub Pages user site 根路径。
// /skills/（技能广场）由 deploy workflow 合并 custom-skills 构建产物；
// /easy-suite/ 是产品官网自己的 project Pages，与本仓库部署共存。
export default defineConfig({
  site: 'https://nightgopher.github.io',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  output: 'static',
});
