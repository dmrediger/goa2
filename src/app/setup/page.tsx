"use client";

import { X, Plus, ChevronLeft, Shuffle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

const STORAGE_KEY = "goa2-players";

interface Player {
  id: string;
  name: string;
}

function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}

function loadPlayers(): Player[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored) as Player[];
      return parsed;
    }
  } catch {
    // Invalid data, start fresh
  }
  return [];
}

function savePlayers(players: Player[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(players));
}

export default function SetupPage() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = loadPlayers();
    if (stored.length > 0) {
      setPlayers(stored);
    } else {
      // Start with one empty player slot
      setPlayers([{ id: generateId(), name: "" }]);
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage whenever players change (after initial load)
  useEffect(() => {
    if (isLoaded) {
      savePlayers(players);
    }
  }, [players, isLoaded]);

  const addPlayer = () => {
    setPlayers([...players, { id: generateId(), name: "" }]);
  };

  const updatePlayer = (id: string, name: string) => {
    setPlayers(players.map((p) => (p.id === id ? { ...p, name } : p)));
  };

  const removePlayer = (id: string) => {
    if (players.length > 1) {
      setPlayers(players.filter((p) => p.id !== id));
    }
  };

  const validPlayers = players.filter((p) => p.name.trim().length > 0);

  // Don't render until loaded to avoid hydration mismatch
  if (!isLoaded) {
    return (
      <main className="flex min-h-dvh flex-col items-center justify-center">
        <div className="text-muted-foreground">Loading...</div>
      </main>
    );
  }

  return (
    <main className="flex min-h-dvh flex-col">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-ice-500/10 via-transparent to-transparent" />

      <div className="relative z-10 flex flex-1 flex-col px-4 py-6">
        {/* Header */}
        <div className="mb-6 flex items-center">
          <Button asChild variant="ghost" size="sm" className="gap-2">
            <Link href="/">
              <ChevronLeft className="h-4 w-4" />
              <span className="text-sm font-medium uppercase tracking-wide">
                Back
              </span>
            </Link>
          </Button>
        </div>

        {/* Title */}
        <h1 className="mb-6 text-center text-2xl font-bold uppercase tracking-wide text-parchment-100">
          Player Setup
        </h1>

        {/* Player List */}
        <div className="mx-auto w-full max-w-md flex-1 space-y-3">
          {players.map((player, index) => (
            <div key={player.id} className="flex items-center gap-2">
              <span className="w-8 text-center text-sm font-bold text-ice-400">
                {index + 1}.
              </span>
              <Input
                type="text"
                value={player.name}
                onChange={(e) => updatePlayer(player.id, e.target.value)}
                placeholder={`Player ${index + 1} name`}
                className="flex-1 bg-muted/50"
                autoFocus={index === players.length - 1}
              />
              {players.length > 1 && (
                <Button
                  onClick={() => removePlayer(player.id)}
                  variant="destructive"
                  size="icon-sm"
                  aria-label="Remove player"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          ))}

          {/* Add Player Button */}
          <Button
            onClick={addPlayer}
            variant="game-ghost"
            className="w-full"
          >
            <Plus className="h-4 w-4" />
            Add Player
          </Button>
        </div>

        {/* Footer with Save Button */}
        <div className="mx-auto mt-6 w-full max-w-md">
          <Button
            asChild
            disabled={validPlayers.length < 2}
            variant="game"
            size="xl"
            className="w-full"
          >
            <Link href="/teams?from=setup" className="flex items-center gap-2">
              <Shuffle className="h-5 w-5" />
              Randomize Teams
            </Link>
          </Button>
          {validPlayers.length < 2 && (
            <p className="mt-2 text-center text-xs text-destructive">
              Add at least 2 players to continue
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
