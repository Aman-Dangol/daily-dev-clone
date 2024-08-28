import LightHeading from "./LightHeading";
import GenericNavComponent from "./GenericNavComponent";
import { Atom, Plus } from "lucide-react";

export default function Squads() {
  return (
    <section className="[&>*]:mb-1">
      <LightHeading text="Squads"></LightHeading>
      <GenericNavComponent
        text="public Squads"
        Icon={Atom}
      ></GenericNavComponent>
      <GenericNavComponent
        text="New Squad"
        Icon={Plus}
        round={true}
      ></GenericNavComponent>
    </section>
  );
}
