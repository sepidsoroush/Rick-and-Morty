"use client";
import { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import CharacterCard from "@/components/character-card";
import CustomPagination from "@/components/layout/pagination";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { Character } from "@/types";

const GET_ALL_CHARACTERS = gql`
  query Character($page: Int) {
    characters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        image
        status
        species
      }
    }
  }
`;

export default function Home() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data, error, loading } = useQuery(GET_ALL_CHARACTERS, {
    variables: { page: currentPage },
  });

  if (loading)
    return (
      <div className="w-full h-screen flex items-center place-content-center">
        <LoadingSpinner />
      </div>
    );
  if (error) return <p>Error {error.message}</p>;

  const { info, results } = data.characters;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <header>
        <h1 className="text-center my-4 md:my-8 text-2xl md:text-3xl font-bold">
          Characters
        </h1>
      </header>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 text-base text-gray-700">
        {results.map((character: Character) => (
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
