import UserFeed from "./UserFeed";
import Squads from "./Squads";
import Discover from "./Discover";
import Activity from "./Activity";
import Button from "./Button";
export default function NavBar({ showNav, setShowNav }) {
  return (
    <div
      className={`bg-slate-700 text-sm border-r-[1px] text-white h-screen  fixed w-[20%] p-2 transition duration-300 ${
        showNav ? `translate-x-0` : `lg:-translate-x-[83%] -translate-x-[70%]`
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
