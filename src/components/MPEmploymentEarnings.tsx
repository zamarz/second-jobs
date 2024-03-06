import MPChildInterestAnalysis from "./MPChildInterestAnalysis";

const MPEmploymentEarnings = ({ earningsInfo }: any) => {
  return (
    <div>
      <h4 className="font-bold text-xl">{earningsInfo.name}</h4>
      <div>
        {earningsInfo.interests.map((secondJob: any) => {
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
    </div>
  );
};

export default MPEmploymentEarnings;
