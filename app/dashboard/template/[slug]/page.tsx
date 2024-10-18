import React from 'react';

interface PageProps {
  params: { [key: string]: string };
}

export default function Page({ params }: PageProps) {
  return (
    <div>
      {JSON.stringify(params)}
    </div>
  );
}
