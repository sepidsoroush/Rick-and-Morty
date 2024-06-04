"use client";

import Link from "next/link";
import Image from "next/image";
import { gql, useQuery } from "@apollo/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import InfoCard from "@/components/Info-card";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { ChevronRight } from "lucide-react";
import { Character } from "@/types";

const GET_LOCATION_BY_ID = gql`
  query Location($id: ID!) {
    location(id: $id) {
      id
      name
      type
      dimension
      residents {
        id
        name
        image
      }
    }
  }
`;

function LocationPage({ params }: { params: { id: string } }) {
  const { id } = params;

  const { data, error, loading } = useQuery(GET_LOCATION_BY_ID, {
    variables: { id },
  });

  if (loading)
    return (
      <div className="w-full h-screen flex items-center place-content-center">
        <LoadingSpinner />
      </div>
    );
  if (error) return <p>Error {error.message}</p>;

  const location = data.location;

  return (
    <Card className="w-full overflow-hidden my-4">
      <CardHeader className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl my-2">
        <CardTitle>{location.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 md:gap-4">
        <CardDescription>Info</CardDescription>
        <Card className="grid grid-cols-1 md:grid-cols-2 p-2">
          <InfoCard emoji="🪐" title="Type" content={location.type} />
          <InfoCard emoji="✨" title="Dimension" content={location.dimension} />
        </Card>
        <Separator />
        <CardDescription>
          Residents ({location.residents.length})
        </CardDescription>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {location.residents.map((item: Character) => (
            <Card key={item.id}>
              <Link
                href={`/character/${item.id}`}
                className="w-full flex flex-row justify-between items-center p-2"
              >
                <div className="w-full flex flex-row justify-start items-center">
                  <Image
                    src={item.image}
                    className="object-cover rounded-full shadow-lg mr-4"
                    alt="character"
                    width={50}
                    height={50}
                    priority
                  />
                  <p className="text-base text-gray-700 font-semibold">
                    {item.name}
                  </p>
                </div>

                <ChevronRight />
              </Link>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default LocationPage;
