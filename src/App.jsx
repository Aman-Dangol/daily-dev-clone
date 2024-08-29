import NavBar from "./components/NavBar";
import Body from "./components/Body";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
export const scrollContext = createContext("");
function App() {
  const [showNav, setShowNav] = useState(true);
  const [scrollDistance, setScrollDistance] = useState(window.scrollY);
  window.addEventListener("scroll", () => {
    console.log(scrollDistance);
    setScrollDistance(window.scrollY);
  });
  return (
    <main className="flex bg-slate-600">
      <scrollContext.Provider value={scrollDistance}>
        <NavBar showNav={showNav} setShowNav={setShowNav} />
        <Body showNav={showNav} />
      </scrollContext.Provider>
    </main>
  );
}

export default App;
