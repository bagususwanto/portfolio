"use client";
import { usePathname } from "next/navigation";

export default function Content({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const title = pathname.split("/").filter(Boolean).join(" > ") || "About";

  return (
    <div className="flex flex-col items-center w-4xl h-full pt-4 rounded-xl shadow-xl backdrop-blur-3xl bg-black/10 dark:bg-gray-800/30 dark:shadow-black/40 border border-gray-200/20 dark:border-gray-700/30">
      <div className="flex justify-start w-full px-4">
        <h1 className="text-2xl font-bold capitalize">{title}</h1>
      </div>
      {children}
    </div>
  );
}
