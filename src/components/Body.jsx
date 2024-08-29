import FeedSetting from "./FeedSetting";
import Contents from "./Contents";
import Hornav from "./Hornav";
export default function Body({ showNav }) {
  return (
    <section
      className={`bg-slate-600  ${
        !showNav ? `ml-10  ` : `ml-[15%] `
      } pl-8 p-4  w-full min-h-screen text-white`}
    >
      <Hornav></Hornav>
      <FeedSetting></FeedSetting>
      <Contents></Contents>
    </section>
  );
}
