'use client';

import { useParams } from 'next/navigation';

export default function Game() {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <h1>Game: {params.id}</h1>
    </div>
  );
}
