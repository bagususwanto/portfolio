"use client";

import Sidebar from "@/components/Sidebar";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function Home() {
  return (
    <BackgroundGradientAnimation>
      <main className="absolute z-50 inset-0 flex flex-row items-center justify-center gap-8 p-4 pointer-events-none">
        <Sidebar />
      </main>
    </BackgroundGradientAnimation>
  );
}
