"use client";
import Image from "next/image";
import Link from "next/link";
import { gql, useQuery } from "@apollo/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import InfoCard from "@/components/Info-card";
import EpisodeCard from "@/components/episode-card";
import { Episode } from "@/types";
import { ExternalLink } from "lucide-react";

const GET_CHARACTER_BY_ID = gql`
  query Character($id: ID!) {
    character(id: $id) {
      name
      gender
      status
      image
      species
      origin {
        id
        name
      }
      location {
        id
        name
      }
      episode {
        id
        name
        air_date
        episode
      }
    }
  }
`;

function CharacterDetail({ params }: { params: { id: string } }) {
  const { id } = params;

  const { data, error, loading } = useQuery(GET_CHARACTER_BY_ID, {
    variables: { id },
  });

  if (loading)
    return (
      <div className="w-full h-screen flex items-center place-content-center">
        <LoadingSpinner />
      </div>
    );
  if (error) return <p>Error {error.message}</p>;

  const character = data.character;

  return (
    <Card className="w-full overflow-hidden my-4">
      <CardContent className="grid grid-cols-1 md:grid-cols-3 justify-center md:justify-start gap-2 p-4">
        <Image
          src={character.image}
          className="object-contain rounded-lg items-start"
          alt="character"
          width={300}
          height={300}
          priority
        />
        <div className="p-2 gap-2 col-span-2">
          <CardTitle className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl mb-4">
            {character.name}
          </CardTitle>
          <CardDescription>Info</CardDescription>
          <InfoCard
            emoji={
              character.status === "Alive"
                ? "🟢"
                : character.status === "Dead"
                ? "🔴"
                : "⚫"
            }
            title="Status"
            content={character.status}
          />
          <InfoCard emoji="🧬" title="Species" content={character.species} />
          <InfoCard emoji="👤" title="Gender" content={character.gender} />

          <CardDescription>Location</CardDescription>
          {character.origin.id ? (
            <Link
              href={`/location/${character.origin.id}`}
              className="flex flex-row justify-start items-center group"
            >
              <InfoCard
                emoji="🏠"
                title="Origin"
                content={character.origin.name}
                className="group-hover:text-[#ff9800]"
              />
              <ExternalLink
                size={18}
                className="ml-1 transition-all group-hover:text-[#ff9800] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          ) : (
            <InfoCard
              emoji="🏠"
              title="Origin"
              content={character.origin.name}
            />
          )}
          {character.location.id ? (
            <Link
              href={`/location/${character.location.id}`}
              className="flex flex-row justify-start items-center group"
            >
              <InfoCard
                emoji="📍"
                title="Last known location"
                content={character.location.name}
                className="group-hover:text-[#ff9800]"
              />
              <ExternalLink
                size={18}
                className="ml-1 transition-all group-hover:text-[#ff9800] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          ) : (
            <InfoCard
              emoji="📍"
              title="Last known location"
              content={character.location.name}
            />
          )}

          <CardDescription>
            Episodes ({character.episode.length})
          </CardDescription>
          <div className="grid grid-cols-1 col-span-2 gap-2 my-2">
            {character.episode.map((item: Episode) => (
              <EpisodeCard key={item.id} episode={item} />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default CharacterDetail;
