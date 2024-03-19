import Loading from "@/app/loading";
import { Value } from "@/app/types/types";
import Image from "next/image";
import Link from "next/link";

const MPCard = ({ mpInfo }: { mpInfo: Value | undefined }) => {
  if (mpInfo === undefined) {
    return <Loading />;
  }

  return (
    <div className="py-3 mx-auto lg:mx-3">
      <div className="items-center text-center py-3 mx-auto">
        <Image
          src={mpInfo.thumbnailUrl}
          alt="An image of the MP"
          height={200}
          width={200}
        />
        <h3>{mpInfo.nameDisplayAs}</h3>
        <p>{mpInfo.latestParty.name}</p>
        <button className="button">
          <Link href={`/mps/${mpInfo.id}`}>See Expenses</Link>
        </button>
      </div>
    </div>
  );
};

export default MPCard;
