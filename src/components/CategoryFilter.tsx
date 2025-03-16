"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <Tabs value={selectedCategory} onValueChange={onSelectCategory} className="w-full">
      <TabsList className="w-full overflow-x-auto flex flex-nowrap justify-start mb-4">
        <TabsTrigger value="Tümü" className="px-4">
          Tümü
        </TabsTrigger>
        {categories.map((category) => (
          <TabsTrigger key={category} value={category} className="px-4">
            {category}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
