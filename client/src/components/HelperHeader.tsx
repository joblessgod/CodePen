import { Button } from "./ui/button";
import {
  Asterisk,
  CodeXml,
  Copy,
  Info,
  Parentheses,
  Share2,
  Slash,
} from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import {
  CompilerSliceStateType,
  updateCurrentLanguage,
} from "../redux/slices/compilerSlice";
import { RootState } from "../redux/slices/store";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import { toast } from "sonner";

export default function HelperHeader() {
  const [shareBtn, setShareBtn] = useState<boolean>(false);

  const { urlId } = useParams();
  useEffect(() => {
    if (urlId) {
      setShareBtn(true);
    } else {
      setShareBtn(false);
    }
  }, [urlId]);

  const dispatch = useDispatch();
  const currentLanguage = useSelector(
    (state: RootState) => state.compilerSlice.currentLanguage
  );

  return (
    <div className="__helper_header h-[50px] bg-black text-white p-2 items-center justify-between flex">
      <div className="__tab_switcher flex gap-1 items-center justify-between">
        <Tabs
          defaultValue={currentLanguage}
          onValueChange={(value) =>
            dispatch(
              updateCurrentLanguage(
                value as CompilerSliceStateType["currentLanguage"]
              )
            )
          }
        >
          <TabsList>
            <TabsTrigger value="html" className=" gap-1 flex text-white">
              <Slash size={14} className="bg-red-600 rounded items-center" />
              <span className="font-bold text-white font-sans">HTML</span>
            </TabsTrigger>
            <TabsTrigger value="css" className=" gap-1 flex">
              <Asterisk
                size={16}
                className="bg-teal-400 rounded items-center text-white"
              />
              <span className="font-bold text-white font-sans">CSS</span>
            </TabsTrigger>
            <TabsTrigger value="javascript" className=" gap-1 flex">
              <Parentheses
                size={16}
                className="bg-yellow-500 rounded items-center text-black"
              />
              <span className="font-bold text-white font-sans">JS</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="__btn_container gap-2 flex items-center justify-center">
        {shareBtn && (
          <>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant={"secondary"}
                  className="gap-1 group flex justify-between items-center"
                >
                  <Share2 className="group-hover:fill-white" size={16} />
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
        <Info />
      </div>
    </div>
  );
}
