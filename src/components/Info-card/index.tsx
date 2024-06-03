import { cn } from "@/lib/utils";

type Props = {
  emoji: string;
  title: string;
  content: string;
  className?: string;
};

const InfoCard = ({ emoji, title, content, className, ...props }: Props) => {
  return (
    <div
      className={cn("flex flex-row items-center my-2", className)}
      {...props}
    >
      <p className="text-base font-normal text-gray-700">
        {emoji}&nbsp;{title}:
      </p>
      <p className="text-base font-semibold pl-1">{content}</p>
    </div>
  );
};

export default InfoCard;
