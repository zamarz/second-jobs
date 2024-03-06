const MPChildInterestAnalysis = ({
  childInterestInfo,
  setArrayEarnings,
  arrayEarnings,
}: any) => {
  console.log(childInterestInfo, "childinterestinfo");

  //   const regexAmount = /£([\d,]+)/g;
  //   const priceEarnings = childInterestInfo.interest.match(regexAmount);
  //   const removePound = priceEarnings[0].slice(1, priceEarnings[0].length);

  //   console.log(priceEarnings);
  //   console.log(removePound, "poundremove");

  //need to check if number has a comma through if statement. if so, need to remove it before converting into number

  return (
    <div>
      <div className="py-2 mx-auto">
        <div>{childInterestInfo.interest}</div>
      </div>
    </div>
  );
};

export default MPChildInterestAnalysis;
