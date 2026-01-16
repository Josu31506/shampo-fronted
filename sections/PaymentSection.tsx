import PaymentForm from '../components/PaymentForm';

export const PaymentSection = () => {
  return (
    <section id="envios" className="bg-brand-cream py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-brown">Pago seguro</p>
            <h2 className="text-3xl font-bold text-slate-900">Completa tu compra</h2>
            <p className="text-base text-slate-700">
              Validamos cada campo con Zod + React Hook Form, limpiamos caracteres peligrosos y prevenimos envíos múltiples. El
              checkout solo se habilita cuando el anti-bot devuelve un token válido.
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• Debounce al botón de pago para evitar spam.</li>
              <li>• Interceptor Axios maneja HTTP 429 con mensaje amigable.</li>
              <li>• Preparado para Turnstile o reCAPTCHA v3.</li>
            </ul>
            <img
              src="https://images.unsplash.com/photo-1582719478248-04ac7f2791b3?auto=format&fit=crop&w=1000&q=80"
              alt="Packaging Ūnda Natural"
              className="w-full rounded-3xl object-cover shadow-lg"
            />
          </div>
          <PaymentForm />
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
