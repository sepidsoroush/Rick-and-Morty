import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

type Props = {
  emoji: string;
  title: string;
  content: string;
  className?: string;
  link?: string;
};

const InfoCard = ({
  emoji,
  title,
  content,
  className,
  link,
  ...props
}: Props) => {
  const cardContent = (
    <div
      className={cn(
        "flex flex-row items-center my-2 text-sm md:text-base",
        className
      )}
      {...props}
    >
      <p className="font-normal text-gray-700">
        {emoji}&nbsp;{title}:&nbsp;
      </p>
      <p
        className={cn(
          "font-semibold",
          link ? "hover:underline underline-offset-4" : ""
        )}
      >
        {content}
      </p>
    </div>
  );

  return link ? (
    <Link href={link} passHref className="flex flex-row items-center">
      {cardContent}{" "}
      <ArrowUpRight
        size={12}
        className="md:ml-1 m-0 transition-all group-hover:text-[#ff9800] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </Link>
  ) : (
    <div className="flex flex-row items-center">{cardContent}</div>
  );
};

export default InfoCard;
