# StudioPages 目录说明

这个目录里放的是工作室网站的几条不同制作线，以及统一整理好的公共字体和图标资源。点进来时可以先看这里，快速判断每个文件夹是什么、适合拿来做什么。

## 几条制作线

### 手术刀线
手术刀线是由 5.5 Pro 独立设计的一个独立网站设计，没有受到 Weijie 初始示例影响。

### `Initial Version_Emberwake/`
这是 Weijie 最开始拿 Fable5 做出来的示例版本。

这个示例主要作为原始参考保留。它的问题是过于依赖外部 CDN，而且页面里有大量 inline style，后续维护成本比较高。后面我把这些内容都改成了更适合维护的 CSS 组件结构。

### `CP Version 0.1_Emberwake/`
这是对 Weijie 初始示例的升级版。

这条线是用 GPT 5.5 Pro 做方向指导，再由 Codex 负责具体施工和代码实现。它是一个 Vite + React + TypeScript 项目，适合继续做组件化开发和后续维护。

常用命令：

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
```

### `C Version 0.1_Mistvale Studio/`
`C` 开头的是「雾谷」版本。

这一版完全由 Codex 做复刻与实现，是一个 Vite + React 项目。目录里包含 `src/`、`public/`、`dist/`、`scripts/`、`package.json` 等内容，也有本地 git 仓库记录。

常用命令：

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
```

如果要直接跑构建后的版本，也可以看项目里的 serve 脚本：

```bash
pnpm serve
```

### `Version 0.1_Emberwake/`
这是 FogAnchor，也就是「雾锚」版本。

这一版同样完全由 Codex 做复刻，但是使用的 prompt 和雾谷版本略有不同，所以最终的结构、视觉语言和实现方式也会有差异。它是一个不依赖构建工具的静态版本，可以直接打开 `index.html` 预览。

里面还有：

- `src/components/`：拆分后的组件脚本
- `src/styles/`：整理后的 CSS
- `src/data/site-data.js`：页面文案和结构数据
- `qa/`、`design-qa.md`：当时的视觉检查和对比记录

### `Public Resources/`
这里全是整理好的开源字体和 icon，任何项目都可以用。

- `Font/`：按语言和风格整理过的字体库，只保留字体文件和对应许可证/授权文件。
- `icon/`：按黑白颜色和内容类别整理过的 PNG 图标库。顶层分为 `Black/` 和 `White/`，下面再按 `Commerce`、`Communication`、`Device`、`Media`、`Navigation`、`Security`、`System`、`Web` 等类别分类。

## 使用建议

- 想看最原始参考：看 `Initial Version_Emberwake/`。
- 想继续升级 Weijie 示例：看 `CP Version 0.1_Emberwake/`。
- 想看雾谷复刻：看 `C Version 0.1_Mistvale Studio/`。
- 想看雾锚复刻：看 `Version 0.1_Emberwake/`。
- 需要字体或 icon：直接从 `Public Resources/` 取。
