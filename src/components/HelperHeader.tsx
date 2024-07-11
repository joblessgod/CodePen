import { Button } from "./ui/button";
import { Save, Share2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useDispatch, useSelector } from "react-redux";
import {
  CompilerSliceStateType,
  updateCurrentLanguage,
} from "../redux/slices/compilerSlice";
import { RootState } from "../redux/slices/store";

export default function HelperHeader() {
  const dispatch = useDispatch();
  const currentLanguage = useSelector(
    (state: RootState) => state.compilerSlice.currentLanguage
  );

  return (
    <div className="__helper_header h-[50px] bg-black text-white p-2 items-center justify-between flex ">
      <div className="__btn_container gap-1 flex">
        <Button
          variant={"success"}
          className="gap-1 flex justify-between items-center"
        >
          <Save size={16} />
          Save
        </Button>
        <Button
          variant={"secondary"}
          className="gap-1 flex justify-between items-center"
        >
          <Share2 size={16} />
          Share
        </Button>
      </div>

      <div className="__tab_switcher flex gap-1 items-center justify-between">
        <small> Current Language:</small>
        <Select
          defaultValue={currentLanguage}
          onValueChange={(value) =>
            dispatch(
              updateCurrentLanguage(
                value as CompilerSliceStateType["currentLanguage"]
              )
            )
          }
        >
          <SelectTrigger className="w-[180px] bg-gray-800">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="html">HTML</SelectItem>
            <SelectItem value="css">CSS</SelectItem>
            <SelectItem value="javascript">JavaScript</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
