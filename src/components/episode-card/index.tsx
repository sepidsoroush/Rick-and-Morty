import Link from "next/link";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { Episode } from "@/types";

type Props = {
  episode: Episode;
};

const EpisodeCard = ({ episode }: Props) => {
  return (
    <Card>
      <Link
        href={`/episode/${episode.id}`}
        className="w-full flex flex-row justify-between items-center md:p-4 p-2"
      >
        <div className="text-sm md:text-base text-gray-700">
          <div className="flex flex-row font-bold">
            <span className="font-medium">{episode.episode}</span>&nbsp;-&nbsp;
            <span>{episode.name}</span>
          </div>
          <p className="text-xs md:text-sm text-gray-500 font-light pt-1">
            {episode.air_date}
          </p>
        </div>
        <ChevronRight />
      </Link>
    </Card>
  );
};

export default EpisodeCard;
