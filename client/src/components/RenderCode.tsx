import { useSelector } from "react-redux";
import { RootState } from "../redux/slices/store";

export default function RenderCode() {
  const fullCode = useSelector(
    (state: RootState) => state.compilerSlice.fullCode
  );

  const combinedCode = `  
  <html>
        <style>
           ${fullCode.css}
        </style>
    <body>
        ${fullCode.html}
     </body>
        <script>
           ${fullCode.javascript}
        </script>
  </html>   
  `;
  const iframeCode = `data:text/html;charset=utf-8,${encodeURIComponent(
    combinedCode
  )}`;
  return (
    <div className="bg-white h-[calc(100dvh-60px)]">
      <iframe src={iframeCode} className="w-full h-full"/>
    </div>
  );
}
