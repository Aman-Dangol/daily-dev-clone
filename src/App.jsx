import NavBar from "./components/NavBar";
import Body from "./components/Body";
import { useState } from "react";
function App() {
  const [showNav, setShowNav] = useState(true);
  return (
    <main className="flex bg-black">
      <NavBar showNav={showNav} setShowNav={setShowNav} />
      <Body showNav={showNav} />
    </main>
  );
}

export default App;
