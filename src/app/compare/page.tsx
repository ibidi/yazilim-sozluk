"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getConcepts, getLanguages, getConceptById, ConceptCompare } from "@/lib/compare-data";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThemeProvider } from "next-themes";

export default function ComparePage() {
  const concepts = getConcepts();
  const languages = getLanguages();
  const [selectedConceptId, setSelectedConceptId] = useState<string>(concepts[0].id);
  const [selectedConcept, setSelectedConcept] = useState<ConceptCompare | null>(null);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>(languages.slice(0, 2));

  useEffect(() => {
    if (selectedConceptId) {
      const concept = getConceptById(selectedConceptId);
      if (concept) {
        setSelectedConcept(concept);
      }
    }
  }, [selectedConceptId]);

  const handleConceptChange = (value: string) => {
    setSelectedConceptId(value);
  };

  const toggleLanguage = (language: string) => {
    setSelectedLanguages((prev) => {
      if (prev.includes(language)) {
        return prev.filter((l) => l !== language);
      } else {
        // En fazla 3 dil karşılaştırılabilsin
        if (prev.length < 3) {
          return [...prev, language];
        }
        return prev;
      }
    });
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-1 container py-8">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold">Konsept Karşılaştırma</h1>
              <p className="text-muted-foreground max-w-3xl">
                Farklı programlama dillerindeki aynı konseptlerin nasıl uygulandığını karşılaştırın.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle>Konsept ve Dil Seçimi</CardTitle>
                  <CardDescription>
                    Karşılaştırmak istediğiniz konsepti ve dilleri seçin
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Konsept</label>
                    <Select value={selectedConceptId} onValueChange={handleConceptChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Konsept seçin" />
                      </SelectTrigger>
                      <SelectContent>
                        {concepts.map((concept) => (
                          <SelectItem key={concept.id} value={concept.id}>
                            {concept.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Diller (en fazla 3 seçin)</label>
                    <div className="flex flex-wrap gap-2">
                      {languages.map((language) => (
                        <button
                          key={language}
                          onClick={() => toggleLanguage(language)}
                          className={`px-3 py-1 rounded-full text-xs border ${
                            selectedLanguages.includes(language)
                              ? "bg-primary text-primary-foreground border-primary"
                              : "bg-background border-input"
                          }`}
                        >
                          {language}
                        </button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="lg:col-span-3">
                {selectedConcept && (
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle>{selectedConcept.title}</CardTitle>
                      <CardDescription>
                        {selectedConcept.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {selectedLanguages.length > 0 ? (
                        <Tabs defaultValue="syntax" className="w-full">
                          <TabsList className="w-full">
                            <TabsTrigger value="syntax">Söz Dizimi</TabsTrigger>
                            <TabsTrigger value="explanation">Açıklama</TabsTrigger>
                            <TabsTrigger value="example">Örnek</TabsTrigger>
                          </TabsList>

                          <TabsContent value="syntax" className="space-y-4 mt-4">
                            {selectedLanguages.map((language) => (
                              selectedConcept.languages[language] && (
                                <div key={language} className="p-4 border rounded-lg space-y-2">
                                  <h3 className="font-bold">{language}</h3>
                                  <pre className="bg-muted p-2 rounded text-sm overflow-x-auto">
                                    <code>{selectedConcept.languages[language].syntax}</code>
                                  </pre>
                                </div>
                              )
                            ))}
                          </TabsContent>

                          <TabsContent value="explanation" className="space-y-4 mt-4">
                            {selectedLanguages.map((language) => (
                              selectedConcept.languages[language] && (
                                <div key={language} className="p-4 border rounded-lg space-y-2">
                                  <h3 className="font-bold">{language}</h3>
                                  <p>{selectedConcept.languages[language].explanation}</p>
                                </div>
                              )
                            ))}
                          </TabsContent>

                          <TabsContent value="example" className="space-y-4 mt-4">
                            {selectedLanguages.map((language) => (
                              selectedConcept.languages[language] && (
                                <div key={language} className="p-4 border rounded-lg space-y-2">
                                  <h3 className="font-bold">{language}</h3>
                                  <pre className="bg-muted p-2 rounded text-sm overflow-x-auto">
                                    <code>{selectedConcept.languages[language].example}</code>
                                  </pre>
                                </div>
                              )
                            ))}
                          </TabsContent>
                        </Tabs>
                      ) : (
                        <div className="text-center py-8">
                          <p className="text-muted-foreground">Lütfen en az bir programlama dili seçin</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}
