import { useEffect, useMemo, useState } from "react";
import Request from "@lib/request";
import { Box, Button, Code, Heading, Input } from "@chakra-ui/react";
import { usePing } from "@lib/requests/tools";
import { useCreateSubscription, useDeleteSubscription, useGetSubscriptions, useUpdateSubscription } from "@lib/requests/subscriptions";

export function GetSubscriptions() {
  const [id, setId] = useState(0);
  const [nickname, setNickname] = useState("");
  const setIdString = (id: string) => setId(parseInt(id));
  const toSubscription = () => ({ id, nickname });
  const subscription = useMemo(() => toSubscription(), []);
  const { data, error, refresh } = useGetSubscriptions(subscription)

  return (
    <Box>
      <Heading size="md">Get Subscriptions</Heading>
      <Input value={isNaN(id) ? 0 : id} onChange={(e) => setIdString(e.target.value)} />
      <Input value={nickname} onChange={(e) => setNickname(e.target.value)} />
      <Button onClick={() => refresh(toSubscription())}>Get</Button>
      <br/>
      
      {data && <Code>{JSON.stringify(data, null, 0)}</Code>}
      {error && <p>Error: {error.toString() || (<Code>{JSON.stringify(data, null, 0)}</Code>)}</p>}
    </Box>
  );
};

// export function CreateSubscription() {
//   const toSubscription = (nickname: string) => ({ nickname });
//   const [nickname, setNickname] = useState("web-test");
//   const subscription = useMemo(() => toSubscription(nickname), []);
//   const { data, error, refresh } = useCreateSubscription(subscription)

//   return (
//     <Box>
//       <Heading size="md">Create Subscription</Heading>
//       <Input value={nickname} onChange={(e) => setNickname(e.target.value)} />
//       <Button onClick={() => refresh(toSubscription(nickname))}>Create</Button>
//       <br/>
      
//       {data && <Code>{JSON.stringify(data, null, 0)}</Code>}
//       {error && <p>Error: {error.toString() || (<Code>{JSON.stringify(data, null, 0)}</Code>)}</p>}
//     </Box>
//   );
// };

export function DeleteSubscription() {
  const toSubscription = (id: number) => ({ id });
  const [id, setId] = useState(10);
  const setIdString = (id: string) => setId(parseInt(id));
  const subscription = useMemo(() => toSubscription(1), []);
  const { data, error, refresh } = useDeleteSubscription(subscription);

  return (
    <Box>
      <Heading size="md">Delete Subscription</Heading>
      <Input value={isNaN(id) ? 0 : id} onChange={(e) => setIdString(e.target.value)} />
      <Button onClick={() => refresh(toSubscription(id))}>Delete</Button>
      <br/>

      {data && <Code>{JSON.stringify(data, null, 0)}</Code>}
      {error && <p>Error: {error.toString() || (<Code>{JSON.stringify(data, null, 0)}</Code>)}</p>}
    </Box>
  );
};

// export function UpdateSubscription() {
//   const [id, setId] = useState(0);
//   const [nickname, setNickname] = useState("");
//   const setIdString = (id: string) => setId(parseInt(id));
//   const toSubscription = () => ({ id, nickname });
//   const subscription = useMemo(() => toSubscription(), []);
//   const { data, error, refresh } = useUpdateSubscription(subscription);

//   return (
//     <Box>
//       <Heading size="md">Update Subscription</Heading>
//       <Input value={isNaN(id) ? 0 : id} onChange={(e) => setIdString(e.target.value)} />
//       <Input value={nickname} onChange={(e) => setNickname(e.target.value)} />
//       <Button onClick={() => refresh(toSubscription())}>Update</Button>
//       <br/>
      
//       {data && <Code>{JSON.stringify(data, null, 0)}</Code>}
//       {error && <p>Error: {error.toString() || (<Code>{JSON.stringify(data, null, 0)}</Code>)}</p>}
//     </Box>
//   );
// };


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