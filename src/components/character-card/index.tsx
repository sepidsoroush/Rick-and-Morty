import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Character } from "@/types";

type Props = {
  character: Character;
};

const CharacterCard = ({ character }: Props) => {
  return (
    <Link
      href={`/character/${character.id}`}
      className="group rounded-lg overflow-hidden shadow-lg"
    >
      <Image
        src={character.image}
        className="w-full object-cover"
        alt="character"
        width={300}
        height={300}
        priority
      />
      <div className="flex flex-col md:flex-row justify-between items-center box-border p-2 transition ease-in-out group-hover:-translate-y-2 bg-white">
        <p className="text-sm font-medium group-hover:text-[#ff9800] transition-colors truncate">
          {character.name}
        </p>
        <div className="flex flex-row items-center text-xs truncate">
          <span
            className={cn(
              "h-2 w-2 rounded-full mr-1",
              character.status === "Alive"
                ? "bg-green-500"
                : character.status === "Dead"
                ? "bg-red-500"
                : "bg-gray-300"
            )}
          ></span>
          <p className="text-gray-700">
            {character.status} - {character.species}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CharacterCard;
