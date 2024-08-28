import LightHeading from "./LightHeading";
import GenericNavComponent from "./GenericNavComponent";
import { Eye, Link, Bookmark } from "lucide-react";

export default function Activity() {
  return (
    <section className=" [&>*]:mb-3 ">
      <LightHeading text="Activity"></LightHeading>
      <GenericNavComponent
        text="Submit a link"
        Icon={Link}
      ></GenericNavComponent>
      <GenericNavComponent
        text="Bookmarks"
        Icon={Bookmark}
      ></GenericNavComponent>
      <GenericNavComponent text="History" Icon={Eye}></GenericNavComponent>
    </section>
  );
}
