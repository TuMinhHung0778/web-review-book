import React from "react";
import Banner from "./Banner";
import TopSellers from "./TopSellers";
import Recommened from "./Recommened";
import News from "./News";

const home = () => {
  return (
    <>
      <Banner />
      <TopSellers />
      <Recommened/>
      <News/>
    </>
  );
};
export default home;
