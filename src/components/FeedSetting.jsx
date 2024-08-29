import { Settings2 } from "lucide-react";

export default function FeedSetting() {
  return (
    <button className="flex bg-slate-700 border-slate-800 border-[1px] p-2 ml-4 mt-12 rounded gap-2">
      <Settings2></Settings2>
      <span>Feed settings</span>
    </button>
  );
}
