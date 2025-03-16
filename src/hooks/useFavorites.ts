"use client";

import { useState, useEffect } from "react";

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // LocalStorage'dan favori terim ID'lerini yükle
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favoriteTerms");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
    setIsLoaded(true);
  }, []);

  // Favorileri localStorage'a kaydet
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("favoriteTerms", JSON.stringify(favorites));
    }
  }, [favorites, isLoaded]);

  // Bir terimi favorilere ekle
  const addFavorite = (termId: string) => {
    setFavorites((prev) => {
      if (prev.includes(termId)) return prev;
      return [...prev, termId];
    });
  };

  // Bir terimi favorilerden çıkar
  const removeFavorite = (termId: string) => {
    setFavorites((prev) => prev.filter((id) => id !== termId));
  };

  // Bir terimin favori olup olmadığını kontrol et
  const isFavorite = (termId: string) => {
    return favorites.includes(termId);
  };

  // Favorileri toggle (ekle/çıkar)
  const toggleFavorite = (termId: string) => {
    if (isFavorite(termId)) {
      removeFavorite(termId);
    } else {
      addFavorite(termId);
    }
  };

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
    toggleFavorite,
    isLoaded,
  };
}
