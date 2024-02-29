import Image from "next/image";

const MPCard = ({ mpInfo }: any) => {
  return (
    <div className="py-3 mx-auto">
      <div className="items-center text-center py-3 mx-auto">
        <Image
          src={mpInfo.thumbnailUrl}
          alt="An image of the MP"
          height={200}
          width={200}
        />
        <h3>{mpInfo.nameDisplayAs}</h3>
        <p>Party: {mpInfo.latestParty.name}</p>
        <button className="button">See Expenses</button>
      </div>
    </div>
  );
};

export default MPCard;
