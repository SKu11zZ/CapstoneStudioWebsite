import type { LocalizedList, LocalizedText } from "../i18n/types";
import { assetManifest } from "./assetManifest";

export const siteContent = {
  meta: {
    title: {
      zh: "绘彩幻想工作室 / Chroma Fantasy Studio",
      en: "Chroma Fantasy Studio",
    },
    description: {
      zh: "绘彩幻想工作室专注于开放世界、电影叙事、幻想角色冒险和情绪驱动的游戏体验",
      en: "Chroma Fantasy Studio creates open-world and cinematic narrative games focused on characters, journeys, and emotionally driven exploration",
    },
  },
  nav: [
    { href: "#home", label: { zh: "首页", en: "Home" } },
    { href: "#featured", label: { zh: "主推", en: "Featured" } },
    { href: "#tech", label: { zh: "技术分享", en: "Tech Notes" } },
    { href: "#games", label: { zh: "游戏列表", en: "Games" } },
    { href: "#characters", label: { zh: "角色档案", en: "Characters" } },
    { href: "#playtest", label: { zh: "玩家招募", en: "Playtest" } },
    { href: "#team", label: { zh: "团队", en: "Team" } },
    { href: "#contact", label: { zh: "联系", en: "Contact" } },
  ],
  studio: {
    name: { zh: "绘彩幻想工作室", en: "Chroma Fantasy Studio" },
    englishName: "Chroma Fantasy Studio",
    tagline: {
      zh: "把幻想画成世界，把世界讲成故事",
      en: "We paint worlds into stories",
    },
    positioning: {
      zh: "我们创作开放世界与电影叙事游戏，关注角色、旅途、场景记忆和情绪驱动的探索体验",
      en: "We create open-world and cinematic narrative games focused on characters, journeys, remembered places, and emotionally driven exploration",
    },
  },
  hero: {
    eyebrow: { zh: "半写实幻想游戏工作室", en: "Painterly Fantasy Game Studio" },
    project: { zh: "主推项目：云上旧城", en: "Featured Project: City Above the Clouds" },
    genre: {
      zh: "开放世界 / 电影叙事 / 角色冒险",
      en: "Open World / Cinematic Narrative / Character Adventure",
    },
    buttons: [
      { href: "#featured", label: { zh: "查看主推游戏", en: "View Featured Game" } },
      { href: "#characters", label: { zh: "浏览角色档案", en: "Meet the Characters" } },
      { href: "#playtest", label: { zh: "申请试玩", en: "Apply for Playtest" } },
    ],
    background: assetManifest.hero.background,
    character: assetManifest.hero.character,
  },
  featuredGame: {
    title: { zh: "云上旧城", en: "City Above the Clouds" },
    sectionTitle: { zh: "主推游戏", en: "Featured Game" },
    type: {
      zh: "开放世界 / 电影叙事 / 角色冒险 / 幻想 RPG",
      en: "Open World / Cinematic Narrative / Character Adventure / Fantasy RPG",
    },
    platform: "PC / Console",
    status: { zh: "Vertical Slice 开发中", en: "Vertical Slice in Development" },
    summary: {
      zh: "在漂浮于云海之上的旧王国废墟中，玩家扮演一名失去记忆的巡游画师，用画笔记录世界、唤醒遗迹，并逐渐拼回一场被天空掩埋的战争真相",
      en: "In the ruins of an old kingdom floating above the clouds, players become a wandering painter who records the world, awakens ancient relics, and pieces together the truth of a war buried by the sky",
    },
    detail: {
      zh: "云上旧城是一款开放世界电影叙事冒险游戏。玩家将在浮岛、云海、古代城市、森林遗迹和天空列车之间旅行。游戏不只强调战斗，更强调旅途、角色关系、场景叙事和情绪驱动的探索。玩家可以通过绘制、记录、修复壁画和收集记忆碎片影响世界状态，让被遗忘的地点重新显现",
      en: "City Above the Clouds is an open-world cinematic narrative adventure. Players travel across floating islands, cloud seas, ancient cities, forest ruins, and sky trains. The game focuses not only on combat, but on journeys, character relationships, environmental storytelling, and emotionally driven exploration. Through painting, recording, restoring murals, and collecting memory fragments, players can alter the state of the world and bring forgotten places back into view",
    },
    highlights: {
      zh: [
        "低饱和厚涂幻想开放世界",
        "电影化叙事任务",
        "角色关系驱动的剧情推进",
        "用绘画作为探索与解谜机制",
        "云海、浮岛、旧城和遗迹组成的幻想地貌",
        "温柔但带有失落感的故事气质",
        "半写实二次元角色表现",
      ],
      en: [
        "A low-saturation painterly fantasy open world",
        "Cinematic narrative quests",
        "Story progression driven by character relationships",
        "Painting as a mechanic for exploration and puzzle solving",
        "A fantasy landscape of cloud seas, floating islands, old cities, and ruins",
        "A gentle story with a sense of loss",
        "Semi-realistic anime character presentation",
      ],
    } satisfies LocalizedList,
    promo: {
      zh: "天空藏起了一座城市，也藏起了所有人不愿记得的过去",
      en: "The sky hides a city and a past no one wants to remember",
    },
    buttons: [
      { href: "#games", label: { zh: "查看世界设定", en: "View World" } },
      { href: "#characters", label: { zh: "认识角色", en: "Meet Characters" } },
      { href: "#playtest", label: { zh: "申请试玩", en: "Apply for Playtest" } },
    ],
    image: assetManifest.games.city,
  },
  sectionLabels: {
    games: { zh: "游戏列表", en: "Games" },
    characters: { zh: "角色档案", en: "Characters" },
    team: { zh: "团队成员", en: "Team" },
  } satisfies Record<string, LocalizedText>,
};
