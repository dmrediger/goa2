"use client";

import { ChevronLeft, RotateCcw } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { HeroCarousel } from "~/components/hero-pick/HeroCarousel";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { api } from "~/trpc/react";

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
  heroOptions: HeroOption[];
  selectedHero: HeroOption | null;
}

interface DraftState {
  teams: Teams;
  pickOrder: { playerId: string; playerName: string; team: "red" | "blue" }[];
  currentPickIndex: number;
  playerPicks: PlayerPick[];
  isComplete: boolean;
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

function saveDraft(draft: DraftState): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(draft));
}

function clearDraft(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(DRAFT_STORAGE_KEY);
}

export default function PickPage() {
  const router = useRouter();
  const [teams, setTeams] = useState<Teams | null>(null);
  const [draft, setDraft] = useState<DraftState | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedHero, setSelectedHero] = useState<HeroOption | null>(null);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [showRestartDialog, setShowRestartDialog] = useState(false);

  const initDraftMutation = api.heroPick.initializeDraft.useMutation({
    onSuccess: (data) => {
      setDraft(data as DraftState);
      saveDraft(data as DraftState);
    },
  });

  useEffect(() => {
    const loadedTeams = loadTeams();
    setTeams(loadedTeams);

    const existingDraft = loadDraft();
    if (existingDraft && !existingDraft.isComplete) {
      setDraft(existingDraft);
    }

    setIsLoaded(true);
  }, []);

  // Initialize draft when teams are loaded but no draft exists
  useEffect(() => {
    if (isLoaded && teams && !draft && !initDraftMutation.isPending) {
      initDraftMutation.mutate({ teams });
    }
  }, [isLoaded, teams, draft, initDraftMutation]);

  const handleHeroSelect = (hero: HeroOption) => {
    setSelectedHero(hero);
    setShowConfirmDialog(true);
  };

  const handleRestartDraft = () => {
    setShowRestartDialog(true);
  };

  const confirmRestartDraft = () => {
    clearDraft();
    setDraft(null);
    setShowRestartDialog(false);
    // This will trigger the useEffect to reinitialize the draft
  };

  const confirmPick = () => {
    if (!draft || !selectedHero) return;

    // Update the draft state
    const updatedPicks = [...draft.playerPicks];
    const currentPick = updatedPicks[draft.currentPickIndex];
    if (currentPick) {
      updatedPicks[draft.currentPickIndex] = {
        ...currentPick,
        selectedHero,
      };
    }

    const newPickIndex = draft.currentPickIndex + 1;
    const isComplete = newPickIndex >= draft.pickOrder.length;

    const updatedDraft: DraftState = {
      ...draft,
      playerPicks: updatedPicks,
      currentPickIndex: newPickIndex,
      isComplete,
    };

    setDraft(updatedDraft);
    saveDraft(updatedDraft);
    setShowConfirmDialog(false);
    setSelectedHero(null);

    // If draft is complete, go back to teams page
    if (isComplete) {
      router.push("/teams");
    }
  };

  if (!isLoaded || initDraftMutation.isPending) {
    return (
      <main className="flex min-h-dvh flex-col items-center justify-center">
        <div className="text-muted-foreground">
          {initDraftMutation.isPending ? "Preparing hero draft..." : "Loading..."}
        </div>
      </main>
    );
  }

  if (!teams) {
    return (
      <main className="flex min-h-dvh flex-col">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-ice-500/10 via-transparent to-transparent" />
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 py-6">
          <p className="mb-4 text-center text-muted-foreground">
            No teams found. Please set up teams first.
          </p>
          <Button asChild variant="game-secondary">
            <Link href="/teams">Go to Teams</Link>
          </Button>
        </div>
      </main>
    );
  }

  if (initDraftMutation.isError) {
    return (
      <main className="flex min-h-dvh flex-col">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-ice-500/10 via-transparent to-transparent" />
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 py-6">
          <p className="mb-4 text-center text-destructive">
            {initDraftMutation.error.message}
          </p>
          <Button asChild variant="game-secondary">
            <Link href="/teams">Go Back</Link>
          </Button>
        </div>
      </main>
    );
  }

  if (!draft) {
    return (
      <main className="flex min-h-dvh flex-col items-center justify-center">
        <div className="text-muted-foreground">Initializing draft...</div>
      </main>
    );
  }

  if (draft.isComplete) {
    router.push("/teams");
    return null;
  }

  const currentPick = draft.playerPicks[draft.currentPickIndex];
  if (!currentPick) {
    return (
      <main className="flex min-h-dvh flex-col items-center justify-center">
        <div className="text-destructive">Invalid draft state</div>
      </main>
    );
  }

  const teamColor = currentPick.team === "red" ? "text-crimson-500" : "text-ice-400";
  const teamName = currentPick.team === "red" ? "Atlantians" : "Titans";

  return (
    <main className="flex min-h-dvh flex-col">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-ice-500/10 via-transparent to-transparent" />

      <div className="relative z-10 flex flex-1 flex-col px-4 py-6">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <Button asChild variant="ghost" size="sm" className="gap-2">
            <Link href="/teams">
              <ChevronLeft className="h-4 w-4" />
              <span className="text-sm font-medium uppercase tracking-wide">
                Back
              </span>
            </Link>
          </Button>
          <div className="flex items-center gap-4">
            <div className="text-sm text-parchment-200/70">
              Pick {draft.currentPickIndex + 1} of {draft.pickOrder.length}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleRestartDraft}
              className="gap-1 text-parchment-200/50 hover:text-parchment-100"
              title="Restart draft with new heroes"
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Player Turn Header */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold uppercase tracking-wide text-parchment-100">
            <span className={teamColor}>{currentPick.playerName}&apos;s</span> Pick
          </h1>
          <p className="mt-1 text-sm text-parchment-200/70">
            {teamName}
          </p>
        </div>

        {/* Hero Carousel */}
        <div className="flex-1">
          <HeroCarousel
            heroes={currentPick.heroOptions}
            onSelect={handleHeroSelect}
          />
        </div>
      </div>

      {/* Confirmation Dialog */}
      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <DialogContent className="border-ice-500/30 bg-game-slate-900">
          <DialogHeader>
            <DialogTitle className="text-parchment-100">
              Confirm Your Pick
            </DialogTitle>
            <DialogDescription className="text-parchment-200/70">
              {currentPick.playerName}, are you sure you want to pick{" "}
              <span className="font-bold text-amber-400">{selectedHero?.name}</span>?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-2 sm:gap-0">
            <Button
              variant="ghost"
              size="lg"
              onClick={() => setShowConfirmDialog(false)}
              className="text-lg text-parchment-200"
            >
              Cancel
            </Button>
            <Button variant="game" size="lg" onClick={confirmPick} className="text-lg">
              Confirm Pick
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Restart Draft Confirmation Dialog */}
      <Dialog open={showRestartDialog} onOpenChange={setShowRestartDialog}>
        <DialogContent className="border-crimson-500/30 bg-game-slate-900">
          <DialogHeader>
            <DialogTitle className="text-parchment-100">
              Restart Draft?
            </DialogTitle>
            <DialogDescription className="text-parchment-200/70">
              This will discard all current picks and start a new draft with different hero options. This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-2 sm:gap-0">
            <Button
              variant="ghost"
              size="lg"
              onClick={() => setShowRestartDialog(false)}
              className="text-lg text-parchment-200"
            >
              Cancel
            </Button>
            <Button
              variant="game-secondary"
              size="lg"
              onClick={confirmRestartDraft}
              className="bg-crimson-600 text-lg hover:bg-crimson-500"
            >
              Restart Draft
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}
