import "./Loading.css";
export default function Loading() {
  return (
    <div className="w-full h-[calc(100dvh-60px)] flex justify-center items-center">
      <div className="loader"></div>
    </div>
  );
}
