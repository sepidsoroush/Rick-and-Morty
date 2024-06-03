import Link from "next/link";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const LocationCard = ({ location }: any) => {
  return (
    <Card>
      <Link
        href={`/location/${location.id}`}
        className="w-full flex flex-row justify-between items-center p-4"
      >
        <div>
          <p className="text-base text-gray-700 font-bold">{location.name}</p>
          <div className="flex flex-row">
            <span className="text-base text-gray-700">{location.type}</span> -
            <span className="text-base text-gray-700">
              {location.dimension}
            </span>
          </div>
        </div>
        <ChevronRight />
      </Link>
    </Card>
  );
};

export default LocationCard;
