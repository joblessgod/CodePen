import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useState } from "react";
import { Tally4, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/slices/store";
import { handleError } from "../utils/handleError";
import { useLogoutMutation } from "../redux/slices/api";
import { updateCurrentUser, updateLoggedIn } from "../redux/slices/appSlice";
import { Avatar } from "./ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import "./Css/StartCoding.css";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";

export default function Header() {
  // logout section
  const isLoggedIn = useSelector(
    (state: RootState) => state.appSlice.isLoggedIn
  );
  const [logout, { isLoading }] = useLogoutMutation();
  const dispatch = useDispatch();

  const currentUser = useSelector(
    (state: RootState) => state.appSlice.currentUser
  );

  // manu section
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleSideMenu() {
    console.log("Side Menu open");
    setIsMenuOpen(!isMenuOpen);
  }

  async function handleLogout() {
    try {
      await logout().unwrap();
      dispatch(updateCurrentUser({}));
      dispatch(updateLoggedIn(false));
    } catch (error) {
      handleError(error);
    }
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
                <a className="codepen-button text-right ">
                  <span className="p-[4px] font-medium ">Start Coding</span>
                </a>
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
                  {isLoggedIn ? (
                    <div className="flex gap-2">
                      <Button
                        loading={isLoading}
                        onClick={handleLogout}
                        variant={"destructive"}
                      >
                        Logout
                      </Button>
                      <Link to={"/profile/"}>
                        <Avatar>
                          <AvatarImage src={currentUser.picture} />
                          <AvatarFallback className="capitalize">
                            {currentUser.username?.slice(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                      </Link>
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
                </div>
              </div>
            </ul>
            <ul className="hidden md:flex gap-2">
              {isLoggedIn ? (
                <div className="flex gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Avatar>
                        <AvatarImage
                          className="hover:cursor-pointer"
                          src={currentUser.picture}
                        />
                        <AvatarFallback className="capitalize hover:cursor-pointer">
                          {currentUser.username?.slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuLabel>
                        {currentUser.username}
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <Link to={"/profile"}>
                          <DropdownMenuItem className="hover:cursor-pointer">
                            Profile
                            {/* <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut> */}
                          </DropdownMenuItem>
                        </Link>
                        <Link to={"/profile/settings"}>
                          <DropdownMenuItem className="hover:cursor-pointer">
                            Settings
                            {/* <DropdownMenuShortcut>⌘S</DropdownMenuShortcut> */}
                          </DropdownMenuItem>
                        </Link>
                        <DropdownMenuItem
                          disabled
                          className="hover:cursor-pointer"
                        >
                          Keyboard shortcuts
                          <DropdownMenuShortcut>soon</DropdownMenuShortcut>
                          {/* <DropdownMenuShortcut>⌘K</DropdownMenuShortcut> */}
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="hover:cursor-pointer">
                        GitHub
                      </DropdownMenuItem>
                      <DropdownMenuItem className="hover:cursor-pointer">
                        Support
                      </DropdownMenuItem>
                      <DropdownMenuItem disabled>
                        API
                        <DropdownMenuShortcut>soon</DropdownMenuShortcut>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        onClick={handleLogout}
                        className="hover:cursor-pointer"
                      >
                        Logout
                        {/* <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut> */}
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
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
      </nav>
    </>
  );
}
