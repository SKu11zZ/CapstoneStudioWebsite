export type Language = "en" | "zh";

export type Localized<T> = Record<Language, T>;

export type NavLink = {
  id: string;
  href: string;
  label: string;
};

export type NavItem = NavLink;

export type LinkConfig = {
  steamUrl: string;
  discordUrl: string;
  youtubeUrl: string;
  twitterUrl: string;
  pressKitUrl: string;
  contactEmail: string;
};

export type GameStatus = "featured" | "dev" | "released" | "proto";

export type Game = {
  id: string;
  title: string;
  zhTitle?: string;
  status: string;
  statusKey: GameStatus;
  genre: string;
  platforms: string;
  description: string;
  cta: string;
  ctaHref: string;
  coverLabel: string;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  tags: string[];
  monogram: string;
};

export type FeaturedHighlight = {
  title: string;
  body: string;
};

export type MediaCategory = "featured" | "gameplay" | "concept" | "trailer";
export type MediaKind = "image" | "video" | "placeholder";

export type MediaItem = {
  id: string;
  game: string;
  label: string;
  meta: string;
  description: string;
  category: MediaCategory;
  kind: MediaKind;
  aspect: "16:9" | "4:3" | "3:4" | "21:9";
};

export type MediaFilter = "all" | MediaCategory;

export type NewsItem = {
  date: string;
  tag: string;
  title: string;
  excerpt: string;
  href: string;
};

export type PartnerItem = {
  title: string;
  body: string;
};

export type TimelineItem = {
  phase: string;
  date: string;
  title: string;
  body: string;
};

export type FooterLink = {
  label: string;
  href: string;
};

export type SiteContent = {
  documentTitle: string;
  brand: {
    short: string;
    full: string;
    zh: string;
  };
  nav: NavLink[];
  a11y: {
    nav: string;
    menu: string;
    closeMenu: string;
    language: string;
    mediaFilter: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    zhTitle: string;
    subtitle: string;
    start: string;
    featuredTag: string;
    featuredTitle: string;
    featuredMeta: string[];
    ctaWishlist: string;
    ctaGames: string;
    ctaDiscord: string;
    scroll: string;
  };
  featured: {
    eyebrow: string;
    title: string;
    meta: string;
    quote: string;
    body: string;
    ctaTrailer: string;
    trailerLabel: string;
    shotLabel: string;
    highlights: FeaturedHighlight[];
  };
  gamesIntro: {
    eyebrow: string;
    title: string;
    body: string;
  };
  teamIntro: {
    eyebrow: string;
    title: string;
    body: string;
  };
  studio: {
    eyebrow: string;
    title: string;
    body: string;
    promise: string;
    principles: string[];
  };
  media: {
    eyebrow: string;
    title: string;
    tabs: Record<MediaFilter, string>;
    body: string;
  };
  news: {
    eyebrow: string;
    title: string;
    all: string;
    readMore: string;
    items: NewsItem[];
  };
  community: {
    title: string;
    body: string;
    ctaDiscord: string;
    ctaWishlist: string;
    emailPlaceholder: string;
    subscribe: string;
    emptyEmail: string;
    invalidEmail: string;
    comingSoon: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    email: string;
    pressKit: string;
    social: string;
    subscribeTitle: string;
    emailPlaceholder: string;
    subscribe: string;
    emptyEmail: string;
    invalidEmail: string;
    comingSoon: string;
  };
  timeline: {
    eyebrow: string;
    title: string;
    body: string;
  };
  partners: {
    eyebrow: string;
    title: string;
    body: string;
    status: string;
    contact: string;
    pressKit: string;
    items: PartnerItem[];
  };
  footer: {
    copyright: string;
    links: FooterLink[];
  };
};
