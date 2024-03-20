import Loading from "@/app/loading";
import MPInterestAnalysis from "./MPInterestAnalysis";
import {
  MPExpensesData,
  UpdateTotalEarnings,
  ValueExpense,
} from "@/app/types/types";

type Props = {
  mpInterestInfo: MPExpensesData | null;
  updateTotalEarnings: UpdateTotalEarnings;
};

const MPInterestCard = ({ mpInterestInfo, updateTotalEarnings }: Props) => {
  if (mpInterestInfo === undefined || mpInterestInfo === null) {
    return <Loading />;
  }

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
        {mpInterestInfo.value.map((interest: ValueExpense) => {
          return (
            <MPInterestAnalysis
              key={interest.id}
              interestInfo={interest}
              updateTotalEarnings={updateTotalEarnings}
            />
          );
        })}
      </div>
    </section>
  );
};

export default MPInterestCard;
