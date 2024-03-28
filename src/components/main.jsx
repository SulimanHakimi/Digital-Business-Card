import React from "react";

function Main() {
  return (
    <div className="lg:px-7 px-10 gap-5 flex justify-between py-2 flex-col">
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-xl text-white">About</h1>
        <p className="text-[#DCDCDC] text-sm lg:text-base">
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-xl text-white">Interests</h1>
        <p className="text-[#DCDCDC] text-sm lg:text-base">
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
    </div>
  );
}

export default Main;
