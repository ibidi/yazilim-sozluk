"use client";

import { Term } from "@/lib/data";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

interface TermDetailDialogProps {
  term: Term | null;
  isOpen: boolean;
  onClose: () => void;
  isFavorite?: boolean;
  onToggleFavorite?: (id: string) => void;
}

export function TermDetailDialog({
  term,
  isOpen,
  onClose,
  isFavorite = false,
  onToggleFavorite,
}: TermDetailDialogProps) {
  if (!term) return null;

  const handleFavoriteClick = () => {
    if (onToggleFavorite) {
      onToggleFavorite(term.id);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl flex justify-between items-center">
            <span>{term.term}</span>
            <div className="flex items-center gap-2">
              {onToggleFavorite && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleFavoriteClick}
                  className="h-8 w-8"
                  aria-label={isFavorite ? "Favorilerden çıkar" : "Favorilere ekle"}
                >
                  <Heart
                    className={`h-5 w-5 ${isFavorite ? "fill-red-500 text-red-500" : "text-muted-foreground"}`}
                  />
                </Button>
              )}
              <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                {term.category}
              </span>
            </div>
          </DialogTitle>
          <DialogDescription className="text-base mt-4">
            {term.definition}
          </DialogDescription>
        </DialogHeader>

        {term.usage && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Kullanım</h3>
            <div className="bg-muted p-3 rounded-md">{term.usage}</div>
          </div>
        )}

        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Etiketler</h3>
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
        </div>

        {term.related && term.related.length > 0 && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">İlgili Terimler</h3>
            <div className="flex flex-wrap gap-2">
              {term.related.map((relatedTerm) => (
                <span
                  key={relatedTerm}
                  className="text-xs px-3 py-1 border border-border rounded-full"
                >
                  {relatedTerm}
                </span>
              ))}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
