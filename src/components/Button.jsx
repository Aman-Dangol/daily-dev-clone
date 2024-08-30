import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { navContext } from "../App";
import { useContext } from "react";
export default function Button({ setShowNav }) {
  const { showNav, showButton } = useContext(navContext);
  console.log(showNav, showButton);

  console.log(showButton);

  return (
    <button
      className={`absolute ${!showButton ? "hidden" : ""}  top-20 ${
        showNav ? `-right-2` : `-right-4`
      }  bg-white rounded border-white border -1`}
      onClick={() => {
        setShowNav(!showNav);
      }}
    >
      {console.log("button")}
      {showNav ? <ChevronLeft color="black" /> : <ChevronRight color="black" />}
    </button>
  );
}
