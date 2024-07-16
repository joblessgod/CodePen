import { Button } from "./ui/button";
import { CodeXml, Copy, LoaderCircle, Save, Share2 } from "lucide-react";
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
import { handleError } from "../utils/handleError";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { toast } from "sonner";

export default function HelperHeader() {
  const [saveLoading, setSaveLoading] = useState<boolean>(false);
  const [shareBtn, setShareBtn] = useState<boolean>(false);

  const navigate = useNavigate();

  const fullCode = useSelector(
    (state: RootState) => state.compilerSlice.fullCode
  );

  const { urlId } = useParams();
  useEffect(() => {
    if (urlId) {
      setShareBtn(true);
    } else {
      setShareBtn(false);
    }
  }, [urlId]);

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

  const dispatch = useDispatch();
  const currentLanguage = useSelector(
    (state: RootState) => state.compilerSlice.currentLanguage
  );

  return (
    <div className="__helper_header h-[50px] bg-black text-white p-2 items-center justify-between flex ">
      <div className="__btn_container gap-1 flex">
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
        {shareBtn && (
          <>
            <Dialog>
              <DialogTrigger>
                <Button
                  variant={"secondary"}
                  className="gap-1 flex justify-between items-center"
                >
                  <Share2 size={16} />
                  Share
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className=" flex gap-1 justify-center items-center">
                    <CodeXml className="justify-center" />
                    Share your code
                  </DialogTitle>
                  <DialogDescription>
                    <div className="flex gap-2 items-center w-full rounded-sm p-2 bg-slate-800 text-white select-none">
                      <input
                        type="text"
                        onClick={() => {
                          window.navigator.clipboard.writeText(
                            window.location.href
                          );
                        }}
                        disabled
                        className="w-full bg-slate-800 text-white select-none"
                        value={window.location.href}
                      />
                      <Copy
                        className="cursor-pointer"
                        onClick={() => {
                          window.navigator.clipboard.writeText(
                            window.location.href
                          );
                          toast.success("Copied to clipboard");
                        }}
                      />
                    </div>
                    <p className="text-center">
                      Share this code with others to collaborate
                    </p>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </>
        )}
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
