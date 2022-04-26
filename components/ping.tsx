import { useEffect } from "react";
import Request from "@lib/request";
import { Button, Code } from "@chakra-ui/react";
import { usePing } from "@lib/requests/tools";

export default function Ping() {
    const { data, error, refresh } = usePing(undefined);

    return (
      <>
        <Button onClick={() => refresh(undefined)}>Ping</Button>
        
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