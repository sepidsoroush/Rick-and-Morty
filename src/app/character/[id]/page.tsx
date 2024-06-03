"use client";
import Image from "next/image";
import { useQuery } from "@apollo/client";
import { GET_CHARACTER_BY_ID } from "@/lib/queries";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import InfoCard from "@/components/Info-card";

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
      <CardContent className="flex flex-col md:flex-row justify-center md:justify-start gap-2 p-4">
        <Image
          src={character.image}
          className="object-cover rounded-lg"
          alt="character"
          width={300}
          height={300}
          priority
        />
        <div className="p-2 gap-2">
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
          <InfoCard emoji="🏠" title="Origin" content={character.origin.name} />
          <InfoCard
            emoji="📍"
            title="Location"
            content={character.location.name}
          />
        </div>
      </CardContent>
    </Card>
  );
}

export default CharacterDetail;
