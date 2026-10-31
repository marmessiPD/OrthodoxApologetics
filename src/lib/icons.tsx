import type { LucideIcon, LucideProps } from 'lucide-react';
import {
  Activity, Atom, Baby, Bone, BookMarked, BookOpen, BookX, Brain, BrainCircuit, Building2, Church, CircleDot, CircleOff,
  CloudLightning, CloudSun, Compass, Copy, Cpu, Cross, Crown, Dna, DoorOpen, Earth, Eye, Feather, Flame, FlameKindling,
  FlaskConical, Flower2, Footprints, GitBranch, GitFork, Globe, Heart, HeartHandshake, HeartPulse, Hexagon, ImageIcon,
  Infinity as InfinityIcon, KeyRound, Landmark, Lightbulb, Lock, Magnet, Megaphone, Merge, Moon, MoonStar, Mountain, MountainSnow,
  Network, Orbit, Pickaxe, Route, Scale, Scroll, ScrollText, Shield, ShieldAlert, Sigma, SlidersHorizontal, Smile, Sparkle,
  Sparkles, Split, Star, Stethoscope, Sunrise, Swords, Telescope, Triangle, UserRound, UserSearch, Users, Wind, Wine,
} from 'lucide-react';

const map: Record<string, LucideIcon> = {
  activity: Activity, atom: Atom, baby: Baby, bone: Bone, 'book-marked': BookMarked, 'book-open': BookOpen, 'book-x': BookX,
  brain: Brain, 'brain-circuit': BrainCircuit, 'building-2': Building2, church: Church, 'circle-dot': CircleDot,
  'circle-off': CircleOff, 'cloud-lightning': CloudLightning, 'cloud-sun': CloudSun, compass: Compass, copy: Copy, cpu: Cpu,
  cross: Cross, crown: Crown, dna: Dna, 'door-open': DoorOpen, earth: Earth, eye: Eye, feather: Feather, flame: Flame,
  'flame-kindling': FlameKindling, 'flask-conical': FlaskConical, 'flower-2': Flower2, footprints: Footprints,
  'git-branch': GitBranch, 'git-fork': GitFork, globe: Globe, heart: Heart, 'heart-handshake': HeartHandshake,
  'heart-pulse': HeartPulse, hexagon: Hexagon, image: ImageIcon, infinity: InfinityIcon, 'key-round': KeyRound,
  landmark: Landmark, lightbulb: Lightbulb, lock: Lock, magnet: Magnet, megaphone: Megaphone, merge: Merge, moon: Moon,
  'moon-star': MoonStar, mountain: Mountain, 'mountain-snow': MountainSnow, network: Network, orbit: Orbit,
  pickaxe: Pickaxe, route: Route, scale: Scale, scroll: Scroll, 'scroll-text': ScrollText, shield: Shield,
  'shield-alert': ShieldAlert, sigma: Sigma, 'sliders-horizontal': SlidersHorizontal, smile: Smile, sparkle: Sparkle,
  sparkles: Sparkles, split: Split, star: Star, stethoscope: Stethoscope, sunrise: Sunrise, swords: Swords,
  telescope: Telescope, triangle: Triangle, 'user-round': UserRound, 'user-search': UserSearch, users: Users, wind: Wind,
  wine: Wine,
};

export function getIcon(name: string | undefined): LucideIcon {
  return (name && map[name]) || BookOpen;
}

export function DynIcon({ name, ...props }: { name: string | undefined } & LucideProps) {
  const Icon = getIcon(name);
  return <Icon {...props} />;
}
