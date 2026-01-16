'use client';

import { useRef } from 'react';

const categories = [
  {
    title: 'Shampoo',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Acondicionador',
    image: 'https://images.unsplash.com/photo-1524594154908-edd0a60cfddf?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Jabón',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80'
  }
];

export const Categories = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const offset = direction === 'left' ? -280 : 280;
    scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <section className="bg-white py-14" id="como-usar">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900">Categorías</h2>
          <div className="flex gap-2">
            <button className="rounded-full border border-brand-rose px-3 py-2 text-sm text-brand-rose" onClick={() => scroll('left')}>
              ◀
            </button>
            <button className="rounded-full border border-brand-rose px-3 py-2 text-sm text-brand-rose" onClick={() => scroll('right')}>
              ▶
            </button>
          </div>
        </div>
        <div ref={scrollRef} className="flex snap-x gap-4 overflow-x-auto pb-2">
          {categories.map((category) => (
            <article
              key={category.title}
              className="card-shadow min-w-[260px] snap-center overflow-hidden rounded-3xl bg-brand-cream"
            >
              <img src={category.image} alt={category.title} className="h-60 w-full object-cover" />
              <div className="p-4 text-center text-lg font-semibold text-slate-800">{category.title}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
