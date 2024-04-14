import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CreateCard() {
  const [inputData, setInputData] = useState();
  const Data = (e) => {
    setInputData((prevState) => ({
      ...prevState,
      [e.target?.name]: e.target.value,
    }));
  };
  let data = [];
  console.log(data);

  data.push(
    JSON.stringify({
      Name: inputData?.name,
      website: "Example.net",
      Position: inputData?.Position,
      Email: inputData?.Email,
      LinkdinSrc: inputData?.LinkdinSrc,
      About: inputData?.About,
      Interests: inputData?.Interests,
    })
  );
  const localStorage = () => {
    window.localStorage.setItem("userCard", data);
  };
  return (
    <div className="flex p-8 flex-col lg:w-1/4 w-full md:w-2/4 gap-4 rounded-2xl bg-[#1A1B21]">
      <div className="text-center font-semibold text-2xl text-white p-5">
        Create Digital Card
      </div>
      <div className="relative h-16 flex justify-start items-end">
        <label htmlFor="name" className="text-white font-bold absolute top-0">
          Name
        </label>
        <input
          type="text"
          name="name"
          onChange={Data}
          maxLength={30}
          className="w-full h-10 outline-none p-2 focus:ring-transparent caret-blue-700 rounded-sm"
        />
      </div>
      <div className="relative h-16 flex justify-start items-end">
        <label
          htmlFor="Position"
          className=" text-white font-bold absolute top-0"
        >
          Position
        </label>
        <input
          type="text"
          maxLength={30}
          name="Position"
          onChange={Data}
          className="w-full h-10 p-2 outline-none caret-blue-700 rounded-sm"
        />
      </div>
      <div className="relative h-16 flex justify-start items-end">
        <label htmlFor="Email" className="text-white font-bold absolute top-0">
          Email
        </label>
        <input
          type="text"
          onChange={Data}
          maxLength={30}
          name="Email"
          className="w-full h-10 focus:ring-transparent outline-none p-2 caret-blue-700 rounded-sm"
        />
      </div>
      <div className="relative h-16 flex justify-start items-end">
        <label
          htmlFor="LinkdinSrc"
          className="text-white font-bold absolute top-0"
        >
          Linkdin Src
        </label>
        <input
          onChange={Data}
          type="text"
          name="LinkdinSrc"
          className="w-full h-10 outline-none p-2 focus:ring-transparent caret-blue-700 rounded-sm"
        />
      </div>
      <div className="relative h-28 flex justify-start items-end">
        <label htmlFor="About" className="text-white font-bold absolute top-0">
          About
        </label>
        <textarea
          name="About"
          cols="43"
          onChange={Data}
          rows="3"
          className="focus:ring-transparent outline-none w-[110%] p-2 caret-blue-700 rounded-sm resize-none	"
        ></textarea>
      </div>
      <div className="relative h-28 flex justify-start items-end">
        <label
          htmlFor="Interests"
          className="text-white font-bold absolute top-0"
        >
          Interests
        </label>
        <textarea
          name="Interests"
          cols="43"
          onChange={Data}
          rows="3"
          className="focus:ring-transparent w-[110%] p-2 outline-none caret-blue-700 rounded-sm resize-none	"
        ></textarea>
      </div>
      <Link
        onClick={localStorage}
        className="bg-[#000000] hover:bg-[#0000003f] cursor-pointer text-center text-white font-medium m-2 p-4 rounded"
      >
        Create
      </Link>
    </div>
  );
}
