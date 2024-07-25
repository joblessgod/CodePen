import "./Css/ServerLoading.css";
export default function ServerLoading() {
  return (
    <>
      <div className="w-full h-[100dvh] bg-slate-950 z-0 flex justify-center items-center">
        <div className="circ z-2">
          <div className="load text-center z-2">Loading . . . </div>
          <div>
            <div className="hands z-2"></div>
            <div className="body z-2"></div>
            <div className="head z-2">
              <div className="eye z-2"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
