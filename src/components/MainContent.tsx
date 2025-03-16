"use client";

import { useState, useEffect } from "react";
import { Term, searchTermsByName, filterTermsByCategory } from "@/lib/data";
import { SearchBar } from "@/components/SearchBar";
import { CategoryFilter } from "@/components/CategoryFilter";
import { TermsGrid } from "@/components/TermsGrid";
import { TermDetailDialog } from "@/components/TermDetailDialog";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useFavorites } from "@/hooks/useFavorites";

interface MainContentProps {
  initialTerms: Term[];
  categories: string[];
}

export function MainContent({ initialTerms, categories }: MainContentProps) {
  const [terms, setTerms] = useState<Term[]>(initialTerms);
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [selectedTerm, setSelectedTerm] = useState<Term | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { favorites, toggleFavorite } = useFavorites();

  // Arama işlevi
  const handleSearch = (query: string) => {
    if (query.trim() === "") {
      if (selectedCategory === "Tümü") {
        setTerms(initialTerms);
      } else {
        setTerms(filterTermsByCategory(selectedCategory));
      }
    } else {
      const searchResults = searchTermsByName(query);
      if (selectedCategory !== "Tümü") {
        setTerms(searchResults.filter((term) => term.category === selectedCategory));
      } else {
        setTerms(searchResults);
      }
    }
  };

  // Kategori filtreleme
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === "Tümü") {
      setTerms(initialTerms);
    } else {
      setTerms(filterTermsByCategory(category));
    }
  };

  // Terim detaylarını görüntüleme
  const handleViewDetails = (id: string) => {
    const term = initialTerms.find((t) => t.id === id);
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
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 container py-8">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">Yazılım Sözlük</h1>
            <p className="text-muted-foreground max-w-3xl">
              Yazılım dünyasındaki kavramları ve programlama dillerindeki konseptleri
              yeni başlayanlar için anlaşılır bir şekilde açıklayan kapsamlı bir sözlük.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <SearchBar onSearch={handleSearch} />
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={handleCategoryChange}
            />
          </div>

          <TermsGrid
            terms={terms}
            onViewDetails={handleViewDetails}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
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
  );
}
