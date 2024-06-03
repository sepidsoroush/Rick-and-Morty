"use client";
import Image from "next/image";
import { useQuery } from "@apollo/client";
import { GET_CHARACTER_BY_ID } from "@/lib/queries";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import InfoCard from "@/components/Info-card";

function CharacterDetail({ params }: { params: { id: string } }) {
  const { id } = params;

  const { data, error, loading } = useQuery(GET_CHARACTER_BY_ID, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {error.message}</p>;

  return (
    <Card className="w-full overflow-hidden my-4">
      <CardContent className="flex flex-col md:flex-row justify-center md:justify-start gap-2 p-4">
        <Image
          src={data.character.image}
          className="object-cover rounded-lg"
          alt="character"
          width={300}
          height={300}
          priority
        />

        <div className="p-2 gap-2">
          <CardTitle className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl mb-4">
            {data.character.name}
          </CardTitle>
          <CardDescription>Info</CardDescription>
          <InfoCard emoji="🟢" title="Status" content={data.character.status} />
          <InfoCard
            emoji="🧬"
            title="Species"
            content={data.character.species}
          />
          <InfoCard emoji="👤" title="Gender" content={data.character.gender} />
          <InfoCard
            emoji="📍"
            title="Location"
            content={data.character.location.name}
          />
        </div>
      </CardContent>
    </Card>
  );
}

export default CharacterDetail;
