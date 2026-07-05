import type { TeamMember } from "../types";

export const team: TeamMember[] = [
  {
    id: "moore",
    name: "Moore",
    role: { zh: "方向 / 技术美术", en: "Direction / Tech Art" },
    bio: {
      zh: "负责游戏方向、视觉风格、玩法原型和 Unreal Engine 技术实现。",
      en: "Creative direction, visual style, gameplay prototypes, and Unreal Engine implementation.",
    },
    signal: "CR",
  },
  {
    id: "rin",
    name: "Rin",
    role: { zh: "玩法程序", en: "Gameplay Code" },
    bio: {
      zh: "负责玩家控制、武器系统、敌人 AI、塔防建筑和任务逻辑。",
      en: "Player controls, weapons, enemy AI, defensive buildings, and mission logic.",
    },
    signal: "GP",
  },
  {
    id: "yao",
    name: "Yao",
    role: { zh: "环境美术", en: "Environment Art" },
    bio: {
      zh: "负责月面基地、工业设施、战场地形和场景搭建。",
      en: "Lunar bases, industrial facilities, battlefield terrain, and scene assembly.",
    },
    signal: "EA",
  },
  {
    id: "k",
    name: "K",
    role: { zh: "关卡 / 系统", en: "Level / Systems" },
    bio: {
      zh: "负责关卡设计、敌潮节奏、职业分工和玩家成长系统。",
      en: "Levels, enemy wave pacing, player roles, and progression systems.",
    },
    signal: "GD",
  },
  {
    id: "echo",
    name: "Echo",
    role: { zh: "声音设计", en: "Audio Design" },
    bio: {
      zh: "负责武器音效、环境氛围、敌人声音和战斗反馈。",
      en: "Weapon audio, ambient soundscapes, enemy sounds, and combat feedback.",
    },
    signal: "SD",
  },
];
