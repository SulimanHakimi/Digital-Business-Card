import React from "react";
import Botton from "./bottons";
import Main from "./main";
import Footer from "./footer";
import Img from "./img";

function Card() {
  return (
    <div className="rounded-2xl lg:overflow-hidden pt-6 flex lg:w-1/4 w-full md:w-2/4 min-h-[780px] bg-[#1A1B21] justify-between items-center flex-col">
      <Img />
      <Botton />
      <Main />
      <Footer />
    </div>
  );
}

export default Card;
