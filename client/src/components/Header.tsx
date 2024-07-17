import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useState } from "react";
import { Tally4, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleSideMenu() {
    console.log("Side Menu open");
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <>
      <nav className="w-full h-[60px] bg-gray-900 text-white p-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="font-bold select-none">
            <img
              src="/codepen-home_logo.png"
              alt="Code Pen"
              className="w-40 select-none"
            />
          </Link>
          <div className="flex gap-2">
            <ul className="flex gap-2">
              <Link to="/pen">
                <Button variant={"secondary"}>Start Coding</Button>
              </Link>
              <div className="md:hidden flex gap-1 items-center">
                <Tally4 className="rotate-[90deg] " onClick={toggleSideMenu} />
                <div
                  className={`${
                    isMenuOpen ? "translate-x-0" : "translate-x-full"
                  } fixed bottom-0 right-0 top-0 z-30 flex w-[50%] flex-col bg-slate-800 p-12 text-white transition-all ease-linear md:static md:w-auto md:flex-row md:gap-4 md:bg-transparent md:p-0 md:text-black `}
                >
                  <X
                    size={50}
                    className="rotate-[90deg] md:hidden"
                    onClick={toggleSideMenu}
                  />
                  <Link to="/signup">
                    <Button variant={"success"}>Sign Up</Button>
                  </Link>

                  <Link to="/login">
                    <Button variant={"secondary"}>Log In</Button>
                  </Link>
                </div>
              </div>
            </ul>
            <div className="flex gap-2">
              <Link to="/signup" className="hidden md:flex gap-1">
                <Button variant={"success"}>Sign Up</Button>
              </Link>

              <Link to="/login" className="hidden md:flex gap-1">
                <Button variant={"secondary"}>Log In</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
