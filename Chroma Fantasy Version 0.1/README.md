# 绘彩幻想工作室官网

这是 `Chroma Fantasy Studio` 的单页游戏官网。页面方向是半写实二次元厚涂、电影感数字插画、柔焦浅景深和低饱和幻想色彩，内容结构包括 Hero、主推游戏、技术分享、游戏列表、角色档案、玩家招募、团队和联系。

## 技术栈

- Vite
- React
- TypeScript
- 普通 CSS
- 本地字体与本地图片资源

## 安装依赖

```bash
pnpm install
```

## 本地运行

```bash
pnpm dev
```

默认访问地址为：

```text
http://127.0.0.1:5173
```

## Build

```bash
pnpm build
```

## 目录结构

```text
public/
  assets/
    fonts/        本地字体
    icons/        本地图标
    generated/    AI 生成素材
    textures/     纸纹、云雾和笔触装饰
src/
  components/     每个 section 的独立组件
  content/        游戏、角色、技术分享、团队、联系和资产路径
  i18n/           中英双语上下文
  styles/         全局变量、字体、基础样式和布局
```

## 新增游戏

修改 `src/content/games.ts`，按现有字段新增一项即可。图片路径优先在 `src/content/assetManifest.ts` 中集中登记。

## 新增角色

修改 `src/content/characters.ts`。角色图建议保存到 `public/assets/generated/characters`，并在 `assetManifest.ts` 中集中管理。

## 新增技术分享

修改 `src/content/techNotes.ts`。缩略图建议保存到 `public/assets/generated/tech`。

## 修改中英双语文案

所有主要文案都使用：

```ts
{ zh: "中文", en: "English" }
```

通用品牌和导航在 `src/content/siteContent.ts`，游戏在 `games.ts`，角色在 `characters.ts`，技术分享在 `techNotes.ts`。

## 替换 AI 生成素材

替换图片时优先改 `src/content/assetManifest.ts` 中的路径。组件都通过集中路径读取图片，图片缺失时会回退到 CSS 占位，不会导致页面崩溃。

## 资源来源

- 字体来自 `G:\CapstoneWebsite\StudioPages\Public Resources\Font`
- 菜单图标来自 `G:\CapstoneWebsite\StudioPages\Public Resources\icon`
- 视觉图像由 Image2 或等效图像生成模型按项目风格生成

## 图片生成和抠图流程

1. 先生成 Hero、角色、游戏卡片、技术分享和纹理素材
2. 角色源图使用纯色或浅色背景，方便抠图
3. 使用抠图脚本生成透明 PNG，并保留头发、披风和饰品边缘的柔和笔触
4. 大图压缩为 WebP，角色图保留 PNG 透明通道
5. 网页只引用优化后的版本，原图可保存在 `public/assets/generated/originals`
