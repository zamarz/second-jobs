"use client";

import ReactGA from "react-ga4";
import HomeContent from "./HomeContent";

ReactGA.initialize(`${process.env.NEXT_PUBLIC_MEASUREMENTID}`);

const HomePage = () => {
  return <HomeContent />;
};

export default HomePage;
