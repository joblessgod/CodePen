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
      <CompilerHeader />
      <ResizablePanelGroup direction="horizontal" className="rounded-lg border">
        <ResizablePanel
          className="h-[calc(100dvh-65px)] min-w-[350px]"
          defaultSize={50}
        >
          <HelperHeader />
          <CodeEditor />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel className="h-[calc(100dvh-65px)" defaultSize={50}>
          <RenderCode />
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
}
