import { Link, useNavigate, useParams } from "react-router-dom";
import {
  LoaderCircle,
  PanelsTopLeft,
  Save,
  Settings,
  Tally4,
  X,
} from "lucide-react";
import { Button } from "../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { useEffect, useState } from "react";

import { MdViewSidebar } from "react-icons/md";
import { handleError } from "../utils/handleError";
import axios from "axios";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import { RootState } from "../redux/slices/store";

export default function CompilerHeader() {
  const navigate = useNavigate();
  const fullCode = useSelector(
    (state: RootState) => state.compilerSlice.fullCode
  );
  const [saveLoading, setSaveLoading] = useState<boolean>(false);
  const [position, setPosition] = useState("bottom");
  const [savedFile, setSavedFileName] = useState(false);

  const handleSaveCode = async () => {
    setSaveLoading(true);
    try {
      const response = await axios.post("http://localhost:4000/compiler/save", {
        fullCode: fullCode,
      });
      navigate(`/compiler/${response.data.url}`, { replace: true });
    } catch (error) {
      handleError(error);
    } finally {
      setSaveLoading(false);
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleSideMenu() {
    console.log("Side Menu open");
    setIsMenuOpen(!isMenuOpen);
  }

  const { urlId } = useParams();
  useEffect(() => {
    if (urlId) {
      setSavedFileName(true);
    } else {
      setSavedFileName(false);
    }
  }, [urlId]);
  return (
    <>
      <nav className="w-full h-[60px] bg-gray-900 text-white p-3">
        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            <Link to={"/"}>
              <img src="/codepen_logo.png" className="h-10 w-10" />
            </Link>

            <div className="font-bold select-none">
              <h1>Untitled </h1>
              <small className="font-normal text-slate-400">
                {savedFile ? `Id: ${urlId}` : "Captain Anonymous"}
              </small>
            </div>
          </div>
          {/* mobile version (for mobile responsive) */}
          <div className="md:hidden flex gap-1 items-center">
            <Button
              onClick={() => {
                handleSaveCode();
                toast.success("Your code has been saved.");
              }}
              variant={"success"}
              disabled={saveLoading}
              className=" gap-1 flex justify-between items-center"
            >
              {saveLoading ? (
                <>
                  <LoaderCircle size={16} className="animate-spin" /> Saving
                </>
              ) : (
                <div className="flex items-center gap-1">
                  <Save size={16} /> Save
                </div>
              )}
            </Button>
            <Tally4 className="rotate-[90deg] " onClick={toggleSideMenu} />

            {/* This is that overshowing menu */}
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
              {/* flex grow property */}
              <ul className="md:hidden md:justify-center text-center  md:gap-1">
                <Button
                  variant={"secondary"}
                  className="bg-transparent md:bg-none flex gap-1 items-center justify-center"
                >
                  <Settings size={18} />
                  Settings
                </Button>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant={"secondary"}
                      className="bg-transparent md:bg-none"
                    >
                      <PanelsTopLeft />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>
                      Change View{" "}
                      <small className="font-serif font-normal text-[10px] text-red-500">
                        (SOON)
                      </small>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup
                      value={position}
                      onValueChange={setPosition}
                      className="flex flex-row"
                    >
                      <DropdownMenuRadioItem value="left">
                        <MdViewSidebar className="rotate-[180deg] size-8 items-center justify-center flex" />
                      </DropdownMenuRadioItem>

                      <DropdownMenuRadioItem value="top">
                        <MdViewSidebar className="rotate-[270deg] size-8 items-center justify-center flex" />
                      </DropdownMenuRadioItem>

                      <DropdownMenuRadioItem value="right">
                        <MdViewSidebar className="rotate-[0deg] size-8 items-center justify-center flex" />
                      </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Link to="/signup">
                  <Button
                    className="p-5  bg-transparent md:bg-none"
                    variant={"success"}
                  >
                    Sign Up
                  </Button>
                </Link>

                <Link to="/login">
                  <Button
                    className="p-5 bg-transparent md:bg-none"
                    variant={"secondary"}
                  >
                    Log In
                  </Button>
                </Link>
              </ul>
            </div>
          </div>

          {/* over md size desktops */}
          <ul className="hidden md:flex md:justify-center md:gap-2">
            <Button
              onClick={() => {
                handleSaveCode();
              }}
              variant={"success"}
              disabled={saveLoading}
              className=" gap-1 flex justify-between items-center"
            >
              {saveLoading ? (
                <>
                  <LoaderCircle size={16} className="animate-spin" /> Saving
                </>
              ) : (
                <div className="flex items-center gap-1">
                  <Save size={16} /> Save
                </div>
              )}
            </Button>

            <Button
              variant={"secondary"}
              className=" flex gap-1 items-center justify-center"
            >
              <Settings size={18} />
              Settings
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant={"secondary"}>
                  <PanelsTopLeft />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Change View</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={position}
                  onValueChange={setPosition}
                  className="flex flex-row"
                >
                  <DropdownMenuRadioItem value="left">
                    <MdViewSidebar className="rotate-[180deg] size-8 items-center justify-center flex" />
                  </DropdownMenuRadioItem>

                  <DropdownMenuRadioItem value="top">
                    <MdViewSidebar className="rotate-[270deg] size-8 items-center justify-center flex" />
                  </DropdownMenuRadioItem>

                  <DropdownMenuRadioItem value="right">
                    <MdViewSidebar className="rotate-[0deg] size-8 items-center justify-center flex" />
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/signup">
              <Button variant={"success"}>Sign Up</Button>
            </Link>
            <Link to="/login">
              <Button variant={"secondary"}>Log In</Button>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}
