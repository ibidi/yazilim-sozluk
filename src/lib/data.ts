export interface Term {
  id: string;
  term: string;
  definition: string;
  category: string;
  tags: string[];
  usage?: string;
  related?: string[];
}

// İlk örnek terimler
export const terms: Term[] = [
  {
    id: "1",
    term: "API",
    definition: "Uygulama Programlama Arayüzü (Application Programming Interface), uygulamaların birbirleriyle iletişim kurmasını sağlayan bir arayüzdür.",
    category: "Genel",
    tags: ["entegrasyon", "arayüz", "web"],
    usage: "REST API, bir web servisi ile iletişim kurmanın yaygın bir yoludur.",
    related: ["REST", "HTTP", "Endpoint"]
  },
  {
    id: "2",
    term: "Framework",
    definition: "Yazılım geliştirmeyi kolaylaştırmak için tasarlanmış, önceden hazırlanmış kod parçaları, kütüphaneler ve araçlar topluluğudur.",
    category: "Genel",
    tags: ["geliştirme", "mimari", "altyapı"],
    usage: "React, JavaScript tabanlı kullanıcı arayüzleri oluşturmak için kullanılan popüler bir frameworktür.",
    related: ["Library", "React", "Angular", "Vue"]
  },
  {
    id: "3",
    term: "Git",
    definition: "Yazılım geliştirme sürecinde kod değişikliklerini izlemek için kullanılan dağıtık bir sürüm kontrol sistemidir.",
    category: "Araçlar",
    tags: ["sürüm kontrol", "depolama", "işbirliği"],
    usage: "Geliştiriciler, yeni bir özellik üzerinde çalışırken genellikle ayrı bir Git dalı (branch) oluştururlar.",
    related: ["GitHub", "Commit", "Branch", "Merge"]
  },
  {
    id: "4",
    term: "Frontend",
    definition: "Bir uygulamanın kullanıcı tarafından görülen ve etkileşime girilen kısmıdır.",
    category: "Web Geliştirme",
    tags: ["UI", "tarayıcı", "istemci"],
    usage: "Frontend geliştiriciler genellikle HTML, CSS ve JavaScript kullanırlar.",
    related: ["Backend", "UI", "UX", "HTML", "CSS", "JavaScript"]
  },
  {
    id: "5",
    term: "Backend",
    definition: "Bir uygulamanın sunucu tarafında çalışan, veri işleme ve depolama görevlerini yürüten bölümüdür.",
    category: "Web Geliştirme",
    tags: ["sunucu", "veritabanı", "API"],
    usage: "Backend sistemler genellikle Python, Java, Node.js gibi diller kullanılarak geliştirilir.",
    related: ["Frontend", "Sunucu", "Veritabanı", "API"]
  },
  {
    id: "6",
    term: "Algoritma",
    definition: "Bir problemi çözmek veya belirli bir görevi yerine getirmek için takip edilen adımlar dizisidir.",
    category: "Temeller",
    tags: ["problem çözme", "mantık", "hesaplama"],
    usage: "Sıralama algoritmaları, verileri belirli bir düzende organize etmek için kullanılır.",
    related: ["Veri Yapıları", "Karmaşıklık", "Optimizasyon"]
  },
  {
    id: "7",
    term: "Değişken",
    definition: "Bilgisayar programlarında veriyi geçici olarak depolamak için kullanılan isimlendirilmiş bir bellek konumudur.",
    category: "Programlama",
    tags: ["veri", "depolama", "tanımlama"],
    usage: "let sayi = 5; // JavaScript'te bir değişken tanımlama",
    related: ["Sabit", "Kapsam", "Veri Tipi"]
  },
  {
    id: "8",
    term: "CSS",
    definition: "Cascading Style Sheets, web sayfalarının görünümünü ve düzenini tanımlamak için kullanılan bir stil dilidir.",
    category: "Web Geliştirme",
    tags: ["stil", "tasarım", "web"],
    usage: "CSS ile bir web sayfasının renkleri, yazı tipleri ve düzeni özelleştirilebilir.",
    related: ["HTML", "Responsive Design", "Flexbox", "Grid"]
  },
  {
    id: "9",
    term: "OOP",
    definition: "Nesne Yönelimli Programlama (Object-Oriented Programming), yazılım tasarımının, verileri ve davranışları birlikte içeren nesneler etrafında organize edildiği bir paradigmadır.",
    category: "Programlama",
    tags: ["paradigma", "sınıflar", "nesneler"],
    usage: "Java, C++ ve Python gibi diller OOP prensiplerini destekler.",
    related: ["Class", "Inheritance", "Encapsulation", "Polymorphism"]
  },
  {
    id: "10",
    term: "Bug",
    definition: "Bir programın beklendiği gibi çalışmamasına neden olan bir hata veya kusurudur.",
    category: "Geliştirme",
    tags: ["hata", "sorun", "debugging"],
    usage: "Geliştirici, kullanıcı arayüzündeki görsel bir bug'ı düzeltti.",
    related: ["Debugging", "Error", "Fix", "QA"]
  },
  // JavaScript terimleri
  {
    id: "11",
    term: "Arrow Function",
    definition: "JavaScript'te fonksiyonları tanımlamanın kısa bir yolunu sunan, ES6 ile eklenen bir özelliktir.",
    category: "JavaScript",
    tags: ["ES6", "fonksiyon", "sözdizimi"],
    usage: "const topla = (a, b) => a + b; // Bir arrow function örneği",
    related: ["Function Expression", "Callback", "this keyword", "ES6"]
  },
  {
    id: "12",
    term: "Promise",
    definition: "JavaScript'te asenkron işlemleri yönetmek için kullanılan, bir işlemin tamamlanmasını veya başarısız olmasını temsil eden bir nesnedir.",
    category: "JavaScript",
    tags: ["asenkron", "callback", "ES6", "async/await"],
    usage: "fetch('api/data').then(response => response.json()).catch(error => console.error(error));",
    related: ["Async/Await", "Callback", "Fetch API", "ES6"]
  },
  {
    id: "13",
    term: "Destructuring",
    definition: "JavaScript'te nesnelerin veya dizilerin değerlerini ayrı değişkenlere atamak için kullanılan bir sözdizimi özelliğidir.",
    category: "JavaScript",
    tags: ["ES6", "nesne", "dizi", "atama"],
    usage: "const { isim, yas } = kisi; // Nesne destructuring\nconst [ilk, ikinci] = dizi; // Dizi destructuring",
    related: ["Spread Operator", "ES6", "Object", "Array"]
  },
  // Python terimleri
  {
    id: "14",
    term: "List Comprehension",
    definition: "Python'da tek satırda liste oluşturmayı sağlayan, daha kısa ve okunabilir kod yazmanızı sağlayan bir özelliktir.",
    category: "Python",
    tags: ["liste", "döngü", "ifade", "kısa yol"],
    usage: "kareler = [x**2 for x in range(10) if x % 2 == 0] # Çift sayıların karelerini içeren liste",
    related: ["Generator Expression", "for loop", "if statement", "list"]
  },
  {
    id: "15",
    term: "Decorators",
    definition: "Python'da varolan fonksiyonları değiştirmek veya genişletmek için kullanılan özel bir fonksiyon türüdür.",
    category: "Python",
    tags: ["metaprogramlama", "fonksiyon", "genişletme"],
    usage: "@zamanla\ndef uzun_islem():\n    pass # @zamanla bir decorator kullanımı",
    related: ["Higher-order functions", "Wrapper functions", "Functional programming"]
  },
  {
    id: "16",
    term: "Generator",
    definition: "Python'da bir değer dizisi üreten ve değerleri teker teker döndüren, memory-efficient fonksiyonlardır.",
    category: "Python",
    tags: ["iterator", "yield", "bellek", "lazy evaluation"],
    usage: "def sayilar():\n    i = 0\n    while True:\n        yield i\n        i += 1",
    related: ["Iterator", "yield keyword", "memory efficiency", "lazy evaluation"]
  },
  // Java terimleri
  {
    id: "17",
    term: "JVM",
    definition: "Java Virtual Machine, Java bytecode'unu yorumlayan ve çalıştıran sanal bir makine olup Java'nın 'write once, run anywhere' felsefesini mümkün kılar.",
    category: "Java",
    tags: ["sanal makine", "bytecode", "platform bağımsız"],
    usage: "Java programları önce .java uzantılı kaynak kodundan .class uzantılı bytecode'a derlenir, sonra JVM tarafından çalıştırılır.",
    related: ["Bytecode", "JRE", "JDK", "Platform independence"]
  },
  {
    id: "18",
    term: "Garbage Collection",
    definition: "Java'da otomatik bellek yönetimi sağlayan, kullanılmayan nesneleri tespit edip belleği temizleyen süreçtir.",
    category: "Java",
    tags: ["bellek yönetimi", "temizleme", "heap"],
    usage: "Java'da System.gc() çağrısı Garbage Collector'a bir temizlik önerisi yapar, ancak bu zorunlu değildir.",
    related: ["Memory Management", "Heap", "Object lifecycle", "finalize()"]
  },
  {
    id: "19",
    term: "Lambda Expression",
    definition: "Java 8 ile eklenen, anonim fonksiyonlar oluşturmanızı sağlayan ve fonksiyonel programlamayı destekleyen bir özelliktir.",
    category: "Java",
    tags: ["Java 8", "functional", "anonim", "kısa yol"],
    usage: "Collections.sort(liste, (a, b) -> a.compareTo(b)); // Lambda ile sıralama",
    related: ["Functional Interface", "Stream API", "Method Reference", "Java 8"]
  },
  // PHP terimleri
  {
    id: "20",
    term: "PSR",
    definition: "PHP Standards Recommendations, PHP kod standartlarını ve en iyi uygulamaları tanımlayan bir dizi rehberdir.",
    category: "PHP",
    tags: ["standartlar", "kodlama stili", "uyumluluğu"],
    usage: "PSR-4, PHP projelerinde otomatik sınıf yüklemesi için standart bir spesifikasyondur.",
    related: ["Composer", "Autoloading", "Coding Standards", "FIG"]
  },
  {
    id: "21",
    term: "Composer",
    definition: "PHP için bağımlılık yönetim aracıdır. Paketleri yönetmek, indirmek ve projelerde kullanmak için kullanılır.",
    category: "PHP",
    tags: ["bağımlılık yönetimi", "paket", "autoload"],
    usage: "composer require vendor/package ile projeye yeni bir bağımlılık eklenebilir.",
    related: ["Packagist", "composer.json", "Autoloading", "PSR-4"]
  },
  {
    id: "22",
    term: "Trait",
    definition: "PHP'nin çoklu kalıtım yapısını desteklemeyen doğasına bir çözüm olarak, sınıflar arasında kod paylaşımı sağlayan bir özelliktir.",
    category: "PHP",
    tags: ["kalıtım", "kod paylaşımı", "mixin"],
    usage: "trait Logger {\n    public function log($message) {\n        echo $message;\n    }\n}\n\nclass User {\n    use Logger;\n}",
    related: ["Multiple Inheritance", "Class", "Interface", "OOP in PHP"]
  },
  // C++ terimleri
  {
    id: "23",
    term: "RAII",
    definition: "Resource Acquisition Is Initialization, C++'da kaynakların (bellek, dosya işleçleri vb.) otomatik olarak yönetilmesini sağlayan bir programlama tekniğidir.",
    category: "C++",
    tags: ["kaynak yönetimi", "constructor", "destructor"],
    usage: "std::unique_ptr, bir RAII uygulamasıdır; nesne hayatını kaybettiğinde otomatik olarak kaynağı serbest bırakır.",
    related: ["Smart Pointers", "Memory Management", "Exception Safety"]
  },
  {
    id: "24",
    term: "Template",
    definition: "C++'da farklı veri tipleriyle çalışabilen jenerik kod oluşturmanızı sağlayan bir özelliktir.",
    category: "C++",
    tags: ["jenerik programlama", "metaprogramlama", "tür bağımsız"],
    usage: "template<typename T>\nT toplam(T a, T b) {\n    return a + b;\n}",
    related: ["Generic Programming", "STL", "Template Specialization", "Metaprogramming"]
  },
  {
    id: "25",
    term: "Smart Pointer",
    definition: "C++'da otomatik bellek yönetimi sağlayan, normal işaretçilere göre daha güvenli alternatifler sunan özel sınıflardır.",
    category: "C++",
    tags: ["bellek yönetimi", "RAII", "kaçak önleme"],
    usage: "std::shared_ptr<int> sp = std::make_shared<int>(5); // Referans sayımlı akıllı işaretçi",
    related: ["unique_ptr", "shared_ptr", "weak_ptr", "Memory Management", "RAII"]
  },
  // C# terimleri
  {
    id: "26",
    term: "LINQ",
    definition: "Language Integrated Query, C#'ta verileri sorgulama ve dönüştürme işlemleri için kullanılan güçlü bir dil özelliğidir.",
    category: "C#",
    tags: ["sorgu", "veri", "lambda", ".NET"],
    usage: "var sonuc = kisiler.Where(k => k.Yas > 18).OrderBy(k => k.Ad).Select(k => k.Ad);",
    related: ["Lambda Expressions", "Extension Methods", "IEnumerable", "Collections"]
  },
  {
    id: "27",
    term: "Async/Await",
    definition: "C#'ta asenkron programlamayı daha okunabilir ve yönetilebilir hale getiren, arka planda state machine oluşturan bir dildir.",
    category: "C#",
    tags: ["asenkron", "paralel", "task"],
    usage: "async Task<string> VeriGetir() {\n    return await httpClient.GetStringAsync(url);\n}",
    related: ["Task", "Thread", "Parallelism", "TPL"]
  },
  {
    id: "28",
    term: "Extension Method",
    definition: "C#'ta varolan tiplere, kaynak kodunu değiştirmeden yeni metotlar eklemenizi sağlayan bir özelliktir.",
    category: "C#",
    tags: ["genişletme", "static", "utility"],
    usage: "public static class StringExtensions {\n    public static bool IsValid(this string value) {\n        return !string.IsNullOrEmpty(value);\n    }\n}",
    related: ["Extension Class", "LINQ", "Fluent API", "Static Methods"]
  },
  // Ruby terimleri
  {
    id: "29",
    term: "Gem",
    definition: "Ruby'de paketlenmiş kütüphaneler veya uygulamalardır. RubyGems sistemi ile yönetilir ve dağıtılır.",
    category: "Ruby",
    tags: ["paket", "kütüphane", "bağımlılık"],
    usage: "gem install rails ile Ruby on Rails framework'ünü yükleyebilirsiniz.",
    related: ["RubyGems", "Bundler", "Gemfile", "gemspec"]
  },
  {
    id: "30",
    term: "Duck Typing",
    definition: "Ruby'de bir nesnenin tipinden ziyade davranışına (metotlar, özellikler) odaklanan dinamik tip sistemidir.",
    category: "Ruby",
    tags: ["dinamik", "tip", "davranış"],
    usage: "def yazdir(nesne)\n    puts nesne.to_s # Nesnenin to_s metodu varsa çalışır\nend",
    related: ["Dynamic Typing", "Polymorphism", "Method Missing", "Metaprogramming"]
  },
  {
    id: "31",
    term: "Block",
    definition: "Ruby'de metotlara geçirilebilen, bir kod bloğunu temsil eden anonim fonksiyonlardır.",
    category: "Ruby",
    tags: ["anonim fonksiyon", "deyim", "iterator"],
    usage: "[1, 2, 3].each do |n|\n    puts n\nend\n# ya da\n[1, 2, 3].each { |n| puts n }",
    related: ["Proc", "Lambda", "Yield", "Closures"]
  },
  // Go terimleri
  {
    id: "32",
    term: "Goroutine",
    definition: "Go dilinde hafif, yüksek verimli bir thread benzeri yapıdır. Eşzamanlı programlama için kullanılır.",
    category: "Go",
    tags: ["eşzamanlılık", "paralel", "thread"],
    usage: "go fonksiyon() // Fonksiyonu bir goroutine olarak çalıştırır",
    related: ["Concurrency", "Channels", "Parallelism", "go keyword"]
  },
  {
    id: "33",
    term: "Channel",
    definition: "Go dilinde goroutine'ler arasında güvenli iletişim ve senkronizasyon sağlayan bir veri yapısıdır.",
    category: "Go",
    tags: ["iletişim", "senkronizasyon", "veri aktarımı"],
    usage: "ch := make(chan int)\ngo func() { ch <- 42 }()\ndeger := <-ch",
    related: ["Goroutine", "Buffered Channels", "Select", "Concurrency Patterns"]
  },
  {
    id: "34",
    term: "Interface",
    definition: "Go dilinde davranışı tanımlayan, metot imzalarından oluşan bir tip türüdür. Örtük olarak uygulanır.",
    category: "Go",
    tags: ["polimorfizm", "soyutlama", "tip"],
    usage: "type Reader interface {\n    Read(p []byte) (n int, err error)\n}",
    related: ["Type Assertions", "Empty Interface", "Structural Typing", "Duck Typing"]
  }
];

// Kategorileri al
export const getCategories = (): string[] => {
  const categoriesSet = new Set(terms.map(term => term.category));
  // Dil kategorilerini öne çıkarmak için özel bir sıralama yapabiliriz
  const allCategories = Array.from(categoriesSet);

  // Programlama dilleri
  const languages = ["JavaScript", "Python", "Java", "PHP", "C++", "C#", "Ruby", "Go"];

  // Genel kategoriler
  const generalCategories = allCategories.filter(cat => !languages.includes(cat));

  // Diller önce, sonra genel kategoriler
  return [...languages.filter(lang => allCategories.includes(lang)), ...generalCategories];
};

// Etiketleri al
export const getTags = (): string[] => {
  const tagsSet = new Set<string>();
  terms.forEach(term => term.tags.forEach(tag => tagsSet.add(tag)));
  return Array.from(tagsSet);
};

// ID'ye göre terim bulma
export const getTermById = (id: string): Term | undefined => {
  return terms.find(term => term.id === id);
};

// Terim adına göre arama
export const searchTermsByName = (query: string): Term[] => {
  const normalizedQuery = query.toLowerCase();
  return terms.filter(term =>
    term.term.toLowerCase().includes(normalizedQuery) ||
    term.definition.toLowerCase().includes(normalizedQuery) ||
    term.tags.some(tag => tag.toLowerCase().includes(normalizedQuery))
  );
};

// Kategoriye göre filtreleme
export const filterTermsByCategory = (category: string): Term[] => {
  return terms.filter(term => term.category === category);
};

// Etikete göre filtreleme
export const filterTermsByTag = (tag: string): Term[] => {
  return terms.filter(term => term.tags.includes(tag));
};
