import LightHeading from "./LightHeading";
import GenericNavComponent from "./GenericNavComponent";

import { Telescope, MessageCircleMore, Globe, Users } from "lucide-react";

export default function Discover({ showNav }) {
  return (
    <section className=" [&>*]:mb-1  ">
      <LightHeading text="Discover" showNav={showNav}></LightHeading>
      <GenericNavComponent
        text="Explore"
        Icon={Telescope}
        showNav={showNav}
      ></GenericNavComponent>
      <GenericNavComponent
        showNav={showNav}
        text="Discussions"
        Icon={MessageCircleMore}
      ></GenericNavComponent>
      <GenericNavComponent showNav={showNav} text="Tags"></GenericNavComponent>
      <GenericNavComponent
        showNav={showNav}
        text="Sources"
        Icon={Globe}
      ></GenericNavComponent>
      <GenericNavComponent
        showNav={showNav}
        text="Leaderboard"
        Icon={Users}
      ></GenericNavComponent>
    </section>
  );
}
