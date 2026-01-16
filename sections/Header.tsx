'use client';

const navItems = [
  { label: 'Inicio', href: '#' },
  { label: 'Productos', href: '#productos' },
  { label: 'Cómo usar', href: '#como-usar' },
  { label: 'Envíos', href: '#envios' }
];

export const Header = () => {
  return (
    <header className="sticky top-0 z-20 w-full bg-white/90 backdrop-blur">
      <div className="bg-[#d9b4b0] px-4 py-2 text-center text-sm font-semibold text-white">Envío gratis en compras mayores a $1,500</div>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <div className="flex items-center gap-3">
          <img
            src="https://images.ctfassets.net/qnz31r3vypeq/6w6yXZV0gW2AW99nkRkHir/4ae4e7f3de23ba3ff8be73e22c7448f2/1_Logo_onda___natural.png"
            alt="Ūnda Natural"
            className="h-10 w-auto"
          />
        </div>
        <nav className="hidden gap-8 text-sm font-medium text-slate-700 md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-brand-rose">
              {item.label}
            </a>
          ))}
        </nav>
        <button className="button-primary hidden md:inline-flex">Comprar ahora</button>
      </div>
    </header>
  );
};

export default Header;
