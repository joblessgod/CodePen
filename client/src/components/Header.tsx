import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <>
      <nav className="w-full h-[60px] bg-gray-900 text-white p-3 flex justify-between items-center">
        <Link to="/" className="font-bold select-none">
          <img
            src="/codepen-home_logo.png"
            alt="Code Pen"
            className="w-40 select-none"
          />
        </Link>

        <ul className="flex gap-2">
          <Link to="/compiler">
            <Button variant={"secondary"}>Compiler</Button>
          </Link>
        </ul>
      </nav>
    </>
  );
}
