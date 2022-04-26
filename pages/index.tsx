import { Button, Container, Heading } from "@chakra-ui/react";
import Layout from "@components/layouts/centered";
import { MetaOptions } from "@components/meta";
import Ping from "@components/ping";
import CreateUser from "@components/users";
import { useEffect } from "react";

const meta: MetaOptions = {
  title: "Home",
  description: "DO THIS LATER IDOT",
};

export default function Home() {
  return (
    <Layout meta={meta}>
   {/* <Container size="lg" padding="0.5rem"> */}
      <Heading size="3xl">Hello Next.js</Heading>
      <Ping />
      <CreateUser />
    {/* </Container> */}
    </Layout>
  );
}
