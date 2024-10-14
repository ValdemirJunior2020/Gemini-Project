'use client';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { runAi } from "@/actions/ai";
import ReactMarkdown from 'react-markdown';

export default function Page() {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  const handleClick = async (e: any) => {
    e.preventDefault(); // Prevent default form submission behavior
    setLoading(true);
    try {
      // Pass the user's query to runAi function
      const data = await runAi(query); 
      setResponse(data); // Set the response from AI
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="m-5">
      <form onSubmit={handleClick}>
        <Input
          className="mb-5"
          placeholder="Ask anything"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type="submit" disabled={loading}>
          {loading ? "Generating..." : "Generate with AI"}
        </Button>
      </form>

      {/* Card for displaying AI response */}
      <Card className="mt-5">
        <CardHeader>AI Response</CardHeader>
        <CardContent>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ReactMarkdown>{response}</ReactMarkdown>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
