import { Plus, User } from "lucide-react";
import GenericNavComponent from "./GenericNavComponent";

export default function UserFeed() {
  return (
    <section className=" [&>*]:mb-1 ">
      <GenericNavComponent text="My Feed" Icon={User}></GenericNavComponent>
      <GenericNavComponent text="js"></GenericNavComponent>
      <GenericNavComponent text="mysqlDB"></GenericNavComponent>
      <GenericNavComponent text="express"></GenericNavComponent>
      <GenericNavComponent text="react"></GenericNavComponent>
      <GenericNavComponent
        text="custom Feed"
        Icon={Plus}
        round={true}
      ></GenericNavComponent>
    </section>
  );
}
