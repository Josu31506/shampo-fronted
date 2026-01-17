import Header from '../sections/Header';
import Hero from '../sections/Hero';
import BestSellers from '../sections/BestSellers';
import Categories from '../sections/Categories';
import PaymentSection from '../sections/PaymentSection';
import Footer from '../sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Header />
      <Hero />
      <BestSellers />
      <Categories />
      <PaymentSection />
      <Footer />
    </div>
  );
}

export default App;
