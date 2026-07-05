# 手术刀工作室 / Scalpel Studio 官网

一个面向独立游戏工作室的单页官网原型，核心气质是冷峻、精准、黑暗科幻、工业感和合作 PVE。主推项目为《灰月防线》 / Ashen Moonfront。

## 技术栈

- Vite
- React
- TypeScript
- 普通 CSS，按全局变量、布局和组件样式拆分
- 本地字体与本地 PNG icon，不依赖外部 CDN

## 安装依赖

```bash
pnpm install
```

## 本地运行

```bash
pnpm dev
```

默认地址通常为：

```text
http://127.0.0.1:5173/
```

如果当前 PowerShell 提示找不到 `node`，说明 Node.js 没有加入系统 PATH。请先安装 Node.js，或在当前终端临时加入可用的 Node 路径后再运行 `pnpm dev` / `pnpm build`。

## Build

```bash
pnpm build
```

构建产物会输出到：

```text
dist/
```

## 目录结构说明

```text
src/
├─ components/          # 页面区块与可复用 UI
├─ data/                # 中英文内容、游戏、团队、路线图、日志、联系信息
├─ i18n/                # 当前语言状态与 localStorage 持久化
├─ styles/              # CSS 变量、全局样式、布局样式
├─ App.tsx              # 页面区块组合与 metadata 更新
└─ main.tsx             # React 入口

public/assets/
├─ fonts/               # 从 Public Resources 复制的本地字体
└─ icons/               # 从 Public Resources 复制的本地图标
```

## 如何新增游戏

修改：

```text
src/data/games.ts
```

按照现有 `games` 数组新增一个对象即可。组件会自动渲染，不需要修改 `GamesGrid` 或 `GameCard`。

## 如何新增团队成员

修改：

```text
src/data/team.ts
```

按照现有 `team` 数组新增成员对象即可。

## 如何修改中英双语文案

主要文案集中在：

```text
src/data/siteContent.ts
src/data/games.ts
src/data/roadmap.ts
src/data/team.ts
src/data/devlogs.ts
src/data/contact.ts
```

语言结构统一使用：

```ts
{
  zh: "中文内容",
  en: "English content"
}
```

## 双语实现方式

`src/i18n/LanguageContext.tsx` 管理当前语言状态：

- 默认中文
- 点击右上角语言按钮切换中文 / English
- 当前语言写入 `localStorage`
- 刷新页面后保持上次选择
- 根据语言同步更新 `<html lang="zh-CN">` 或 `<html lang="en">`
- `App.tsx` 根据当前语言更新 `document.title` 和 description metadata

## 资源来源

本项目使用的字体和 icon 来自：

```text
G:\CapstoneWebsite\StudioPages\Public Resources
```

已复制的字体：

- `HarmonyOS_Sans_SC.ttf`
- `Oxanium-VariableFont_wght.ttf`
- `NotoSerifSC-Bold.ttf`

已复制的 icon：

- `menu-white.png`
- `close-white.png`
- `play-circle-white.png`
- `paper-plane-white.png`
- `message-white.png`
- `return-arrow-white.png`
- `developer-white.png`
- `link-white.png`
- `safety-certificate-white.png`

本轮使用 Image2 生成并接入的项目素材：

- `public/assets/generated/scalpel-studio-mark.png`
- `public/assets/generated/ashen-moonfront-hero.png`
