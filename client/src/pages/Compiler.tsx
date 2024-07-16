import { useNavigate, useParams } from "react-router-dom";
import CodeEditor from "../components/CodeEditor";
import HelperHeader from "../components/HelperHeader";
import RenderCode from "../components/RenderCode";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../components/ui/resizable";
import { useEffect } from "react";
import { handleError } from "../utils/handleError";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateFullCode } from "../redux/slices/compilerSlice";
import { toast } from "sonner";
import CompilerHeader from "../components/compilerHeader";

export default function Compiler() {
  const { urlId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loadCode = async () => {
    try {
      const response = await axios.post("http://localhost:4000/compiler/load", {
        urlId: urlId,
      });
      console.log(response.data);
      dispatch(updateFullCode(response.data.fullCode));
      toast.success("You code has been loaded.");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error?.response?.status === 500) {
          toast.error("Invalid Id! Loading default code!");
          navigate("/compiler");
        }
      }
      handleError(error);
    }
  };
  useEffect(() => {
    if (urlId) {
      loadCode();
      console.log("useEffect");
    }
  }, [urlId]);

  return (
    <>
      <div>
        <CompilerHeader />
        <ResizablePanelGroup
          direction="horizontal"
          className=" rounded-lg border"
        >
          <ResizablePanel
            className="hidden h-[calc(100dvh-65px)] w-full"
            defaultSize={50}
          >
            {/* Left side of a compiler */}
            <HelperHeader />
            <CodeEditor />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel
            className="hidden h-[calc(100dvh-65px)] w-full"
            defaultSize={50}
          >
            {/* Right side of a compiler */}
            <RenderCode />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>

      <div className="h-[calc(100dvh-65px)]">
        <ResizablePanelGroup direction="vertical" className="rounded-lg border">
          <ResizablePanel
            defaultSize={50}
            className="h-[calc(100dvh-65px)] w-full"
          >
            <HelperHeader />
            <CodeEditor />
          </ResizablePanel>

          <ResizableHandle withHandle />
          <ResizablePanel
            defaultSize={50}
            className="flex h-full items-center justify-center w-full"
          >
            <RenderCode />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </>
  );
}
