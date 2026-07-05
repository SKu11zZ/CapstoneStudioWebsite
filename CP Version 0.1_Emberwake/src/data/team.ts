import type { Localized, TeamMember } from "../types/site";

export const team: Localized<TeamMember[]> = {
  en: [
    {
      id: "mira",
      name: "Mira Vale",
      role: "Creative Director",
      bio: "Shapes the emotional rulebook for every world before the first system is built.",
      tags: ["world memory", "narrative systems", "tone"],
      monogram: "MV"
    },
    {
      id: "ren",
      name: "Ren Kade",
      role: "Technical Director",
      bio: "Turns persistent player consequence into stable tools, saves, and readable gameplay loops.",
      tags: ["engine", "tools", "simulation"],
      monogram: "RK"
    },
    {
      id: "sable",
      name: "Sable Lin",
      role: "Art Director",
      bio: "Builds the studio's visual language from silhouettes, material studies, and quiet ruins.",
      tags: ["concept", "lighting", "interfaces"],
      monogram: "SL"
    },
    {
      id: "iori",
      name: "Iori Chen",
      role: "Gameplay Designer",
      bio: "Designs routes, risks, and player-made solutions that stay visible after the moment passes.",
      tags: ["levels", "puzzles", "systems"],
      monogram: "IC"
    },
    {
      id: "noa",
      name: "Noa Finch",
      role: "Sound Designer",
      bio: "Records the studio's unfinished worlds as if the walls are listening back.",
      tags: ["foley", "music", "ambience"],
      monogram: "NF"
    },
    {
      id: "kai",
      name: "Kai Morgan",
      role: "Producer",
      bio: "Keeps milestones honest, builds playtest rituals, and protects the work from becoming noise.",
      tags: ["production", "playtests", "press"],
      monogram: "KM"
    }
  ],
  zh: [
    {
      id: "mira",
      name: "Mira Vale",
      role: "创意总监",
      bio: "在第一套系统成型之前，先为每个世界定下情绪与记忆规则。",
      tags: ["世界记忆", "叙事系统", "气质"],
      monogram: "MV"
    },
    {
      id: "ren",
      name: "Ren Kade",
      role: "技术总监",
      bio: "把玩家造成的持久影响做成稳定的工具、存档和可读的玩法循环。",
      tags: ["引擎", "工具", "模拟"],
      monogram: "RK"
    },
    {
      id: "sable",
      name: "Sable Lin",
      role: "美术总监",
      bio: "用剪影、材质研究和安静的废墟搭建工作室的视觉语言。",
      tags: ["概念", "灯光", "界面"],
      monogram: "SL"
    },
    {
      id: "iori",
      name: "Iori Chen",
      role: "玩法设计师",
      bio: "设计路线、风险和玩家自造解法，并让它们在事件结束后仍然可见。",
      tags: ["关卡", "谜题", "系统"],
      monogram: "IC"
    },
    {
      id: "noa",
      name: "Noa Finch",
      role: "声音设计师",
      bio: "记录那些未完成的世界，仿佛墙壁也在反过来倾听。",
      tags: ["拟音", "音乐", "环境声"],
      monogram: "NF"
    },
    {
      id: "kai",
      name: "Kai Morgan",
      role: "制片 / 项目管理",
      bio: "让里程碑保持诚实，建立试玩节奏，并保护作品不被噪音吞没。",
      tags: ["制片", "试玩", "媒体"],
      monogram: "KM"
    }
  ]
};
