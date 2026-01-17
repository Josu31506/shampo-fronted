'use client';

import { useEffect, useState } from 'react';

type TurnstileWidgetProps = {
  onToken: (token: string | null) => void;
  siteKey?: string;
};

const MOCK_DELAY_MS = 1200;

export const TurnstileWidget = ({ onToken, siteKey }: TurnstileWidgetProps) => {
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const fakeToken = `mock-turnstile-token-${Math.random().toString(36).slice(2)}`;
      setToken(fakeToken);
      onToken(fakeToken);
      setLoading(false);
    }, MOCK_DELAY_MS);

    return () => {
      clearTimeout(timer);
      onToken(null);
    };
  }, [onToken]);

  return (
    <div className="w-full rounded-lg border border-brand-rose/40 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="font-semibold text-slate-800">Verificación anti-bot</p>
          <p className="text-xs text-slate-600">Protegido con Turnstile/Recaptcha-ready</p>
          {siteKey && <p className="mt-1 text-[11px] text-slate-500">Site key: {siteKey}</p>}
        </div>
        <div className="flex flex-col items-end text-right">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-beige font-semibold text-brand-brown">
            {loading ? '…' : '✔'}
          </span>
          <span className="mt-2 text-[11px] text-slate-500">
            {loading ? 'Esperando verificación' : 'Verificado'}
          </span>
        </div>
      </div>
      <p className="mt-3 rounded-md bg-brand-cream px-3 py-2 text-xs text-brand-brown">
        Este widget es un placeholder seguro. Reemplaza con la integración real de Cloudflare Turnstile o reCAPTCHA v3 y usa el callback
        <code className="mx-1 rounded bg-white px-1 py-0.5">onToken</code>.
      </p>
    </div>
  );
};

export default TurnstileWidget;
