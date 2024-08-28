import LightHeading from "./LightHeading";
import GenericNavComponent from "./GenericNavComponent";

import { Telescope,MessageCircleMore,Globe,Users } from "lucide-react";

export default function Discover() {
  return (
    <section className=" [&>*]:mb-1 ">
      <LightHeading text="Discover"></LightHeading>
      <GenericNavComponent
        text="Explore"
        Icon={Telescope}
      ></GenericNavComponent>
      <GenericNavComponent text="Discussions" Icon={MessageCircleMore}></GenericNavComponent>
      <GenericNavComponent text="Tags" ></GenericNavComponent>
      <GenericNavComponent text="Sources" Icon={Globe}></GenericNavComponent>
      <GenericNavComponent text="Leaderboard" Icon={Users}></GenericNavComponent>
    </section>
  );
}
