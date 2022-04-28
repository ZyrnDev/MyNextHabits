import { Button, Container, Divider, Heading } from "@chakra-ui/react";
import Layout from "@components/layouts/centered";
import { MetaOptions } from "@components/meta";
import Ping from "@components/ping";
import { CreateUser, DeleteUser, GetUsers, UpdateUser } from "@components/users";

const meta: MetaOptions = {
  title: "Home",
  description: "DO THIS LATER IDOT",
};

export default function Home() {
  return (
    <Layout meta={meta}>
   {/* <Container size="lg" padding="0.5rem"> */}
      <Heading size="3xl">Hello Next.js</Heading>
      <Divider marginBlock={"1.5rem"} />

      <Ping />
      <Divider marginBlock={"1.5rem"} />

      <GetUsers />
      <Divider marginBlock={"1.5rem"} />

      <CreateUser />
      <Divider marginBlock={"1.5rem"} />

      <UpdateUser />
      <Divider marginBlock={"1.5rem"} />

      <DeleteUser />
      <Divider marginBlock={"1.5rem"} />
    {/* </Container> */}
    </Layout>
  );
}
