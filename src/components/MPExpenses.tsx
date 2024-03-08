import MPInterestAnalysis from "./MPInterestAnalysis";

const MPInterestCard = ({ mpInterestInfo }: any) => {
  if (mpInterestInfo === undefined || mpInterestInfo === null) {
    return <div>Loading...</div>;
  }

  //make into spinner
  if (mpInterestInfo.value.length === 0) {
    return (
      <div className="py-5 mx-auto">
        <h3 className="text-center py-4 text-2xl">
          It looks like that this MP hasn't declared any interests.
        </h3>
      </div>
    );
  }

  return (
    <section>
      <div>
        {mpInterestInfo.value.map((interest: any) => {
          return (
            <MPInterestAnalysis key={interest.id} interestInfo={interest} />
          );
        })}
      </div>
    </section>
  );
};

export default MPInterestCard;
