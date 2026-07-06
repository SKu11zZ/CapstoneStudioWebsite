const withBase = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

export const assetManifest = {
  icons: {
    menu: withBase("/assets/icons/menu-black.png"),
    close: withBase("/assets/icons/close-black.png"),
  },
  hero: {
    background: withBase("/assets/generated/heroes/hero_cloud_city_wide.webp"),
    character: withBase("/assets/generated/heroes/hero_painter_character_cutout.png"),
  },
  characters: {
    ailo: withBase("/assets/generated/characters/character_ailo_cutout.png"),
    lumi: withBase("/assets/generated/characters/character_lumi_cutout.png"),
    thane: withBase("/assets/generated/characters/character_thane_cutout.png"),
    mira: withBase("/assets/generated/characters/character_mira_cutout.png"),
    noa: withBase("/assets/generated/characters/character_noa_cutout.png"),
  },
  games: {
    city: withBase("/assets/generated/games/game_city_above_clouds.webp"),
    mirrorLake: withBase("/assets/generated/games/game_mirror_lake.webp"),
    starfall: withBase("/assets/generated/games/game_starfall_meadow.webp"),
    whitebird: withBase("/assets/generated/games/game_whitebird_departure.webp"),
    mistwood: withBase("/assets/generated/games/game_mistwood_frontier.webp"),
    paintedDream: withBase("/assets/generated/games/game_painted_dream.webp"),
  },
  tech: {
    colorMood: withBase("/assets/generated/tech/tech_color_mood.webp"),
    cinematicQuests: withBase("/assets/generated/tech/tech_cinematic_quests.webp"),
    conceptToSpace: withBase("/assets/generated/tech/tech_concept_to_space.webp"),
    characterBonds: withBase("/assets/generated/tech/tech_character_bonds.webp"),
    softFocus: withBase("/assets/generated/tech/tech_soft_focus.webp"),
  },
  textures: {
    paper: withBase("/assets/textures/texture_paper_grain.webp"),
    clouds: withBase("/assets/textures/texture_soft_clouds.webp"),
    brushDivider: withBase("/assets/textures/brush_divider.svg"),
    paintSplash: withBase("/assets/textures/paint_splash_soft.svg"),
  },
} as const;
