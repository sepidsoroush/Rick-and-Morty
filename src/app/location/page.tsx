"use client";
import { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import LocationCard from "@/components/location-card";
import CustomPagination from "@/components/layout/pagination";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { Location } from "@/types";

const GET_ALL_LOCATIONS = gql`
  query Location($page: Int) {
    locations(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        type
        dimension
      }
    }
  }
`;

const LocationPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data, error, loading } = useQuery(GET_ALL_LOCATIONS, {
    variables: { page: currentPage },
  });

  if (loading)
    return (
      <div className="w-full h-screen flex items-center place-content-center">
        <LoadingSpinner />
      </div>
    );
  if (error) return <p>Error {error.message}</p>;

  const { info, results } = data.locations;

  return (
    <section className="flex flex-col justify-between h-full">
      <div>
        <header>
          <h1 className="text-center my-4 md:my-8 text-2xl md:text-3xl font-bold">
            Locations
          </h1>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
          {results.map((location: Location) => (
            <LocationCard key={location.id} location={location} />
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
export default LocationPage;
