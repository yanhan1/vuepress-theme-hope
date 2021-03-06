---
icon: infofill
---

# Introduction

::: tip
If you met a bug while using, you can open an issue [here](https://github.com/Mister-Hope/vuepress-theme-hope/issues)
:::

## Theme Features

The theme largely maintains the style of the `@vuepress/theme-default`, and adds a lot of features and optimizations:

### Page enhancement

- Added more syntax to Markdown, enriching documentation and blog writing

  - [Tex Support](feature/markdown/tex.md)
  - [Custom alignment](feature/markdown/align.md)
  - [Flow chart](feature/markdown/flowchart.md)
  - [Mark](feature/markdown/mark.md)
  - [Subsript and Supercript](feature/markdown/sup-sub.md)

- [Picture preview feature](layout/page.md#picture-preview), supports zooming, dragging, sliding browsing, sharing and downloading

- [Article info](layout/page.md#page-info-display)

  - Reading Counts
  - Author and writing date
  - Automatically generated word count and estimated reading time
  - Tags and Categorys

- [Comment System](feature/comment.md)

- [Path navigation](layout/page.md#breadcrumb)

- [Page Icon](layout/page.md#icon-support)

- [Custom footer](layout/page.md#footer-support)

### Function enhancement

#### Implemente below with 0 configuration while allowing to customize

- [Brand new theme colors, allowing you to switch dynamically during browsing](feature/theme.md#theme-color)

- [Dark mode, allowing you to switch manually or apply automatically according to device settings](feature/theme.md#darkmode)

- [Full Screen Button](feature/theme.md#fullscreen-button)

- [PWA support](../config/plugin/pwa.md)

- [Back to top button](feature/component.md#back-to-top-button-backtotop)

- [One-click copy code](https://vuepress-copy-code.mrhope.site)

- Add copyright information when copying

#### More powerful functions

- [SEO enhancement](feature/seoAndSitemap.md#SEO)

- [Sitemap generation](feature/seoAndSitemap.md#Sitemap)

- [Encryption of specific articles and paths](feature/encrypt.md)

- [Typescript support](feature/typescript.md)

### Style optimization

- [Icon support](feature/readme.md)

- [Default homepage optimization](layout/home.md)

  - Features have new animations and support jump
  - Multiple action buttons
  - Widescreen layout optimization

- Optimization of other built-in components

  - [**navbar**](layout/navbar.md)
  - [**Sidebar**](layout/sidebar.md)
  - [Badge `<MyBadge />`](feature/component.md#badge-mybadge): Added color support on the official basis

### Blog section

- [New blog homepage layout](layout/blog.md)

- [Social follow button and page social sharing](https://vuepress-add-this.mrhope.site)

- [Article display](feature/blog.md)

  - [Articles list swith sticky support](feature/blog.md#article)
  - [Cateory lists](feature/blog.md#category)
  - [Tag lists](feature/blog.md#tags)
  - [Timeline](feature/blog.md#timeline)

## Plugins build-in

The theme also includes the following plugins, you can use them in other themes or directly.

- [@mr-hope/vuepress-plugin-comment](https://vuepress-comment.mrhope.site): Comment and page info feature

- [@mr-hope/vuepress-plugin-component](feature/component.md): Provide some out of box plugins

- [@mr-hope/vuepress-plugin-copy-code](https://vuepress-copy-code.mrhope.site): Provide copy button for code blocks

- [@mr-hope/vuepress-plugin-last-update](https://vuepress-last-update.mrhope.site): Last update time

- [@mr-hope/vuepress-plugin-pwa](../config/plugin/pwa.md): PWA support

- [@mr-hope/vuepress-plugin-reading-time](https://vuepress-reading-time.mrhope.site): Expect reading time and words count

- [@mr-hope/vuepress-plugin-seo](https://vuepress-seo.mrhope.site): SEO Enhancement Plugin

- [@mr-hope/vuepress-plugin-sitemap](https://vuepress-sitemap.mrhope.site): Sitemap Generator for your site

- [vuepress-plugin-add-this](https://vuepress-add-this.mrhope.site): Provide sociel share and follow function

- [vuepress-plugin-md-enhance](https://vuepress-md-enhance.mrhope.site): Provide more Markdown syntax

- [vuepress-plugin-photo-swipe](https://vuepress-photo-swipe.mrhope.site): Make the site's picture support click zoom
