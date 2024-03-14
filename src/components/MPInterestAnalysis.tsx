import MP234Analysis from "./MP234Analysis";
import MP234Section from "./MP234Section";
import MPChildInterestAnalysis from "./MPChildInterestAnalysis";
import MPEmploymentEarnings from "./MPEmploymentEarnings";

const MPInterestAnalysis = ({ interestInfo, updateTotalEarnings }: any) => {
  return (
    <div>
      {interestInfo.name === "1. Employment and earnings" ? (
        <MPEmploymentEarnings
          earningsInfo={interestInfo}
          updateTotalEarnings={updateTotalEarnings}
        />
      ) : interestInfo.name ===
          "2. (b) Any other support not included in Category 2(a)" ||
        interestInfo.name ===
          "3. Gifts, benefits and hospitality from UK sources" ||
        interestInfo.name === "4. Visits outside the UK" ||
        interestInfo.name ===
          "2. (a) Support linked to an MP but received by a local party organisation or indirectly via a central party organisation" ? (
        <MP234Section
          interestInfo={interestInfo}
          updateTotalEarnings={updateTotalEarnings}
        />
      ) : (
        <div className="mx-auto">
          <h4 className="font-bold text-3xl text-center py-3 mx-auto">
            {interestInfo.name}
          </h4>
          <div className="py-5 mx-auto my-2 grid grid-cols-1 md:grid-cols-2 gap-4 px-4 ">
            {interestInfo.interests.map((secondJob: any) => {
              return (
                <div className="text-center py-3 mx-auto outline px-4 w-full">
                  <h3 className=" mx-auto py-3  text-xl text-balance">
                    {secondJob.interest}
                  </h3>

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
