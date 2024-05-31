"use client";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_CHARACTERS } from "@/lib/queries";
import Card from "@/components/card";
import CustomPagination from "@/components/layout/pagination";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data, error, loading } = useQuery(GET_ALL_CHARACTERS, {
    variables: { page: currentPage },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {error.message}</p>;

  const { info, results } = data.characters;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between mx-2 md:mx-24">
      <header>
        <h1 className="text-center my-8 text-4xl font-bold">
          Rick and Morty GraphQL App
        </h1>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
        {results.map((character: any) => (
          <Card character={character} key={character.id} />
        ))}
      </div>
      <CustomPagination
        info={info}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </main>
  );
}
