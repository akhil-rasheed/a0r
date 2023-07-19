import React from "react";

type Props = {};

const MobileSiteTemp = (props: Props) => {
  return (
    <div className="lg:hidden relative h-screen ">
      <div className="fixed top-0 left-0 z-[-1] text-6xl font-rhody-wide h-screen w-full  ">
        <video
          className=" object-cover w-full h-full"
          src="/video/cow.mp4"
          autoPlay
          loop
          muted
        />
      </div>
      <span className="fixed top-20 w-full text-center m-auto text-7xl font-rhody-wide text-[#ffffff]  ">
        ~<span className="text-[#b158ff]">waiting</span>~
      </span>
    </div>
  );
};

export default MobileSiteTemp;
