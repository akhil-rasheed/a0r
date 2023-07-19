import Emoji from "./Emoji";
type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="w-full font-space-mono mt-4 h-2">
      made with hatred <Emoji symbol="❤️" label="heart" /> and spite{" "}
      <Emoji symbol="💌" label="envelope sealed with heart" /> in Mysuru India
      2023
    </div>
  );
};

export default Footer;
