import LightHeading from "./LightHeading";
import GenericNavComponent from "./GenericNavComponent";

import { DISCOVER } from "../constant/discover";

export default function Discover({ showNav }) {
  return (
    <section className=" [&>*]:mb-1  ">
      <LightHeading text="Discover" showNav={showNav}></LightHeading>
      {DISCOVER.map((act,i) => (
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
