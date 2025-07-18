export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* HERO SECTION */}
      <section className="bg-yellow-400 text-black py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Tanie Holowanie – Pruszków i okolice</h1>
        <p className="text-lg mb-6">Całodobowa pomoc drogowa | Własna laweta | Mobilny mechanik</p>
        <a href="tel:508092593" className="bg-black text-white px-6 py-3 rounded-xl text-lg hover:bg-gray-800 transition">Zadzwoń: 508 092 593</a>
      </section>

      {/* USŁUGI */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">Nasze usługi</h2>
        <ul className="grid md:grid-cols-2 gap-6">
          <li className="bg-gray-100 p-6 rounded-2xl shadow">✔ Holowanie aut osobowych i dostawczych</li>
          <li className="bg-gray-100 p-6 rounded-2xl shadow">✔ Transport motocykli, quadów, maszyn</li>
          <li className="bg-gray-100 p-6 rounded-2xl shadow">✔ Mobilny mechanik – pomoc na miejscu</li>
          <li className="bg-gray-100 p-6 rounded-2xl shadow">✔ Działamy 24/7 – szybko i tanio</li>
        </ul>
      </section>

      {/* OBSZAR DZIAŁANIA */}
      <section className="bg-gray-200 py-12 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Działamy na terenie:</h2>
        <p>Pruszków, Piastów, Michałowice, Nadarzyn, Ożarów Mazowiecki i okolice</p>
      </section>

      {/* OPINIE KLIENTÓW */}
      <section className="bg-white py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">Opinie klientów</h2>
        <div className="grid md:grid-cols-3 gap-6 text-sm md:text-base">
          <div className="bg-gray-100 p-4 rounded-xl shadow">
            <p className="italic">"Szybko, sprawnie i w dobrej cenie. Polecam każdemu!"</p>
            <p className="mt-2 font-semibold">– Michał, Pruszków</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-xl shadow">
            <p className="italic">"Pan przyjechał w 20 minut i pomógł uruchomić auto bez holowania."</p>
            <p className="mt-2 font-semibold">– Anna, Piastów</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-xl shadow">
            <p className="italic">"Profesjonalna obsługa i bardzo sympatyczny kontakt."</p>
            <p className="mt-2 font-semibold">– Karol, Michałowice</p>
          </div>
        </div>
      </section>

      {/* O NAS */}
      <section className="py-16 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Dlaczego my?</h2>
        <p className="text-lg mb-6">
          Tanie Holowanie – Pruszków i okolice | Laweta 24/7 | Pomoc drogowa i mobilny mechanik
          Całodobowa pomoc drogowa i holowanie aut osobowych, dostawczych i nie tylko. 
          Działamy 24/7 na terenie Pruszkowa, Piastowa, Michałowic, Nadarzyna, Ożarowa i okolic. 
          Własna laweta, szybki dojazd, atrakcyjne ceny. 
          Oferujemy też pomoc mobilnego mechanika na miejscu awarii.
        </p>
        <p className="text-lg font-bold">📞 Zadzwoń teraz: 508 092 593</p>
      </section>

      {/* STOPKA */}
      <footer className="bg-black text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} Tanie Holowanie – pomoc drogowa Pruszków</p>
      </footer>
    </main>
  );
}