import UserFeed from "./UserFeed";
import Squads from "./Squads";
import Discover from "./Discover";
import Activity from "./Activity";
import Button from "./Button";
export default function NavBar({ showNav, setShowNav }) {
  return (
    <div
      className={`  bg-slate-700 pt-2 z-40 text-sm border-slate-500 border-r-[1px] text-white h-screen  fixed  md:w-[15%] p-2 transition duration-300 ${
        showNav
          ? `translate-x-0`
          : `lg:-translate-x-[80%] md:-translate-x-[30%] -translate-x-[30%]`
      }`}
    >
      <UserFeed showNav={showNav}></UserFeed>
      <Squads showNav={showNav}></Squads>
      <Discover showNav={showNav}></Discover>
      <Activity showNav={showNav}></Activity>
      <Button showNav={showNav} setShowNav={setShowNav}></Button>
    </div>
  );
}
