import LightHeading from "./LightHeading";
import GenericNavComponent from "./GenericNavComponent";
import { Eye, Link, Bookmark } from "lucide-react";

export default function Activity({showNav}) {
  return (
    <section className=" [&>*]:mb-3 ">
      <LightHeading text="Activity" showNav={showNav}></LightHeading>
      <GenericNavComponent
        text="Submit a link"
        Icon={Link} showNav={showNav}
      ></GenericNavComponent>
      <GenericNavComponent
        text="Bookmarks"
        Icon={Bookmark} showNav={showNav}
      ></GenericNavComponent>
      <GenericNavComponent showNav={showNav} text="History" Icon={Eye}></GenericNavComponent>
    </section>
  );
}
