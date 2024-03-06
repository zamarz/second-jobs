import MPInterestAnalysis from "./MPInterestAnalysis";

const MPInterestCard = ({ mpInterestInfo }: any) => {
  if (mpInterestInfo === undefined || mpInterestInfo === null) {
    return <div>Loading...</div>;
  }

  //make into spinner

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
