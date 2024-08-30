import { Plus, User } from "lucide-react";
import GenericNavComponent from "./GenericNavComponent";
import { USER } from "../constant/user";
export default function UserFeed() {
  return (
    <section className=" [&>*]:mb-1 ">
      {USER.map((data,i) => (
        <GenericNavComponent
        key={i}
          text={data.text}
          Icon={data.logo}
          round={data.round}
        ></GenericNavComponent>
      ))}
    </section>
  );
}
