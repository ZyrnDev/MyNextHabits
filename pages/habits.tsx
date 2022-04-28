import { Button, Container, Divider, Heading } from "@chakra-ui/react";
import { CreateHabit, DeleteHabit, GetHabits, UpdateHabit } from "@components/habits";
import Layout from "@components/layouts/centered";
import { MetaOptions } from "@components/meta";

const meta: MetaOptions = {
  title: "Habits",
  description: "DO THIS LATER IDOT",
};

export default function Habits() {
  return (
    <Layout meta={meta}>
   {/* <Container size="lg" padding="0.5rem"> */}
      <Heading size="3xl">Habits</Heading>
      <Divider marginBlock={"1.5rem"} />

      <GetHabits />
      <Divider marginBlock={"1.5rem"} />

      <CreateHabit />
      <Divider marginBlock={"1.5rem"} />

      <UpdateHabit />
      <Divider marginBlock={"1.5rem"} />

      <DeleteHabit />
      <Divider marginBlock={"1.5rem"} />

    {/* </Container> */}
    </Layout>
  );
}
