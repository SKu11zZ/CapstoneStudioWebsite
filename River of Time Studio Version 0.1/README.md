# 时光长河工作室官网

这是一个面向叙事游戏和 RPG 的独立游戏工作室官网原型，核心气质是时间长河、记忆、旅途、选择、角色关系和旧档案感。页面只包含 8 个主体 section：首屏、主推、技术分享、游戏列表、角色档案、玩家招募、团队成员、联系。

## 技术栈

- Vite
- React
- TypeScript
- 普通 CSS，按变量、全局、布局、效果拆分
- 本地字体和本地图标，无 Google Fonts、外部 icon CDN 或远程图片依赖

## 安装依赖

```bash
pnpm install
```

## 本地运行

```bash
pnpm dev
```

默认会在 `http://127.0.0.1:5173/` 启动。

## Build

```bash
pnpm build
```

构建产物会输出到 `dist/`。

## 目录结构说明

- `src/data`: 主要内容数据，游戏、角色、技术分享、招募、团队、联系都在这里维护
- `src/i18n`: 语言类型和语言切换逻辑，包含 localStorage、`html lang`、`document.title` 和 description 更新
- `src/components`: 页面组件，每个主体模块拆分为独立组件
- `src/styles/variables.css`: 全局主题变量、本地字体声明
- `src/styles/globals.css`: 基础样式和按钮
- `src/styles/layout.css`: 页面布局、网格、响应式
- `src/styles/effects.css`: 时间长河、旧地图、星尘、档案卡片等视觉效果
- `src/assets/generated`: 后续 image2 生成素材建议放在这里
- `public/assets/fonts`: 本地字体运行时资源
- `public/assets/icons`: 本地图标运行时资源

## 如何新增游戏

修改 `src/data/games.ts`，新增一条游戏对象即可。组件会自动从数组中渲染卡片。

## 如何新增角色

修改 `src/data/characters.ts`，新增角色对象即可。角色档案会自动生成新卡片。

## 如何新增技术分享

修改 `src/data/techNotes.ts`，新增技术分享卡片数据即可。

## 如何修改中英双语文案

所有双语字段都使用统一结构：

```ts
{
  zh: "中文文案",
  en: "English copy"
}
```

站点级内容在 `src/data/siteContent.ts`，主推内容在 `src/data/featuredProject.ts`，其他列表内容在对应 data 文件中。

## 如何替换 image2 生成素材

当前版本未调用 image2，使用 CSS 制作时间长河、旧地图、星尘和角色档案视觉占位。如果后续生成素材，建议放到：

```text
src/assets/generated
```

或：

```text
public/assets/generated
```

然后在对应 data 文件中增加 `image` 字段，并在展示组件中优先渲染图片。推荐素材命名：

- `hero_time_river.webp`
- `featured_beyond_river.webp`
- `game_cover_beyond_river.webp`
- `game_cover_stars_dream.webp`
- `game_cover_seventh_letter.webp`
- `game_cover_bells_afar.webp`
- `game_cover_lost_chronicles.webp`
- `character_lya.webp`
- `character_ren.webp`
- `character_orrin.webp`
- `character_mira.webp`
- `character_ferryman.webp`

## 资源来源

已检查公共资源目录：

```text
G:\CapstoneWebsite\StudioPages\Public Resources
```

使用资源：

- 本地字体：`HarmonyOS_Sans_SC.ttf`、`Newsreader-VariableFont_opsz,wght.ttf`、`WenYuanSerifSC-Regular.ttf`
- 本地图标：从 `Public Resources\icon\White` 复制的导航、通信、开发、媒体和 Web 图标

字体通过 `src/styles/variables.css` 的 `@font-face` 接入，图标通过 `public/assets/icons` 静态路径接入。

## 双语实现

`src/i18n/LanguageContext.tsx` 管理当前语言：

- 默认中文
- 点击右上角 `中文 / EN` 切换
- 写入 `localStorage`
- 刷新后保持上次选择
- 同步更新 `<html lang>`、`document.title` 和 meta description

## 维护入口

- 新增游戏：`src/data/games.ts`
- 新增角色：`src/data/characters.ts`
- 新增技术分享：`src/data/techNotes.ts`
- 新增团队成员：`src/data/team.ts`
- 修改联系方式：`src/data/contact.ts`
- 修改主题变量：`src/styles/variables.css`
