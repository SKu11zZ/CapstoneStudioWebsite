(function () {
  const links = {
    steamUrl: "#",
    discordUrl: "#",
    contactUrl: "mailto:hello@foganchor.games"
  };

  const nav = {
    zh: [
      ["#featured", "主推"],
      ["#games", "作品"],
      ["#studio", "工作室"],
      ["#media", "档案"],
      ["#news", "札记"],
      ["#partners", "合作"]
    ],
    en: [
      ["#featured", "Featured"],
      ["#games", "Works"],
      ["#studio", "Studio"],
      ["#media", "Archive"],
      ["#news", "Notes"],
      ["#partners", "Partners"]
    ]
  };

  const games = {
    zh: [
      {
        id: "mistlamp",
        title: "雾灯山谷",
        statusKey: "featured",
        status: "主推 · 垂直切片",
        genre: "探索 · 建造 · 生态叙事",
        platforms: "PC · STEAM",
        line: "在潮雾封锁的山谷里，每盏灯都会改变之后回来的路。",
        cta: "加入 Steam 愿望单",
        ctaHref: links.steamUrl,
        coverLabel: "主视觉占位 - 雾灯山谷（16:10）"
      },
      {
        id: "ferrypost",
        title: "夜渡邮局",
        statusKey: "dev",
        status: "开发中",
        genre: "叙事 · 航行 · 岛屿谜案",
        platforms: "PC",
        line: "替群岛递送无人署名的信，也替收信人改写下一次日出。",
        cta: "关注制作",
        ctaHref: "#community",
        coverLabel: "封面占位 - 夜渡邮局（16:10）"
      },
      {
        id: "ringfall",
        title: "坍环竞技场",
        statusKey: "released",
        status: "已发售",
        genre: "动作 · 派对竞技 · 地形破坏",
        platforms: "PC · STEAM",
        line: "每一局都会把场地打坏，下一局就在上一局的伤痕里开始。",
        cta: "前往 Steam",
        ctaHref: "#",
        coverLabel: "封面占位 - 坍环竞技场（16:10）"
      },
      {
        id: "rustroot",
        title: "锈根花园",
        statusKey: "proto",
        status: "原型阶段",
        genre: "策略 · 生存 · 植物机器",
        platforms: "平台待定",
        line: "在一座废弃温室里培育会记仇的植物，也修复照顾它们的机器。",
        cta: "查看札记",
        ctaHref: "#news",
        coverLabel: "概念图占位 - 锈根花园（16:10）"
      }
    ],
    en: [
      {
        id: "mistlamp",
        title: "Mistlamp Vale",
        statusKey: "featured",
        status: "FEATURED · VERTICAL SLICE",
        genre: "EXPLORATION · BUILDING · ECOLOGICAL FICTION",
        platforms: "PC · STEAM",
        line: "In a valley locked by sea fog, every lamp changes the route you return to.",
        cta: "Wishlist on Steam",
        ctaHref: links.steamUrl,
        coverLabel: "KEY ART PLACEHOLDER - MISTLAMP VALE (16:10)"
      },
      {
        id: "ferrypost",
        title: "Night Ferry Post",
        statusKey: "dev",
        status: "IN DEVELOPMENT",
        genre: "NARRATIVE · SAILING · ISLAND MYSTERY",
        platforms: "PC",
        line: "Deliver unsigned letters across the islands, and change who opens the door at dawn.",
        cta: "Follow Production",
        ctaHref: "#community",
        coverLabel: "COVER PLACEHOLDER - NIGHT FERRY POST (16:10)"
      },
      {
        id: "ringfall",
        title: "Ringfall Arena",
        statusKey: "released",
        status: "RELEASED",
        genre: "ACTION · PARTY ARENA · TERRAIN DAMAGE",
        platforms: "PC · STEAM",
        line: "Every round breaks the arena. The next one starts inside the scars you made.",
        cta: "View on Steam",
        ctaHref: "#",
        coverLabel: "COVER PLACEHOLDER - RINGFALL ARENA (16:10)"
      },
      {
        id: "rustroot",
        title: "Rustroot Garden",
        statusKey: "proto",
        status: "PROTOTYPE",
        genre: "STRATEGY · SURVIVAL · BOTANICAL MACHINES",
        platforms: "TBA",
        line: "Raise grudge-holding plants in an abandoned glasshouse, then repair the machines that keep them alive.",
        cta: "Read Notes",
        ctaHref: "#news",
        coverLabel: "CONCEPT PLACEHOLDER - RUSTROOT GARDEN (16:10)"
      }
    ]
  };

  const media = {
    zh: [
      { gameId: "mistlamp", group: "featured", isVideo: true, label: "首支概念预告占位（16:9）", game: "雾灯山谷" },
      { gameId: "mistlamp", group: "featured", isVideo: false, label: "截图 - 低潮后的灯桥（16:9）", game: "雾灯山谷" },
      { gameId: "mistlamp", group: "featured", isVideo: false, label: "GIF - 生物绕开新点亮的路标（16:9）", game: "雾灯山谷" },
      { gameId: "ferrypost", group: "dev", isVideo: false, label: "截图 - 午夜码头分拣室（16:9）", game: "夜渡邮局" },
      { gameId: "ringfall", group: "released", isVideo: true, label: "发售预告占位（16:9）", game: "坍环竞技场" },
      { gameId: "ringfall", group: "released", isVideo: false, label: "截图 - 第三回合坍塌边界（16:9）", game: "坍环竞技场" },
      { gameId: "rustroot", group: "dev", isVideo: false, label: "概念图 - 锈根温室剖面（16:9）", game: "锈根花园" }
    ],
    en: [
      { gameId: "mistlamp", group: "featured", isVideo: true, label: "FIRST CONCEPT TRAILER PLACEHOLDER (16:9)", game: "MISTLAMP VALE" },
      { gameId: "mistlamp", group: "featured", isVideo: false, label: "SCREENSHOT - LOW-TIDE LAMP BRIDGE (16:9)", game: "MISTLAMP VALE" },
      { gameId: "mistlamp", group: "featured", isVideo: false, label: "GIF - CREATURES REROUTE AROUND A NEW MARKER (16:9)", game: "MISTLAMP VALE" },
      { gameId: "ferrypost", group: "dev", isVideo: false, label: "SCREENSHOT - MIDNIGHT DOCK SORTING ROOM (16:9)", game: "NIGHT FERRY POST" },
      { gameId: "ringfall", group: "released", isVideo: true, label: "LAUNCH TRAILER PLACEHOLDER (16:9)", game: "RINGFALL ARENA" },
      { gameId: "ringfall", group: "released", isVideo: false, label: "SCREENSHOT - ROUND THREE COLLAPSE EDGE (16:9)", game: "RINGFALL ARENA" },
      { gameId: "rustroot", group: "dev", isVideo: false, label: "CONCEPT - RUSTROOT GLASSHOUSE CUTAWAY (16:9)", game: "RUSTROOT GARDEN" }
    ]
  };

  const copy = {
    zh: {
      brand: "FOGANCHOR",
      docTitle: "雾锚工作室 - Foganchor Studio",
      a11y: {
        nav: "主导航",
        language: "语言",
        menu: "打开菜单",
        mediaFilter: "筛选档案",
        newsletter: "订阅制作札记"
      },
      hero: {
        eyebrow: "雾锚工作室",
        title: "把陌生之地，做成会回信的世界。",
        subtitle: "我们是一支小型独立团队，专做会记住玩家动作的系统叙事游戏：点亮一条路、寄出一封信、撞塌一块地面，世界都应该留下痕迹。",
        featuredTag: "当前航标",
        featuredName: "雾灯山谷",
        fantasy: "「在潮雾封锁的山谷里，每盏灯都是你留给世界的注脚。」",
        ctaWishlist: "愿望单《雾灯山谷》",
        ctaGames: "翻阅作品档案",
        ctaDiscord: "进入观测站",
        scroll: "继续下潜",
        ledgerTitle: "制作状态",
        ledgerItems: ["垂直切片：Q4 2026", "每两周公开札记", "当前招募测试玩家"],
        stats: [
          { value: "04", label: "进行中的世界" },
          { value: "2W", label: "双周公开札记" },
          { value: "PC", label: "首发平台" }
        ]
      },
      featured: {
        eyebrow: "主推项目",
        title: "雾灯山谷",
        meta: "垂直切片制作中 · PC (STEAM) · 探索 / 建造 / 生态叙事",
        fantasy: "在潮雾封锁的山谷里，每盏灯都是你留给世界的注脚。",
        body: "潮水退去后，山谷露出一层又一层旧路。你带着一枚会记录光线的锚灯，把废桥、栈道和栖息地重新连起来。被照亮的地方会改变生态：湿雾让路，生物迁徙，废弃机械重新工作。没有任务清单，只有你留下的标记、被唤醒的回应，以及下一次回来时世界给你的回信。",
        trailerLabel: "首支概念预告占位 - 之后嵌入视频（16:9）",
        shotLabel: "档案条占位 - 路线、生态、灯锚交互",
        ctaTrailer: "查看预告",
        fileFacts: [
          ["代号", "MV-01"],
          ["核心", "持久光路 / 世界回应"],
          ["阶段", "可玩切片"]
        ],
        highlights: [
          { title: "光不是开关，是地形", desc: "灯会留下可返回的路线，也会改变附近生物的活动范围。你不是点亮地图，而是在重写山谷的习惯。" },
          { title: "路线由玩家搭出来", desc: "绳索、浮桥、配重和旧机械都是可复用的路径部件。你修好的路会留在世界里，也会成为后来事件的入口。" },
          { title: "生态会读懂你的偏好", desc: "有些生物跟随光，有些生物吞掉光，还有些会把你的灯当作巢。山谷不是背景，它会慢慢学会你是谁。" }
        ]
      },
      games: {
        eyebrow: "作品档案",
        title: "四个世界，共用一套记忆法。",
        subtitle: "每个项目的类型不同，但都围绕同一个问题：如果玩家真的改变过一个地方，那个地方应该如何记住？"
      },
      studio: {
        eyebrow: "关于工作室",
        title: "雾锚不是大厂，也不想假装自己是。我们只把少数世界做深。",
        body: "我们喜欢小地图里的长期后果：一盏灯改变迁徙路线，一封信改变岛民关系，一场坍塌改变下一局策略。雾锚的规则很简单：玩家做过的事不能只在 UI 里被记录，它要在世界里长出形状。",
        promise: "不做无限填充，不把每个系统都磨成日常任务，也不让玩家的选择在下一次加载后消失。我们宁愿少做几个项目，也要让每个地方有自己的记性。"
      },
      media: {
        eyebrow: "视觉档案",
        title: "从制作台上抽出的现场记录。",
        tabs: { all: "全部", featured: "主推", dev: "制作中", released: "已发布" }
      },
      news: {
        eyebrow: "制作札记",
        title: "这周我们修了什么，又拆了什么。",
        all: "全部札记",
        read: "阅读",
        items: [
          { date: "2026.06.20", tag: "雾灯山谷", title: "札记 #12 - 让生物绕开玩家新修的灯桥", excerpt: "路径系统终于不再只看最短距离。它会考虑亮度、潮湿度和玩家上次留下的危险标记。" },
          { date: "2026.06.02", tag: "锈根花园", title: "公开《锈根花园》：策略原型的第一张温室图", excerpt: "一间半死不活的玻璃温室、会记仇的植物，以及一台比玩家更固执的灌溉机器。" },
          { date: "2026.05.14", tag: "坍环竞技场", title: "《坍环竞技场》1.2 - 场地记忆更新", excerpt: "新规则会把上一局破坏过的区域转译成下一局的风险带。友情仍然不在保修范围内。" }
        ]
      },
      community: {
        title: "把你的痕迹放进我们的测试世界。",
        body: "进入观测站：抢先试玩、投票决定下一批原型、看真实制作进度。潜水也可以，内部截图和失败录像都会先发在那里。",
        ctaDiscord: "进入 Discord 观测站",
        ctaWishlist: "愿望单《雾灯山谷》",
        emailPlaceholder: "你的邮箱 - 双周制作札记",
        subscribe: "订阅",
        subscribed: "已订阅"
      },
      partners: {
        eyebrow: "合作与媒体",
        title: "与雾锚合作",
        body: "雾锚工作室制作系统驱动的独立 PC 游戏，关注持久后果、可读世界和玩家留下的痕迹。目前一款已发布、两款制作中、一款原型阶段。",
        status: "4 个项目 · 《坍环竞技场》已发布 · 《雾灯山谷》垂直切片 2026 Q4",
        contact: "联系我们",
        presskit: "媒体资料包（即将上线）",
        items: [
          { title: "发行合作", desc: "寻找理解小团队节奏、愿意支持长尾作品的合作伙伴。" },
          { title: "平台合作", desc: "PC / Steam 优先，主机与订阅平台会在核心体验稳定后评估。" },
          { title: "内容创作者", desc: "可提供试玩版本、录制素材和开发者说明，方便提前制作内容。" },
          { title: "媒体采访", desc: "支持采访、早期版本试玩，以及垂直切片阶段的完整资料包。" }
        ]
      },
      footer: {
        copyright: "© 2026 Foganchor Studio",
        links: ["Steam", "Discord", "YouTube", "X / Twitter", "媒体资料包", "联系"]
      }
    },
    en: {
      brand: "FOGANCHOR",
      docTitle: "Foganchor Studio - Worlds that write back",
      a11y: {
        nav: "Main navigation",
        language: "Language",
        menu: "Toggle menu",
        mediaFilter: "Filter archive",
        newsletter: "Subscribe to production notes"
      },
      hero: {
        eyebrow: "FOGANCHOR STUDIO",
        title: "We build unfamiliar places that write back.",
        subtitle: "A small independent team making systemic narrative games where player actions leave physical traces: light a route, deliver a letter, break a floor, and the world should remember.",
        featuredTag: "CURRENT BEACON",
        featuredName: "Mistlamp Vale",
        fantasy: "In a valley locked by sea fog, every lamp is a footnote you leave for the world.",
        ctaWishlist: "Wishlist Mistlamp Vale",
        ctaGames: "Browse the Archive",
        ctaDiscord: "Enter the Observatory",
        scroll: "DESCEND",
        ledgerTitle: "Production State",
        ledgerItems: ["Vertical slice: Q4 2026", "Notes every two weeks", "Playtesters currently wanted"],
        stats: [
          { value: "04", label: "worlds in motion" },
          { value: "2W", label: "note cadence" },
          { value: "PC", label: "first platform" }
        ]
      },
      featured: {
        eyebrow: "FEATURED PROJECT",
        title: "Mistlamp Vale",
        meta: "VERTICAL SLICE IN PRODUCTION · PC (STEAM) · EXPLORATION / BUILDING / ECOLOGICAL FICTION",
        fantasy: "In a valley locked by sea fog, every lamp is a footnote you leave for the world.",
        body: "When the tide withdraws, the valley reveals old routes stacked under the mist. You carry an anchor-lamp that records light, rebuilding bridges, paths, and habitats one marker at a time. Lit places alter the ecology: fog recedes, creatures migrate, machines wake. There is no quest log, only the marks you leave and the world writing back when you return.",
        trailerLabel: "FIRST CONCEPT TRAILER PLACEHOLDER - EMBED VIDEO HERE (16:9)",
        shotLabel: "ARCHIVE STRIP PLACEHOLDER - ROUTES, ECOLOGY, ANCHOR-LAMP INTERACTION",
        ctaTrailer: "Watch Trailer",
        fileFacts: [
          ["Code", "MV-01"],
          ["Core", "Persistent light routes / world response"],
          ["Stage", "Playable slice"]
        ],
        highlights: [
          { title: "Light is terrain, not a switch", desc: "Lamps create returnable routes and reshape creature behavior nearby. You are not revealing a map; you are changing the valley's habits." },
          { title: "Routes are built by the player", desc: "Ropes, float bridges, counterweights, and old machines become reusable route parts. What you repair stays there and becomes the entrance to later events." },
          { title: "The ecology learns your taste", desc: "Some creatures follow light, some swallow it, and some use lamps as nests. The valley is not backdrop; it slowly learns who you are." }
        ]
      },
      games: {
        eyebrow: "WORK ARCHIVE",
        title: "Four worlds, one memory system.",
        subtitle: "Each project takes a different genre route, but asks the same question: if a player truly changed a place, how should that place remember?"
      },
      studio: {
        eyebrow: "THE STUDIO",
        title: "Foganchor is not a big studio, and we are not pretending to be one.",
        body: "We like long consequences inside small maps: a lamp changes migration, a letter changes island relationships, a collapse changes the next round. Our rule is simple: player history should not live only in UI. It should grow a shape in the world.",
        promise: "No infinite filler, no system flattened into chores, no choices that vanish after a reload. We would rather make fewer projects and give each place a memory of its own."
      },
      media: {
        eyebrow: "VISUAL ARCHIVE",
        title: "Field records pulled from the workbench.",
        tabs: { all: "All", featured: "Featured", dev: "In Production", released: "Released" }
      },
      news: {
        eyebrow: "PRODUCTION NOTES",
        title: "What we fixed this week, and what we took apart.",
        all: "ALL NOTES",
        read: "Read",
        items: [
          { date: "JUN 20, 2026", tag: "MISTLAMP VALE", title: "Note #12 - Teaching creatures to avoid player-built lamp bridges", excerpt: "The pathing system finally stopped optimizing only for distance. It now weighs brightness, wetness, and the last danger mark a player left." },
          { date: "JUN 02, 2026", tag: "RUSTROOT GARDEN", title: "Revealing Rustroot Garden: first glasshouse sketch for the strategy prototype", excerpt: "A half-dead greenhouse, plants that hold grudges, and an irrigation machine more stubborn than the player." },
          { date: "MAY 14, 2026", tag: "RINGFALL ARENA", title: "Ringfall Arena 1.2 - the Arena Memory Update", excerpt: "The new rule translates last round's broken floor into the next round's risk bands. Friendships remain outside warranty." }
        ]
      },
      community: {
        title: "Put your traces into our test worlds.",
        body: "Enter the observatory to play early builds, vote on the next prototypes, and see honest progress. Lurking is fine too; internal captures and failure footage land there first.",
        ctaDiscord: "Enter Discord Observatory",
        ctaWishlist: "Wishlist Mistlamp Vale",
        emailPlaceholder: "your@email.com - production notes every two weeks",
        subscribe: "Subscribe",
        subscribed: "Subscribed"
      },
      partners: {
        eyebrow: "FOR PARTNERS & PRESS",
        title: "Working with Foganchor",
        body: "Foganchor Studio builds systemic independent PC games about persistent consequences, readable worlds, and player traces. One released title, two in production, one prototype.",
        status: "4 PROJECTS · RINGFALL ARENA RELEASED · MISTLAMP VALE VERTICAL SLICE Q4 2026",
        contact: "Contact us",
        presskit: "Press Kit (coming soon)",
        items: [
          { title: "Publishing", desc: "Looking for partners who understand small-team cadence and long-tail games." },
          { title: "Platform", desc: "PC / Steam first; console and subscription opportunities after the core experience stabilizes." },
          { title: "Creators", desc: "Preview builds, capture assets, and developer notes are available for early coverage." },
          { title: "Press", desc: "Interviews, early access, and a full press kit are planned around vertical slice." }
        ]
      },
      footer: {
        copyright: "© 2026 Foganchor Studio",
        links: ["Steam", "Discord", "YouTube", "X / Twitter", "Press Kit", "Contact"]
      }
    }
  };

  window.FoganchorData = { links, nav, games, media, copy };
})();
