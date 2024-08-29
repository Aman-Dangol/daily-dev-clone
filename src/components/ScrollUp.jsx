import { useContext } from "react";
import { scrollContext } from "../App";
import { ChevronUp } from "lucide-react";
export default function ScrollUp() {
  const scrollY = useContext(scrollContext);
  if (scrollY < 400) {
    return;
  }
  return (
    <button
      className="fixed bottom-[5%] right-[5%] bg-slate-400 text-white w-[80px] rounded-2xl h-[80px] flex justify-center items-center "
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ChevronUp></ChevronUp>
    </button>
  );
}
