import type { ActionLink, NavItem, SectionCopy } from "../types";

export const navItems: NavItem[] = [
  { id: "home", href: "#home", label: { zh: "首页", en: "Home" } },
  { id: "featured", href: "#featured", label: { zh: "主推游戏", en: "Featured" } },
  { id: "about", href: "#about", label: { zh: "工作室", en: "Studio" } },
  { id: "games", href: "#games", label: { zh: "项目", en: "Games" } },
  { id: "devlog", href: "#devlog", label: { zh: "日志", en: "Devlog" } },
  { id: "team", href: "#team", label: { zh: "团队", en: "Team" } },
  { id: "contact", href: "#contact", label: { zh: "联系", en: "Contact" } },
];

export const seo = {
  title: {
    zh: "手术刀工作室 / Scalpel Studio",
    en: "Scalpel Studio",
  },
  description: {
    zh: "手术刀工作室专注合作 PVE 与战术防守玩法，正在开发月面基地防守游戏《灰月防线》。",
    en: "Scalpel Studio builds co-op PVE and tactical defense games, currently developing Ashen Moonfront.",
  },
};

export const brand = {
  studioName: {
    zh: "手术刀工作室",
    en: "Scalpel Studio",
  },
  latinName: "Scalpel Studio",
  mark: "SS",
  markImage: "/assets/generated/scalpel-studio-mark.png",
  slogan: {
    zh: "做节奏紧绷、决策清晰、团队协作强的中小体量游戏。",
    en: "Compact games built around clear decisions, tight pacing, and strong team play.",
  },
};

export const hero = {
  visualImage: "/assets/generated/ashen-moonfront-hero.png",
  eyebrow: {
    zh: "独立游戏工作室 / 合作 PVE / 战术防守",
    en: "Independent Game Studio / Co-op PVE / Tactical Defense",
  },
  title: brand.studioName,
  wordmark: "Scalpel Studio",
  subtitle: brand.slogan,
  description: {
    zh: "我们专注合作 PVE 与战术防守玩法，正在开发月面基地防守游戏《灰月防线》。",
    en: "We focus on co-op PVE and tactical defense systems, with Ashen Moonfront now in vertical slice production.",
  },
  projectLine: {
    zh: "主推项目：灰月防线 · PC / Windows · Vertical Slice",
    en: "Featured project: Ashen Moonfront · PC / Windows · Vertical Slice",
  },
  ctas: [
    {
      label: { zh: "加入 Steam 愿望单", en: "Wishlist on Steam" },
      href: "#contact",
      variant: "primary",
    },
    {
      label: { zh: "查看《灰月防线》", en: "View Ashen Moonfront" },
      href: "#featured",
      variant: "secondary",
    },
    {
      label: { zh: "查看开发日志", en: "Read Devlog" },
      href: "#devlog",
      variant: "ghost",
    },
  ] satisfies ActionLink[],
};

export const featuredGame = {
  section: {
    eyebrow: {
      zh: "主推游戏",
      en: "Featured Game",
    },
    title: {
      zh: "《灰月防线》 / Ashen Moonfront",
      en: "Ashen Moonfront",
    },
    description: {
      zh: "在月球废弃殖民区建立防线，守住最后一座仍在运行的通信塔。",
      en: "Build a defensive line across a ruined lunar colony and hold the last working communications tower.",
    },
  } satisfies SectionCopy,
  tags: [
    { zh: "1-4 人合作", en: "1-4 Player Co-op" },
    { zh: "战术防守", en: "Tactical Defense" },
    { zh: "PC / Windows", en: "PC / Windows" },
    { zh: "Vertical Slice 开发中", en: "Vertical Slice" },
  ],
  body: [
    {
      zh: "玩家需要在月面峡谷、废弃采矿站和坍塌居民区之间建立防御阵地。每一局开始前，队伍需要观察地形、规划路线、放置炮塔，并在敌潮推进中临时调整阵线。",
      en: "Players build defensive positions across lunar canyons, abandoned mining stations, and collapsed residential zones. Before each run, the squad reads the terrain, plans routes, places turrets, and adjusts the line as enemy waves advance.",
    },
    {
      zh: "游戏强调资源压力、火力覆盖、地形判断和队友分工。它不是单纯堆数值的塔防，而是需要玩家在混乱中做清晰决策的合作 PVE。",
      en: "The game emphasizes resource pressure, fire coverage, terrain reading, and role division. It is not a pure numbers-driven tower defense game, but a co-op PVE project about making clear decisions under pressure.",
    },
  ],
  ctas: [
    {
      label: { zh: "加入 Steam 愿望单", en: "Wishlist on Steam" },
      href: "#contact",
      variant: "primary",
    },
    {
      label: { zh: "查看玩法设计", en: "View Design Notes" },
      href: "#about",
      variant: "secondary",
    },
    {
      label: { zh: "阅读开发日志", en: "Read Devlog" },
      href: "#devlog",
      variant: "ghost",
    },
  ] satisfies ActionLink[],
  mediaPanel: {
    image: "/assets/generated/ashen-moonfront-hero.png",
    alt: {
      zh: "灰月防线月面通信塔防守点概念图",
      en: "Ashen Moonfront lunar communications tower defense concept frame",
    },
    eyebrow: { zh: "Concept Frame 01", en: "Concept Frame 01" },
    title: { zh: "月面通信塔防守点", en: "Communications Tower Holdout" },
    caption: { zh: "开发中画面方向 / 预告片制作中", en: "In-development visual direction / trailer in progress" },
  },
};

export const mediaGallery = {
  section: {
    eyebrow: {
      zh: "视觉方向",
      en: "Visual Direction",
    },
    title: {
      zh: "项目画面参考",
      en: "Project Frames",
    },
    description: {
      zh: "后续会逐步替换为实机截图和概念图。",
      en: "These slots can later be replaced by screenshots and concept art.",
    },
  } satisfies SectionCopy,
  items: [
    { title: { zh: "月面峡谷防线", en: "Lunar Canyon Defense" }, code: "LUNAR-CANYON" },
    { title: { zh: "废弃采矿站", en: "Abandoned Mining Station" }, code: "MINING-STATION" },
    { title: { zh: "通信塔核心", en: "Communication Tower Core" }, code: "COMMS-CORE" },
  ],
};

export const currentDevelopment = {
  section: {
    eyebrow: {
      zh: "生产状态",
      en: "Production Status",
    },
    title: {
      zh: "当前开发重点",
      en: "Current Focus",
    },
    description: {
      zh: "我们正在验证一张可完整游玩的 PVE 地图，以及射击、建造、防守和资源循环是否成立。",
      en: "We are validating one playable PVE map and the loop between shooting, building, defense, and resources.",
    },
  } satisfies SectionCopy,
  timeline: [
    {
      window: "Sprint 01",
      title: { zh: "月面地形与防线选址", en: "Lunar terrain and defensive positions" },
      state: { zh: "进行中", en: "In Progress" },
    },
    {
      window: "Sprint 02",
      title: { zh: "1-4 人合作接口预留", en: "1-4 player co-op architecture" },
      state: { zh: "接口预留", en: "Architecture" },
    },
    {
      window: "Sprint 03",
      title: { zh: "基础塔防建筑系统", en: "Core defensive building system" },
      state: { zh: "原型验证", en: "Prototype" },
    },
  ],
};

export const gamesSection: SectionCopy = {
  eyebrow: {
    zh: "项目列表",
    en: "Projects",
  },
  title: {
    zh: "正在开发的游戏",
    en: "Games in Development",
  },
  description: {
    zh: "当前项目都围绕合作 PVE、战术防守和小团队可持续制作展开。主推项目优先展示，其他概念保持低权重。",
    en: "Current projects center on co-op PVE, tactical defense, and sustainable small-team production. The featured project receives priority; concepts stay quieter.",
  },
};

export const roadmapSection: SectionCopy = {
  eyebrow: {
    zh: "制作路线",
    en: "Production Route",
  },
  title: {
    zh: "开发计划",
    en: "Roadmap",
  },
  description: {
    zh: "从核心循环到公开试玩，路线图以可验证的阶段推进。",
    en: "From core loop to public demo, the roadmap advances through verifiable production phases.",
  },
};

export const aboutStudio = {
  section: {
    eyebrow: {
      zh: "关于工作室",
      en: "Studio",
    },
    title: {
      zh: "小团队，清晰系统",
      en: "Small Team, Clear Systems",
    },
    description: {
      zh: "我们更关注可验证的玩法循环、稳定的制作节奏，以及玩家在合作中的实际分工。",
      en: "We care about testable gameplay loops, stable production rhythm, and practical team roles inside co-op play.",
    },
  } satisfies SectionCopy,
  body: {
    zh: "手术刀工作室目前专注合作 PVE 与战术防守。我们希望每个系统都能被玩家理解、讨论和调整，而不是用大量效果掩盖选择本身。",
    en: "Scalpel Studio currently focuses on co-op PVE and tactical defense. We want systems players can understand, discuss, and adjust, rather than hiding decisions under excess visual noise.",
  },
  keywords: [
    { zh: "清晰的战术决策", en: "Clear tactical decisions" },
    { zh: "有压力但不混乱的合作体验", en: "Pressure without confusion" },
    { zh: "小团队可持续制作", en: "Sustainable small-team production" },
  ],
};

export const teamSection: SectionCopy = {
  eyebrow: {
    zh: "团队成员",
    en: "Team",
  },
  title: {
    zh: "制作分工",
    en: "Production Roles",
  },
  description: {
    zh: "成员信息保持简洁，只展示当前项目中最相关的职责关键词。",
    en: "Team profiles stay concise, showing the responsibilities most relevant to the current project.",
  },
};

export const devlogSection: SectionCopy = {
  eyebrow: {
    zh: "开发日志",
    en: "Devlog",
  },
  title: {
    zh: "近期记录",
    en: "Recent Notes",
  },
  description: {
    zh: "记录玩法判断、系统验证和 Vertical Slice 的推进过程。",
    en: "Notes on design decisions, system validation, and vertical slice progress.",
  },
};

export const contactSection = {
  section: {
    eyebrow: {
      zh: "联系",
      en: "Contact",
    },
    title: {
      zh: "项目合作与测试",
      en: "Collaboration & Playtests",
    },
    description: {
      zh: "如果你想了解《灰月防线》、参与测试或讨论合作，可以通过邮件联系。",
      en: "For Ashen Moonfront, playtests, or collaboration, email is the best starting point.",
    },
  } satisfies SectionCopy,
  cta: {
    zh: "发送邮件",
    en: "Send Email",
  },
};

export const footer = {
  copyright: {
    zh: "© 2026 手术刀工作室 / Scalpel Studio. All rights reserved.",
    en: "© 2026 Scalpel Studio. All rights reserved.",
  },
  slogan: brand.slogan,
};
