import LightHeading from "./LightHeading";
import GenericNavComponent from "./GenericNavComponent";
import { ACTIVITY } from "../constant/activity";
export default function Activity({ showNav }) {
  return (
    <section className=" [&>*]:mb-1 ">
      <LightHeading text="Activity" showNav={showNav}></LightHeading>
      {ACTIVITY.map((act, i) => (
        <GenericNavComponent
          key={i}
          text={act.text}
          Icon={act.logo}
          round={act.round}
          showNav={showNav}
        />
      ))}
    </section>
  );
}
