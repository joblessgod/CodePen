import { Button } from "./ui/button";
import {
  Asterisk,
  CodeXml,
  Copy,
  Download,
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
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import { toast } from "sonner";
import { DialogClose } from "@radix-ui/react-dialog";
import Skeleton from "react-loading-skeleton";

export default function HelperHeader() {
  const [shareBtn, setShareBtn] = useState<boolean>(false);
  const fullCode = useSelector(
    (state: RootState) => state.compilerSlice.fullCode
  );

  const handleDownloadCode = () => {
    if (
      fullCode.html == "" &&
      fullCode.css == "" &&
      fullCode.javascript == ""
    ) {
      toast.error("Code is Empty! Please write something!");
    } else {
      const htmlCode = new Blob([fullCode.html], { type: "text/html" });
      const cssCode = new Blob([fullCode.css], { type: "text/css" });
      const JavascriptCode = new Blob([fullCode.javascript], {
        type: "text/javascript",
      });
      // const allCodeZipped = new Blob([fullCode], {
      //   type: "text/zip",
      // });

      const htmlLink = document.createElement("a");
      const cssLink = document.createElement("a");
      const javascriptLink = document.createElement("a");
      // const allCodeZippedLink = document.createElement("a");

      htmlLink.href = URL.createObjectURL(htmlCode);
      htmlLink.download = "index.html";
      document.body.appendChild(htmlLink);

      cssLink.href = URL.createObjectURL(cssCode);
      cssLink.download = "style.css";
      document.body.appendChild(cssLink);

      javascriptLink.href = URL.createObjectURL(JavascriptCode);
      javascriptLink.download = "script.js";
      document.body.appendChild(javascriptLink);

      // allCodeZippedLink.href = URL.createObjectURL(allCodeZipped);
      // allCodeZippedLink.download = "allZipCode.zip";
      // document.body.appendChild(allCodeZippedLink);

      if (fullCode.html !== "") {
        htmlLink.click();
      }
      if (fullCode.css !== "") {
        cssLink.click();
      }
      if (fullCode.javascript !== "") {
        javascriptLink.click();
      }
      // allCodeZippedLink.click();

      document.body.removeChild(htmlLink);
      document.body.removeChild(cssLink);
      document.body.removeChild(javascriptLink);
      // document.body.removeChild(allCodeZippedLink);

      toast.success("Code Downloaded Succesfully!");
    }
  };

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

  // YouTube Video | Skeleton
  const [isApiLoading, setIsApiLoading] = useState(true);

  function handleYouTubeSkeleton() {
    setIsApiLoading(false);
    console.log("before time");
    console.log(isApiLoading); // This will log true initially

    // delay 3s time
    setTimeout(function () {
      setIsApiLoading((prevState) => {
        console.log("after time");
        console.log(prevState); // This will log false because it was set to false earlier
        return true;
      });
    }, 800);
  }

  // delayedHello();
  return (
    <div className="__helper_header h-[50px] bg-black text-white p-2 items-center justify-between flex">
      <div className="__tab_switcher flex gap-1 items-center justify-between">
        {/* Html, Css & Java Script Tabs */}
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
      {/* Share Button */}
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
        {/* Download the Code */}
        <Button
          onClick={handleDownloadCode}
          variant={"secondary"}
          size={"icon"}
        >
          <Download />
        </Button>
        {/* Info Button for newcomer */}
        <Button
          onClick={handleYouTubeSkeleton}
          variant={"secondary"}
          size={"icon"}
        >
          <Info />
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              onClick={handleYouTubeSkeleton}
              variant={"secondary"}
              size={"icon"}
            >
              <Info />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="items-center text-center">
                Welcome to Live Code Editor!
              </DialogTitle>
              <DialogDescription>
                {isApiLoading ? (
                  <span>
                    Welcome to Live Code Editor! Create, edit, and collaborate
                    on web projects in real-time. Explore our features such as
                    live preview and multiple language support to enhance your
                    coding experience.
                  </span>
                ) : (
                  <>
                    <Skeleton
                      duration={2}
                      baseColor="#9b9b9b"
                      className="h-2"
                    />
                    <Skeleton
                      duration={2}
                      baseColor="#9b9b9b"
                      className="h-2"
                    />
                    <Skeleton
                      duration={2}
                      baseColor="#9b9b9b"
                      className="h-2"
                    />
                  </>
                )}
              </DialogDescription>
            </DialogHeader>
            {isApiLoading ? (
              <div className="flex items-center space-x-2">
                <iframe
                  className="w-full h-full rounded-sm"
                  src="https://www.youtube.com/embed/HFFk1yxDvPk?si=p687RT6vApgrgtmQ"
                  title="LIVE Code Editor | YouTube"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <>
                <Skeleton
                  duration={2}
                  baseColor="#9b9b9b"
                  className="w-[462.8px] h-[150.15px]"
                />
              </>
            )}
            {/* <div className="flex items-center space-x-2">
              <iframe
                className="w-full h-full rounded-sm"
                src="https://www.youtube.com/embed/HFFk1yxDvPk?si=p687RT6vApgrgtmQ"
                title="YouTube video player"
                allowFullScreen
              ></iframe>
            </div> */}
            <DialogFooter className="sm:justify-center">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
