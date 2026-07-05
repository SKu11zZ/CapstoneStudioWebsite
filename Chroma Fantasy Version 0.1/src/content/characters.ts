import { assetManifest } from "./assetManifest";

export const characters = [
  {
    id: "ailo",
    name: { zh: "艾洛", en: "Ailo" },
    role: { zh: "失忆的巡游画师", en: "Wandering Painter without Memories" },
    project: "云上旧城 / City Above the Clouds",
    quote: {
      zh: "如果记忆会褪色，那我就把它重新画下来",
      en: "If memories fade, I will paint them back into the world",
    },
    background: {
      zh: "背着画箱旅行的年轻画师，能够看见遗迹中残留的色彩回声",
      en: "A young painter carrying a travel paint box, able to see color echoes left inside ancient ruins",
    },
    tags: { zh: ["画笔", "记忆", "旧城"], en: ["Brush", "Memory", "Old City"] },
    image: assetManifest.characters.ailo,
  },
  {
    id: "lumi",
    name: { zh: "露弥", en: "Lumi" },
    role: { zh: "天空列车的引路人", en: "Guide of the Sky Train" },
    project: "云上旧城 / City Above the Clouds",
    quote: {
      zh: "别看云层下面，那里都是过去",
      en: "Do not look beneath the clouds, everything there is the past",
    },
    background: {
      zh: "看似轻快的少女，知道许多旧城的秘密，却总是避开关于战争的话题",
      en: "A bright but evasive girl who knows many secrets of the old city and avoids speaking of the war",
    },
    tags: { zh: ["列车", "云海", "秘密"], en: ["Train", "Cloud Sea", "Secrets"] },
    image: assetManifest.characters.lumi,
  },
  {
    id: "thane",
    name: { zh: "塞恩", en: "Thane" },
    role: { zh: "旧王国守门人", en: "Gatekeeper of the Old Kingdom" },
    project: "云上旧城 / City Above the Clouds",
    quote: {
      zh: "门从未锁上，只是没人敢进去",
      en: "The gate was never locked, no one simply dared to enter",
    },
    background: {
      zh: "守着废弃城门的沉默骑士，已经等待一个不会回来的人很多年",
      en: "A silent knight guarding an abandoned gate, waiting for someone who will never return",
    },
    tags: { zh: ["骑士", "城门", "誓言"], en: ["Knight", "Gate", "Oath"] },
    image: assetManifest.characters.thane,
  },
  {
    id: "mira",
    name: { zh: "米拉", en: "Mira" },
    role: { zh: "修复壁画的学者", en: "Scholar of Restored Murals" },
    project: "云上旧城 / City Above the Clouds",
    quote: {
      zh: "有些画不是被毁掉的，是被故意留白的",
      en: "Some paintings were not destroyed, they were deliberately left blank",
    },
    background: {
      zh: "相信所有历史都能被重新拼合，但越接近真相，越怀疑自己正在修复的是一场谎言",
      en: "She believes every history can be restored, but the closer she gets to the truth, the more she suspects she is restoring a lie",
    },
    tags: { zh: ["壁画", "历史", "留白"], en: ["Mural", "History", "Blank Space"] },
    image: assetManifest.characters.mira,
  },
  {
    id: "noa",
    name: { zh: "诺雅", en: "Noa" },
    role: { zh: "追逐星尘的旅人", en: "Traveler Chasing Stardust" },
    project: "星眠原野 / Starfall Meadow",
    quote: {
      zh: "星星落下来的地方，一定有人正在许愿",
      en: "Where stars fall, someone must be making a wish",
    },
    background: {
      zh: "总是在夜晚出发的年轻旅人，相信每一片星尘都能指向一个尚未完成的故事",
      en: "A young traveler who always departs at night, believing every piece of stardust points toward an unfinished story",
    },
    tags: { zh: ["星尘", "原野", "愿望"], en: ["Stardust", "Meadow", "Wish"] },
    image: assetManifest.characters.noa,
  },
];
