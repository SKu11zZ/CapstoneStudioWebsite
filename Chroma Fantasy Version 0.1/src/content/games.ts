import { assetManifest } from "./assetManifest";

export const games = [
  {
    id: "city",
    title: { zh: "云上旧城", en: "City Above the Clouds" },
    type: { zh: "开放世界 / 电影叙事 / 幻想 RPG", en: "Open World / Cinematic Narrative / Fantasy RPG" },
    status: { zh: "Vertical Slice 开发中", en: "Vertical Slice in Development" },
    summary: {
      zh: "在云海之上的旧城废墟中，用画笔唤醒被遗忘的世界",
      en: "Awaken a forgotten world with a painter's brush in the ruins above the clouds",
    },
    cardCopy: {
      zh: "天空藏起了一座城市，也藏起了一段无人愿意记得的过去",
      en: "The sky hides a city and a past no one wants to remember",
    },
    image: assetManifest.games.city,
  },
  {
    id: "mirror-lake",
    title: { zh: "镜湖旅人", en: "Wanderer of Mirror Lake" },
    type: { zh: "叙事冒险 / 开放区域探索 / 奇幻", en: "Narrative Adventure / Open-Zone Exploration / Fantasy" },
    status: { zh: "概念阶段", en: "Concept Phase" },
    summary: {
      zh: "来到会倒映不同时间线的湖区，寻找一座小镇消失的原因",
      en: "Explore a lake that reflects different timelines and uncover why a town disappeared",
    },
    cardCopy: {
      zh: "湖面倒映的不是现在，而是你差一点抵达的结局",
      en: "The lake reflects not the present, but the ending you almost reached",
    },
    image: assetManifest.games.mirrorLake,
  },
  {
    id: "starfall",
    title: { zh: "星眠原野", en: "Starfall Meadow" },
    type: { zh: "开放世界 RPG / 伙伴冒险 / 轻战斗", en: "Open-World RPG / Companion Adventure / Light Combat" },
    status: { zh: "早期概念", en: "Early Concept" },
    summary: {
      zh: "和年轻旅人们穿越会在夜晚落下星尘的原野",
      en: "Cross a meadow where stardust falls at night with a group of young travelers",
    },
    cardCopy: {
      zh: "每一场篝火都会亮起一段没说出口的愿望",
      en: "Every campfire lights up a wish left unspoken",
    },
    image: assetManifest.games.starfall,
  },
  {
    id: "whitebird",
    title: { zh: "白鸟离港", en: "Whitebird Departure" },
    type: { zh: "电影叙事 / 角色剧情 / 城市幻想", en: "Cinematic Narrative / Character Drama / Urban Fantasy" },
    status: { zh: "故事原型中", en: "Story Prototype" },
    summary: {
      zh: "在永远黄昏的港口城市，为无法告别的人送出最后一封信",
      en: "Deliver final letters for those who cannot say goodbye in a harbor city trapped at dusk",
    },
    cardCopy: {
      zh: "白鸟飞过码头时，总有人终于学会告别",
      en: "When white birds pass the pier, someone finally learns to say goodbye",
    },
    image: assetManifest.games.whitebird,
  },
  {
    id: "mistwood",
    title: { zh: "雾森边境", en: "Mistwood Frontier" },
    type: { zh: "开放世界探索 / 幻想生存 / 轻 RPG", en: "Open-World Exploration / Fantasy Survival / Light RPG" },
    status: { zh: "设计验证中", en: "Design Validation" },
    summary: {
      zh: "进入被雾包围的古老森林，寻找失踪的巡林队",
      en: "Enter an ancient forest wrapped in mist and search for a missing ranger team",
    },
    cardCopy: {
      zh: "森林没有迷路，迷路的是走进森林的人",
      en: "The forest is not lost, only those who enter it are",
    },
    image: assetManifest.games.mistwood,
  },
  {
    id: "painted-dream",
    title: { zh: "绘梦纪行", en: "Painted Dream Journey" },
    type: { zh: "叙事 RPG / 美术解谜 / 章节冒险", en: "Narrative RPG / Art Puzzle / Chapter Adventure" },
    status: { zh: "概念储备", en: "Concept Reserve" },
    summary: {
      zh: "进入未完成的画作世界，通过补全色彩改变角色命运",
      en: "Enter unfinished painted worlds and change character fates by restoring color",
    },
    cardCopy: {
      zh: "有些梦不是醒来就结束，而是等你把它画完",
      en: "Some dreams do not end when you wake, they wait for you to finish painting them",
    },
    image: assetManifest.games.paintedDream,
  },
];
