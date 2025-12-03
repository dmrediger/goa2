"use client";

import { ChevronLeft, Crown, RefreshCw, Swords } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef, useState } from "react";

import { HeroCardModal } from "~/components/hero-pick/HeroCardModal";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { api } from "~/trpc/react";

const PLAYERS_STORAGE_KEY = "goa2-players";
const TEAMS_STORAGE_KEY = "goa2-teams";
const DRAFT_STORAGE_KEY = "goa2-draft";

interface Player {
  id: string;
  name: string;
}

interface Teams {
  red: Player[];
  blue: Player[];
  redPicksFirst: boolean;
}

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

interface PlayerPick {
  playerId: string;
  playerName: string;
  team: "red" | "blue";
  selectedHero: HeroOption | null;
}

interface DraftState {
  playerPicks: PlayerPick[];
  currentPickIndex: number;
  isComplete: boolean;
}

function loadPlayers(): Player[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem(PLAYERS_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored) as Player[];
    }
  } catch {
    // Invalid data
  }
  return [];
}

function loadTeams(): Teams | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem(TEAMS_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored) as Teams;
    }
  } catch {
    // Invalid data
  }
  return null;
}

function saveTeams(teams: Teams): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(TEAMS_STORAGE_KEY, JSON.stringify(teams));
}

function loadDraft(): DraftState | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem(DRAFT_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored) as DraftState;
    }
  } catch {
    // Invalid data
  }
  return null;
}

function clearDraft(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(DRAFT_STORAGE_KEY);
}

function TeamsPageContent() {
  const searchParams = useSearchParams();
  const [players, setPlayers] = useState<Player[]>([]);
  const [teams, setTeams] = useState<Teams | null>(null);
  const [draft, setDraft] = useState<DraftState | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedHero, setSelectedHero] = useState<HeroOption | null>(null);
  const [showHeroModal, setShowHeroModal] = useState(false);
  const hasAutoRandomized = useRef(false);

  const randomizeMutation = api.team.randomize.useMutation({
    onSuccess: (data) => {
      setTeams(data);
      saveTeams(data);
      // Clear draft when teams are re-randomized
      clearDraft();
      setDraft(null);
    },
  });

  useEffect(() => {
    const loadedPlayers = loadPlayers().filter((p) => p.name.trim().length > 0);
    setPlayers(loadedPlayers);

    const loadedTeams = loadTeams();
    setTeams(loadedTeams);

    const loadedDraft = loadDraft();
    setDraft(loadedDraft);

    setIsLoaded(true);
  }, []);

  // Auto-randomize when coming from setup page (indicated by ?from=setup)
  useEffect(() => {
    if (
      isLoaded &&
      players.length >= 2 &&
      searchParams.get("from") === "setup" &&
      !hasAutoRandomized.current
    ) {
      hasAutoRandomized.current = true;
      randomizeMutation.mutate({ players });
    }
  }, [isLoaded, players, searchParams, randomizeMutation]);

  const handleRandomize = () => {
    randomizeMutation.mutate({ players });
  };

  if (!isLoaded) {
    return (
      <main className="flex min-h-dvh flex-col items-center justify-center">
        <div className="text-muted-foreground">Loading...</div>
      </main>
    );
  }

  if (players.length < 2) {
    return (
      <main className="flex min-h-dvh flex-col">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-ice-500/10 via-transparent to-transparent" />
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 py-6">
          <p className="mb-4 text-center text-muted-foreground">
            Not enough players. Please add at least 2 players first.
          </p>
          <Button asChild variant="game-secondary">
            <Link href="/setup">Go to Player Setup</Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-dvh flex-col">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-ice-500/10 via-transparent to-transparent" />

      <div className="relative z-10 flex flex-1 flex-col px-4 py-6">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <Button asChild variant="ghost" size="sm" className="gap-2">
            <Link href="/setup">
              <ChevronLeft className="h-4 w-4" />
              <span className="text-sm font-medium uppercase tracking-wide">
                Back
              </span>
            </Link>
          </Button>
        </div>

        {/* Title */}
        <h1 className="mb-6 text-center text-2xl font-bold uppercase tracking-wide text-parchment-100">
          Teams
        </h1>

        {/* Teams Display */}
        {teams && (
          <div className="mx-auto w-full max-w-md space-y-4">
            {/* Atlantians (Red Team) */}
            <Card className="rounded-xl border-2 border-crimson-500/50 bg-crimson-600/10">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center justify-between text-xl font-bold uppercase tracking-wide text-crimson-500">
                  <span className="flex items-center gap-2">
                    Atlantians
                    {teams.redPicksFirst && (
                      <Crown className="h-5 w-5 text-amber-400" />
                    )}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {teams.red.map((player) => {
                  const playerPick = draft?.playerPicks.find(
                    (p) => p.playerId === player.id
                  );
                  return (
                    <div
                      key={player.id}
                      className="flex items-center justify-between"
                    >
                      <span className="font-medium text-parchment-100">
                        {player.name}
                      </span>
                      {playerPick?.selectedHero && (
                        <button
                          onClick={() => {
                            setSelectedHero(playerPick.selectedHero);
                            setShowHeroModal(true);
                          }}
                          className="text-sm text-crimson-500 hover:text-crimson-400 hover:underline"
                        >
                          {playerPick.selectedHero.name}
                          <span className="ml-1 text-xs text-parchment-200/50">
                            ({playerPick.selectedHero.class})
                          </span>
                        </button>
                      )}
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Titans (Blue Team) */}
            <Card className="rounded-xl border-2 border-ice-500/50 bg-ice-600/10">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center justify-between text-xl font-bold uppercase tracking-wide text-ice-400">
                  <span className="flex items-center gap-2">
                    Titans
                    {!teams.redPicksFirst && (
                      <Crown className="h-5 w-5 text-amber-400" />
                    )}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {teams.blue.map((player) => {
                  const playerPick = draft?.playerPicks.find(
                    (p) => p.playerId === player.id
                  );
                  return (
                    <div
                      key={player.id}
                      className="flex items-center justify-between"
                    >
                      <span className="font-medium text-parchment-100">
                        {player.name}
                      </span>
                      {playerPick?.selectedHero && (
                        <button
                          onClick={() => {
                            setSelectedHero(playerPick.selectedHero);
                            setShowHeroModal(true);
                          }}
                          className="text-sm text-ice-400 hover:text-ice-300 hover:underline"
                        >
                          {playerPick.selectedHero.name}
                          <span className="ml-1 text-xs text-parchment-200/50">
                            ({playerPick.selectedHero.class})
                          </span>
                        </button>
                      )}
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>
        )}

        {/* Action Buttons */}
        <div className="mx-auto mt-8 w-full max-w-md space-y-3">
          <Button
            asChild
            disabled={!teams}
            variant="game"
            size="xl"
            className="w-full"
          >
            <Link href="/pick">
              <Swords className="h-5 w-5" />
              {draft && !draft.isComplete
                ? "Continue Draft"
                : draft?.isComplete
                  ? "Restart Draft"
                  : "Pick Heroes"}
            </Link>
          </Button>

          <Button
            onClick={handleRandomize}
            disabled={randomizeMutation.isPending || (draft !== null && !draft.isComplete)}
            variant="game-secondary"
            size="xl"
            className="w-full"
          >
            <RefreshCw className={`h-4 w-4 ${randomizeMutation.isPending ? "animate-spin" : ""}`} />
            {randomizeMutation.isPending ? "Randomizing..." : "Re-randomize Teams"}
          </Button>

          {draft && !draft.isComplete && (
            <p className="text-center text-xs text-parchment-200/50">
              Draft in progress ({draft.currentPickIndex} of {draft.playerPicks.length} picks made)
            </p>
          )}

          {randomizeMutation.isError && (
            <p className="mt-2 text-center text-xs text-destructive">
              {randomizeMutation.error.message}
            </p>
          )}
        </div>
      </div>

      {/* Hero Card Modal */}
      <HeroCardModal
        hero={selectedHero}
        open={showHeroModal}
        onOpenChange={setShowHeroModal}
      />
    </main>
  );
}

export default function TeamsPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-dvh flex-col items-center justify-center">
          <div className="text-muted-foreground">Loading...</div>
        </main>
      }
    >
      <TeamsPageContent />
    </Suspense>
  );
}
