import Content from "./Content";
import { TITLE } from "../constant/titles";

export default function Contents() {
  return (
    <section className="grid auto-rows-auto  grid-cols-1 lg:grid-cols-3  gap-12 p-4 ">
      {TITLE.map((t, index) => (
        <Content
          key={index}
          header={t.title}
          Icon={t.logo}
          image={t.imgURl}
        ></Content>
      ))}
    </section>
  );
}
