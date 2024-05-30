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
    <main>
      <header>
        <h1 className="text-center my-5 text-4xl font-bold">
          Rick and Morty GraphQL App
        </h1>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 p-2 md:p-4 mx-4 md:mx-8 ">
        {data?.characters?.results.map((character: any) => (
          <Card character={character} key={character.id} />
        ))}
      </div>
    </main>
  );
}
