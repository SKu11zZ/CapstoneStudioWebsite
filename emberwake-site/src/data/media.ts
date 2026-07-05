import type { Localized, MediaItem } from "../types/site";

export const mediaItems: Localized<MediaItem[]> = {
  en: [
    { id: "trailer", game: "Project Lantern", label: "First trailer frame", meta: "TRAILER / 16:9", description: "A locked-off lantern shot for the first announcement trailer.", category: "trailer", kind: "video", aspect: "16:9" },
    { id: "valley", game: "Project Lantern", label: "Drowned valley traversal", meta: "GAMEPLAY / 21:9", description: "Route markers, temporary bridges, and light left as navigation.", category: "gameplay", kind: "placeholder", aspect: "21:9" },
    { id: "lantern-concept", game: "Project Lantern", label: "Lantern behavior sketch", meta: "CONCEPT / 4:3", description: "A system study for light that permanently changes a ruin.", category: "concept", kind: "image", aspect: "4:3" },
    { id: "courier", game: "Moonwake Courier", label: "Moon gate delivery route", meta: "CONCEPT / 16:9", description: "A city crossing map where doors remember previous letters.", category: "concept", kind: "placeholder", aspect: "16:9" },
    { id: "arena", game: "Ashfall Arena", label: "Arena floor memory", meta: "FEATURED / 16:9", description: "A released match frame showing damaged terrain persisting between rounds.", category: "featured", kind: "image", aspect: "16:9" },
    { id: "orchard", game: "Iron Orchard", label: "Metal root prototype", meta: "GAMEPLAY / 4:3", description: "Early prototype capture of living defenses growing from ore roots.", category: "gameplay", kind: "placeholder", aspect: "4:3" }
  ],
  zh: [
    { id: "trailer", game: "灯火计划", label: "首支预告片画幅", meta: "预告 / 16:9", description: "用于首次公开预告的固定机位灯火镜头。", category: "trailer", kind: "video", aspect: "16:9" },
    { id: "valley", game: "灯火计划", label: "被淹没山谷穿行", meta: "实机 / 21:9", description: "路线标记、临时桥梁，以及被留下来当作导航的光。", category: "gameplay", kind: "placeholder", aspect: "21:9" },
    { id: "lantern-concept", game: "灯火计划", label: "灯火行为草图", meta: "概念 / 4:3", description: "研究一盏光如何永久改变遗迹系统。", category: "concept", kind: "image", aspect: "4:3" },
    { id: "courier", game: "月潮信使", label: "月门送信路线", meta: "概念 / 16:9", description: "一张城市穿行图，门会记得之前送来的信。", category: "concept", kind: "placeholder", aspect: "16:9" },
    { id: "arena", game: "灰烬竞技场", label: "竞技场地板记忆", meta: "主推 / 16:9", description: "已发售版本中的对局画幅，地形破坏会在回合之间保留。", category: "featured", kind: "image", aspect: "16:9" },
    { id: "orchard", game: "铁树果园", label: "金属根系原型", meta: "实机 / 4:3", description: "从矿根中生长出活体防线的早期原型捕捉。", category: "gameplay", kind: "placeholder", aspect: "4:3" }
  ]
};
