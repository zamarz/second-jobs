const MPChildInterestAnalysis = ({ childInterestInfo }: any) => {
  console.log(childInterestInfo, "childinterestinfo");

  const regexAmount = /£([\d,]+)/g;
  const priceEarnings = childInterestInfo.interest.match(regexAmount);
  const removePound = priceEarnings[0].slice(1, priceEarnings[0].length);

  console.log(priceEarnings);
  console.log(removePound, "poundremove");

  return (
    <div>
      <div className="py-2 mx-auto">
        <div>{childInterestInfo.interest}</div>
      </div>
    </div>
  );
};

export default MPChildInterestAnalysis;
