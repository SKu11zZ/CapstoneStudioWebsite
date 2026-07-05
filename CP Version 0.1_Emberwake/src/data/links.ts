import type { LinkConfig } from "../types/site";

// TODO: Replace placeholder URLs when official channels are ready.
export const links: LinkConfig = {
  steamUrl: "#",
  discordUrl: "#",
  youtubeUrl: "#",
  twitterUrl: "#",
  pressKitUrl: "#",
  contactEmail: "hello@emberwake.games"
} as const;

export const mailtoContact = `mailto:${links.contactEmail}`;
