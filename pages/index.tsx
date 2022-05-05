import { Button, Container, Divider, Heading } from "@chakra-ui/react";
import Layout from "@components/layouts/centered";
import { MetaOptions } from "@components/meta";
import Ping from "@components/ping";
import { useRegistration } from "@lib/hooks/registration";
import { useSubscription } from "@lib/hooks/subscriptions";
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

const Notifier: FC = () => {
  const registration = useRegistration();
  const { subscription, isSubscribed, subscribe, unsubscribe } = useSubscription(registration);

  const subscribeButtonOnClick = async () => {
    try {
      const sub = await subscribe();
      console.log('web push subscribed!')
      console.log(sub)
    } catch (err) {
      console.log('web push error', err)
    }
  }

  const unsubscribeButtonOnClick = async () => {
    // TODO: you should call your API to delete or invalidate subscription data on server
    await unsubscribe()
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