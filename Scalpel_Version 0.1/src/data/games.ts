import type { Game } from "../types";

export const games: Game[] = [
  {
    id: "ashen-moonfront",
    name: { zh: "灰月防线", en: "Ashen Moonfront" },
    englishName: "Ashen Moonfront",
    status: {
      zh: "Vertical Slice 开发中",
      en: "Vertical Slice in Development",
    },
    genre: {
      zh: "合作 PVE / 战术防守",
      en: "Co-op PVE / Tactical Defense",
    },
    platform: { zh: "PC / Windows", en: "PC / Windows" },
    owner: { zh: "负责人：Moore", en: "Owner: Moore" },
    stage: { zh: "首张地图验证", en: "First Map Validation" },
    players: { zh: "1–4 人合作", en: "1–4 Player Co-op" },
    tagline: {
      zh: "在月球废弃殖民区建立防线，守住最后一座仍在运行的通信塔。",
      en: "Build a defensive line across a ruined lunar colony and hold the last working communications tower.",
    },
    description: {
      zh: "当前主推项目，正在验证首张 PVE 地图、资源循环、炮塔部署和队友分工。",
      en: "The current featured project, validating the first PVE map, resource loop, turret placement, and role division.",
    },
    focus: [
      { zh: "月面峡谷与通信塔防守点", en: "Lunar canyon and tower holdout site" },
      { zh: "炮塔部署、资源压力、敌潮推进", en: "Turret placement, resource pressure, enemy waves" },
      { zh: "队友分工与临时阵线调整", en: "Role division and mid-run line adjustments" },
    ],
    button: { zh: "查看项目", en: "View Project" },
    href: "#featured",
  },
  {
    id: "incision-protocol",
    name: { zh: "切线协议", en: "Incision Protocol" },
    englishName: "Incision Protocol",
    status: { zh: "原型储备", en: "Prototype Reserve" },
    genre: {
      zh: "战术射击 / 任务撤离",
      en: "Tactical Shooter / Extraction Mission",
    },
    platform: { zh: "PC / Windows", en: "PC / Windows" },
    owner: { zh: "负责人：Rin", en: "Owner: Rin" },
    stage: { zh: "任务结构原型", en: "Mission Structure Prototype" },
    players: { zh: "1–4 人小队", en: "1–4 Player Squad" },
    tagline: {
      zh: "小队进入失控研究设施，在有限情报下完成清除、回收和撤离。",
      en: "A squad enters a compromised research facility to clear, recover, and extract under limited intelligence.",
    },
    description: {
      zh: "偏向任务结构和信息不完整的合作射击概念，目前维持轻量原型。",
      en: "A co-op shooter concept focused on mission structure and incomplete information, kept as a lightweight prototype.",
    },
    focus: [
      { zh: "有限情报下的路线选择", en: "Route choices under limited intelligence" },
      { zh: "清除、回收、撤离三段式目标", en: "Clear, recover, and extract objectives" },
      { zh: "武器反馈与短局任务节奏", en: "Weapon feel and compact mission pacing" },
    ],
    button: { zh: "查看概念", en: "View Concept" },
    href: "#games",
  },
  {
    id: "hivefall",
    name: { zh: "蜂巢坠落", en: "Hivefall" },
    englishName: "Hivefall",
    status: { zh: "概念阶段", en: "Concept Phase" },
    genre: {
      zh: "生存射击 / 防线建造",
      en: "Survival Shooter / Defense Building",
    },
    platform: { zh: "PC / Windows", en: "PC / Windows" },
    owner: { zh: "负责人：K", en: "Owner: K" },
    stage: { zh: "概念验证排期", en: "Concept Validation Queue" },
    players: { zh: "1–4 人合作", en: "1–4 Player Co-op" },
    tagline: {
      zh: "在感染区域边缘建立临时防线，阻止坠落蜂巢继续扩散。",
      en: "Build temporary defenses along the infection zone to stop a fallen hive from spreading.",
    },
    description: {
      zh: "更偏长期生存和区域压制的概念，后续会根据《灰月防线》的系统验证再推进。",
      en: "A longer-form survival and area-control concept, pending systems validated by Ashen Moonfront.",
    },
    focus: [
      { zh: "感染边界与临时防线", en: "Infection boundary and temporary defenses" },
      { zh: "区域压制、补给回收、撤退窗口", en: "Area control, supply recovery, retreat windows" },
      { zh: "长局生存与城市扩散压力", en: "Long-form survival and urban spread pressure" },
    ],
    button: { zh: "查看概念", en: "View Concept" },
    href: "#games",
  },
];
