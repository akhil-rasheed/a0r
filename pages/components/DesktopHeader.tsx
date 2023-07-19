import Marquee from "react-fast-marquee";

type Props = {};

const DesktopHeader = (props: Props) => {
  return (
    <div className=" text-8xl  w-full px-2 border-black border-[1px] text-black py-2 font-rhody-wide">
      <Marquee speed={80} pauseOnHover delay={2}>
        <div className="my-4 ">
          <span className=" text-akhil-light px-6  font-bold hover:cursor-pointer hover:text-akhil-dark rounded-full ">
            akhil
          </span>
          <span className="px-6 text-webdev-light hover:text-webdev-dark hover:cursor-pointer">
            webdev
          </span>
          <span className="px-6 text-music-light hover:text-music-dark hover:cursor-pointer">
            music
          </span>
          <span className="px-6 text-language-light hover:text-language-dark hover:cursor-pointer">
            language
          </span>
          <span className="px-6 text-design-light hover:text-design-dark hover:cursor-pointer">
            design
          </span>
          <span className="px-3 text-[#afbfbe] hover:bg-black rounded-full hover:cursor-pointer">
            ~*~
          </span>
        </div>
      </Marquee>
    </div>
  );
};

export default DesktopHeader;
