"use client";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_CHARACTERS } from "@/lib/queries";
import CharacterCard from "@/components/character-card";
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
    <main className="flex min-h-screen flex-col items-center justify-between">
      <header>
        <h1 className="text-center my-8 text-4xl font-bold">
          Rick and Morty Characters
        </h1>
      </header>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
        {results.map((character: any) => (
          <CharacterCard character={character} key={character.id} />
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
