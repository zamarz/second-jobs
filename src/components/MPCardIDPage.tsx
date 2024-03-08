import Image from "next/image";
import Link from "next/link";

const MPCardIDPage = ({ mpInfo }: any) => {
  if (mpInfo === undefined) {
    return <div>Loading...</div>;
  }

  //need to make this into loading spinner

  return (
    <div className="py-8 mx-auto text-center">
      <div className="py-5 mx-auto">
        <div className="flex justify-center">
          <Image
            src={mpInfo.thumbnailUrl}
            alt="An image of the MP"
            height={300}
            width={300}
          />
        </div>
        <h3 className="text-2xl font-bold py-2">{mpInfo.nameDisplayAs}</h3>
        <p className="py-2 text-xl">Party: {mpInfo.latestParty.name}</p>
        <p className="py-2 text-xl">
          Constituency: {mpInfo.latestHouseMembership.membershipFrom}
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
