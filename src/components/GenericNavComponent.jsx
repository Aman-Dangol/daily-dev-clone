import { Hash } from "lucide-react";
export default function GenericNavComponent({ text, Icon, round }) {
  return (
    <div className=" p-1 grid grid-cols-8 hover:bg-slate-800  hover:font-bold cursor-pointer">
      <div>
        {Icon ? (
          <Icon className={`${round ? "p-1 rounded bg-slate-500" : ""}`} />
        ) : (
          <Hash width={20} height={20} />
        )}
      </div>

      <span className="col-span-7  ">{text}</span>
    </div>
  );
}
