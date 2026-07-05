export type Language = "zh" | "en";

export type LocalizedString = Record<Language, string>;

export type SectionId =
  | "home"
  | "featured"
  | "about"
  | "games"
  | "devlog"
  | "team"
  | "contact";

export type NavItem = {
  id: SectionId;
  href: string;
  label: LocalizedString;
};

export type ActionLink = {
  label: LocalizedString;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  icon?: string;
};

export type SectionCopy = {
  eyebrow?: LocalizedString;
  title: LocalizedString;
  description?: LocalizedString;
};

export type Game = {
  id: string;
  name: LocalizedString;
  englishName: string;
  genre: LocalizedString;
  platform: LocalizedString;
  owner: LocalizedString;
  status: LocalizedString;
  stage: LocalizedString;
  players: LocalizedString;
  tagline: LocalizedString;
  description: LocalizedString;
  focus: LocalizedString[];
  button: LocalizedString;
  href: string;
};

export type RoadmapPhase = {
  id: string;
  phase: string;
  title: LocalizedString;
  body: LocalizedString;
  status: LocalizedString;
};

export type TeamMember = {
  id: string;
  name: string;
  role: LocalizedString;
  bio: LocalizedString;
  signal: string;
};

export type DevlogEntry = {
  id: string;
  title: LocalizedString;
  date: string;
  category: LocalizedString;
  summary: LocalizedString;
};

export type ContactLink = {
  id: string;
  label: string;
  value: LocalizedString;
  href: string;
  icon: string;
};
