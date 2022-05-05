import { useEffect, useState } from "react";

export const useRegistration = () => {
  const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined' &&
          'serviceWorker' in navigator &&
          (window as any).workbox !== undefined)
    {
      // run only in browser
      navigator.serviceWorker.ready.then(setRegistration)
    }
  }, []);

  return registration;
}