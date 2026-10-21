# 写作手册（Astro 版）

> 这个文件不会发布到网站（Astro 只发布 `src/pages`、`src/content` 和 `public`）。

## 一、发一篇的完整流程

1. 在 `src/content/blog/` 下新建一个 `.md` 文件，**文件名就是 URL**：
   `my-first-post.md` → `/blog/my-first-post/`（建议用英文短横线命名）
2. 填好开头的 frontmatter
3. 写正文（普通 Markdown）
4. 本地预览：

   ```powershell
   cd D:\helpless-horizon
   npm run dev
   ```

   打开 **http://localhost:4321/**（本地是根路径）

5. 发布：

   ```powershell
   git add .
   git commit -m "新文章：标题"
   git push
   ```

   约 1 分钟后自动部署到 https://L1nG920.github.io/helpless-horizon/

## 二、frontmatter 模板

```yaml
---
title: '文章标题'
description: '一句话摘要，会显示在列表、搜索和分享卡片里'
pubDate: '2026-10-21'
---
```

必填三个字段。**漏了 `pubDate` 或写错日期格式，构建会直接失败**（schema 校验）。

可选字段：

| 字段 | 作用 |
|---|---|
| `updatedDate: '2026-10-25'` | 显示「最后更新于」 |
| `heroImage: '../../assets/xxx.jpg'` | 文章顶部大图，图片放 `src/assets/` |

## 三、文件都在哪

| 路径 | 作用 |
|---|---|
| `src/content/blog/` | 所有文章（Markdown） |
| `src/consts.ts` | 站点标题、描述、署名、GitHub 链接 |
| `src/pages/index.astro` | 首页 |
| `src/pages/blog/index.astro` | 文章列表页 |
| `src/pages/about.astro` | 关于页 |
| `src/content.config.ts` | frontmatter 的字段规则 |
| `astro.config.mjs` | `site` 和 `base`（部署路径） |

## 四、一个必须记住的坑

主站 `https://yukimio.top` 按根路径部署；GitHub Pages 的备份站点在 `/helpless-horizon/` 子路径下（由 workflow 构建时传 `--base` 覆盖）。所以**任何内部链接都必须用 `withBase()`**，这样两种部署都正确：

```astro
---
import { withBase } from '../consts';
---
<a href={withBase('/blog/')}>文章</a>
```

直接写 `href="/blog/"` 在本地看起来正常，**上线后会 404**。改完链接记得跑一次 `npm run build` 检查。

## 五、选题从哪来

1. **刚解决的问题**（趁热写，30 分钟一篇）
2. **给别人讲过的内容**（讲卡壳的地方就是重点）
3. **收藏夹里没消化的东西**（用自己的话复述）
4. **你做过的决定和理由**（为什么用 Astro 不用 Hugo）

不要等灵感，先写，题目会在写的过程中变清楚。

## 六、三种骨架

**A. 踩坑记录**：结论 → 背景 → 现象（完整报错）→ 试错 → 根因 → 可复制的解法

**B. 概念解释**：一句话定义 → 为什么需要 → 例子 → 常见误解 → 我何时用它

**C. 清单**：适用范围 → N 条（做什么 + 为什么）→ 反例

## 七、节奏

- 每周 1 篇，比一个月 10 篇然后停更强
- 前 20 篇不要管 SEO、不要看数据
- 任何一篇都能在 1 小时内写完——写不完说明选题太大，拆开
