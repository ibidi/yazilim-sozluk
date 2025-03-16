"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Code, Github, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Code className="h-6 w-6 text-primary" />
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold">Yazılım Sözlük</span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/favorites">
            <Button variant="ghost" size="sm" className="gap-1">
              <Heart className="h-4 w-4" />
              <span className="hidden sm:inline">Favoriler</span>
            </Button>
          </Link>
          <Link href="/compare">
            <Button variant="ghost" size="sm" className="gap-1">
              <Code className="h-4 w-4" />
              <span className="hidden sm:inline">Karşılaştır</span>
            </Button>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
