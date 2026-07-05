import type { Localized, SiteContent } from "../types/site";
import { links, mailtoContact } from "./links";

export const content: Localized<SiteContent> = {
  en: {
    documentTitle: "Emberwake Studio | Worlds that remember you",
    brand: { short: "EMBERWAKE", full: "Emberwake Studio", zh: "余烬醒时工作室" },
    nav: [
      { id: "featured", href: "#featured", label: "Featured" },
      { id: "games", href: "#games", label: "Games" },
      { id: "team", href: "#team", label: "Team" },
      { id: "visuals", href: "#visuals", label: "Visuals" },
      { id: "timeline", href: "#timeline", label: "Roadmap" },
      { id: "contact", href: "#contact", label: "Contact" }
    ],
    a11y: {
      nav: "Primary navigation",
      menu: "Open navigation menu",
      closeMenu: "Close navigation menu",
      language: "Select language",
      mediaFilter: "Filter media"
    },
    hero: {
      eyebrow: "EMBERWAKE STUDIO / 2026 FIELD SLATE",
      title: "We build worlds that remember you.",
      zhTitle: "我们做会记住你的世界。",
      subtitle:
        "A compact game studio dossier for worlds where every light, scar, and route can leave evidence.",
      start: "Enter Studio File",
      featuredTag: "FEATURED GAME",
      featuredTitle: "Project Lantern",
      featuredMeta: ["IN DEVELOPMENT", "PC / STEAM", "ADVENTURE / EXPLORATION / ATMOSPHERIC"],
      ctaWishlist: "Wishlist Project Lantern",
      ctaGames: "Explore Our Games",
      ctaDiscord: "Join Discord",
      scroll: "Descend"
    },
    featured: {
      eyebrow: "CURRENT FEATURE",
      title: "Project Lantern",
      meta: "IN DEVELOPMENT / PC / STEAM / ADVENTURE / EXPLORATION / ATMOSPHERIC",
      quote: "Explore a world that remembers every light you leave behind.",
      body:
        "Carry the last lantern into drowned valleys. Every place you light stays changed: routes open, creatures wake, and the ruins rebuild their memory around the path you dared to make.",
      ctaTrailer: "View Trailer Frame",
      trailerLabel: "TRAILER PLACEHOLDER / 16:9 / LIGHT TEST",
      shotLabel: "SCREENSHOT STRIP / RUINED VALLEY STUDY",
      highlights: [
        { title: "Light that stays", body: "Every lantern mark permanently changes the valley, even when you return hours later." },
        { title: "Build your path through dangerous ruins", body: "Ropes, planks, counterweights, and fragile climbs become the route you claim." },
        { title: "A world that answers back", body: "Creatures remember where you placed light. Some follow it home. Others try to extinguish it." }
      ]
    },
    gamesIntro: {
      eyebrow: "PROJECT INDEX",
      title: "Four active files, one studio rule.",
      body:
        "Different genres, one obsession: places should remember that players passed through them."
    },
    teamIntro: {
      eyebrow: "CREW ROSTER",
      title: "The people inside the file.",
      body: "A small production crew arranged like developer ID cards, not a corporate headshot wall."
    },
    studio: {
      eyebrow: "STUDIO MANIFESTO",
      title: "We make small games with long memories.",
      body:
        "Emberwake Studio builds handcrafted systems where the player is not a visitor passing through a backdrop. Routes stay open. Scars remain visible. The world changes because you touched it.",
      promise:
        "No endless content treadmill, no disposable worlds, no forgetting the work a player already did. We would rather make a few places that stay with you than many places you leave behind.",
      principles: ["Persistent consequence", "Readable systems", "Handmade atmosphere"]
    },
    media: {
      eyebrow: "VISUAL ARCHIVE",
      title: "Frames, concepts, and capture plates.",
      body: "A media library built from local/CSS plates until final screenshots and trailer stills are ready.",
      tabs: { all: "All", featured: "Featured", gameplay: "Gameplay", concept: "Concept", trailer: "Trailer" }
    },
    news: {
      eyebrow: "NEWS & DEVLOG",
      title: "What the fires are working on.",
      all: "All posts",
      readMore: "Read more",
      items: [
        { date: "2026.06.20", tag: "Project Lantern", title: "Devlog #12: Teaching creatures to follow light", excerpt: "The moths finally move toward lanterns instead of walls. Here are three failed approaches and the strange footage that survived.", href: "#" },
        { date: "2026.06.02", tag: "Prototype", title: "Announcing Iron Orchard, our strategy prototype", excerpt: "A forest of iron trees, a living sapling, and a wave of rust coming over the ridge.", href: "#" },
        { date: "2026.05.14", tag: "Ashfall Arena", title: "Ashfall Arena 1.2: The collapse update", excerpt: "New arenas, faster floor decay, and a community-voted climbing tool that is a little too friendly.", href: "#" }
      ]
    },
    community: {
      title: "Watch the worlds being assembled.",
      body:
        "Join the Discord for test builds, votes, and progress notes. Or keep a quiet line open for studio letters when the subscription system goes live.",
      ctaDiscord: "Join Discord",
      ctaWishlist: "Wishlist Project Lantern",
      emailPlaceholder: "Email for future dev letters",
      subscribe: "Subscribe",
      emptyEmail: "Enter an email address first.",
      invalidEmail: "That email address does not look valid.",
      comingSoon: "Subscription coming soon. No email was sent or stored."
    },
    contact: {
      eyebrow: "COMMS CONSOLE",
      title: "Send a signal to the studio.",
      body: "Business, press, platform, creator, and playtest conversations can start here. The newsletter console validates locally and does not submit until a same-origin endpoint is configured.",
      email: "Business contact",
      pressKit: "Press Kit",
      social: "Social channels",
      subscribeTitle: "Devlog signal",
      emailPlaceholder: "Email for future dev letters",
      subscribe: "Subscribe",
      emptyEmail: "Enter an email address first.",
      invalidEmail: "That email address does not look valid.",
      comingSoon: "Subscription coming soon. No email was sent or stored."
    },
    timeline: {
      eyebrow: "DEVELOPMENT ROUTE",
      title: "Project Lantern roadmap.",
      body: "A public-facing route map for the featured project, kept broad until each milestone is solid."
    },
    partners: {
      eyebrow: "PARTNERS & PRESS",
      title: "Work with Emberwake.",
      body:
        "We are open to conversations with publishers, platforms, creators, and press who understand small teams and long-lived game worlds.",
      status: "4 projects / Ashfall Arena released / Project Lantern vertical slice planned for Q4 2026",
      contact: "Contact us",
      pressKit: "Press Kit (coming soon)",
      items: [
        { title: "Publishing", body: "For partners who can support a small team without sanding away the edge." },
        { title: "Platforms", body: "PC and Steam first, with console discussions after release windows are clearer." },
        { title: "Creators", body: "Preview builds and clean media packs will be available as milestones stabilize." },
        { title: "Press", body: "Interview requests and early access inquiries are welcome through email." }
      ]
    },
    footer: {
      copyright: "© 2026 Emberwake Studio",
      links: [
        { label: "Steam", href: links.steamUrl },
        { label: "Discord", href: links.discordUrl },
        { label: "YouTube", href: links.youtubeUrl },
        { label: "X / Twitter", href: links.twitterUrl },
        { label: "Press Kit", href: links.pressKitUrl },
        { label: "Contact", href: mailtoContact }
      ]
    }
  },
  zh: {
    documentTitle: "余烬醒时工作室 | 会记住你的世界",
    brand: { short: "EMBERWAKE", full: "Emberwake Studio", zh: "余烬醒时工作室" },
    nav: [
      { id: "featured", href: "#featured", label: "主推" },
      { id: "games", href: "#games", label: "游戏" },
      { id: "team", href: "#team", label: "成员" },
      { id: "visuals", href: "#visuals", label: "画面" },
      { id: "timeline", href: "#timeline", label: "路线" },
      { id: "contact", href: "#contact", label: "联系" }
    ],
    a11y: {
      nav: "主导航",
      menu: "打开导航菜单",
      closeMenu: "关闭导航菜单",
      language: "选择语言",
      mediaFilter: "筛选媒体内容"
    },
    hero: {
      eyebrow: "EMBERWAKE STUDIO / 2026 片场场记",
      title: "We build worlds that remember you.",
      zhTitle: "我们做会记住你的世界。",
      subtitle: "一份游戏工作室档案，记录那些会让每一盏灯、每一道伤痕、每一次走过的路留下证据的世界。",
      start: "进入工作室档案",
      featuredTag: "当前主推",
      featuredTitle: "Project Lantern / 灯火计划",
      featuredMeta: ["开发中", "PC / STEAM", "冒险 / 探索 / 氛围"],
      ctaWishlist: "愿望单《灯火计划》",
      ctaGames: "浏览全部游戏",
      ctaDiscord: "加入 Discord",
      scroll: "往下看"
    },
    featured: {
      eyebrow: "当前主推",
      title: "Project Lantern / 灯火计划",
      meta: "开发中 / PC / STEAM / 冒险 / 探索 / 氛围",
      quote: "Explore a world that remembers every light you leave behind.",
      body:
        "你提着最后一盏灯，走进被淹没的山谷。你点亮的每一处都会一直亮着：道路打开，生灵苏醒，遗迹沿着你敢走的路线重新组织自己的记忆。",
      ctaTrailer: "查看预告片画幅",
      trailerLabel: "预告片占位 / 16:9 / 灯火测试",
      shotLabel: "截图条占位 / 遗迹山谷研究",
      highlights: [
        { title: "留下的光，不会熄灭", body: "你挂起的每盏灯都会永久改变山谷。几个小时后回来，它还亮着，被它唤醒的一切也还在。" },
        { title: "在危险遗迹中自己开路", body: "绳索、木板、配重、脆弱的攀爬点。想上钟楼，就自己把路搭出来。" },
        { title: "一个会回应你的世界", body: "生灵会记住你的光在哪里。有的跟着光回家，有的想把它扑灭。山谷对你的回应，就是游戏的剧情。" }
      ]
    },
    gamesIntro: {
      eyebrow: "项目索引",
      title: "四份活跃档案，一条规矩。",
      body: "题材各不相同，执念只有一个：让每个地方都记得玩家来过。"
    },
    teamIntro: {
      eyebrow: "成员名册",
      title: "档案里的制作小队。",
      body: "像开发者识别卡一样呈现的小团队，而不是普通企业团队头像墙。"
    },
    studio: {
      eyebrow: "工作室宣言",
      title: "我们做小而有记忆的游戏。",
      body:
        "余烬醒时工作室相信，玩家不应该只是穿过背景布的游客。路要一直开着，伤痕要留在墙上，世界要因为你碰过它而发生改变。",
      promise:
        "不做无止境的内容跑步机，不做一次性世界，不遗忘玩家已经完成的事。宁可做几个你记得住的地方，也不做一堆你记不住的。",
      principles: ["持久影响", "可读系统", "手工氛围"]
    },
    media: {
      eyebrow: "画面档案库",
      title: "画幅、概念和捕捉板。",
      body: "在最终截图和预告片定稿前，先用本地/CSS 片场板搭建真实媒体库的结构。",
      tabs: { all: "全部", featured: "主推", gameplay: "实机", concept: "概念", trailer: "预告" }
    },
    news: {
      eyebrow: "新闻与开发日志",
      title: "我们正在做什么。",
      all: "全部文章",
      readMore: "阅读更多",
      items: [
        { date: "2026.06.20", tag: "灯火计划", title: "开发日志 #12：教生物学会追光", excerpt: "蛾鹿终于会朝灯走，而不是朝墙走了。这里是失败的三种方案，以及有点丢人的现眼录像。", href: "#" },
        { date: "2026.06.02", tag: "新原型", title: "公开《铁树果园》：我们的策略原型", excerpt: "一片铁树林、一棵活着的幼苗、一波被风吹来的锈蚀。首批概念图，以及我们为什么选择公开做原型。", href: "#" },
        { date: "2026.05.14", tag: "灰烬竞技场", title: "《灰烬竞技场》1.2：塌方更新", excerpt: "新场地、更快的地板崩解，还有社区投票选出的“友尽钩爪”。全体玩家免费。", href: "#" }
      ]
    },
    community: {
      title: "亲眼看着这些世界被搭起来。",
      body: "加入 Discord，抢先试玩测试版本、投票决定我们接下来做什么、每两周看到真实进度。也可以留下邮箱，等订阅系统上线后接收开发信。",
      ctaDiscord: "加入 Discord",
      ctaWishlist: "愿望单《灯火计划》",
      emailPlaceholder: "你的邮箱 - 未来接收开发信",
      subscribe: "订阅",
      emptyEmail: "请先输入邮箱。",
      invalidEmail: "这个邮箱格式看起来不正确。",
      comingSoon: "订阅功能暂未开放。邮箱没有被发送，也没有被保存。"
    },
    contact: {
      eyebrow: "通讯控制台",
      title: "向工作室发送信号。",
      body: "商务、媒体、平台、内容创作者和试玩合作都可以从这里开始。订阅控制台只在本地校验，除非配置同源 endpoint，否则不会提交。",
      email: "商务联系",
      pressKit: "媒体资料包",
      social: "社交频道",
      subscribeTitle: "开发日志信号",
      emailPlaceholder: "你的邮箱 - 未来接收开发信",
      subscribe: "订阅",
      emptyEmail: "请先输入邮箱。",
      invalidEmail: "这个邮箱格式看起来不正确。",
      comingSoon: "订阅功能暂未开放。邮箱没有被发送，也没有被保存。"
    },
    timeline: {
      eyebrow: "开发路线",
      title: "《灯火计划》路线图。",
      body: "面向玩家公开的主推项目路线图，每个节点都只在足够可靠时公开更多细节。"
    },
    partners: {
      eyebrow: "合作与媒体",
      title: "与余烬醒时合作。",
      body: "我们欢迎理解小团队与长线作品的发行、平台、内容创作者和媒体朋友联系。",
      status: "4 个项目 / 《灰烬竞技场》已发售 / 《灯火计划》垂直切片计划 2026 Q4",
      contact: "联系我们",
      pressKit: "媒体资料包（即将上线）",
      items: [
        { title: "发行", body: "欢迎愿意支持小团队、不磨平作品边缘的发行伙伴联系洽谈。" },
        { title: "平台", body: "PC / Steam 优先；主机平台合作计划将在发售窗口更明确后评估。" },
        { title: "内容创作者", body: "里程碑稳定后会提供试玩版本与可直接使用的素材包。" },
        { title: "媒体", body: "接受采访与抢先试玩询问；请通过邮箱联系。" }
      ]
    },
    footer: {
      copyright: "© 2026 Emberwake Studio / 余烬醒时工作室",
      links: [
        { label: "Steam", href: links.steamUrl },
        { label: "Discord", href: links.discordUrl },
        { label: "YouTube", href: links.youtubeUrl },
        { label: "X / Twitter", href: links.twitterUrl },
        { label: "媒体资料包", href: links.pressKitUrl },
        { label: "联系", href: mailtoContact }
      ]
    }
  }
};
