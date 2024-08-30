import { Hash } from "lucide-react";
import { navContext } from "../App";
import { useContext } from "react";
export default function GenericNavComponent({ text, Icon, round }) {
  const { showNav } = useContext(navContext);
  return (
    <div
      className={` pr-2 p-1 flex ${
        showNav ? "hover:bg-slate-800 " : `justify-end`
      }   hover:font-bold cursor-pointer`}
    >
      <div>
        {Icon ? (
          <Icon
            className={`${round ? "p-1  bg-slate-500" : ""} 
          ${!showNav ? "hover:bg-slate-800" : ""} `}
          />
        ) : (
          <Hash
            className={` ${!showNav ? "hover:bg-slate-800" : ""}`}
            width={20}
            height={20}
          />
        )}
      </div>

      <span className={`ml-3  ${showNav ? "" : "hidden"}`}>{text}</span>
    </div>
  );
}
