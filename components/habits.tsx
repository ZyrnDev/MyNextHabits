import { useEffect, useMemo, useState } from "react";
import { Box, Button, Code, FormLabel, Heading, Input } from "@chakra-ui/react";
import { Habit, useCreateHabit, useDeleteHabit, useGetHabits, useUpdateHabit } from "@lib/requests/habits";

export function GetHabits() {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [authorId, setAuthorId] = useState(0);

  const setIdString = (id: string) => setId(parseInt(id));
  const setAuthorIdString = (authorId: string) => setAuthorId(parseInt(authorId));
  const toHabit = () => ({ id, name, description, authorId });

  const habit = useMemo(() => toHabit(), []);
  const { data, error, refresh } = useGetHabits(habit);

  return (
    <Box>
      <Heading size="md">Get Habits</Heading>
      <FormLabel>ID: <Input value={isNaN(id) ? 0 : id} onChange={(e) => setIdString(e.target.value)} /></FormLabel>
      <FormLabel>Name: <Input value={name} onChange={(e) => setName(e.target.value)} /></FormLabel>
      <FormLabel>Description: <Input value={description} onChange={(e) => setDescription(e.target.value)} /></FormLabel>
      <FormLabel>Author ID: <Input value={isNaN(authorId) ? 0 : authorId} onChange={(e) => setAuthorIdString(e.target.value)} /></FormLabel>
      <Button onClick={() => refresh(toHabit())}>Get</Button>
      <br/>
      
      {data && <Code>{JSON.stringify(data, null, 0)}</Code>}
      {error && <p>Error: {error.toString() || (<Code>{JSON.stringify(data, null, 0)}</Code>)}</p>}
    </Box>
  );
};

export function CreateHabit() {
  const [name, setName] = useState("my cool habit");
  const [description, setDescription] = useState("this is a cool habit");
  const [authorId, setAuthorId] = useState(0);

  const setAuthorIdString = (authorId: string) => setAuthorId(parseInt(authorId));
  const toHabit = () => ({ name, description, authorId });

  const habit = useMemo(() => toHabit(), []);
  const { data, error, refresh } = useCreateHabit(habit);

  return (
    <Box>
      <Heading size="md">Create Habit</Heading>
      <FormLabel>Name: <Input value={name} onChange={(e) => setName(e.target.value)} /></FormLabel>
      <FormLabel>Description: <Input value={description} onChange={(e) => setDescription(e.target.value)} /></FormLabel>
      <FormLabel>Author ID: <Input value={isNaN(authorId) ? 0 : authorId} onChange={(e) => setAuthorIdString(e.target.value)} /></FormLabel>
      <Button onClick={() => refresh(toHabit())}>Create</Button>
      <br/>

      {data && <Code>{JSON.stringify(data, null, 0)}</Code>}
      {error && <p>Error: {error.toString() || (<Code>{JSON.stringify(data, null, 0)}</Code>)}</p>}
    </Box>
  );
};


export function UpdateHabit() {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [authorId, setAuthorId] = useState(0);

  const setIdString = (id: string) => setId(parseInt(id));
  const setAuthorIdString = (authorId: string) => setAuthorId(parseInt(authorId));
  const toHabit = () => ({ id, name, description, authorId });

  const habit = useMemo(() => toHabit(), []);
  const { data, error, refresh } = useUpdateHabit(habit);

  return (
    <Box>
      <Heading size="md">Update Habit</Heading>
      <FormLabel>ID: <Input value={isNaN(id) ? 0 : id} onChange={(e) => setIdString(e.target.value)} /></FormLabel>
      <FormLabel>Name: <Input value={name} onChange={(e) => setName(e.target.value)} /></FormLabel>
      <FormLabel>Description: <Input value={description} onChange={(e) => setDescription(e.target.value)} /></FormLabel>
      <FormLabel>Author ID: <Input value={isNaN(authorId) ? 0 : authorId} onChange={(e) => setAuthorIdString(e.target.value)} /></FormLabel>
      <Button onClick={() => refresh(toHabit())}>Update</Button>
      <br/>

      {data && <Code>{JSON.stringify(data, null, 0)}</Code>}
      {error && <p>Error: {error.toString() || (<Code>{JSON.stringify(data, null, 0)}</Code>)}</p>}
    </Box>
  );
};

export function DeleteHabit() {
  const [id, setId] = useState(0);

  const setIdString = (id: string) => setId(parseInt(id));
  const toHabit = () => ({ id });

  const habit = useMemo(() => toHabit(), []);
  const { data, error, refresh } = useDeleteHabit(habit);

  return (
    <Box>
      <Heading size="md">Delete Habit</Heading>
      <FormLabel>ID: <Input value={isNaN(id) ? 0 : id} onChange={(e) => setIdString(e.target.value)} /></FormLabel>
      <Button onClick={() => refresh(toHabit())}>Delete</Button>
      <br/>

      {data && <Code>{JSON.stringify(data, null, 0)}</Code>}
      {error && <p>Error: {error.toString() || (<Code>{JSON.stringify(data, null, 0)}</Code>)}</p>}
    </Box>
  );
};




