import type { DevlogEntry } from "../types";

export const devlogs: DevlogEntry[] = [
  {
    id: "co-op-pve-direction",
    title: {
      zh: "为什么我们选择 PVE 合作作为第一个方向",
      en: "Why We Chose Co-op PVE as Our First Direction",
    },
    date: "2026.07",
    category: { zh: "方向", en: "Direction" },
    summary: {
      zh: "从团队规模、可验证循环和玩家协作压力出发，解释首个项目的核心选择。",
      en: "A look at team size, verifiable loops, and cooperative pressure behind our first project choice.",
    },
  },
  {
    id: "lunar-defense-terrain",
    title: {
      zh: "月面防线：如何让地形成为玩法的一部分",
      en: "Lunar Defense: Making Terrain Part of the Gameplay",
    },
    date: "2026.07",
    category: { zh: "关卡", en: "Level Design" },
    summary: {
      zh: "月面峡谷、山脊和开阔地如何改变炮塔、防线与玩家移动路线。",
      en: "How lunar canyons, ridges, and open areas change turrets, lines, and player routes.",
    },
  },
  {
    id: "tower-shooter-balance",
    title: {
      zh: "塔防和射击如何互相服务，而不是互相抢戏",
      en: "How Tower Defense and Shooting Can Support Each Other",
    },
    date: "2026.07",
    category: { zh: "系统", en: "Systems" },
    summary: {
      zh: "拆解建造、防守、资源和一线战斗之间的节奏关系。",
      en: "Breaking down pacing between building, defending, resources, and front-line combat.",
    },
  },
  {
    id: "vertical-slice-01",
    title: {
      zh: "灰月防线 Vertical Slice 开发记录 #01",
      en: "Ashen Moonfront Vertical Slice Devlog #01",
    },
    date: "2026.07",
    category: { zh: "开发记录", en: "Devlog" },
    summary: {
      zh: "记录首张 PVE 地图、基础敌潮和通讯塔防守目标的推进。",
      en: "Progress notes for the first PVE map, base wave logic, and communication tower objective.",
    },
  },
  {
    id: "enemy-wave-pressure",
    title: {
      zh: "敌潮设计：让玩家感到压力，而不是单纯刷怪",
      en: "Enemy Wave Design: Pressure Over Spawning",
    },
    date: "2026.07",
    category: { zh: "敌人", en: "Enemies" },
    summary: {
      zh: "讨论敌人如何寻找薄弱点、分散火力，并迫使队伍重构防线。",
      en: "How enemies seek weak points, split attention, and force the squad to rebuild defensive lines.",
    },
  },
];
