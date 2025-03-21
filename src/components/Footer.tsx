"use client";

import Link from "next/link";
import { Code, Github, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Code className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-bold">Yazılım Sözlük</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Yazılım dünyasındaki terimleri ve kavramları yeni başlayanlar için açıklayan kapsamlı bir sözlük.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-bold">Hızlı Erişim</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/favorites" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Favorilerim
                </Link>
              </li>
              <li>
                <Link href="/compare" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Konsept Karşılaştırma
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-bold">Kategoriler</h3>
            <ul className="grid grid-cols-2 gap-2">
              <li>
                <Link href="/?category=Genel" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Genel
                </Link>
              </li>
              <li>
                <Link href="/?category=Programlama" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Programlama
                </Link>
              </li>
              <li>
                <Link href="/?category=Web%20Geliştirme" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Web Geliştirme
                </Link>
              </li>
              <li>
                <Link href="/?category=Araçlar" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Araçlar
                </Link>
              </li>
              <li>
                <Link href="/?category=Temeller" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Temeller
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-4">
          <p className="text-center text-sm text-muted-foreground">
            Powered by @ibidi © {new Date().getFullYear()} Yazılım Sözlük. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
