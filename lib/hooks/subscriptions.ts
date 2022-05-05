import { useEffect, useState } from "react";

export const useSubscription = (registration: ServiceWorkerRegistration | null) => {
  const [subscription, setSubscription] = useState<PushSubscription | null>(null);
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    if (registration) {
      registration.pushManager.getSubscription().then((sub: PushSubscription | null) => {
        const subExpires = (sub as any)?.expirationTime; // TypeScript doesn't know about expirationTime
        if (sub && !(subExpires && Date.now() > subExpires - 5 * 60 * 1000)) {
          setSubscription(sub)
          setIsSubscribed(true)
        }
      })
    }
  }, [registration]);

  async function subscribe() {
    if (registration) {
      try {
        const sub = await registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: base64ToUint8Array(process.env.NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY)
        })

        setSubscription(sub);
        setIsSubscribed(true);

        return sub;
      } catch(err) {
        throw err
      }

    } else {
      throw new Error('No registration');
    }
  }

  async function unsubscribe() {
    if (subscription) {
      try {
        await subscription.unsubscribe();
        setSubscription(null);
        setIsSubscribed(false);
      } catch(err) {
        throw err;
      }
    } else {
      throw new Error('No subscription');
    }
  }
  
  return { 
    subscription,
    isSubscribed,
    subscribe,
    unsubscribe
  };
}

const base64ToUint8Array = (base64: any) => {
  const padding = '='.repeat((4 - (base64.length % 4)) % 4)
  const b64 = (base64 + padding).replace(/-/g, '+').replace(/_/g, '/')

  const rawData = window.atob(b64)
  const outputArray = new Uint8Array(rawData.length)

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}