const MPChildInterestAnalysis = ({ childInterestInfo }: any) => {
  console.log(childInterestInfo, "childinterestinfo");

  return (
    <div>
      <div className="py-2 mx-auto">
        <div>{childInterestInfo.interest}</div>
      </div>
    </div>
  );
};

export default MPChildInterestAnalysis;
