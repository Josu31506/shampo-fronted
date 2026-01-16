import axios, { AxiosError, AxiosInstance } from 'axios';
import { useMemo } from 'react';

type RateLimitHandler = (message: string) => void;

export const useAxiosSecure = (onRateLimit?: RateLimitHandler): AxiosInstance => {
  const client = useMemo(() => {
    const instance = axios.create({
      baseURL: '/api',
      timeout: 10000
    });

    instance.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        if (error.response?.status === 429) {
          const fallbackMessage =
            'Has alcanzado el límite de intentos. Espera unos segundos antes de intentar nuevamente.';
          onRateLimit?.(fallbackMessage);
          return Promise.reject(new Error(fallbackMessage));
        }
        return Promise.reject(error);
      }
    );

    return instance;
  }, [onRateLimit]);

  return client;
};
