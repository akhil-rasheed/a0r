import Marquee from "react-fast-marquee";
import WeeklyMixCard from "./components/WeeklyMixCard";
export default function Home() {
  return (
    <div className="h-screen">
      <div className="hidden lg:flex h-screen flex-col w-full bg-white p-8">
        <div className=" text-8xl  w-full px-2 border-black border-[1px] text-black py-2 font-rhody-wide">
          <Marquee speed={80} pauseOnHover delay={2}>
            <div className="my-4 ">
              <span className=" text-[#c9e7db] px-6 hover:bg-black font-bold hover:cursor-pointer hover:text-[#bfe7f6] rounded-full hover:shadow-inner">
                akhil
              </span>
              <span className="px-6 text-[#f0bbcd] hover:text-[#c490da] hover:cursor-pointer">
                webdev
              </span>
              <span className="px-6 text-[#eb8291] hover:text-[#f05b91] hover:cursor-pointer">
                music
              </span>
              <span className="px-6 text-[#eb7777] hover:text-[#f69144] hover:cursor-pointer">
                language
              </span>
              <span className="px-6 text-[#ffc97f] hover:text-[#a1815f] hover:cursor-pointer">
                design
              </span>
              <span className="px-3 text-[#afbfbe]">~*~</span>
            </div>
          </Marquee>
        </div>
        <WeeklyMixCard />
      </div>
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
    </div>
  );
}
