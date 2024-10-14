'use client';
import { useState } from "react";
import {Button} from "@/components/ui/button";
import {runAi} from "@/actions/ai";
export default function Page() {
  //state
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const handleClick = async () => {
    setLoading(true);
    try {
      const data = await runAi();
      setResponse(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (<><Button onClick={handleClick}>Run AI</Button>
  <hr />
  <div>{ loading ? 'Loading...' : response }</div>
  </>
  );
}