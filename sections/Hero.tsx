export const Hero = () => {
  return (
    <section className="gradient-hero" id="inicio">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 pb-14 pt-10 md:grid-cols-2 md:px-6 md:pt-16">
        <div className="space-y-6">
          <p className="inline-flex rounded-full bg-brand-beige px-4 py-2 text-xs font-semibold uppercase text-brand-brown">
            lanzamiento 2024
          </p>
          <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
            Los favoritos vuelan rápido
          </h1>
          <p className="text-lg text-slate-700">
            Nuestro stock se renueva los martes. Asegura tus barras antes de que se agoten de nuevo.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="button-primary">Comprar ahora</button>
            <button className="rounded-full border border-brand-rose px-6 py-3 text-brand-rose transition hover:bg-brand-rose/10">
              Ver catálogo
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            className="w-full max-w-xl rounded-3xl object-cover shadow-lg"
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
            alt="Barras Ūnda Natural"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
