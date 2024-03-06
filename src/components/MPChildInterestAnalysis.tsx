const MPChildInterestAnalysis = ({ childInterestInfo }: any) => {
  console.log(childInterestInfo, "childinterestinfo");

  return (
    <div>
      <div>{childInterestInfo.interest}</div>
    </div>
  );
};

export default MPChildInterestAnalysis;
