import FeedSetting from "./FeedSetting";
import Contents from "./Contents";
import Hornav from "./Hornav";
import Socials from "./Socials";
import ScrollUp from "./ScrollUp";
export default function Body() {
  return (
    <section
      className={`bg-slate-600  pl-8 p-4  w-full overflow-y-scroll no-scrollbar  h-screen  text-white `}
    >
      <Hornav></Hornav>
      <div className="flex flex-row justify-between  items-center z-20">
        <FeedSetting></FeedSetting>
        <Socials></Socials>
        <ScrollUp></ScrollUp>
      </div>
      <Contents></Contents>
    </section>
  );
}
