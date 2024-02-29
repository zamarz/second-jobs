import Image from "next/image";

const MPCard = ({ mpInfo }: any) => {
  return (
    <div>
      <div>
        <Image
          src={mpInfo.thumbnailUrl}
          alt="An image of the MP"
          height={200}
          width={200}
        />
        <h3>{mpInfo.nameDisplayAs}</h3>
        <p>Party: {mpInfo.latestParty.name}</p>
      </div>
    </div>
  );
};

export default MPCard;
