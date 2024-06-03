"use client";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_LOCATIONS } from "@/lib/queries";
import LocationCard from "@/components/location-card";
import CustomPagination from "@/components/layout/pagination";

const LocationPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data, error, loading } = useQuery(GET_ALL_LOCATIONS, {
    variables: { page: currentPage },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {error.message}</p>;

  const { info, results } = data.locations;

  return (
    <section className="flex flex-col justify-between h-full">
      <div>
        <header>
          <h1 className="text-center my-8 text-4xl font-bold">
            Rick and Morty Locations
          </h1>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
          {results.map((location: any) => (
            <LocationCard
              key={location.id}
              location={location}
              className="text-base text-gray-700"
            />
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
