import { Navbar } from "../components/navbar/header";
import { useState } from "react";
import { Description } from "../components/description";
import { Footer } from "../components/footer";

export function Home() {
  const [menuState, setMenuState] = useState(true);
  const handleMenuClick = () => {
    setMenuState(!menuState);
  };

  const visible = {
    display: "flex",
  };
  const cover = {
    display: "none",
  };

  return (
    <>
      <Navbar handleMenuClick={handleMenuClick} />
      <div id="content-generic" style={menuState ? visible : cover}>
        <Description />
        <Footer />
      </div>
    </>
  );
}
