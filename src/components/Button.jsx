import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";

export default function Button({ showNav, setShowNav }) {
  return (
    <button
      className={`absolute top-0 ${
        showNav ? `-right-2` : `-right-4`
      }  bg-white rounded border-white border -1`}
      onClick={() => {
        setShowNav(!showNav);
        console.log(showNav);
      }}
    >
      {showNav ? <ChevronLeft color="black" /> : <ChevronRight color="black" />}
    </button>
  );
}
