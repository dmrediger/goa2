"use client";

import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "~/components/ui/dialog";

interface HeroOption {
  id: number;
  name: string;
  slug: string;
  class: string;
  collection: string;
  complexity: number;
  attack: number;
  defense: number;
  initiative: number;
  movement: number;
  heroCardImage: string;
}

function getImageSrc(path: string): string {
  return path.startsWith("/") ? path : `/${path}`;
}

interface HeroCardModalProps {
  hero: HeroOption | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function HeroCardModal({ hero, open, onOpenChange }: HeroCardModalProps) {
  if (!hero) return null;

  const complexity = Math.min(Math.max(hero.complexity, 1), 4);
  const complexityStars = "★".repeat(complexity) + "☆".repeat(4 - complexity);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="border-ice-500/30 bg-game-slate-900 p-4 sm:max-w-md" aria-describedby={undefined}>
        <div className="flex flex-col items-center">
          {/* Card - Landscape orientation */}
          <div className="-my-10 flex justify-center">
            <div className="-rotate-90">
              <Image
                src={getImageSrc(hero.heroCardImage)}
                alt={hero.name}
                width={220}
                height={308}
                priority
                className="rounded-xl shadow-2xl shadow-ice-500/30"
              />
            </div>
          </div>

          {/* Hero Info */}
          <div className="mt-2 w-full text-center">
            <DialogTitle className="text-2xl font-bold uppercase tracking-wide text-parchment-100">
              {hero.name}
            </DialogTitle>
            <div className="mt-2 flex items-center justify-center gap-3">
              <span className="rounded-md bg-ice-600/20 px-3 py-1 text-sm font-medium text-ice-400">
                {hero.class}
              </span>
              <span className="text-amber-400" title={`Complexity: ${hero.complexity}/4`}>
                {complexityStars}
              </span>
            </div>

            {/* Stats */}
            <div className="mt-4 grid grid-cols-4 gap-2 text-sm">
              <div className="rounded-md bg-game-slate-800/50 p-2">
                <div className="text-xs text-parchment-200/70">ATK</div>
                <div className="font-bold text-crimson-500">{hero.attack}</div>
              </div>
              <div className="rounded-md bg-game-slate-800/50 p-2">
                <div className="text-xs text-parchment-200/70">DEF</div>
                <div className="font-bold text-ice-400">{hero.defense}</div>
              </div>
              <div className="rounded-md bg-game-slate-800/50 p-2">
                <div className="text-xs text-parchment-200/70">INIT</div>
                <div className="font-bold text-amber-400">{hero.initiative}</div>
              </div>
              <div className="rounded-md bg-game-slate-800/50 p-2">
                <div className="text-xs text-parchment-200/70">MOV</div>
                <div className="font-bold text-parchment-100">{hero.movement}</div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
