import { useParams } from "react-router-dom";
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
import { useDispatch } from "react-redux";
import { updateFullCode } from "../redux/slices/compilerSlice";
import { toast } from "sonner";
import CompilerHeader from "../components/compilerHeader";
import { useLoadCodeMutation } from "../redux/slices/api";
import Loading from "../components/LoadingSceen/Loading";

export default function Compiler() {
  const { urlId } = useParams();
  const [loadExistingCode, { isLoading }] = useLoadCodeMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loadCode = async () => {
    try {
      // const response = await axios.post("http://localhost:4000/compiler/load", {
      //   urlId: urlId,
      // });

      if (urlId) {
        const response = await loadExistingCode({ urlId }).unwrap();
        dispatch(updateFullCode(response.fullCode));
        toast.success("You code has been saved & loaded.");
      }
    } catch (error) {
      // if (axios.isAxiosError(error)) {
      //   if (error?.response?.status === 500) {
      //     toast.error("Invalid Id! Loading default code!");
      //     navigate("/compiler");
      //   }
      // }
      handleError(error);
    }
  };
  useEffect(() => {
    if (urlId) {
      loadCode();
    }
  }, [urlId]);

  if (isLoading) {
    <div className="w-full h-[calc(100dvh-60px)]">
      <Loading />;
    </div>;
  }

  return (
    <>
      <CompilerHeader />
      <div className="hidden md:contents">
        <ResizablePanelGroup
          direction="horizontal"
          className=" rounded-lg border"
        >
          <ResizablePanel
            className=" h-[calc(100dvh-65px)] w-full"
            defaultSize={50}
          >
            {/* Left side of a compiler */}
            <HelperHeader />
            <CodeEditor />
          </ResizablePanel>
          <ResizableHandle withHandle className="" />
          <ResizablePanel
            className=" h-[calc(100dvh-65px)] w-full"
            defaultSize={50}
          >
            {/* Right side of a compiler */}
            <RenderCode />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      <div className="h-[calc(100dvh-65px)] md:hidden">
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
