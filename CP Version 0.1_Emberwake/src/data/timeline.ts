import type { Localized, TimelineItem } from "../types/site";

export const timeline: Localized<TimelineItem[]> = {
  en: [
    { phase: "01", date: "Now", title: "Prototype Lock", body: "Lantern memory, traversal tools, and creature response systems are being hardened." },
    { phase: "02", date: "2026 Q4", title: "Vertical Slice", body: "A playable valley route with final art direction, audio language, and core save behavior." },
    { phase: "03", date: "2027", title: "Public Demo", body: "A focused Steam demo built around one ruin, one route, and many consequences." },
    { phase: "04", date: "TBA", title: "Launch Window", body: "Release date announced only when the world can carry the promise." }
  ],
  zh: [
    { phase: "01", date: "当前", title: "原型锁定", body: "正在加固灯火记忆、穿行工具和生物回应系统。" },
    { phase: "02", date: "2026 Q4", title: "垂直切片", body: "一条可玩的山谷路线，包含最终美术方向、声音语言和核心存档行为。" },
    { phase: "03", date: "2027", title: "公开 Demo", body: "围绕一座遗迹、一条路线和许多后果制作的 Steam 试玩版。" },
    { phase: "04", date: "待定", title: "发售窗口", body: "只有当这个世界能承担承诺时，才公布发售日期。" }
  ]
};
