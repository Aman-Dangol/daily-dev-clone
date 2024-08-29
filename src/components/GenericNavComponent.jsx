import { Hash } from "lucide-react";
export default function GenericNavComponent({ text, Icon, round, showNav }) {
  return (
    <div
      className={` p-1  flex ${
        showNav ? "" : `justify-end`
      }  hover:bg-slate-800  hover:font-bold cursor-pointer`}
    >
      <div>
        {Icon ? (
          <Icon className={`${round ? "p-1 rounded bg-slate-500" : ""}  `} />
        ) : (
          <Hash width={20} height={20} />
        )}
      </div>

      <span className={`ml-3  ${showNav ? "" : "hidden"}`}>{text}</span>
    </div>
  );
}
