import Header from './sections/Header';
import Hero from './sections/Hero';
import BestSellers from './sections/BestSellers';
import Categories from './sections/Categories';
import PaymentSection from './sections/PaymentSection';

function App() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Header />
      <Hero />
      <BestSellers />
      <Categories />
      <PaymentSection />
      <footer className="bg-white py-10">
        <div className="mx-auto max-w-6xl px-4 text-center text-sm text-slate-600 md:px-6">
          <p>Diseño inspirado en Ūnda Natural. Anti-bots listo para Turnstile/Recaptcha v3.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
