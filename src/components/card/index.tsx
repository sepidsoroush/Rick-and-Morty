import Image from "next/image";

const Card = ({ character }: any) => {
  return (
    <div className="w-64 bg-white shadow-md rounded-lg overflow-hidden">
      <Image
        src={character.image}
        className="w-full h-48 object-cover"
        alt="character"
        width={300}
        height={300}
        priority
      />
      <div className="p-4">
        <h5 className="text-lg font-bold mb-0">{character.name}</h5>
        <p className="text-gray-700">
          {character.status} - {character.species}
        </p>
        <h6 className="text-sm font-semibold text-gray-500 mt-2">
          Last known location
        </h6>
        <p className="text-gray-700">{character.location.name}</p>
      </div>
    </div>
  );
};

export default Card;
