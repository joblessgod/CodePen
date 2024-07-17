import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <div className=" w-full h-[calc(100dvh-60px)] text-white flex justify-center items-center flex-col gap-4">
        <div className="gap-1 w-full text-center ">
          <h1 className="text-center text-4xl font-bold">Code Pen</h1>
          <small className="text-slate-700">by @JobLessGod</small>
        </div>

        <p className="text-gray-500 text-center">
          Online HTML, CSS & JavaScript Code Editor <br /> GO try and share it
          with your friends!
        </p>
      </div>
    </>
  );
}
