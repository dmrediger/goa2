import Image from "next/image";
import Link from "next/link";

import { Button } from "~/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center">
      {/* Background with subtle pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-ice-500/10 via-transparent to-transparent" />

      <div className="relative z-10 flex flex-col items-center justify-center gap-8 px-4 py-8">
        {/* Game Logo/Image */}
        <div className="relative w-full max-w-md">
          <Image
            src="/guards-of-atlantis-ii.jpg"
            alt="Guards of Atlantis II"
            width={800}
            height={400}
            priority
            className="w-full rounded-sm border-2 border-ice-500/30 shadow-2xl shadow-ice-500/20"
          />
        </div>

        {/* Title Text */}
        <h1 className="text-center font-bold tracking-wide text-parchment-100">
          <span className="block text-sm uppercase text-ice-400">
            Welcome to
          </span>
          <span className="block text-3xl uppercase sm:text-4xl">
            Guards of Atlantis II
          </span>
          <span className="block text-sm uppercase text-parchment-200/70">
            Game Setup Assistant
          </span>
        </h1>

        {/* Play Button */}
        <Button asChild variant="game" size="xl" className="mt-4">
          <Link href="/setup">Play</Link>
        </Button>
      </div>
    </main>
  );
}
