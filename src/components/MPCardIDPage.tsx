import Loading from "@/app/loading";
import { Value } from "@/app/types/types";
import Image from "next/image";
import Link from "next/link";

const MPCardIDPage = ({ mpInfo }: { mpInfo: Value | undefined }) => {
  if (mpInfo === undefined) {
    return <Loading />;
  }

  return (
    <div className="pb-2 pt-5 mx-auto text-center">
      <div className="py-5 mx-auto">
        <div className="flex justify-center">
          <Image
            src={mpInfo.thumbnailUrl}
            alt="An image of the MP"
            height={300}
            width={300}
            priority={true}
          />
        </div>
        <h3 className="text-2xl font-bold py-2">{mpInfo.nameDisplayAs}</h3>
        <p className="py-2 text-xl">
          <span className="font-semibold">Party:</span>{" "}
          {mpInfo.latestParty.name}
        </p>
        <p className="py-2 text-xl">
          <span className="font-semibold">Constituency:</span>{" "}
          {mpInfo.latestHouseMembership.membershipFrom}
        </p>
        <button className="button">
          <Link
            href={`https://members.parliament.uk/member/${mpInfo.id}/registeredinterests`}
            target="_blank"
          >
            See on Parliament's website
          </Link>
        </button>
      </div>
    </div>
  );
};

export default MPCardIDPage;
