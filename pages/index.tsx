import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <div className="h-screen bg-black">
      <div className="hidden lg:flex h-screen flex-col w-full bg-white">
        <div className=" text-7xl  w-full px-2 border-black border-[1px] text-black py-1 ">
          <Marquee speed={80} pauseOnHover delay={2}>
            <div className="my-2 ">
              <span className=" text-[#8CC0DE] px-6  hover:bg-black   hover:cursor-pointer shadow-inner rounded-full hover:shadow-inner">
                akhil
              </span>
              <span className="px-6 text-[#E4A5FF] hover:text-[#c247f6] hover:cursor-pointer hover:shadow-inner">
                web dev
              </span>
              <span className="px-6 text-[#FFAAC9] hover:text-[#f05b91] hover:cursor-pointer">
                music
              </span>
              <span className="px-6 text-[#FFCDA8] hover:text-[#f69144] hover:cursor-pointer">
                language
              </span>
              <span className="px-6 text-[#FFE7CE] hover:text-[#fac792] hover:cursor-pointer">
                design
              </span>
            </div>
          </Marquee>
        </div>
      </div>
      <div className="lg:hidden text-6xl  bg-black h-screen w-full p-2 ">
        <div className="text-[#FFAAC9]">watch this space</div>
        <div className="text-right mt-12 text-[#8CC0DE]">august 2023</div>
        <div className="text-[#FFCDA8] mt-12">brace yourself for</div>
        <div className="text-right text-[#E4A5FF] mt-12">nothing</div>
        <div className="text-[#FFE7CE] mt-12">at all</div>
      </div>
    </div>
  );
}
