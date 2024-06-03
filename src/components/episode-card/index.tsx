import Link from "next/link";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const EpisodeCard = ({ episode }: any) => {
  return (
    <Card>
      <Link
        href={`/episode/${episode.id}`}
        className="w-full flex flex-row justify-between items-center p-4"
      >
        <div className="text-base text-gray-700">
          <div className="flex flex-row font-bold">
            <span className="font-medium">{episode.episode}</span>&nbsp;-&nbsp;
            <span>{episode.name}</span>
          </div>
          <p className="text-sm">{episode.air_date}</p>
        </div>
        <ChevronRight />
      </Link>
    </Card>
  );
};

export default EpisodeCard;
