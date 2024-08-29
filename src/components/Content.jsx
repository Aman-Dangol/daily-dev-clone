import { User } from "lucide-react";
export default function Content({ Icon, header, image }) {
  Icon ? "" : (Icon = User);
  return (
    <div className="flex flex-col  gap-2 min-h-48  border-[1px] p-2 rounded-md border-slate-800 bg-slate-700 ">
      <Icon></Icon>
      <h1 className="font-bold text-2xl"> {header}</h1>
      <img
        className="w-full h-full rounded-xl object-cover "
        src={image}
        alt="image not found"
      />
    </div>
  );
}
