// 站点全局信息：改这里就能改标题、描述和署名。
// 任何组件都可以通过 `import { ... } from '../consts'` 使用。

export const SITE_TITLE = '我的博客';
export const SITE_DESCRIPTION = '记录我学到的东西、踩过的坑，以及一些还没想明白的问题。';
export const SITE_AUTHOR = 'L1nG920';
export const GITHUB_URL = 'https://github.com/L1nG920';

// GitHub Pages 的项目站点部署在 /<仓库名>/ 下，
// 所以所有内部链接都必须带上这个前缀，否则线上会 404。
export const BASE = import.meta.env.BASE_URL;

/** 给内部链接加前缀：withBase('/blog/') -> '/helpless-horizon/blog/' */
export const withBase = (path: string) => `${BASE.replace(/\/$/, '')}${path}`;
