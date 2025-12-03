"use client";

import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { useState } from "react";

import { Button } from "~/components/ui/button";
import { Spinner } from "~/components/ui/spinner";

export default function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <main className="relative h-dvh w-full overflow-hidden bg-game-slate-950">
      {/* Loading spinner */}
      {!imageLoaded && (
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <Spinner className="size-12 text-ice-400" />
        </div>
      )}

      {/* Full-screen background image */}
      <Image
        src="/home-background.webp"
        alt="Guards of Atlantis II"
        fill
        priority
        className={`object-cover object-center transition-opacity duration-300 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setImageLoaded(true)}
      />

      {/* Play Button - positioned below the logo */}
      <div
        className={`absolute inset-x-0 bottom-[15%] z-10 flex justify-center sm:bottom-1/4 transition-opacity duration-300 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <Button asChild variant="game" size="2xl">
          <Link href="/setup">
            <Play className="fill-current" />
            Play Now
          </Link>
        </Button>
      </div>
    </main>
  );
}
