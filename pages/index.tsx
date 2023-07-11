import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <div className="h-screen flex items-center ">
      <div className="flex flex-col w-full ">
        <div className="hidden lg:block text-7xl  w-full px-2 border-black border-[1px]text-black ">
          <Marquee speed={60} pauseOnHover delay={2}>
            <div className="my-2">
              <span className=" text-[#8CC0DE] px-6 hover:w-full">akhil</span>
              <span className="px-6 text-[#E4A5FF]">web dev</span>
              <span className="px-6 text-[#FFAAC9]">music</span>
              <span className="px-6 text-[#FFCDA8]">language</span>
              <span className="px-6 text-[#FFE7CE]">design</span>
            </div>
          </Marquee>
        </div>
        <div className="lg:hidden text-7xl  bg-black h-screen w-full border-2 p-2 border-[#FFAAC9]">
          <div className="text-[#FFAAC9]">watch this space</div>
          <div className="text-right mt-12 text-[#8CC0DE]">august 2023</div>
        </div>
      </div>
    </div>
  );
}
