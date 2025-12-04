"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

import { Button } from "~/components/ui/button";

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

interface HeroCarouselProps {
  heroes: HeroOption[];
  onSelect: (hero: HeroOption) => void;
  onImagesLoaded?: () => void;
}

export function HeroCarousel({ heroes, onSelect, onImagesLoaded }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [animationPhase, setAnimationPhase] = useState<"idle" | "exit" | "enter">("idle");
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | null>(null);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [allImagesReady, setAllImagesReady] = useState(false);

  const currentHero = heroes[displayIndex];

  // Track when all images are loaded
  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => {
      const next = new Set(prev);
      next.add(index);
      return next;
    });
  };

  // Check if all images are loaded
  useEffect(() => {
    if (loadedImages.size === heroes.length && !allImagesReady) {
      setAllImagesReady(true);
      onImagesLoaded?.();
    }
  }, [loadedImages, heroes.length, allImagesReady, onImagesLoaded]);

  // Reset state when heroes change
  useEffect(() => {
    setCurrentIndex(0);
    setDisplayIndex(0);
    setLoadedImages(new Set());
    setAllImagesReady(false);
  }, [heroes]);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const animateToIndex = (newIndex: number) => {
    if (newIndex === currentIndex || animationPhase !== "idle") return;

    const direction = newIndex > currentIndex ? "right" : "left";
    setSlideDirection(direction);
    setAnimationPhase("exit");
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setDisplayIndex(newIndex);
      setAnimationPhase("enter");
      setTimeout(() => {
        setAnimationPhase("idle");
        setSlideDirection(null);
      }, 150);
    }, 150);
  };

  const goToNext = () => {
    if (currentIndex < heroes.length - 1) {
      animateToIndex(currentIndex + 1);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      animateToIndex(currentIndex - 1);
    }
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0]?.clientX ?? null);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0]?.clientX ?? null);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrev();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrev();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, animationPhase]);

  if (!currentHero) return null;

  const complexity = Math.min(Math.max(currentHero.complexity, 1), 4);
  const complexityStars = "★".repeat(complexity) + "☆".repeat(4 - complexity);

  // Animation classes based on phase and direction
  // Using translateY because the card is rotated -90deg
  const getAnimationClass = () => {
    if (animationPhase === "idle") {
      return "translate-y-0 opacity-100 rotate-0";
    }
    if (animationPhase === "exit") {
      // Card swipes off screen with rotation
      if (slideDirection === "right") {
        // Going right: card exits to the left
        return "-translate-y-full opacity-0 rotate-8";
      }
      // Going left: card exits to the right
      return "translate-y-full opacity-0 rotate-8";
    }
    if (animationPhase === "enter") {
      // Card enters with arc
      if (slideDirection === "right") {
        // Going right: new card arcs up from bottom right
        return "animate-slide-in-right";
      }
      // Going left: new card arcs up from bottom left (mirrored)
      return "animate-slide-in-left";
    }
    return "";
  };

  return (
    <div className="flex flex-col items-center">
      {/* Main Card Display - Landscape */}
      <div
        className="relative w-full"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Large Centered Card - Landscape orientation */}
        <div className="-my-14 flex justify-center overflow-hidden">
          {/* Full-width glow */}
          <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-48 bg-ice-500/20 blur-3xl" />
          <div className="-rotate-90 relative z-10">
            {/* Render all images but only show the current one */}
            {heroes.map((hero, index) => (
              <div
                key={hero.id}
                className={`${index === displayIndex ? "" : "absolute inset-0 invisible"} ${
                  index === displayIndex
                    ? `transition-all duration-150 ease-out ${getAnimationClass()}`
                    : ""
                }`}
                style={
                  index === displayIndex
                    ? { transformOrigin: slideDirection === "left" ? "bottom left" : "bottom right" }
                    : undefined
                }
              >
                <Image
                  src={getImageSrc(hero.heroCardImage)}
                  alt={hero.name}
                  width={280}
                  height={392}
                  priority
                  className="rounded-xl shadow-2xl shadow-black/50"
                  onLoad={() => handleImageLoad(index)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows and Dots - Overlaid on card */}
        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-between px-2">
          <button
            type="button"
            onClick={goToPrev}
            disabled={currentIndex === 0 || animationPhase !== "idle"}
            className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-game-slate-900/70 text-parchment-100 hover:bg-game-slate-800 disabled:opacity-30"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={goToNext}
            disabled={currentIndex === heroes.length - 1 || animationPhase !== "idle"}
            className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-game-slate-900/70 text-parchment-100 hover:bg-game-slate-800 disabled:opacity-30"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Card Position Indicator - Overlaid at bottom of card */}
        <div className="pointer-events-none absolute inset-x-0 bottom-4 z-20 flex justify-center">
          <div className="pointer-events-auto flex gap-3">
            {heroes.map((_, index) => (
              <button
                type="button"
                key={index}
                onClick={() => animateToIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-amber-500"
                    : "w-3 bg-parchment-200/50 hover:bg-parchment-200/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Hero Info */}
      <div className="mt-4 w-full max-w-sm px-4 text-center">
        <h2 className="text-3xl font-bold uppercase tracking-wide text-parchment-100">
          {currentHero.name}
        </h2>
        <div className="mt-3 flex items-center justify-center gap-4">
          <span className="rounded-lg bg-ice-600/20 px-4 py-1.5 text-base font-medium text-ice-400">
            {currentHero.class}
          </span>
          <span className="text-xl text-amber-400" title={`Complexity: ${currentHero.complexity}/4`}>
            {complexityStars}
          </span>
        </div>

        {/* Stats */}
        <div className="mt-5 grid grid-cols-4 gap-3 text-sm">
          <div className="rounded-lg bg-game-slate-800/50 p-3">
            <div className="text-xs text-parchment-200/70">ATK</div>
            <div className="text-lg font-bold text-crimson-500">{currentHero.attack}</div>
          </div>
          <div className="rounded-lg bg-game-slate-800/50 p-3">
            <div className="text-xs text-parchment-200/70">DEF</div>
            <div className="text-lg font-bold text-ice-400">{currentHero.defense}</div>
          </div>
          <div className="rounded-lg bg-game-slate-800/50 p-3">
            <div className="text-xs text-parchment-200/70">INIT</div>
            <div className="text-lg font-bold text-amber-400">{currentHero.initiative}</div>
          </div>
          <div className="rounded-lg bg-game-slate-800/50 p-3">
            <div className="text-xs text-parchment-200/70">MOV</div>
            <div className="text-lg font-bold text-parchment-100">{currentHero.movement}</div>
          </div>
        </div>
      </div>

      {/* Pick Button */}
      <div className="mt-6 w-full max-w-sm px-4">
        <Button
          variant="game"
          size="xl"
          className="w-full"
          onClick={() => onSelect(currentHero)}
        >
          Pick {currentHero.name}
        </Button>
      </div>
    </div>
  );
}
