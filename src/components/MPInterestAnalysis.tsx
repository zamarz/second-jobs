import MP234Analysis from "./MP234Analysis";
import MP234Section from "./MP234Section";
import MPChildInterestAnalysis from "./MPChildInterestAnalysis";
import MPEmploymentEarnings from "./MPEmploymentEarnings";

const MPInterestAnalysis = ({ interestInfo }: any) => {
  return (
    <div>
      {interestInfo.name === "1. Employment and earnings" ? (
        <MPEmploymentEarnings earningsInfo={interestInfo} />
      ) : interestInfo.name ===
          "2. (b) Any other support not included in Category 2(a)" ||
        interestInfo.name ===
          "3. Gifts, benefits and hospitality from UK sources" ||
        interestInfo.name === "4. Visits outside the UK" ? (
        <MP234Section interestInfo={interestInfo} />
      ) : (
        <div>
          <h4 className="font-bold text-xl">{interestInfo.name}</h4>
          <div>
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
        </div>
      )}
    </div>
  );
};

export default MPInterestAnalysis;
