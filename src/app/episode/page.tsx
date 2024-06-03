"use client";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_EPISODES } from "@/lib/queries";
import CustomPagination from "@/components/layout/pagination";
import EpisodeCard from "@/components/episode-card";
import { Episode } from "@/types";

const EpisodePage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data, error, loading } = useQuery(GET_ALL_EPISODES, {
    variables: { page: currentPage },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {error.message}</p>;

  const { info, results } = data.episodes;

  return (
    <section className="flex flex-col justify-between h-full">
      <div>
        <header>
          <h1 className="text-center my-8 text-4xl font-bold">
            Rick and Morty Episodes
          </h1>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 text-base text-gray-700">
          {results.map((episode: Episode) => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
        </div>
      </div>

      <CustomPagination
        info={info}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
};
export default EpisodePage;
