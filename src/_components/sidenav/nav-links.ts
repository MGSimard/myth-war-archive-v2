import {
  AudioLines,
  BookText,
  CircleFadingArrowUp,
  Hammer,
  House,
  Image,
  Infinity,
  Map,
  Scroll,
  type LucideIcon,
} from "lucide-react";

export interface NavLink {
  title: string;
  url: string;
  icon: LucideIcon;
}

interface NavLinkGroup {
  label: string;
  items: NavLink[];
}

export const navLinks: NavLinkGroup[] = [
  {
    label: "Introduction",
    items: [
      {
        title: "Home",
        url: "/",
        icon: House,
      },
      {
        title: "About Myth War",
        url: "/about-myth-war",
        icon: Scroll,
      },
      {
        title: "World of Myth War",
        url: "/world-of-myth-war",
        icon: BookText,
      },
    ],
  },
  {
    label: "Assets",
    items: [
      {
        title: "Maps",
        url: "/assets/maps",
        icon: Map,
      },
      {
        title: "Images",
        url: "/assets/images",
        icon: Image,
      },
      {
        title: "Audio",
        url: "/assets/audio",
        icon: AudioLines,
      },
    ],
  },
  {
    label: "Guides",
    items: [
      {
        title: "Leveling",
        url: "/guides/leveling",
        icon: CircleFadingArrowUp,
      },
      {
        title: "Rebirth",
        url: "/guides/rebirth",
        icon: Infinity,
      },
    ],
  },
  {
    label: "Tools",
    items: [
      {
        title: "Tools",
        url: "/tools",
        icon: Hammer,
      },
    ],
  },
];
