import type { Game, Localized } from "../types/site";
import { links } from "./links";

export const games: Localized<Game[]> = {
  en: [
    {
      id: "lantern",
      title: "Project Lantern",
      zhTitle: "灯火计划",
      status: "Featured / In Development",
      statusKey: "featured",
      genre: "Adventure / Exploration / Atmospheric",
      platforms: "PC / Steam",
      description: "Carry a lantern through drowned ruins and leave light behind as your map.",
      cta: "Wishlist",
      ctaHref: links.steamUrl,
      coverLabel: "LANTERN CORE DOSSIER"
    },
    {
      id: "courier",
      title: "Moonwake Courier",
      zhTitle: "月潮信使",
      status: "In Development",
      statusKey: "dev",
      genre: "Narrative / Delivery / Cozy Mystery",
      platforms: "PC / Steam",
      description: "Deliver letters across a tide-locked city where every doorstep has a secret.",
      cta: "Follow Devlog",
      ctaHref: "#timeline",
      coverLabel: "TIDE ROUTE FILE"
    },
    {
      id: "arena",
      title: "Ashfall Arena",
      zhTitle: "灰烬竞技场",
      status: "Released",
      statusKey: "released",
      genre: "Action / Arena / Local Multiplayer",
      platforms: "PC / Itch.io",
      description: "A compact arena battler where the floor remembers damage from every round.",
      cta: "View Notes",
      ctaHref: "#visuals",
      coverLabel: "ARENA DAMAGE LOG"
    },
    {
      id: "orchard",
      title: "Iron Orchard",
      zhTitle: "铁树果园",
      status: "Prototype",
      statusKey: "proto",
      genre: "Strategy / Survival",
      platforms: "PC",
      description: "Grow a living fortress from metal roots before the red weather turns.",
      cta: "Request Brief",
      ctaHref: "#contact",
      coverLabel: "ORCHARD PROTOTYPE"
    }
  ],
  zh: [
    {
      id: "lantern",
      title: "Project Lantern",
      zhTitle: "灯火计划",
      status: "主推 / 开发中",
      statusKey: "featured",
      genre: "冒险 / 探索 / 氛围",
      platforms: "PC / Steam",
      description: "提着灯穿过被淹没的遗迹，把留下的光变成自己的地图。",
      cta: "加入愿望单",
      ctaHref: links.steamUrl,
      coverLabel: "灯火核心档案"
    },
    {
      id: "courier",
      title: "Moonwake Courier",
      zhTitle: "月潮信使",
      status: "开发中",
      statusKey: "dev",
      genre: "叙事 / 送信 / 温柔谜案",
      platforms: "PC / Steam",
      description: "在一座被月潮困住的城市里送信；每扇门后都有秘密。",
      cta: "关注日志",
      ctaHref: "#timeline",
      coverLabel: "潮汐路线文件"
    },
    {
      id: "arena",
      title: "Ashfall Arena",
      zhTitle: "灰烬竞技场",
      status: "已发售",
      statusKey: "released",
      genre: "动作 / 竞技场 / 本地多人",
      platforms: "PC / Itch.io",
      description: "一款紧凑的竞技场格斗游戏，地板会记住每一局留下的破坏。",
      cta: "查看记录",
      ctaHref: "#visuals",
      coverLabel: "竞技场损毁日志"
    },
    {
      id: "orchard",
      title: "Iron Orchard",
      zhTitle: "铁树果园",
      status: "原型阶段",
      statusKey: "proto",
      genre: "策略 / 生存",
      platforms: "PC",
      description: "在红色天气到来之前，用金属根系种出一座会生长的堡垒。",
      cta: "请求简报",
      ctaHref: "#contact",
      coverLabel: "铁树原型档案"
    }
  ]
};
