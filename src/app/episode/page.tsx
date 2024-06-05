"use client";
import { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import CustomPagination from "@/components/layout/pagination";
import EpisodeCard from "@/components/episode-card";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { Episode } from "@/types";

const GET_ALL_EPISODES = gql`
  query Episode($page: Int) {
    episodes(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        air_date
        episode
      }
    }
  }
`;

const EpisodePage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data, error, loading } = useQuery(GET_ALL_EPISODES, {
    variables: { page: currentPage },
  });

  if (loading)
    return (
      <div className="w-full h-screen flex items-center place-content-center">
        <LoadingSpinner />
      </div>
    );
  if (error) return <p>Error {error.message}</p>;

  const { info, results } = data.episodes;

  return (
    <section className="flex flex-col justify-between h-full">
      <div>
        <header>
          <h1 className="text-center my-4 md:my-8 text-2xl md:text-3xl font-bold">
            Episodes
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
