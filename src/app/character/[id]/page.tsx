"use client";
import Image from "next/image";
import { useQuery } from "@apollo/client";
import { GET_CHARACTER_BY_ID } from "@/lib/queries";
import { cn } from "@/lib/utils";

function CharacterPage({ params }: { params: { id: string } }) {
  const { id } = params;

  const { data, error, loading } = useQuery(GET_CHARACTER_BY_ID, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {error.message}</p>;

  return (
    <>
      {data ? (
        <div className="flex flex-col md:flex-row items-center md:items-start p-4 m-4 shadow-md rounded-lg overflow-hidden">
          <Image
            src={data.character.image}
            className="object-cover rounded-lg"
            alt="character"
            width={300}
            height={300}
            priority
          />
          <div className="space-y-2 pl-4">
            <h1 className="text-2xl font-bold my-4">{data.character.name}</h1>

            <h3 className="text-md">
              Status:{" "}
              <span
                className={cn(
                  data.character.status === "Alive"
                    ? "text-green-500"
                    : data.character.status === "Dead"
                    ? "text-red-500"
                    : "text-gray-500",
                  "font-semibold"
                )}
              >
                {data.character.status}
              </span>
            </h3>
            <h3 className="text-md">
              Gender:{" "}
              <span className="font-semibold">{data.character.gender}</span>
            </h3>
            <h3 className="text-md">
              Species:{" "}
              <span className="font-semibold">{data.character.species}</span>
            </h3>
            <h4 className="text-md">
              Origin:{" "}
              <span className="font-semibold">
                {data.character.origin.name}
              </span>
            </h4>
            <h4 className="text-md">
              Location Type:{" "}
              <span className="font-semibold">
                {data.character.location.type}
              </span>
            </h4>
            <h5 className="text-md">
              Last seen location:{" "}
              <span className="font-semibold">
                {data.character.location.name}
              </span>
            </h5>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">
          Fetching data for the clicked item...
        </p>
      )}
    </>
  );
}

export default CharacterPage;
