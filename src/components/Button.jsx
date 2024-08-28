import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";

export default function Button({ showNav, setShowNav }) {
  return (
    <button
      className="absolute top-0 right-0"
      onClick={() => {
        setShowNav(!showNav);
        console.log(showNav);
      }}
    >
      {showNav ? <ChevronLeft /> : <ChevronRight />}
    </button>
  );
}
