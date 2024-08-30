import LightHeading from "./LightHeading";
import GenericNavComponent from "./GenericNavComponent";
import { SQUADS } from "../constant/squads";
export default function Squads({ showNav }) {
  return (
    <section className="[&>*]:mb-1">
      <LightHeading text="Squads" ></LightHeading>
      {SQUADS.map((s,i) => (
        <GenericNavComponent
        key={i}
          text={s.text}
          Icon={s.logo}
          round={s.round}
          showNav={showNav}
        />
      ))}
    </section>
  );
}
