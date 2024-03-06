import MPChildInterestAnalysis from "./MPChildInterestAnalysis";

const MPInterestAnalysis = ({ interestInfo }: any) => {
  console.log(interestInfo.interests);
  return (
    <div>
      {interestInfo.name === "1. Employment and earnings" ? (
        <h4 className="font-bold text-3xl">{interestInfo.name}</h4>
      ) : (
        <h4 className="font-bold text-xl">{interestInfo.name}</h4>
      )}

      {interestInfo.interests.map((secondJob: any) => {
        return (
          <div>
            <h3>{secondJob.interest}</h3>

            {secondJob.childInterests.length > 0 ? (
              secondJob.childInterests.map((childInterest: any) => {
                return (
                  <MPChildInterestAnalysis
                    key={childInterest.id}
                    childInterestInfo={childInterest}
                  />
                );
              })
            ) : (
              <></>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MPInterestAnalysis;
