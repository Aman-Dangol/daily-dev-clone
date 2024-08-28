import UserFeed from "./UserFeed";
import Squads from "./Squads";
import Discover from "./Discover";
import Activity from "./Activity";
import Button from "./Button";
export default function NavBar({ showNav, setShowNav }) {
  return (
    <div
      className={`bg-slate-700 text-sm text-white h-screen  fixed w-[20%] p-2 transition duration-300 ${
        showNav ? `translate-x-0` : `-translate-x-[90%]`
      }`}
    >
      <UserFeed></UserFeed>
      <Squads></Squads>
      <Discover></Discover>
      <Activity></Activity>
      <Button showNav={showNav} setShowNav={setShowNav}></Button>
    </div>
  );
}
