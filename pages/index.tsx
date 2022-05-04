import { Button, Container, Divider, Heading } from "@chakra-ui/react";
import Layout from "@components/layouts/centered";
import { MetaOptions } from "@components/meta";
import Ping from "@components/ping";
import { FC, useEffect, useState } from "react";

const meta: MetaOptions = {
  title: "Home",
  description: "DO THIS LATER IDOT",
};

export default function Home() {
  return (
    <Layout meta={meta}>
      <Container size="lg" padding="0.5rem">
        <Heading size="3xl">Hello from Dockerised Next.js</Heading>
        <Divider marginBlock={"1.5rem"} />

        <Ping />
        <Divider marginBlock={"1.5rem"} />

        <Notifier />

      </Container>
    </Layout>
  );
}

const HasNotificationPermission: () => Promise<boolean>  = () => {
  return Notification.requestPermission()
    .then(result => {
      return result === "granted";
    }).catch(err => {
      console.error(err);
      return false
    });
};

const Notifier: FC = () => {
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [subscription, setSubscription] = useState<any>(null)
  const [registration, setRegistration] = useState<any>(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator && (window as any).workbox !== undefined) {
      // run only in browser
      navigator.serviceWorker.ready.then((reg: any) => {
        reg.pushManager.getSubscription().then((sub: any) => {
          if (sub && !(sub.expirationTime && Date.now() > sub.expirationTime - 5 * 60 * 1000)) {
            setSubscription(sub)
            setIsSubscribed(true)
          }
        })
        setRegistration(reg)
      })
    }
  }, [])

  const subscribeButtonOnClick = async () => {
    try {
      const sub = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: base64ToUint8Array(process.env.NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY)
      })
      // TODO: you should call your API to save subscription data on server in order to send web push notification from server
      setSubscription(sub)
      setIsSubscribed(true)
      console.log('web push subscribed!')
      console.log(sub)
    } catch (err) {
      console.log('web push error', err)
    }
  }

  const unsubscribeButtonOnClick = async () => {
    await subscription.unsubscribe()
    // TODO: you should call your API to delete or invalidate subscription data on server
    setSubscription(null)
    setIsSubscribed(false)
    console.log('web push unsubscribed!')
  }

  const sendNotificationButtonOnClick = async () => {
    if (subscription == null) {
      console.error('web push not subscribed')
      return
    }

    await fetch(process.env.NEXT_PUBLIC_FRONTEND_URL + '/api/notification', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        subscription
      })
    })
  }

  return (
    <>
      <Button onClick={subscribeButtonOnClick} disabled={isSubscribed}>
        Subscribe
      </Button>
      <Button onClick={unsubscribeButtonOnClick} disabled={!isSubscribed}>
        Unsubscribe
      </Button>
      <Button onClick={sendNotificationButtonOnClick} disabled={!isSubscribed}>
        Send Notification
      </Button>
    </>
  );
};

  

  
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