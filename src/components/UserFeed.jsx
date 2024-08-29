import { Plus, User } from "lucide-react";
import GenericNavComponent from "./GenericNavComponent";

export default function UserFeed({ showNav }) {
  return (
    <section className=" [&>*]:mb-1 ">
      <GenericNavComponent
        showNav={showNav}
        text="My Feed"
        Icon={User}
      ></GenericNavComponent>
      <GenericNavComponent showNav={showNav} text="js"></GenericNavComponent>
      <GenericNavComponent
        showNav={showNav}
        text="mysqlDB"
      ></GenericNavComponent>
      <GenericNavComponent
        showNav={showNav}
        text="express"
      ></GenericNavComponent>
      <GenericNavComponent showNav={showNav} text="react"></GenericNavComponent>
      <GenericNavComponent
        text="custom Feed"
        Icon={Plus}
        round={true}
        showNav={showNav}
      ></GenericNavComponent>
    </section>
  );
}
