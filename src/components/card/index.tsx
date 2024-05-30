import Image from "next/image";
import { cn } from "@/lib/utils";

const Card = ({ character }: any) => {
  return (
    <div className="w-full rounded-lg overflow-hidden shadow-lg mb-4 grid grid-cols-3">
      <Image
        src={character.image}
        className="w-full h-full object-cover col-span-1"
        alt="character"
        width={300}
        height={300}
        priority
      />

      <div className="p-4 col-span-2">
        <h5 className="text-lg font-semibold mb-2">{character.name}</h5>
        <div className="flex flex-row items-center">
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
          <p className="text-base text-gray-700">
            {character.status} - {character.species}
          </p>
        </div>
        <h6 className="text-sm text-gray-600 mt-4">Last known location</h6>
        <p className="text-base text-gray-700">{character.location.name}</p>
      </div>
    </div>
  );
};

export default Card;
