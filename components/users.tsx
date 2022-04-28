import { useEffect, useMemo, useState } from "react";
import Request from "@lib/request";
import { Box, Button, Code, Heading, Input } from "@chakra-ui/react";
import { usePing } from "@lib/requests/tools";
import { useCreateUser, useDeleteUser, useGetUsers, useUpdateUser } from "@lib/requests/users";

export function GetUsers() {
  const [id, setId] = useState(0);
  const [nickname, setNickname] = useState("");
  const setIdString = (id: string) => setId(parseInt(id));
  const toUser = () => ({ id, nickname });
  const user = useMemo(() => toUser(), []);
  const { data, error, refresh } = useGetUsers(user)

  return (
    <Box>
      <Heading size="md">Get Users</Heading>
      <Input value={isNaN(id) ? 0 : id} onChange={(e) => setIdString(e.target.value)} />
      <Input value={nickname} onChange={(e) => setNickname(e.target.value)} />
      <Button onClick={() => refresh(toUser())}>Get</Button>
      <br/>
      
      {data && <Code>{JSON.stringify(data, null, 0)}</Code>}
      {error && <p>Error: {error.toString() || (<Code>{JSON.stringify(data, null, 0)}</Code>)}</p>}
    </Box>
  );
};

export function CreateUser() {
  const toUser = (nickname: string) => ({ nickname });
  const [nickname, setNickname] = useState("web-test");
  const user = useMemo(() => toUser(nickname), []);
  const { data, error, refresh } = useCreateUser(user)

  return (
    <Box>
      <Heading size="md">Create User</Heading>
      <Input value={nickname} onChange={(e) => setNickname(e.target.value)} />
      <Button onClick={() => refresh(toUser(nickname))}>Create</Button>
      <br/>
      
      {data && <Code>{JSON.stringify(data, null, 0)}</Code>}
      {error && <p>Error: {error.toString() || (<Code>{JSON.stringify(data, null, 0)}</Code>)}</p>}
    </Box>
  );
};

export function DeleteUser() {
  const toUser = (id: number) => ({ id });
  const [id, setId] = useState(10);
  const setIdString = (id: string) => setId(parseInt(id));
  const user = useMemo(() => toUser(1), []);
  const { data, error, refresh } = useDeleteUser(user);

  return (
    <Box>
      <Heading size="md">Delete User</Heading>
      <Input value={isNaN(id) ? 0 : id} onChange={(e) => setIdString(e.target.value)} />
      <Button onClick={() => refresh(toUser(id))}>Delete</Button>
      <br/>

      {data && <Code>{JSON.stringify(data, null, 0)}</Code>}
      {error && <p>Error: {error.toString() || (<Code>{JSON.stringify(data, null, 0)}</Code>)}</p>}
    </Box>
  );
};

export function UpdateUser() {
  const [id, setId] = useState(0);
  const [nickname, setNickname] = useState("");
  const setIdString = (id: string) => setId(parseInt(id));
  const toUser = () => ({ id, nickname });
  const user = useMemo(() => toUser(), []);
  const { data, error, refresh } = useUpdateUser(user);

  return (
    <Box>
      <Heading size="md">Update User</Heading>
      <Input value={isNaN(id) ? 0 : id} onChange={(e) => setIdString(e.target.value)} />
      <Input value={nickname} onChange={(e) => setNickname(e.target.value)} />
      <Button onClick={() => refresh(toUser())}>Update</Button>
      <br/>
      
      {data && <Code>{JSON.stringify(data, null, 0)}</Code>}
      {error && <p>Error: {error.toString() || (<Code>{JSON.stringify(data, null, 0)}</Code>)}</p>}
    </Box>
  );
};


/*
function abc(apiHook, payload, renderData, renderError, renderLoading) {
  const { data, error, refresh } = apiHook(payload);

  if (data) {
    return renderData(data, refresh);
  } else if (error) {
    return renderError(error, refresh);
  } else {
    return renderLoading();
  }
};
*/