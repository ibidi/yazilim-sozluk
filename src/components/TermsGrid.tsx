"use client";

import { Term } from "@/lib/data";
import { TermCard } from "@/components/TermCard";

interface TermsGridProps {
  terms: Term[];
  onViewDetails: (id: string) => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}

export function TermsGrid({ terms, onViewDetails, favorites, onToggleFavorite }: TermsGridProps) {
  if (terms.length === 0) {
    return (
      <div className="flex justify-center items-center p-8">
        <p className="text-muted-foreground">Sonuç bulunamadı</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {terms.map((term) => (
        <TermCard
          key={term.id}
          term={term}
          onViewDetails={onViewDetails}
          isFavorite={favorites.includes(term.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}
