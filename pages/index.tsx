import { Container, Divider, Heading } from "@chakra-ui/react";
import Layout from "@components/layouts/centered";
import { MetaOptions } from "@components/meta";
import Ping from "@components/ping";

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

      </Container>
    </Layout>
  );
}