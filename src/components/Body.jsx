import FeedSetting from "./FeedSetting";
import Contents from "./Contents";
import Hornav from "./Hornav";
import Socials from "./Socials";
import ScrollUp from "./ScrollUp";
export default function Body({ showNav }) {
  return (
    <section
      className={`bg-slate-600  ${
        !showNav ? `ml-10  ` : `ml-[15%] `
      } pl-8 p-4  w-full min-h-screen text-white`}
    >
      <Hornav></Hornav>
      <div className="flex flex-row justify-between items-center">
        <FeedSetting></FeedSetting>
        <Socials></Socials>
        <ScrollUp></ScrollUp>
      </div>
      <Contents></Contents>
    </section>
  );
}
