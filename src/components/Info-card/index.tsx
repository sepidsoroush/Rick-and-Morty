type Props = {
  emoji: string;
  title: string;
  content: string;
};

const InfoCard = ({ emoji, title, content }: Props) => {
  return (
    <div className="flex flex-row items-center my-2">
      <p className="text-base font-medium text-gray-700">
        {emoji}&nbsp;{title}:
      </p>
      <p className="text-base font-semibold text-[#ff9800] pl-1">{content}</p>
    </div>
  );
};

export default InfoCard;
