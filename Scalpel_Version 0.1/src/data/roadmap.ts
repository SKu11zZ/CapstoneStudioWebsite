import type { RoadmapPhase } from "../types";

export const roadmap: RoadmapPhase[] = [
  {
    id: "phase-01",
    phase: "Phase 01",
    title: { zh: "Prototype", en: "Prototype" },
    body: {
      zh: "完成核心循环：探索地形、收集资源、建造防线、抵御敌潮。",
      en: "Complete the core loop: explore terrain, gather resources, build defenses, and survive enemy waves.",
    },
    status: { zh: "验证中", en: "Validating" },
  },
  {
    id: "phase-02",
    phase: "Phase 02",
    title: { zh: "Vertical Slice", en: "Vertical Slice" },
    body: {
      zh: "完成一张高完成度地图，加入完整 UI、音效、敌人类型、武器系统和关卡结算。",
      en: "Build one polished map with complete UI, audio, enemy types, weapon systems, and mission results.",
    },
    status: { zh: "当前阶段", en: "Current" },
  },
  {
    id: "phase-03",
    phase: "Phase 03",
    title: { zh: "Co-op Ready", en: "Co-op Ready" },
    body: {
      zh: "预留并完善多人合作接口，测试玩家职业分工、同步逻辑和合作建造流程。",
      en: "Prepare multiplayer architecture, test player roles, synchronization logic, and cooperative building flow.",
    },
    status: { zh: "下一阶段", en: "Next" },
  },
  {
    id: "phase-04",
    phase: "Phase 04",
    title: { zh: "Public Demo", en: "Public Demo" },
    body: {
      zh: "发布公开试玩版本，收集玩家反馈，优化节奏、难度和关卡可读性。",
      en: "Release a public demo, collect player feedback, and improve pacing, difficulty, and level readability.",
    },
    status: { zh: "计划中", en: "Planned" },
  },
  {
    id: "phase-05",
    phase: "Phase 05",
    title: { zh: "Early Access", en: "Early Access" },
    body: {
      zh: "扩展地图、敌人、武器、建筑和长期成长系统。",
      en: "Expand maps, enemies, weapons, buildings, and long-term progression systems.",
    },
    status: { zh: "长期目标", en: "Long-Term" },
  },
];
