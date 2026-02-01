"use strict";
"use client";

import { useState } from "react";
import Stage1LockScreen from "@/components/Stage1LockScreen";
import Stage2Quiz from "@/components/Stage2Quiz";
import Stage3Memories from "@/components/Stage3Memories";
import Stage4Proposal from "@/components/Stage4Proposal";
import Stage5Ticket from "@/components/Stage5Ticket";

export default function Home() {
  const [stage, setStage] = useState(1);

  // Background gradient based on purple/pink theme
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 flex items-center justify-center p-4 overflow-hidden">
        {stage === 1 && <Stage1LockScreen onUnlock={() => setStage(2)} />}
        {stage === 2 && <Stage2Quiz onComplete={() => setStage(3)} />}
        {stage === 3 && <Stage3Memories onComplete={() => setStage(4)} />}
        {stage === 4 && <Stage4Proposal onYes={() => setStage(5)} />}
        {stage === 5 && <Stage5Ticket />}
    </main>
  );
}