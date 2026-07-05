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

const roadmapItems = [
  {
    phase: "01",
    window: localized("Now", "现在"),
    status: localized("Playable Core", "核心可玩"),
    title: localized("Vertical Slice", "垂直切片"),
    body: localized(
      "Finish the first 25-minute loop: fog reading, permanent light marks, traversal tools, and one reactive creature route.",
      "完成第一段 25 分钟循环：读雾、永久灯火标记、路线工具，以及一条会回应玩家行为的生灵路线。"
    )
  },
  {
    phase: "02",
    window: localized("Q3 2026", "2026 Q3"),
    status: localized("Reveal Materials", "首曝素材"),
    title: localized("Trailer + Steam Page", "预告片 + Steam 页面"),
    body: localized(
      "Replace placeholder frames with capture, prepare the press kit, and open wishlist traffic around a restrained first trailer.",
      "用真实录屏替换占位画面，准备媒体包，并围绕克制的首曝预告开启愿望单入口。"
    )
  },
  {
    phase: "03",
    window: localized("Q4 2026", "2026 Q4"),
    status: localized("Closed Test", "封闭测试"),
    title: localized("Community Playtest", "社区试玩"),
    body: localized(
      "Invite a small group to test readability, route memory, controller feel, and the emotional temperature of the valley.",
      "邀请小范围玩家测试可读性、路线记忆、手柄手感，以及山谷的情绪温度。"
    )
  },
  {
    phase: "04",
    window: localized("2027", "2027"),
    status: localized("Public Demo", "公开 Demo"),
    title: localized("Festival Demo", "节展 Demo"),
    body: localized(
      "Ship a polished demo with one complete region, localized subtitles, creator-friendly footage rules, and a compact feedback loop.",
      "发布一个包含完整区域的精修 Demo：本地化字幕、创作者友好的录制规则，以及简洁反馈通道。"
    )
  },
  {
    phase: "05",
    window: localized("TBA", "待定"),
    status: localized("Launch Window", "上线窗口"),
    title: localized("Release Plan", "发行计划"),
    body: localized(
      "Lock scope around the strongest route-building and memory systems, then choose launch timing with partners and community data.",
      "围绕最有力的搭路与记忆系统锁定范围，再结合合作方与社区反馈决定上线节奏。"
    )
  }
];

const translations = {
  en: {
    studioName: "Mistvale",
    brandSubline: "cinematic indie games",
    nav: {
      top: "Featured",
      games: "Games",
      studio: "Studio",
      media: "Media",
      roadmap: "Roadmap",
      devlog: "Devlog",
      partners: "Partners"
    },
    aria: {
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
      language: "Change language",
      progress: "Quick section progress"
    },
    hero: {
      kicker: "Mistvale Studio",
      title: "Games for fogbound worlds",
      copy: "A small independent studio building luminous, tactile worlds where maps are incomplete, places react, and every mark you leave changes the way back.",
      sloganPrefix: "Studio Slogan",
      slogan: "Follow the fog Leave a light Build the way back",
      slateLabel: "Production slate",
      slate: [
        { label: "Project", value: "Lumenfall" },
        { label: "Format", value: "PC / Steam" },
        { label: "Status", value: "Vertical Slice" }
      ],
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
        title: "Four doors, one studio",
        copy: "Featured, in-development, prototype, and released projects"
      },
      identity: {
        eyebrow: "Studio",
        title: "Six makers, one atmosphere",
        copy: "A small team keeping design, code, art, audio, production, and community close"
      },
      media: {
        eyebrow: "Frames",
        title: "Screenshots and footage",
        copy: "Trailer, screenshot, and motion-test slots for each project"
      },
      roadmap: {
        eyebrow: "Roadmap",
        title: "Production roadmap",
        copy: "Prove the core, capture real footage, test quietly, then reveal the playable build"
      },
      news: {
        eyebrow: "Devlog",
        title: "Workshop notes",
        copy: "Build progress, system experiments, and key production choices"
      },
      community: {
        eyebrow: "Community",
        title: "Join the build",
        copy: "Discord playtests, polls, weekly progress, and quiet first looks"
      },
      partners: {
        eyebrow: "Partners / Press",
        title: "Press and partners",
        copy: "A clear contact point for publishing, platform, creator, and press conversations"
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
    brandSubline: "电影感独立游戏",
    nav: {
      top: "主推",
      games: "游戏",
      studio: "工作室",
      media: "画面",
      roadmap: "路线图",
      devlog: "开发日志",
      partners: "合作"
    },
    aria: {
      openMenu: "打开导航菜单",
      closeMenu: "关闭导航菜单",
      language: "切换语言",
      progress: "快速定位进度"
    },
    hero: {
      kicker: "雾谷工作室",
      title: "我们做穿过迷雾的游戏",
      copy: "一个小型独立工作室，专注制作有微光、有触感、也有未知方向的世界。地图不会一开始就完整，地点会回应你，而你留下的每个标记都会改变回来的路。",
      sloganPrefix: "工作室标语",
      slogan: "跟随雾 留下光 把回路搭出来",
      slateLabel: "项目制片表",
      slate: [
        { label: "项目", value: "坠光之境" },
        { label: "平台", value: "PC / Steam" },
        { label: "状态", value: "垂直切片" }
      ],
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
        title: "四款游戏 同一座雾谷",
        copy: "主推、开发中、原型与已发布作品"
      },
      identity: {
        eyebrow: "工作室",
        title: "6 个人 同一种气质",
        copy: "小团队保持近距离协作，让每个原型都有统一气质"
      },
      media: {
        eyebrow: "画面",
        title: "截图与影像",
        copy: "预告片、截图和动效测试都会放在这里"
      },
      roadmap: {
        eyebrow: "路线图",
        title: "制作路线图",
        copy: "先验证核心，再测试、首曝、公开 Demo"
      },
      news: {
        eyebrow: "开发日志",
        title: "工作间笔记",
        copy: "构建进度、系统实验和关键选择"
      },
      community: {
        eyebrow: "社区入口",
        title: "加入建造现场",
        copy: "加入 Discord，参与试玩、投票和每周进度"
      },
      partners: {
        eyebrow: "合作 / 媒体",
        title: "媒体与合作",
        copy: "给发行、平台、媒体和创作者准备的联系入口"
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
  { href: "#roadmap", key: "roadmap" },
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

function BrandLockup({ t, onClick }) {
  return (
    <a className="brand brand-lockup" href="#top" onClick={onClick}>
      <span className="brand-mark">
        <Icon name="brand" />
      </span>
      <span className="brand-copy">
        <strong>{t.studioName}</strong>
        <small>{t.brandSubline}</small>
      </span>
      <span className="brand-code">MV-01</span>
    </a>
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
      <BrandLockup t={t} onClick={() => setOpen(false)} />
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

function QuickProgress({ t }) {
  const [activeHref, setActiveHref] = useState(navLinks[0].href);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    function updateProgress() {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = scrollable > 0 ? window.scrollY / scrollable : 0;
      const activationLine = window.innerHeight * 0.38;
      let nextActive = navLinks[0].href;

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section && section.getBoundingClientRect().top <= activationLine) {
          nextActive = link.href;
        }
      });

      setActiveHref(nextActive);
      setScrollProgress(Math.min(1, Math.max(0, nextProgress)));
    }

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <nav className="quick-progress" aria-label={t.aria.progress} style={{ "--scroll-progress": scrollProgress }}>
      <span className="quick-progress-track" aria-hidden="true">
        <span />
      </span>
      <div className="quick-progress-links">
        {navLinks.map((link, index) => (
          <a
            className={activeHref === link.href ? "active" : ""}
            href={link.href}
            key={link.href}
            title={t.nav[link.key]}
            aria-label={t.nav[link.key]}
          >
            <span className="quick-index">{String(index + 1).padStart(2, "0")}</span>
            <span className="quick-label">{t.nav[link.key]}</span>
          </a>
        ))}
      </div>
    </nav>
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
        <div className="hero-slogan">
          <span>{t.hero.sloganPrefix}</span>
          <strong>{t.hero.slogan}</strong>
        </div>
        <div className="production-strip" aria-label={t.hero.slateLabel}>
          {t.hero.slate.map((item) => (
            <span key={item.label}>
              <small>{item.label}</small>
              <strong>{item.value}</strong>
            </span>
          ))}
        </div>
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
    <article className="game-card">
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

function RoadmapSection({ t, lang }) {
  return (
    <section className="section roadmap-section" id="roadmap">
      <SectionHeader {...t.section.roadmap} center />
      <div className="roadmap-shell">
        {roadmapItems.map((item) => (
          <article className="roadmap-card" key={item.phase}>
            <div className="roadmap-phase">
              <span>{item.phase}</span>
            </div>
            <div className="roadmap-body">
              <div className="roadmap-meta">
                <span>{item.window[lang]}</span>
                <strong>{item.status[lang]}</strong>
              </div>
              <h3>{item.title[lang]}</h3>
              <p>{item.body[lang]}</p>
            </div>
          </article>
        ))}
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
      <BrandLockup t={t} />
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
      <QuickProgress t={t} />
      <main>
        <Hero t={t} lang={lang} featuredGame={featuredGame} />
        <FeaturedGame t={t} lang={lang} game={featuredGame} />
        <GamesSection t={t} lang={lang} />
        <StudioSection t={t} lang={lang} />
        <MediaSection t={t} lang={lang} />
        <RoadmapSection t={t} lang={lang} />
        <NewsSection t={t} />
        <CommunitySection t={t} />
        <PartnersSection t={t} />
      </main>
      <Footer t={t} lang={lang} setLang={setLang} />
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
