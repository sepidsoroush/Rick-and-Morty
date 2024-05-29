"use client";

import { useQuery } from "@apollo/client";
import { GET_ALL_CHARACTERS } from "@/lib/queries";
import Card from "@/components/card";

export default function Home() {
  const { data, error, loading } = useQuery(GET_ALL_CHARACTERS, {
    variables: { page: 1 },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {error.message}</p>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header>
        <h1 className="text-center m-5 text-xl">The Rick and Morty API</h1>
      </header>
      <div className="grid grid-cols-4 gap-4">
        {data?.characters?.results.map((character: any) => (
          <Card character={character} key={character.id} />
        ))}
      </div>
    </main>
  );
}
