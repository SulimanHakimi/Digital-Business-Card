import React from "react";
import Botton from "./bottons";
import Main from "./main";
import Footer from "./footer";
import Img from "./img";
import { IoMdAdd } from "react-icons/io";

function Card() {
  return (
    <div className="rounded-2xl relative lg:overflow-hidden pt-6 flex lg:w-1/4 w-full md:w-2/4 min-h-[750px] bg-[#1A1B21] justify-between items-center flex-col">
      <Img />
      <Botton />
      <Main />
      <Footer />
      <div className="bg-[#DCDCDC] cursor-pointer p-4 rounded-full fixed right-4 bottom-6 lg:right-[38%]">
        <IoMdAdd size={35} />
      </div>
    </div>
  );
}

export default Card;
