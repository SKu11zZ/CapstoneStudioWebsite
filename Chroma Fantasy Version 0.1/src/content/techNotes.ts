import { assetManifest } from "./assetManifest";

export const techNotes = [
  {
    id: "color-mood",
    title: { zh: "如何用低饱和色彩建立幻想世界的情绪", en: "Building Fantasy Mood with Low-Saturation Color" },
    category: "Art Direction",
    date: "2026.07",
    summary: {
      zh: "从雾蓝、旧纸色和淡金高光开始，让场景像一段被慢慢想起的记忆",
      en: "Starting from mist blue, aged paper tones, and soft gold highlights, we shape scenes that feel like memories returning",
    },
    image: assetManifest.tech.colorMood,
  },
  {
    id: "cinematic-quests",
    title: { zh: "开放世界中的电影叙事", en: "Cinematic Narrative in Open Worlds" },
    category: "Narrative Design",
    date: "2026.07",
    summary: {
      zh: "我们希望任务不是清单，而是一段由角色、地点和镜头共同推动的旅程",
      en: "We want quests to feel less like checklists and more like journeys shaped by characters, places, and camera language",
    },
    image: assetManifest.tech.cinematicQuests,
  },
  {
    id: "concept-to-space",
    title: { zh: "从概念图到可探索场景", en: "From Concept Art to Explorable Space" },
    category: "World Building",
    date: "2026.07",
    summary: {
      zh: "厚涂概念图需要被拆解成路径、视线、地标、互动点和玩家节奏",
      en: "Painterly concept art becomes playable through paths, sightlines, landmarks, interaction points, and pacing",
    },
    image: assetManifest.tech.conceptToSpace,
  },
  {
    id: "character-bonds",
    title: { zh: "角色关系如何影响探索路线", en: "How Character Bonds Shape Exploration" },
    category: "System Design",
    date: "2026.07",
    summary: {
      zh: "伙伴关系不只是好感度，而是玩家理解世界和打开新区域的方式",
      en: "Character bonds are not just affinity values, but a way for players to understand the world and unlock new routes",
    },
    image: assetManifest.tech.characterBonds,
  },
  {
    id: "soft-focus",
    title: { zh: "柔焦与浅景深在游戏画面中的应用", en: "Soft Focus and Shallow Depth in Game Scenes" },
    category: "Cinematic Design",
    date: "2026.07",
    summary: {
      zh: "我们用镜头感控制注意力，让场景更像电影瞬间而不是信息面板",
      en: "We use camera feeling to guide attention, making scenes feel like cinematic moments instead of information panels",
    },
    image: assetManifest.tech.softFocus,
  },
];
