'use client';

import { useRef, useState, MouseEvent } from 'react';

const products = [
  {
    title: 'Crecimiento e hidratación',
    price: '$ 195.00 MXN',
    image: 'https://images.unsplash.com/photo-1582719478430-4fe89db7114b?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Sandía Paradise Acondicionador sandía',
    price: '$ 185.00 MXN',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Rizos perfectos',
    price: '$ 195.00 MXN',
    image: 'https://images.unsplash.com/photo-1586363104862-3a5e2bff3c8b?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Verde Botánico Acondicionador té verde',
    price: '$ 105.00 MXN',
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Lavender Dreams Shampoo',
    price: '$ 195.00 MXN',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Citrus Burst Conditioner',
    price: '$ 185.00 MXN',
    image: 'https://images.unsplash.com/photo-1608181692355-809d3dca84fa?auto=format&fit=crop&w=800&q=80'
  }
];

export const BestSellers = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    scrollContainerRef.current.style.cursor = 'grabbing';
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id="productos" className="bg-white py-14">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-center text-2xl font-bold text-slate-900">Best Sellers</h2>
        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="mt-8 flex gap-6 overflow-x-auto scroll-smooth pb-4"
          style={{
            cursor: 'grab',
            scrollbarWidth: 'thin',
            scrollSnapType: 'x mandatory',
            userSelect: 'none'
          }}
        >
          {products.map((product, index) => (
            <article
              key={`${product.title}-${index}`}
              className="card-shadow flex min-w-[280px] max-w-[280px] flex-col overflow-hidden rounded-3xl bg-brand-cream"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-60 w-full object-cover pointer-events-none select-none"
                  draggable="false"
                />
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
