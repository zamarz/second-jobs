import MP234Analysis from "./MP234Analysis";

const MP234Section = ({ interestInfo }: any) => {
  return (
    <div>
      <h4 className="font-bold text-xl text-center py-3">
        {interestInfo.name}
      </h4>
      <div>
        {interestInfo.interests.map((secondJob: any) => {
          return <MP234Analysis id={secondJob.id} secondJob={secondJob} />;
        })}
      </div>
      <div className="text-center text-xl font-bold py-3 mx-auto">
        Total Value: £0
      </div>
    </div>
  );
};

export default MP234Section;
