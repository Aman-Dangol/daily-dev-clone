import NavBar from "./components/NavBar";
import Body from "./components/Body";
import { useState } from "react";
import { createContext } from "react";
export const scrollContext = createContext("");
export const navContext = createContext("");
function App() {
  const [showNav, setShowNav] = useState(true);
  const [showButton, setShowButton] = useState(true);
  const [scrollDistance, setScrollDistance] = useState(window.scrollY);

  window.addEventListener("scroll", () => {
    console.log(scrollDistance);
    setScrollDistance(window.scrollY);
    console.log(window.innerWidth);
  });
// remove button if height is smaller than 700
  window.addEventListener('resize', () => {
    if (window.innerWidth <  650) {
      setShowNav(false);
      setShowButton(false);
    } else setShowButton(true);
  });

  return (
    <main className="flex w-screen overflow-hidden  bg-slate-600">
      <navContext.Provider value={{ showNav,setShowNav, showButton }}>
        <NavBar />
        <scrollContext.Provider value={scrollDistance}>
          <Body showNav={showNav} />
        </scrollContext.Provider>
      </navContext.Provider>
    </main>
  );
}

export default App;
