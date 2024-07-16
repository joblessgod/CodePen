import { Link, useNavigate } from "react-router-dom";
import {
  LoaderCircle,
  PanelsTopLeft,
  Save,
  Settings,
  Tally4,
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
  return (
    <>
      <nav className="w-full h-[60px] bg-gray-900 text-white p-3 md:flex md:justify-between items-center">
        <div className="flex justify-between items-center ">
          <Link to="/" className="font-bold select-none">
            <h1>Web Dev Compiler</h1>
            <small className="font-normal">Job Less God</small>
          </Link>
          <div className="flex items-center justify-center gap-2">
            <Button
              onClick={() => {
                handleSaveCode();
                toast.success("Your code has been saved.");
              }}
              variant={"success"}
              disabled={saveLoading}
              className="gap-1 flex justify-between items-center"
            >
              {saveLoading ? (
                <>
                  <LoaderCircle size={16} className="animate-spin" /> Saving
                </>
              ) : (
                <>
                  <Save size={16} /> Save
                </>
              )}
            </Button>
            <Tally4 className="rotate-[90deg] md:hidden" />
          </div>
        </div>

        <ul className="hidden md:flex md:gap-2">
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
      </nav>
    </>
  );
}
