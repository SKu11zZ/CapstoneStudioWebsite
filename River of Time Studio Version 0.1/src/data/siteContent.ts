import type { LocalizedText } from "../i18n/types";

export const siteMeta = {
  title: {
    zh: "时光长河工作室 / River of Time Studio",
    en: "River of Time Studio",
  },
  description: {
    zh: "时光长河工作室专注于叙事游戏、RPG、奇幻世界、角色关系和选择驱动体验",
    en: "River of Time Studio creates narrative games and RPG experiences focused on time, memory, character bonds, and meaningful choices",
  },
};

export const navItems: { target: string; label: LocalizedText }[] = [
  { target: "hero", label: { zh: "首页", en: "Home" } },
  { target: "featured", label: { zh: "主推", en: "Featured" } },
  { target: "tech-notes", label: { zh: "技术分享", en: "Tech Notes" } },
  { target: "games", label: { zh: "游戏列表", en: "Games" } },
  { target: "characters", label: { zh: "角色档案", en: "Characters" } },
  { target: "recruitment", label: { zh: "玩家招募", en: "Recruitment" } },
  { target: "team", label: { zh: "团队成员", en: "Team" } },
  { target: "contact", label: { zh: "联系", en: "Contact" } },
];

export const heroContent = {
  title: {
    zh: "时光长河工作室",
    en: "River of Time Studio",
  },
  subtitle: {
    zh: "River of Time Studio",
    en: "We craft stories about time, choices, and people",
  },
  line: {
    zh: "我们制作关于时间、选择与人的故事",
    en: "Narrative Games / RPG / Fantasy Worlds / Character Bonds",
  },
  tags: {
    zh: ["叙事游戏", "RPG", "奇幻世界", "角色关系"],
    en: ["Narrative Games", "RPG", "Fantasy Worlds", "Character Bonds"],
  },
  echo: {
    zh: "每一段旅程，都会在长河中留下回声",
    en: "Every journey leaves an echo in the river",
  },
  studioType: {
    zh: "专注叙事类游戏和 RPG 的独立游戏工作室",
    en: "An independent studio for narrative games and RPGs",
  },
  ctas: [
    { href: "#featured", label: { zh: "查看主推", en: "View Featured" } },
    { href: "#characters", label: { zh: "浏览角色档案", en: "Browse Characters" } },
    { href: "#recruitment", label: { zh: "加入玩家招募", en: "Join Playtest" } },
  ],
};

export const sectionCopies = {
  featured: { title: { zh: "主推", en: "Featured" } },
  techNotes: {
    title: { zh: "技术分享", en: "Tech Notes" },
    intro: {
      zh: "我们记录叙事系统、RPG 工具和世界构建流程中的技术实验",
      en: "We document technical experiments in narrative systems, RPG tools, and world-building pipelines",
    },
  },
  games: { title: { zh: "游戏列表", en: "Games" } },
  characters: {
    title: { zh: "角色档案", en: "Characters" },
    intro: {
      zh: "每个角色都是长河中的一段回声",
      en: "Every character is an echo in the river",
    },
  },
  recruitment: {
    title: { zh: "玩家招募", en: "Recruitment" },
    intro: {
      zh: "我们正在寻找愿意阅读故事、体验原型并提出反馈的玩家",
      en: "We are looking for players who enjoy stories, prototypes, and thoughtful feedback",
    },
  },
  team: { title: { zh: "团队成员", en: "Team" } },
  contact: {
    title: { zh: "联系", en: "Contact" },
    intro: {
      zh: "想了解项目、参与测试或交流叙事 RPG 开发，欢迎联系时光长河工作室",
      en: "Interested in our projects, playtesting, or narrative RPG development discussions? Contact River of Time Studio",
    },
  },
};

export const footerContent = {
  copyright: {
    zh: "© 2026 时光长河工作室 / River of Time Studio",
    en: "© 2026 River of Time Studio",
  },
  slogan: {
    zh: "让故事流过时间，让选择留下回声",
    en: "Stories flow through time and choices leave echoes",
  },
};
