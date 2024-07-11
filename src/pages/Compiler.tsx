import CodeEditor from "../components/CodeEditor";
import HelperHeader from "../components/HelperHeader";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../components/ui/resizable";

export default function Compiler() {
  return (
    <ResizablePanelGroup direction="horizontal" className="rounded-lg border">
      <ResizablePanel
        className="h-[calc(100dvh-65px)] min-w-[350px]"
        defaultSize={50}
      >
        <HelperHeader />
        <CodeEditor />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel
        className="h-[calc(100dvh-65px)] min-w-[350px]"
        defaultSize={50}
      >
        Right Side
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
