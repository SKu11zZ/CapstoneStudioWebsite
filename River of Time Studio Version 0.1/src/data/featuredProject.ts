import type { LocalizedText } from "../i18n/types";

type Detail = {
  label: LocalizedText;
  value: LocalizedText;
};

export const featuredProject = {
  title: {
    zh: "长河彼岸",
    en: "Beyond the River of Time",
  },
  titleLine: {
    zh: "《长河彼岸》 / Beyond the River of Time",
    en: "Beyond the River of Time",
  },
  chapter: {
    zh: "Chapter 01 / 岸边回声",
    en: "Chapter 01 / Echoes on the Shore",
  },
  details: [
    {
      label: { zh: "类型", en: "Genre" },
      value: {
        zh: "叙事 RPG / 奇幻冒险 / 选择驱动",
        en: "Narrative RPG / Fantasy Adventure / Choice-Driven",
      },
    },
    {
      label: { zh: "平台", en: "Platform" },
      value: { zh: "PC / Windows", en: "PC / Windows" },
    },
    {
      label: { zh: "状态", en: "Status" },
      value: { zh: "原型开发中", en: "Prototype in Development" },
    },
  ] satisfies Detail[],
  paragraphs: [
    {
      zh: "玩家扮演一名能听见过去回声的旅人，沿着一条贯穿世界与时代的神秘长河前行。每到达一座城镇、遗迹或时代残影，玩家都会遇见被时间困住的人、物品和记忆。",
      en: "Players take the role of a traveler who can hear echoes from the past, following a mysterious river through worlds and eras. In towns, ruins, and echoes of lost eras, they meet people, objects, and memories trapped by time.",
    },
    {
      zh: "游戏围绕角色关系和选择后果展开。玩家收集记忆碎片，理解伙伴的过去，并决定哪些故事应该被保存，哪些伤口必须被放下。",
      en: "The game centers on character bonds and consequences. Players collect memory fragments, understand the past of their companions, and decide which stories should be preserved and which wounds must finally be released.",
    },
  ],
  features: [
    {
      title: { zh: "时间回声", en: "Time Echoes" },
      body: {
        zh: "在地点、物品和角色身上听见过去的片段",
        en: "Hear fragments of the past from places, objects, and characters",
      },
    },
    {
      title: { zh: "选择留痕", en: "Persistent Choices" },
      body: {
        zh: "关键选择会改变角色关系、城镇状态和结局",
        en: "Key decisions shape relationships, towns, and endings",
      },
    },
    {
      title: { zh: "伙伴关系", en: "Companion Bonds" },
      body: {
        zh: "每位伙伴都有自己的遗憾、秘密和未完成的旅程",
        en: "Every companion carries regrets, secrets, and unfinished journeys",
      },
    },
    {
      title: { zh: "轻量战斗", en: "Lightweight Combat" },
      body: {
        zh: "战斗服务叙事节奏，不压过角色和探索",
        en: "Combat supports the narrative rhythm without overwhelming exploration",
      },
    },
  ],
  slogan: {
    zh: "河流带走了一切，也记得一切",
    en: "The river takes everything away and remembers it all",
  },
  ctas: [
    { href: "#characters", label: { zh: "查看角色", en: "Meet Characters" } },
    { href: "#tech-notes", label: { zh: "阅读技术分享", en: "Read Tech Notes" } },
    { href: "#recruitment", label: { zh: "加入测试", en: "Join Playtest" } },
  ],
};
