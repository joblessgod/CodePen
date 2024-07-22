import { Link, useNavigate } from "react-router-dom";
import {
  Cog,
  LoaderCircle,
  PanelsTopLeft,
  Pencil,
  Save,
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
import { useState } from "react";

import { MdViewSidebar } from "react-icons/md";
import { handleError } from "../utils/handleError";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/slices/store";
import { useLogoutMutation, useSaveCodeMutation } from "../redux/slices/api";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { AvatarImage } from "./ui/avatar";
import { updateCurrentUser, updateLoggedIn } from "../redux/slices/appSlice";
import { Input } from "./ui/input";

export default function CompilerHeader() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(
    (state: RootState) => state.appSlice.isLoggedIn
  );
  const fullCode = useSelector(
    (state: RootState) => state.compilerSlice.fullCode
  );

  const [saveCode, { isLoading }] = useSaveCodeMutation();

  const [position, setPosition] = useState("bottom");
  const handleSaveCode = async () => {
    try {
      // const response = await axios.post("http://localhost:4000/compiler/save", {
      //   fullCode: fullCode,
      // });
      const response = await saveCode(fullCode).unwrap();
      navigate(`/pen/${response.url}`, { replace: true });
    } catch (error) {
      handleError(error);
    }
  };

  const [logout] = useLogoutMutation();

  async function handleLogout() {
    try {
      await logout().unwrap();
      dispatch(updateCurrentUser({}));
      dispatch(updateLoggedIn(false));
    } catch (error) {
      handleError(error);
    }
  }
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [titleName, setTitleName] = useState("Untitled");
  // const [editTitle, setEditTitle] = useState(true);

  function toggleSideMenu() {
    console.log("Side Menu open");
    setIsMenuOpen(!isMenuOpen);
  }

  const currentUser = useSelector(
    (state: RootState) => state.appSlice.currentUser
  );
  return (
    <>
      <nav className="w-full h-[60px] bg-gray-900 text-white p-3">
        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            <Link to={"/"}>
              <img src="/codepen_logo.png" className="h-10 w-10" />
            </Link>

            <div className="font-bold">
              <div className="flex gap-2 items-center">
                <>
                  {/* {editTitle} <Pencil size={16} onClick={()=> {
                    setEditTitle(false);
                  }}/> */}
                  {/* <div>Untitled</div> */}
                  <form
                    className="flex items-center"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setEditTitle(true);
                      console.log(titleName);
                    }}
                  >
                    <Input
                      defaultValue={"Untitled"}
                      className="border-none -translate-x-3 pr-0 h-full w-[50%] text-gray-500 focus:text-white focus-visible:underline focus-visible:ring-0 focus-visible:ring-none"
                    ></Input>
                    {/* {setEditTitle ? (
                      <Pencil
                        className="hover:cursor-pointer"
                        size={16}
                        onClick={() => {
                          setEditTitle(false);
                          console.log(titleName);
                        }}
                        onChange={(e) => {
                          setTitleName(e.target.value);
                        }}
                      />
                    ) : (
                      <> </>
                    )} */}
                  </form>
                </>
              </div>
              <small className="font-normal gap-1 max-md:text-[10px] items-center flex text-slate-400">
                {isLoggedIn ? (
                  <>{currentUser.username}</>
                ) : (
                  <>Captain Anonymous</>
                )}
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
              disabled={isLoading}
              className=" gap-1 flex justify-between items-center"
            >
              {isLoading ? (
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
                  <Cog size={18} />
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

                {isLoggedIn ? (
                  <div className="flex gap-2">
                    <Button variant={"destructive"}>Logout</Button>
                    <Avatar>
                      <AvatarImage src={currentUser.picture} />
                    </Avatar>
                  </div>
                ) : (
                  <>
                    <Link to="/signup">
                      <Button variant={"success"}>Sign Up</Button>
                    </Link>

                    <Link to="/login">
                      <Button variant={"secondary"}>Log In</Button>
                    </Link>
                  </>
                )}
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
              disabled={isLoading}
              className=" gap-1 flex justify-between items-center"
            >
              {isLoading ? (
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
              <Cog size={18} />
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

            {isLoggedIn ? (
              <div className="flex gap-2">
                <Button
                  disabled={isLoading}
                  onClick={handleLogout}
                  variant={"destructive"}
                >
                  Logout
                </Button>
                <Avatar className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                  <AvatarImage src={currentUser.picture} />
                  <AvatarFallback className="capitalize">
                    {currentUser.username?.slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
              </div>
            ) : (
              <>
                <Link to="/signup">
                  <Button variant={"success"}>Sign Up</Button>
                </Link>

                <Link to="/login">
                  <Button variant={"secondary"}>Log In</Button>
                </Link>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}
