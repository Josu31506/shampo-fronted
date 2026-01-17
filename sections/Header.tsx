'use client';

const navItems = [
  { label: 'Inicio', href: '#' },
  { label: 'Productos', href: '#productos' },
  { label: 'Cursos', href: '#cursos' },
  { label: 'Puntos de venta', href: '#puntos-venta' },
  { label: 'Cómo usar', href: '#como-usar' },
  { label: 'Contacto', href: '#contacto' },
  { label: 'Distribuidores', href: '#distribuidores' }
];

export const Header = () => {
  return (
    <header className="sticky top-0 z-20 w-full bg-white/90 backdrop-blur">
      <div className="bg-[#d9b4b0] px-4 py-2 text-center text-sm font-semibold text-white">Envío gratis en compras mayores a $1,500</div>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <div className="flex items-center gap-3">
          <img
            src="https://images.ctfassets.net/qnz31r3vypeq/6w6yXZV0gW2AW99nkRkHir/4ae4e7f3de23ba3ff8be73e22c7448f2/1_Logo_onda___natural.png"
            alt="Ūnda Natural"
            className="h-10 w-auto"
          />
        </div>
        <nav className="hidden gap-6 text-sm font-medium text-slate-700 lg:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-brand-rose">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          {/* Search Icon */}
          <button className="text-slate-700 transition hover:text-brand-rose" aria-label="Buscar">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
          {/* User Icon */}
          <a href="/login" className="text-slate-700 transition hover:text-brand-rose" aria-label="Mi cuenta">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </a>
          {/* Shopping Cart Icon */}
          <button className="text-slate-700 transition hover:text-brand-rose" aria-label="Carrito de compras">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
