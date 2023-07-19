import WeeklyMixCard from "./WeeklyMixCard";
import AboutMe from "./AboutMeCard";
import RadioWidget from "./RadioWidget";
import BlogCard from "./BlogCard";
type Props = {};

const Content = (props: Props) => {
  return (
    <div className="h-full flex flex-col gap-2">
      <div className="h-1/2 flex flex-row gap-2">
        <RadioWidget />
        <AboutMe />

        <WeeklyMixCard />
      </div>
      <div className="h-1/2 flex flex-row gap-2">
        <WeeklyMixCard />
        <BlogCard />
        <RadioWidget />
      </div>
    </div>
  );
};

export default Content;
