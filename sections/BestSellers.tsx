const products = [
  {
    title: 'Wild Watermelon Shampoo sandía',
    price: '$ 195.00 MXN',
    image: 'https://images.unsplash.com/photo-1582719478430-4fe89db7114b?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Sandía Paradise Acondicionador sandía',
    price: '$ 195.00 MXN',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Green Pear Shampoo bergamota',
    price: '$ 195.00 MXN',
    image: 'https://images.unsplash.com/photo-1586363104862-3a5e2bff3c8b?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Verde Botánico Acondicionador té verde',
    price: '$ 195.00 MXN',
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=800&q=80'
  }
];

export const BestSellers = () => {
  return (
    <section id="productos" className="bg-white py-14">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-center text-2xl font-bold text-slate-900">Best Sellers</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article key={product.title} className="card-shadow flex flex-col overflow-hidden rounded-3xl bg-brand-cream">
              <div className="relative">
                <img src={product.image} alt={product.title} className="h-60 w-full object-cover" />
                <span className="absolute right-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-rose-500 shadow">
                  Agotado
                </span>
              </div>
              <div className="flex flex-1 flex-col justify-between px-4 py-5">
                <div className="space-y-2 text-sm text-slate-700">
                  <p className="text-base font-semibold text-slate-900">{product.title}</p>
                  <p>El favorito de verano para cabello hidratado.</p>
                  <p className="font-semibold">{product.price}</p>
                </div>
                <button className="button-primary mt-4 w-full" disabled>
                  Agotado
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
