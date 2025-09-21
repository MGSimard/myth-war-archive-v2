import {
  AudioLines,
  BookText,
  CircleFadingArrowUp,
  Earth,
  Hammer,
  House,
  Image,
  Infinity as InfinityIcon,
  Map,
  Scroll,
  Users  
} from "lucide-react";
import type {LucideIcon} from "lucide-react";
import { IconGitHub } from "@/_components/Icons";

export interface NavLink {
  title: string;
  url: string;
  icon: LucideIcon | React.ComponentType<React.SVGProps<SVGSVGElement>>;
  isOutside?: boolean;
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
        title: "Game History",
        url: "/game-history",
        icon: BookText,
      },
      {
        title: "World",
        url: "/world",
        icon: Earth,
      },
      {
        title: "Lore",
        url: "/lore",
        icon: Scroll,
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
        icon: InfinityIcon,
      },
    ],
  },
  {
    label: "Other",
    items: [
      {
        title: "Tools",
        url: "/tools",
        icon: Hammer,
      },
      {
        title: "Communities",
        url: "/communities",
        icon: Users,
      },
      {
        title: "GitHub",
        url: "https://github.com/MGSimard/myth-war-archive-v2",
        icon: IconGitHub,
        isOutside: true,
      },
    ],
  },
];
