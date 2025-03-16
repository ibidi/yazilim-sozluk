"use client";

import { useMemo } from "react";
import { Term, terms } from "@/lib/data";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TermsGrid } from "@/components/TermsGrid";
import { TermDetailDialog } from "@/components/TermDetailDialog";
import { useFavorites } from "@/hooks/useFavorites";
import { useState } from "react";
import { ThemeProvider } from "next-themes";

export default function FavoritesPage() {
  const { favorites, toggleFavorite } = useFavorites();
  const [selectedTerm, setSelectedTerm] = useState<Term | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const favoriteTerms = useMemo(() => {
    return terms.filter(term => favorites.includes(term.id));
  }, [favorites]);

  // Terim detaylarını görüntüleme
  const handleViewDetails = (id: string) => {
    const term = terms.find((t) => t.id === id);
    if (term) {
      setSelectedTerm(term);
      setIsDialogOpen(true);
    }
  };

  // Diyalogu kapatma
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-1 container py-8">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold">Favori Terimlerim</h1>
              <p className="text-muted-foreground max-w-3xl">
                Favori olarak işaretlediğiniz terimler burada listelenir.
              </p>
            </div>

            {favoriteTerms.length > 0 ? (
              <TermsGrid
                terms={favoriteTerms}
                onViewDetails={handleViewDetails}
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
              />
            ) : (
              <div className="py-12 text-center">
                <p className="text-muted-foreground">Henüz favori teriminiz yok.</p>
                <p className="text-muted-foreground mt-2">
                  Ana sayfada beğendiğiniz terimlere kalp ikonuna tıklayarak favori ekleyebilirsiniz.
                </p>
              </div>
            )}
          </div>

          <TermDetailDialog
            term={selectedTerm}
            isOpen={isDialogOpen}
            onClose={handleCloseDialog}
            isFavorite={selectedTerm ? favorites.includes(selectedTerm.id) : false}
            onToggleFavorite={toggleFavorite}
          />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}
