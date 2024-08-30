import UserFeed from "./UserFeed";
import Squads from "./Squads";
import Discover from "./Discover";
import Activity from "./Activity";
import Button from "./Button";
import { navContext } from "../App";
import { useContext } from "react";
export default function NavBar() {
  const { showNav,setShowNav } = useContext(navContext);
  return (
    <aside
      className={`   bg-slate-700   pt-[48px] sm:pt-20 z-10 text-sm  border-slate-500 border-r-[1px] text-white h-screen  md:w-[15%]  transition duration-300
         ${
           showNav
             ? `translate-x-0`
             : `lg:-translate-x-[78%] md:-translate-x-[50%] -translate-x-[30%]`
         }`}
    >
      <UserFeed></UserFeed>
      <Squads></Squads>
      <Activity></Activity>
      <Button setShowNav={setShowNav}></Button>
    </aside>
  );
}
