import { useCallback, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import TurnstileWidget from './TurnstileWidget';
import { useAxiosSecure } from '../hooks/useAxiosSecure';

const sanitize = (value: string) => value.replace(/[<>]/g, '').trim();

const paymentSchema = z.object({
  fullName: z
    .string()
    .min(3, 'Nombre demasiado corto')
    .max(80, 'Nombre demasiado largo')
    .transform(sanitize),
  email: z.string().email('Correo inválido').transform(sanitize),
  address: z
    .string()
    .min(8, 'Ingresa una dirección válida')
    .max(120, 'Dirección demasiado larga')
    .transform(sanitize),
  notes: z.string().max(200, 'Máximo 200 caracteres').optional().transform((val) => sanitize(val ?? '')),
  cardNumber: z.string().min(12, 'Tarjeta inválida').max(19, 'Tarjeta inválida').transform(sanitize),
  expiry: z.string().regex(/^(0[1-9]|1[0-2])\/(\d{2})$/, 'Formato MM/AA').transform(sanitize),
  cvc: z.string().regex(/^\d{3,4}$/, 'CVC inválido').transform(sanitize)
});

type PaymentFormValues = z.infer<typeof paymentSchema>;

type Props = {
  onSuccess?: () => void;
};

export const PaymentForm = ({ onSuccess }: Props) => {
  const [botToken, setBotToken] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [locked, setLocked] = useState(false);

  const client = useAxiosSecure((message) => setStatusMessage(message));

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<PaymentFormValues>({
    resolver: zodResolver(paymentSchema),
    mode: 'onBlur'
  });

  const canSubmit = useMemo(() => Boolean(botToken) && !locked, [botToken, locked]);

  const onSubmit = handleSubmit(async (data) => {
    if (!botToken) return;
    setLocked(true);
    setStatusMessage('Procesando pago de forma segura...');

    try {
      await client.post('/checkout', { ...data, botToken });
      setStatusMessage('Pago exitoso. ¡Gracias por tu compra!');
      onSuccess?.();
      reset();
      setBotToken(null);
    } catch (error) {
      if (error instanceof Error) {
        setStatusMessage(error.message);
      } else {
        setStatusMessage('Ocurrió un error inesperado. Inténtalo de nuevo.');
      }
    } finally {
      setLocked(false);
    }
  });

  const handleToken = useCallback((token: string | null) => {
    setBotToken(token);
  }, []);

  return (
    <div className="card-shadow rounded-2xl bg-white p-6 shadow-lg">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-lg font-semibold text-slate-800">Paga seguro</p>
          <p className="text-sm text-slate-600">Protegemos tus datos con validación estricta y anti-bots.</p>
        </div>
        <span className="rounded-full bg-brand-beige px-4 py-1 text-xs font-semibold uppercase text-brand-brown">Checkout</span>
      </div>

      <form className="space-y-4" onSubmit={onSubmit} autoComplete="off" spellCheck={false}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
            Nombre completo
            <input
              type="text"
              {...register('fullName')}
              inputMode="text"
              className="rounded-lg border border-slate-200 px-3 py-2 text-slate-800 outline-none focus:border-brand-rose focus:ring-2 focus:ring-brand-rose/30"
              placeholder="Jane Doe"
            />
            {errors.fullName && <span className="text-xs text-red-600">{errors.fullName.message}</span>}
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
            Correo electrónico
            <input
              type="email"
              {...register('email')}
              inputMode="email"
              className="rounded-lg border border-slate-200 px-3 py-2 text-slate-800 outline-none focus:border-brand-rose focus:ring-2 focus:ring-brand-rose/30"
              placeholder="correo@ejemplo.com"
            />
            {errors.email && <span className="text-xs text-red-600">{errors.email.message}</span>}
          </label>
        </div>

        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
          Dirección de envío
          <input
            type="text"
            {...register('address')}
            className="rounded-lg border border-slate-200 px-3 py-2 text-slate-800 outline-none focus:border-brand-rose focus:ring-2 focus:ring-brand-rose/30"
            placeholder="Calle, número, ciudad"
          />
          {errors.address && <span className="text-xs text-red-600">{errors.address.message}</span>}
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
          Notas (opcional)
          <textarea
            rows={3}
            {...register('notes')}
            className="rounded-lg border border-slate-200 px-3 py-2 text-slate-800 outline-none focus:border-brand-rose focus:ring-2 focus:ring-brand-rose/30"
            placeholder="Indicaciones de entrega"
          />
          {errors.notes && <span className="text-xs text-red-600">{errors.notes.message}</span>}
        </label>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
            Número de tarjeta
            <input
              type="tel"
              inputMode="numeric"
              autoComplete="cc-number"
              {...register('cardNumber')}
              className="rounded-lg border border-slate-200 px-3 py-2 text-slate-800 outline-none focus:border-brand-rose focus:ring-2 focus:ring-brand-rose/30"
              placeholder="4111 1111 1111 1111"
            />
            {errors.cardNumber && <span className="text-xs text-red-600">{errors.cardNumber.message}</span>}
          </label>
          <div className="grid grid-cols-2 gap-4">
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
              Expira (MM/AA)
              <input
                type="text"
                inputMode="numeric"
                autoComplete="cc-exp"
                {...register('expiry')}
                className="rounded-lg border border-slate-200 px-3 py-2 text-slate-800 outline-none focus:border-brand-rose focus:ring-2 focus:ring-brand-rose/30"
                placeholder="06/27"
              />
              {errors.expiry && <span className="text-xs text-red-600">{errors.expiry.message}</span>}
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
              CVC
              <input
                type="password"
                inputMode="numeric"
                autoComplete="cc-csc"
                {...register('cvc')}
                className="rounded-lg border border-slate-200 px-3 py-2 text-slate-800 outline-none focus:border-brand-rose focus:ring-2 focus:ring-brand-rose/30"
                placeholder="123"
              />
              {errors.cvc && <span className="text-xs text-red-600">{errors.cvc.message}</span>}
            </label>
          </div>
        </div>

        <div className="space-y-3">
          <TurnstileWidget onToken={handleToken} />
          <button
            type="submit"
            className="button-primary w-full"
            disabled={!canSubmit || isSubmitting}
          >
            {isSubmitting || locked ? 'Procesando...' : botToken ? 'Pagar ahora' : 'Verifica que no eres un bot'}
          </button>
          <p className="text-xs text-slate-600">
            El botón se bloquea tras el primer clic (debounce) y se habilita solo con un token anti-bot válido.
          </p>
        </div>
      </form>

      {statusMessage && (
        <div className="mt-4 rounded-lg border border-brand-rose/50 bg-brand-cream px-4 py-3 text-sm text-brand-brown">
          {statusMessage}
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
