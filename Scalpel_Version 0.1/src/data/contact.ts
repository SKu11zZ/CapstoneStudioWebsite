import type { ContactLink } from "../types";

export const contactLinks: ContactLink[] = [
  {
    id: "email",
    label: "Email",
    value: {
      zh: "contact@scalpelstudio.games",
      en: "contact@scalpelstudio.games",
    },
    href: "mailto:contact@scalpelstudio.games",
    icon: "/assets/icons/paper-plane-white.png",
  },
  {
    id: "bilibili",
    label: "Bilibili",
    value: { zh: "手术刀工作室", en: "Scalpel Studio" },
    href: "#",
    icon: "/assets/icons/link-white.png",
  },
  {
    id: "discord",
    label: "Discord",
    value: { zh: "测试社区筹备中", en: "Playtest community in setup" },
    href: "#",
    icon: "/assets/icons/message-white.png",
  },
];
