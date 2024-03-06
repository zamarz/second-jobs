import Image from "next/image";
import Link from "next/link";

const MPCard = ({ mpInfo }: any) => {
  if (mpInfo === undefined) {
    return <div>Loading...</div>;
  }

  //need to make this into loading spinner

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
        <button className="button">
          <Link href={`/mps/${mpInfo.id}`}>See Expenses</Link>
        </button>
      </div>
    </div>
  );
};

export default MPCard;
