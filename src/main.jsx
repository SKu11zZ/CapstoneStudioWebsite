import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const localized = (en, zh) => ({ en, zh });

const icons = {
  brand: "/assets/icons/explore-products-white.png",
  menu: "/assets/icons/menu-white.png",
  close: "/assets/icons/close-white.png",
  play: "/assets/icons/play-circle-white.png",
  arrow: "/assets/icons/return-arrow-white.png",
  message: "/assets/icons/message-white.png",
  send: "/assets/icons/paper-plane-white.png",
  developer: "/assets/icons/developer-white.png",
  laptop: "/assets/icons/laptop-white.png",
  certificate: "/assets/icons/safety-certificate-white.png"
};

function Icon({ name, className = "" }) {
  return <img className={`asset-icon ${className}`} src={icons[name]} alt="" aria-hidden="true" />;
}

const statusLabels = {
  featured: localized("Featured", "主推"),
  development: localized("In Development", "开发中"),
  released: localized("Released", "已发布"),
  prototype: localized("Prototype", "原型")
};

const games = [
  {
    id: "lantern",
    featured: true,
    title: localized("Lumenfall", "坠光之境"),
    status: ["featured", "development"],
    genre: localized(["Adventure", "Exploration", "Atmospheric"], ["冒险", "探索", "氛围"]),
    platforms: ["PC", "Steam"],
    description: localized(
      "Carry the last lantern into drowned valleys, mark your routes, and watch the world answer with memory.",
      "你提着最后一盏灯，走进被淹没的山谷。你点亮的每一处都会一直亮着，道路打开，生灵苏醒，山谷沿着你走过的路线重建自己。"
    ),
    fantasy: localized(
      "Map a living valley where every glow you leave becomes a path back.",
      "绘制一座会呼吸的山谷；你留下的每一处微光，都会变成回来的路。"
    ),
    highlights: localized(
      [
        { title: "Light that does not forget", body: "Every lantern mark changes the valley for good." },
        { title: "Find your own path through ruins", body: "Ropes, planks, switches, and risky climbs become your route." },
        { title: "A world that answers back", body: "Creatures remember where you lit the dark." }
      ],
      [
        { title: "留下的光，不会熄灭", body: "你挂起的每盏灯都会永久改变山谷。几个小时后回来，它还亮着，被它唤醒的一切也都还在。" },
        { title: "在危险遗迹中自己开路", body: "绳索、木板、配置、想上钟楼，就自己把路搭出来。你搭出的每一条路，都永远属于你。" },
        { title: "一个会回应你的世界", body: "生灵会记住你的光在哪里。有的跟着光回家，有的想把它掐灭。山谷对你的回应，就是这个游戏的剧情。" }
      ]
    ),
    cta: localized("Wishlist Lumenfall", "愿望单《坠光之境》"),
    media: "lantern"
  },
  {
    id: "orchard",
    title: localized("Verdigris Orchard", "铜绿果园"),
    status: ["prototype"],
    genre: localized(["Strategy", "Survival"], ["策略", "生存"]),
    platforms: ["PC"],
    description: localized(
      "Grow a living fortress from metal roots before the weather turns against you.",
      "在天气彻底倒向敌人之前，用金属根系种出一座会生长的堡垒。"
    ),
    fantasy: localized("Plant defenses, harvest strange ore, survive the red season.", "种下防线，收获异矿，撑过红色季节。"),
    highlights: localized([], []),
    cta: localized("Coming Soon", "即将公开"),
    media: "orchard"
  },
  {
    id: "courier",
    title: localized("Tidepost Courier", "潮汐邮差"),
    status: ["development"],
    genre: localized(["Narrative", "Delivery", "Cozy Mystery"], ["叙事", "送信", "温柔谜案"]),
    platforms: ["PC", "Steam"],
    description: localized(
      "Deliver letters across a tide-locked city where every doorstep has a secret.",
      "在一座被月潮困住的城市里送信；每扇门后都有秘密。"
    ),
    fantasy: localized("Read rooms, follow routes, piece together quiet mysteries.", "观察房间，沿路线行走，拼起一桩桩安静的小谜案。"),
    highlights: localized([], []),
    cta: localized("Follow Devlog", "关注开发日志"),
    media: "courier"
  },
  {
    id: "arena",
    title: localized("Cinder Court", "烬火庭院"),
    status: ["released"],
    genre: localized(["Action", "Arena", "Local Multiplayer"], ["动作", "竞技场", "本地多人"]),
    platforms: ["PC", "Itch.io"],
    description: localized(
      "Fast couch battles about dashing through smoke, stealing sparks, and laughing at mistakes.",
      "短局本地多人竞技：穿烟闪避、抢夺火星，然后一起笑出声。"
    ),
    fantasy: localized("Readable chaos, quick rounds, one more match.", "清楚的混乱、短局节奏，以及总想再来一盘。"),
    highlights: localized([], []),
    cta: localized("View Game", "查看游戏"),
    media: "arena"
  }
];

const mediaItems = [
  { id: "m1", gameId: "lantern", group: "featured", label: localized("First trailer slot", "首曝预告片占位") },
  { id: "m2", gameId: "lantern", group: "featured", label: localized("Screenshot slot", "截图条占位") },
  { id: "m3", gameId: "courier", group: "development", label: localized("Night harbor frame", "夜港画面") },
  { id: "m4", gameId: "orchard", group: "prototype", label: localized("Prototype board", "原型画面") },
  { id: "m5", gameId: "arena", group: "released", label: localized("Released capture", "已发布截图") },
  { id: "m6", gameId: "courier", group: "development", label: localized("Route board", "路线板占位") }
];

const teamMembers = [
  {
    id: "director",
    name: localized("Ari Vale", "林栖"),
    role: localized("Creative Director", "创意导演"),
    focus: localized("World tone, game direction, player fantasy", "世界气质、游戏方向、玩家幻想")
  },
  {
    id: "design",
    name: localized("Mira Chen", "陈弥"),
    role: localized("Game Designer", "游戏设计"),
    focus: localized("Exploration loops, readable systems, pacing", "探索循环、可读系统、节奏")
  },
  {
    id: "engineering",
    name: localized("Noah Lin", "林诺"),
    role: localized("Gameplay Engineer", "玩法工程"),
    focus: localized("Tools, interactions, prototype stability", "工具链、交互、原型稳定性")
  },
  {
    id: "art",
    name: localized("June Ash", "沈烬"),
    role: localized("Art Lead", "美术负责人"),
    focus: localized("Lighting, silhouettes, material mood", "光影、剪影、材质氛围")
  },
  {
    id: "audio",
    name: localized("Theo Ward", "闻陶"),
    role: localized("Audio Designer", "音频设计"),
    focus: localized("Ambient layers, memory cues, quiet tension", "环境层次、记忆提示、安静张力")
  },
  {
    id: "production",
    name: localized("Iris Song", "宋弈"),
    role: localized("Producer / Community", "制作人 / 社区"),
    focus: localized("Roadmap, devlog, playtest coordination", "路线图、开发日志、试玩协调")
  }
];

const translations = {
  en: {
    studioName: "Mistvale",
    nav: {
      top: "Featured",
      games: "Games",
      studio: "Studio",
      media: "Media",
      devlog: "Devlog",
      partners: "Partners"
    },
    aria: {
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
      language: "Change language"
    },
    hero: {
      kicker: "Mistvale Studio",
      title: "We make games about finding the path through fog.",
      copy: "A small independent studio building luminous, tactile worlds where maps are incomplete, places react, and every mark you leave changes the way back.",
      featured: "Now Featured",
      primary: "Wishlist Lumenfall",
      secondary: "Explore All Games",
      discord: "Join Discord",
      scroll: "Look below"
    },
    section: {
      featured: {
        eyebrow: "Now Featured",
        title: "Lumenfall",
        copy: "No quest marker tells you where to go. You read the mist, leave glowing marks, and slowly turn an unknown valley into a place that knows you."
      },
      games: {
        eyebrow: "Games",
        title: "Several doors, one studio.",
        copy: "A compact catalog for released games, prototypes, and projects still being shaped."
      },
      identity: {
        eyebrow: "Studio",
        title: "Six people building places that feel watched, handmade, and worth returning to.",
        copy: "The studio is small on purpose: design, engineering, art, audio, production, and community stay close enough that every prototype keeps its tone."
      },
      media: {
        eyebrow: "Frames",
        title: "Replaceable slots for trailers, screenshots, and moving tests.",
        copy: "The current frames are designed as finished placeholders, ready to be swapped with real game footage."
      },
      news: {
        eyebrow: "Devlog",
        title: "Notes from the workshop.",
        copy: "Short updates about builds, experiments, and the choices that shape each game."
      },
      community: {
        eyebrow: "Community",
        title: "Watch these worlds rise up close.",
        copy: "Join Discord for test builds, polls, weekly progress, and quiet first looks before the public announcements."
      },
      partners: {
        eyebrow: "Partners / Press",
        title: "Clear materials for people helping games find players.",
        copy: "Mistvale Studio is preparing a multi-project catalog led by Lumenfall, with room for publishing, platform, creator, and press conversations."
      }
    },
    labels: {
      platforms: "Platforms",
      highlights: "What you do",
      filterAll: "All",
      cover: "Cover placeholder",
      video: "Drop trailer here · 16:9",
      projectCount: "4 projects in public or prototype shape",
      activeStatus: "1 featured title · 2 in development · 1 released",
      email: "contact@mistvale.example",
      newsletter: "Subscribe to devlog",
      emailPlaceholder: "your email · devlog to this inbox"
    },
    actions: {
      watchTrailer: "Watch Trailer",
      pressKit: "Open Press Kit",
      contact: "Email Studio",
      subscribe: "Subscribe"
    },
    identityPoints: [
      "Atmosphere that gives players something concrete to read.",
      "Exploration where marks, routes, and mistakes persist.",
      "Small-team prototypes with honest public development."
    ],
    communityCards: [
      "Grab test builds when they are ready.",
      "Vote on readability, controls, and pacing.",
      "See weekly progress before it becomes a trailer."
    ],
    partnerItems: ["Publishing", "Platform", "Content Creators", "Press"],
    footerLinks: ["Steam", "Discord", "YouTube", "X / Twitter", "Press Kit", "Contact"],
    news: [
      {
        date: "Aug 12, 2026",
        title: "Lumenfall: the first systems note",
        summary: "How permanent light marks are beginning to change the way routes and memory work."
      },
      {
        date: "Jul 29, 2026",
        title: "Tidepost Courier enters the slate",
        summary: "The cozy delivery mystery moves from sketchbook notes into route experiments."
      },
      {
        date: "Jul 08, 2026",
        title: "Why the site starts with games",
        summary: "A studio page should feel like an entrance to the worlds, not an office lobby."
      }
    ]
  },
  zh: {
    studioName: "MISTVALE",
    nav: {
      top: "主推",
      games: "游戏",
      studio: "工作室",
      media: "画面",
      devlog: "开发日志",
      partners: "合作"
    },
    aria: {
      openMenu: "打开导航菜单",
      closeMenu: "关闭导航菜单",
      language: "切换语言"
    },
    hero: {
      kicker: "雾谷工作室",
      title: "我们做关于穿过迷雾的游戏。",
      copy: "一个小型独立工作室，专注制作有微光、有触感、也有未知方向的世界。地图不会一开始就完整，地点会回应你，而你留下的每个标记都会改变回来的路。",
      featured: "当前主推",
      primary: "愿望单《坠光之境》",
      secondary: "浏览全部游戏",
      discord: "加入 Discord",
      scroll: "往下看"
    },
    section: {
      featured: {
        eyebrow: "当前主推",
        title: "坠光之境",
        copy: "没有任务标记告诉你该去哪里。你读懂雾气，留下发光的标记，把一座未知山谷慢慢走成认识你的地方。"
      },
      games: {
        eyebrow: "游戏",
        title: "几扇门，同一个工作室。",
        copy: "这里会放下已发布、开发中和原型阶段的作品。现在是占位，但结构已经准备好替换真实封面和链接。"
      },
      identity: {
        eyebrow: "工作室",
        title: "6 个人，搭建那些像被注视着、被手工做出来、值得回去看的地方。",
        copy: "团队刻意保持很小：设计、工程、美术、音频、制作和社区彼此贴得足够近，让每个原型都保留同一种气质。"
      },
      media: {
        eyebrow: "画面",
        title: "给预告片、截图和动态测试留好的位置。",
        copy: "当前画面是完成度更高的占位框，之后可以直接换成真实游戏截图、GIF 或预告片。"
      },
      news: {
        eyebrow: "开发日志",
        title: "从工作间里发出的笔记。",
        copy: "短一些、真实一些的更新：构建进度、实验结果，以及每款游戏正在被什么选择塑形。"
      },
      community: {
        eyebrow: "社区入口",
        title: "亲眼看着这些世界被搭起来。",
        copy: "加入 Discord：抢先试玩测试版本、投票决定我们接下来做什么、每两周看到真实进度。潜水也欢迎，所有消息都最先发在那里。"
      },
      partners: {
        eyebrow: "合作 / 媒体",
        title: "给帮助游戏找到玩家的人，准备清楚材料。",
        copy: "雾谷工作室正在准备一个多项目作品集，由《坠光之境》领衔，也欢迎发行、平台、内容创作者和媒体方向的沟通。"
      }
    },
    labels: {
      platforms: "平台",
      highlights: "你会做什么",
      filterAll: "全部",
      cover: "封面占位",
      video: "首曝预告片占位 · 之后嵌入视频（16:9）",
      projectCount: "4 个公开或原型阶段项目",
      activeStatus: "1 个主推项目 · 2 个开发中 · 1 个已发布",
      email: "contact@mistvale.example",
      newsletter: "订阅开发日志",
      emailPlaceholder: "你的邮箱 — 开发日志直达收件箱"
    },
    actions: {
      watchTrailer: "看预告片",
      pressKit: "打开媒体包",
      contact: "邮件联系工作室",
      subscribe: "订阅"
    },
    identityPoints: [
      "氛围不是背景，而是玩家能读懂的线索。",
      "探索不是清单，而是留下路线、痕迹和错误。",
      "小团队、强原型、真实公开的开发过程。"
    ],
    communityCards: [
      "抢先试玩测试版本。",
      "投票反馈可读性、操作手感和节奏。",
      "在预告片之前看到每周进度。"
    ],
    partnerItems: ["发行合作", "平台合作", "内容创作者", "媒体报道"],
    footerLinks: ["Steam", "Discord", "YouTube", "X / Twitter", "媒体包", "联系"],
    news: [
      {
        date: "2026 年 8 月 12 日",
        title: "《坠光之境》：第一篇系统笔记",
        summary: "灯火标记为什么会永久留在世界里，以及它如何改变路线和记忆。"
      },
      {
        date: "2026 年 7 月 29 日",
        title: "《月潮信使》进入内部项目列表",
        summary: "一个温柔的送信谜案，正在从速写本走向可游玩的路线实验。"
      },
      {
        date: "2026 年 7 月 8 日",
        title: "为什么工作室官网要先展示游戏",
        summary: "工作室页面应该像通往作品世界的入口，而不是公司前台。"
      }
    ]
  }
};

const navLinks = [
  { href: "#top", key: "top" },
  { href: "#games", key: "games" },
  { href: "#studio", key: "studio" },
  { href: "#media", key: "media" },
  { href: "#devlog", key: "devlog" },
  { href: "#partners", key: "partners" }
];

function pickInitialLanguage() {
  const saved = localStorage.getItem("mistvale-language");
  if (saved === "en" || saved === "zh") return saved;
  return navigator.language?.toLowerCase().startsWith("zh") ? "zh" : "en";
}

function LanguageToggle({ lang, onChange, compact = false, label }) {
  return (
    <div className={`language-toggle ${compact ? "compact" : ""}`} aria-label={label}>
      <button className={lang === "en" ? "active" : ""} type="button" onClick={() => onChange("en")}>
        EN
      </button>
      <button className={lang === "zh" ? "active" : ""} type="button" onClick={() => onChange("zh")}>
        中文
      </button>
    </div>
  );
}

function SectionHeader({ eyebrow, title, copy, center = false }) {
  return (
    <div className={`section-header ${center ? "center" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{copy}</p>
    </div>
  );
}

function StatusPills({ status, lang }) {
  return (
    <div className="pill-row">
      {status.map((item) => (
        <span className="pill" key={item}>
          {statusLabels[item][lang]}
        </span>
      ))}
    </div>
  );
}

function VisualFrame({ variant = "lantern", label, large = false, play = false }) {
  return (
    <div className={`visual-frame ${variant} ${large ? "large" : ""}`} aria-label={label}>
      <div className="frame-pattern" />
      <div className="frame-glow" />
      <div className="frame-horizon" />
      <div className="frame-ruins">
        <i />
        <i />
        <i />
      </div>
      {play && (
        <div className="play-button" aria-hidden="true">
          <Icon name="play" />
        </div>
      )}
      <span>{label}</span>
    </div>
  );
}

function Header({ lang, setLang, t }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a className="brand" href="#top" onClick={() => setOpen(false)}>
        <span className="brand-mark">
          <Icon name="brand" />
        </span>
        <span>{t.studioName}</span>
      </a>
      <nav className="desktop-nav" aria-label="Primary">
        {navLinks.map((link) => (
          <a href={link.href} key={link.key}>
            {t.nav[link.key]}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <LanguageToggle lang={lang} onChange={setLang} label={t.aria.language} />
        <button
          className="menu-button"
          aria-label={open ? t.aria.closeMenu : t.aria.openMenu}
          aria-expanded={open}
          type="button"
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>
      <div className={`mobile-nav ${open ? "open" : ""}`}>
        {navLinks.map((link) => (
          <a href={link.href} key={link.key} onClick={() => setOpen(false)}>
            {t.nav[link.key]}
          </a>
        ))}
        <LanguageToggle compact lang={lang} onChange={setLang} label={t.aria.language} />
      </div>
    </header>
  );
}

function Hero({ t, lang, featuredGame }) {
  return (
    <section className="hero" id="top">
      <div className="scene-depth" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="ember-field" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, index) => (
          <span key={index} />
        ))}
      </div>
      <div className="hero-orbit" aria-hidden="true" />
      <div className="hero-content">
        <p className="eyebrow">{t.hero.kicker}</p>
        <h1>{t.hero.title}</h1>
        <p className="hero-lede">{t.hero.copy}</p>
        <a className="featured-chip" href="#featured">
          <small>{t.hero.featured}</small>
          <strong>{featuredGame.title[lang]}</strong>
          <Icon name="arrow" />
        </a>
        <p className="hero-quote">「{featuredGame.fantasy[lang]}」</p>
        <div className="hero-cta">
          <a className="button primary" href="#">
            {t.hero.primary}
          </a>
          <a className="button secondary" href="#games">
            {t.hero.secondary}
          </a>
          <a className="button ghost" href="#">
            {t.hero.discord}
          </a>
        </div>
      </div>
      <a className="scroll-cue" href="#featured">
        {t.hero.scroll}
      </a>
    </section>
  );
}

function FeaturedGame({ t, lang, game }) {
  return (
    <section className="section featured-section" id="featured">
      <div className="featured-layout">
        <div className="featured-copy">
          <p className="eyebrow">{t.section.featured.eyebrow}</p>
          <h2>{game.title[lang]}</h2>
          <div className="meta-line">
            <StatusPills status={game.status} lang={lang} />
            <span>{game.platforms.join(" · ")}</span>
            <span>{game.genre[lang].join(" / ")}</span>
          </div>
          <p className="fantasy">{game.fantasy[lang]}</p>
          <p className="feature-description">{game.description[lang]}</p>
          <div className="highlight-list">
            {game.highlights[lang].map((highlight, index) => (
              <article key={highlight.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{highlight.title}</h3>
                  <p>{highlight.body}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="hero-cta">
            <a className="button primary" href="#">
              {game.cta[lang]}
            </a>
            <a className="button secondary icon-play" href="#">
              <Icon name="play" />
              {t.actions.watchTrailer}
            </a>
          </div>
        </div>
        <div className="featured-media">
          <VisualFrame variant="lantern" label={t.labels.video} large play />
          <VisualFrame variant="lantern" label={mediaItems[1].label[lang]} large />
        </div>
      </div>
    </section>
  );
}

function GameCard({ game, lang, t }) {
  return (
    <article className={`game-card ${game.featured ? "is-featured" : ""}`}>
      <VisualFrame variant={game.media} label={t.labels.cover} />
      <div className="game-card-body">
        <StatusPills status={game.status} lang={lang} />
        <h3>{game.title[lang]}</h3>
        <p>{game.description[lang]}</p>
        <div className="tag-row">
          {game.genre[lang].map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="platform-row">
          <strong>{t.labels.platforms}</strong>
          <span>{game.platforms.join(" / ")}</span>
        </div>
        <a className="text-link" href="#">
          {game.cta[lang]}
          <Icon name="arrow" />
        </a>
      </div>
    </article>
  );
}

function GamesSection({ t, lang }) {
  return (
    <section className="section games-section" id="games">
      <SectionHeader {...t.section.games} center />
      <div className="games-grid">
        {games.map((game) => (
          <GameCard game={game} lang={lang} t={t} key={game.id} />
        ))}
      </div>
    </section>
  );
}

function StudioSection({ t, lang }) {
  return (
    <section className="section studio-section" id="studio">
      <SectionHeader {...t.section.identity} center />
      <div className="studio-principles">
        {t.identityPoints.map((point, index) => (
          <p key={point}>
            <span>0{index + 1}</span>
            {point}
          </p>
        ))}
      </div>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <article className="team-card" key={member.id}>
            <div className="member-portrait" aria-hidden="true">
              <Icon name={index % 3 === 0 ? "developer" : index % 3 === 1 ? "laptop" : "certificate"} />
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div>
              <p>{member.role[lang]}</p>
              <h3>{member.name[lang]}</h3>
              <span>{member.focus[lang]}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function MediaSection({ t, lang }) {
  const [filter, setFilter] = useState("all");
  const filters = ["all", "featured", "development", "released"];
  const visible = mediaItems.filter((item) => filter === "all" || item.group === filter);
  return (
    <section className="section media-section" id="media">
      <SectionHeader {...t.section.media} center />
      <div className="filter-row" role="tablist" aria-label="Media filters">
        {filters.map((item) => (
          <button
            className={filter === item ? "active" : ""}
            key={item}
            type="button"
            onClick={() => setFilter(item)}
          >
            {item === "all" ? t.labels.filterAll : statusLabels[item]?.[lang] ?? item}
          </button>
        ))}
      </div>
      <div className="media-grid">
        {visible.map((item) => {
          const game = games.find((candidate) => candidate.id === item.gameId);
          return (
            <article className="media-card" key={item.id}>
              <VisualFrame variant={game.media} label={item.label[lang]} />
              <div>
                <span>{game.title[lang]}</span>
                <strong>{item.label[lang]}</strong>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function NewsSection({ t }) {
  return (
    <section className="section news-section" id="devlog">
      <SectionHeader {...t.section.news} center />
      <div className="news-grid">
        {t.news.map((item) => (
          <a className="news-card" href="#" key={item.title}>
            <time>{item.date}</time>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

function CommunitySection({ t }) {
  return (
    <section className="community-section">
      <div className="community-panel">
        <SectionHeader {...t.section.community} center />
        <div className="hero-cta centered">
          <a className="button primary" href="#">
            <Icon name="message" />
            {t.hero.discord}
          </a>
          <a className="button secondary" href="#">
            <Icon name="send" />
            {t.hero.primary}
          </a>
        </div>
        <div className="community-grid">
          {t.communityCards.map((card) => (
            <p key={card}>{card}</p>
          ))}
        </div>
        <form className="newsletter-form">
          <input id="email" type="email" aria-label={t.labels.newsletter} placeholder={t.labels.emailPlaceholder} />
          <button className="button secondary" type="submit">
            <Icon name="send" />
            {t.actions.subscribe}
          </button>
        </form>
      </div>
    </section>
  );
}

function PartnersSection({ t }) {
  return (
    <section className="section partners-section" id="partners">
      <SectionHeader {...t.section.partners} />
      <div className="partners-grid">
        <div className="metric-card">
          <strong>{t.labels.projectCount}</strong>
          <span>{t.labels.activeStatus}</span>
        </div>
        <div className="partner-list">
          {t.partnerItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="partner-actions">
          <a className="button secondary" href="#">
            <Icon name="certificate" />
            {t.actions.pressKit}
          </a>
          <a className="button ghost light" href={`mailto:${t.labels.email}`}>
            <Icon name="message" />
            {t.actions.contact}
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer({ t, lang, setLang }) {
  return (
    <footer className="footer">
      <a className="brand" href="#top">
        <span className="brand-mark">
          <Icon name="brand" />
        </span>
        <span>{t.studioName}</span>
      </a>
      <div className="footer-links">
        {t.footerLinks.map((link) => (
          <a href="#" key={link}>
            {link}
          </a>
        ))}
      </div>
      <LanguageToggle compact lang={lang} onChange={setLang} label={t.aria.language} />
    </footer>
  );
}

function App() {
  const [lang, setLang] = useState(pickInitialLanguage);
  const t = translations[lang];
  const featuredGame = useMemo(() => games.find((game) => game.featured), []);

  function handlePointerMove(event) {
    const x = (event.clientX / window.innerWidth) * 100;
    const y = (event.clientY / window.innerHeight) * 100;
    const tiltX = (x - 50) / 50;
    const tiltY = (y - 50) / 50;

    document.documentElement.style.setProperty("--pointer-x", `${x}%`);
    document.documentElement.style.setProperty("--pointer-y", `${y}%`);
    document.documentElement.style.setProperty("--tilt-x", tiltX.toFixed(3));
    document.documentElement.style.setProperty("--tilt-y", tiltY.toFixed(3));
  }

  useEffect(() => {
    localStorage.setItem("mistvale-language", lang);
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  }, [lang]);

  return (
    <div className="interactive-shell" onPointerMove={handlePointerMove}>
      <Header lang={lang} setLang={setLang} t={t} />
      <main>
        <Hero t={t} lang={lang} featuredGame={featuredGame} />
        <FeaturedGame t={t} lang={lang} game={featuredGame} />
        <GamesSection t={t} lang={lang} />
        <StudioSection t={t} lang={lang} />
        <MediaSection t={t} lang={lang} />
        <NewsSection t={t} />
        <CommunitySection t={t} />
        <PartnersSection t={t} />
      </main>
      <Footer t={t} lang={lang} setLang={setLang} />
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
