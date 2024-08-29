import LightHeading from "./LightHeading";
import GenericNavComponent from "./GenericNavComponent";
import { Atom, Plus } from "lucide-react";

export default function Squads({showNav}) {
  return (
    <section className="[&>*]:mb-1">
      <LightHeading text="Squads" showNav={showNav}></LightHeading>
      <GenericNavComponent
        text="public Squads"
        Icon={Atom}
        showNav={showNav}
      ></GenericNavComponent>
      <GenericNavComponent
        text="New Squad"
        Icon={Plus}
        round={true}
        showNav={showNav}
      ></GenericNavComponent>
    </section>
  );
}
