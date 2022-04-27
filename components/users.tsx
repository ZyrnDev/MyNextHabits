import { useEffect, useMemo, useState } from "react";
import Request from "@lib/request";
import { Button, Code, Input } from "@chakra-ui/react";
import { usePing } from "@lib/requests/tools";
import { useCreateUser, useDeleteUser } from "@lib/requests/users";

export function CreateUser() {
  const toUser = (nickname: string) => ({ nickname });
  const [nickname, setNickname] = useState("web-test");
  const user = useMemo(() => toUser(nickname), []);
  const { data, error, refresh } = useCreateUser(user)

  return (
    <>
      <Input value={nickname} onChange={(e) => setNickname(e.target.value)} />
      <Button onClick={() => refresh(toUser(nickname))}>Re-submit</Button>
      
      {data && <Code>{JSON.stringify(data, null, 0)}</Code>}
      {error && <p>Error: {error.toString() || (<Code>{JSON.stringify(data, null, 0)}</Code>)}</p>}
    </>
  );
};

export function DeleteUser() {
  const toUser = (id: number) => ({ id });
  const [id, setId] = useState(10);
  const setIdString = (id: string) => setId(parseInt(id));
  const user = useMemo(() => toUser(1), []);
  const { data, error, refresh } = useDeleteUser(user);

  return (
    <>
      <Input value={isNaN(id) ? 0 : id} onChange={(e) => setIdString(e.target.value)} />
      <Button onClick={() => refresh(toUser(id))}>Re-submit</Button>
      {data && <Code>{JSON.stringify(data, null, 0)}</Code>}
      {error && <p>Error: {error.toString() || (<Code>{JSON.stringify(data, null, 0)}</Code>)}</p>}
    </>
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