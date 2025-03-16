"use client";

import { Term } from "@/lib/data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Heart } from "lucide-react";

interface TermCardProps {
  term: Term;
  onViewDetails: (id: string) => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export function TermCard({ term, onViewDetails, isFavorite, onToggleFavorite }: TermCardProps) {
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Detay görünümünün açılmaması için
    onToggleFavorite(term.id);
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>{term.term}</span>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={handleFavoriteClick}
              aria-label={isFavorite ? "Favorilerden çıkar" : "Favorilere ekle"}
            >
              <Heart
                className={`h-5 w-5 ${isFavorite ? "fill-red-500 text-red-500" : "text-muted-foreground"}`}
              />
            </Button>
            <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
              {term.category}
            </span>
          </div>
        </CardTitle>
        <CardDescription>
          {term.definition.length > 150
            ? `${term.definition.substring(0, 150)}...`
            : term.definition}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {term.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-secondary/20 text-secondary rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Button
          variant="outline"
          size="sm"
          className="w-full"
          onClick={() => onViewDetails(term.id)}
        >
          <ExternalLink className="h-4 w-4 mr-2" />
          Detayları Görüntüle
        </Button>
      </CardFooter>
    </Card>
  );
}
