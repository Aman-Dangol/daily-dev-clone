import { Youtube, Github, EllipsisVertical } from "lucide-react";

export default function Socials() {
  return (
    <div className="border-[1px] p-3 h-12 mt-12 grid grid-cols-3 gap-4 mr-5  rounded border-slate-500">
      <Youtube className="cursor-pointer"></Youtube>
      <Github className="cursor-pointer"></Github>
      <EllipsisVertical className="cursor-pointer"></EllipsisVertical>
    </div>
  );
}
