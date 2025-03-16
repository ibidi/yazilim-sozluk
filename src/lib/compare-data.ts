export interface ConceptCompare {
  id: string;
  title: string;
  description: string;
  languages: {
    [language: string]: {
      syntax: string;
      explanation: string;
      example: string;
    }
  }
}

export const concepts: ConceptCompare[] = [
  {
    id: "1",
    title: "Döngüler - For",
    description: "For döngüsü, belirli bir koşul sağlandığı sürece bir kod bloğunu tekrarlamak için kullanılır. Genellikle bir koleksiyondaki tüm öğeler üzerinde işlem yapmak veya belirli sayıda tekrar gerçekleştirmek için kullanılır.",
    languages: {
      "JavaScript": {
        syntax: "for (başlangıç; koşul; artış) { ... }",
        explanation: "JavaScript'te for döngüsü üç parametreye sahiptir: başlangıç değeri, devam koşulu ve artış ifadesi.",
        example: `// 0'dan 4'e kadar sayıları yazdır
for (let i = 0; i < 5; i++) {
  console.log(i);
}`
      },
      "Python": {
        syntax: "for değişken in koleksiyon: ...",
        explanation: "Python'da for döngüsü bir koleksiyon (liste, tupple, sözlük, vb.) üzerinde iterasyon yapar.",
        example: `# 0'dan 4'e kadar sayıları yazdır
for i in range(5):
    print(i)`
      },
      "Java": {
        syntax: "for (tip değişken = başlangıç; koşul; artış) { ... }",
        explanation: "Java'da for döngüsü C-tarzı sözdizimini takip eder ve üç bölümden oluşur: başlatma, koşul kontrolü ve artış.",
        example: `// 0'dan 4'e kadar sayıları yazdır
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}`
      },
      "PHP": {
        syntax: "for (başlangıç; koşul; artış) { ... }",
        explanation: "PHP'de for döngüsü JavaScript ile benzer şekilde çalışır, üç bölümden oluşur: başlatma, koşul kontrolü ve artış.",
        example: `// 0'dan 4'e kadar sayıları yazdır
for ($i = 0; $i < 5; $i++) {
    echo $i . "\\n";
}`
      }
    }
  },
  {
    id: "2",
    title: "Döngüler - While",
    description: "While döngüsü, belirtilen bir koşul doğru olduğu sürece kod bloğunu çalıştırmaya devam eder. Bu tür bir döngü, önceden kaç kez tekrarlanacağı bilinmeyen durumlarda veya harici bir koşula bağlı olarak devam etmesi gereken işlemlerde kullanışlıdır.",
    languages: {
      "JavaScript": {
        syntax: "while (koşul) { ... }",
        explanation: "JavaScript'te while döngüsü, belirtilen koşul doğru olduğu sürece kod bloğunu çalıştırır.",
        example: `// 5'ten küçük sayıları yazdır
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}`
      },
      "Python": {
        syntax: "while koşul: ...",
        explanation: "Python'da while döngüsü, belirtilen koşul True olduğu sürece kod bloğunu çalıştırır.",
        example: `# 5'ten küçük sayıları yazdır
i = 0
while i < 5:
    print(i)
    i += 1`
      },
      "Java": {
        syntax: "while (koşul) { ... }",
        explanation: "Java'da while döngüsü, belirtilen koşul true olduğu sürece kod bloğunu çalıştırır.",
        example: `// 5'ten küçük sayıları yazdır
int i = 0;
while (i < 5) {
    System.out.println(i);
    i++;
}`
      },
      "PHP": {
        syntax: "while (koşul) { ... }",
        explanation: "PHP'de while döngüsü, belirtilen koşul true olduğu sürece kod bloğunu çalıştırır.",
        example: `// 5'ten küçük sayıları yazdır
$i = 0;
while ($i < 5) {
    echo $i . "\\n";
    $i++;
}`
      }
    }
  },
  {
    id: "3",
    title: "Koşullu İfadeler - If/Else",
    description: "Koşullu ifadeler, belirli bir koşul doğruysa bir kod bloğunun, değilse başka bir kod bloğunun çalıştırılmasını sağlar. Programın akışını kontrol etmek için kullanılır.",
    languages: {
      "JavaScript": {
        syntax: "if (koşul) { ... } else if (koşul2) { ... } else { ... }",
        explanation: "JavaScript'te if koşulu, belirtilen koşul doğruysa ilk blok, değilse ve ikinci koşul doğruysa ikinci blok, hiçbiri doğru değilse else bloğu çalıştırılır.",
        example: `const sayi = 10;
if (sayi > 10) {
  console.log("Sayı 10'dan büyük");
} else if (sayi < 10) {
  console.log("Sayı 10'dan küçük");
} else {
  console.log("Sayı 10'a eşit");
}`
      },
      "Python": {
        syntax: "if koşul: ... elif koşul2: ... else: ...",
        explanation: "Python'da koşullu ifadeler için if, elif ve else anahtar kelimeleri kullanılır ve bloklar girintilerle belirlenir.",
        example: `sayi = 10
if sayi > 10:
    print("Sayı 10'dan büyük")
elif sayi < 10:
    print("Sayı 10'dan küçük")
else:
    print("Sayı 10'a eşit")`
      },
      "Java": {
        syntax: "if (koşul) { ... } else if (koşul2) { ... } else { ... }",
        explanation: "Java'da if koşulu, belirtilen koşul doğruysa ilk blok, değilse ve ikinci koşul doğruysa ikinci blok, hiçbiri doğru değilse else bloğu çalıştırılır.",
        example: `int sayi = 10;
if (sayi > 10) {
    System.out.println("Sayı 10'dan büyük");
} else if (sayi < 10) {
    System.out.println("Sayı 10'dan küçük");
} else {
    System.out.println("Sayı 10'a eşit");
}`
      },
      "PHP": {
        syntax: "if (koşul) { ... } elseif (koşul2) { ... } else { ... }",
        explanation: "PHP'de koşullu ifadeler için if, elseif ve else anahtar kelimeleri kullanılır.",
        example: `$sayi = 10;
if ($sayi > 10) {
    echo "Sayı 10'dan büyük";
} elseif ($sayi < 10) {
    echo "Sayı 10'dan küçük";
} else {
    echo "Sayı 10'a eşit";
}`
      }
    }
  },
  {
    id: "4",
    title: "Diziler / Listeler",
    description: "Diziler veya listeler, birden fazla değeri tek bir değişkende depolamak için kullanılan veri yapılarıdır. İndeks numaraları kullanılarak elemanlara erişilir.",
    languages: {
      "JavaScript": {
        syntax: "const diziAdı = [eleman1, eleman2, ...];",
        explanation: "JavaScript'te diziler köşeli parantezler içinde tanımlanır ve 0-tabanlı indeksleme kullanır.",
        example: `// Dizi oluşturma
const meyveler = ["elma", "armut", "muz"];

// Elemana erişim
console.log(meyveler[0]); // "elma"

// Diziye eleman ekleme
meyveler.push("çilek");

// Dizi uzunluğu
console.log(meyveler.length); // 4`
      },
      "Python": {
        syntax: "liste_adı = [eleman1, eleman2, ...]",
        explanation: "Python'da listeler köşeli parantezler içinde tanımlanır ve 0-tabanlı indeksleme kullanır.",
        example: `# Liste oluşturma
meyveler = ["elma", "armut", "muz"]

# Elemana erişim
print(meyveler[0])  # "elma"

# Listeye eleman ekleme
meyveler.append("çilek")

# Liste uzunluğu
print(len(meyveler))  # 4`
      },
      "Java": {
        syntax: "Tip[] diziAdı = {eleman1, eleman2, ...};",
        explanation: "Java'da diziler belirli bir tip için oluşturulur ve sabit uzunluktadır. Değişken uzunlukta diziler için ArrayList kullanılır.",
        example: `// Dizi oluşturma
String[] meyveler = {"elma", "armut", "muz"};

// Elemana erişim
System.out.println(meyveler[0]); // "elma"

// ArrayList kullanımı
import java.util.ArrayList;
ArrayList<String> meyveListesi = new ArrayList<>();
meyveListesi.add("elma");
meyveListesi.add("armut");
meyveListesi.add("muz");

// Listeye eleman ekleme
meyveListesi.add("çilek");

// Liste uzunluğu
System.out.println(meyveListesi.size()); // 4`
      },
      "PHP": {
        syntax: "$diziAdı = [eleman1, eleman2, ...];",
        explanation: "PHP'de diziler köşeli parantezler içinde tanımlanır. PHP dizileri, indeks numaraları veya anahtar-değer çiftleri kullanabilir.",
        example: `// Dizi oluşturma
$meyveler = ["elma", "armut", "muz"];

// Elemana erişim
echo $meyveler[0]; // "elma"

// Diziye eleman ekleme
$meyveler[] = "çilek";

// Dizi uzunluğu
echo count($meyveler); // 4

// Anahtar-değer çiftli dizi
$kisi = [
    "ad" => "Ahmet",
    "yas" => 30,
    "meslek" => "Mühendis"
];
echo $kisi["ad"]; // "Ahmet"`
      }
    }
  },
  {
    id: "5",
    title: "Fonksiyonlar",
    description: "Fonksiyonlar, belirli bir görevi yerine getiren ve tekrar kullanılabilen kod bloklarıdır. Kod tekrarını önler ve programı modüler hale getirir.",
    languages: {
      "JavaScript": {
        syntax: "function fonksiyonAdı(parametre1, parametre2) { ... }",
        explanation: "JavaScript'te fonksiyonlar function anahtar kelimesi ile tanımlanır. Arrow fonksiyonlar da kullanılabilir.",
        example: `// Normal fonksiyon
function topla(a, b) {
  return a + b;
}

// Arrow fonksiyon
const carp = (a, b) => a * b;

console.log(topla(5, 3)); // 8
console.log(carp(5, 3));  // 15`
      },
      "Python": {
        syntax: "def fonksiyon_adı(parametre1, parametre2): ...",
        explanation: "Python'da fonksiyonlar def anahtar kelimesi ile tanımlanır ve bloklar girintilerle belirlenir.",
        example: `# Fonksiyon tanımlama
def topla(a, b):
    return a + b

# Lambda fonksiyon (tek satırlık)
carp = lambda a, b: a * b

print(topla(5, 3))  # 8
print(carp(5, 3))   # 15`
      },
      "Java": {
        syntax: "erişimBelirteci dönüşTipi fonksiyonAdı(parametre1Tipi parametre1, ...) { ... }",
        explanation: "Java'da fonksiyonlar (metodlar) bir sınıf içinde tanımlanır ve erişim belirteci, dönüş tipi gibi özellikleri vardır.",
        example: `public class MatematikIslemleri {
    // Statik metod
    public static int topla(int a, int b) {
        return a + b;
    }

    // Nesne metodu
    public int carp(int a, int b) {
        return a * b;
    }
}

// Kullanım
int sonuc1 = MatematikIslemleri.topla(5, 3); // 8

MatematikIslemleri matematik = new MatematikIslemleri();
int sonuc2 = matematik.carp(5, 3); // 15`
      },
      "PHP": {
        syntax: "function fonksiyonAdı($parametre1, $parametre2) { ... }",
        explanation: "PHP'de fonksiyonlar function anahtar kelimesi ile tanımlanır. Parametre değişkenleri $ işareti ile başlar.",
        example: `// Fonksiyon tanımlama
function topla($a, $b) {
    return $a + $b;
}

// Anonim fonksiyon
$carp = function($a, $b) {
    return $a * $b;
};

// Arrow fonksiyon (PHP 7.4+)
$bol = fn($a, $b) => $a / $b;

echo topla(5, 3);   // 8
echo $carp(5, 3);   // 15
echo $bol(10, 2);   // 5`
      }
    }
  }
];

// Programlama dilleri listesi
export const getLanguages = (): string[] => {
  const languagesSet = new Set<string>();

  concepts.forEach(concept => {
    Object.keys(concept.languages).forEach(language => {
      languagesSet.add(language);
    });
  });

  return Array.from(languagesSet);
};

// Konsept listesi
export const getConcepts = (): { id: string; title: string }[] => {
  return concepts.map(concept => ({
    id: concept.id,
    title: concept.title
  }));
};

// ID'ye göre konsept bulma
export const getConceptById = (id: string): ConceptCompare | undefined => {
  return concepts.find(concept => concept.id === id);
};
