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
      zh: "玩家扮演一名能够听见过去回声的旅人，沿着一条贯穿世界与时代的神秘长河，寻找被时间抹去的王国、亲人和真相。",
      en: "Players take the role of a traveler who can hear echoes from the past, following a mysterious river that flows through worlds and eras to search for a kingdom, a family, and a truth erased by time.",
    },
    {
      zh: "《长河彼岸》是一款以角色关系和选择后果为核心的叙事 RPG。玩家会在不同城镇、遗迹和时代残影之间旅行，收集记忆碎片，理解伙伴的过去，并决定哪些故事应该被保存，哪些伤口必须被放下。",
      en: "Beyond the River of Time is a narrative RPG centered on character bonds and meaningful consequences. Players travel through towns, ruins, and echoes of lost eras, collect memory fragments, understand the past of their companions, and decide which stories should be preserved and which wounds must finally be released.",
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
    {
      title: { zh: "世界档案", en: "World Archives" },
      body: {
        zh: "玩家逐步拼合王国、文明和历史断层",
        en: "Reconstruct kingdoms, civilizations, and broken histories piece by piece",
      },
    },
  ],
  slogan: {
    zh: "河流带走了一切，也记得一切",
    en: "The river takes everything away and remembers it all",
  },
  ctas: [
    { href: "#characters", label: { zh: "查看角色", en: "Meet Characters" } },
    { href: "#recruitment", label: { zh: "加入测试", en: "Join Playtest" } },
    { href: "#tech-notes", label: { zh: "阅读技术分享", en: "Read Tech Notes" } },
  ],
};
