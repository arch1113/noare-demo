
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const products = {
  parfum: [
    { name: "Noaré Rose", description: "Gül esansı ile zarif bir deneyim.", price: "₺850", image: "/images/parfum1.jpg" },
    { name: "Noaré Oud", description: "Doğulu ve etkileyici bir koku.", price: "₺1100", image: "/images/parfum2.jpg" }
  ],
  canta: [
    { name: "Noaré Özel Çanta", description: "Altın motifli zarif tasarım.", price: "₺2350", image: "canta.jpg" },
    { name: "Noaré Günlük Çanta", description: "Modern ve rahat taşıma.", price: "₺980", image: "/images/canta2.jpg" }
  ]
};

export default function NoareWeb() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white p-4 text-gray-800">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-pink-600">Noaré</h1>
        <p className="text-lg">Parfüm ve Çantada Zarif Seçimler</p>
        <p className="italic text-pink-500 mt-2">Zarafet bir seçimdir.</p>
      </header>

      <div className="max-w-md mx-auto mb-6">
        <div className="flex items-center gap-2">
          <Input placeholder="Ürün ara..." className="flex-1" />
          <Button variant="outline"><Search className="w-4 h-4" /></Button>
        </div>
      </div>

      <Tabs defaultValue="parfum" className="max-w-5xl mx-auto">
        <TabsList className="grid grid-cols-2 w-full mb-4">
          <TabsTrigger value="parfum">Parfümler</TabsTrigger>
          <TabsTrigger value="canta">Çantalar</TabsTrigger>
        </TabsList>

        {Object.entries(products).map(([category, items]) => (
          <TabsContent value={category} key={category} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {items.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition">
                <img src={item.image} alt={item.name} className="rounded-t-xl w-full h-48 object-cover" />
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-pink-700">{item.name}</h3>
                  <p className="text-sm mb-2">{item.description}</p>
                  <p className="font-bold">{item.price}</p>
                  <Button className="mt-2 w-full" variant="default">Sepete Ekle</Button>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        ))}
      </Tabs>

      <section className="max-w-3xl mx-auto mt-12 p-4 text-center">
        <h2 className="text-2xl font-bold text-pink-700 mb-2">Hakkımızda</h2>
        <p className="text-gray-700 text-sm">
          Noaré, şıklık ve zarafeti bir araya getiren bir tasarım markasıdır.
        </p>
      </section>

      <footer className="text-center mt-10 text-sm text-gray-500">
        © 2025 Noaré. Tüm hakları saklıdır.
      </footer>
    </div>
  );
}
