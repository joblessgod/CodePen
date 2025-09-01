import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <div className=" bg-slate-950 w-full h-[calc(100dvh-60px)] text-white flex justify-center items-center flex-col gap-4">
        <div className="gap-1 px-10 text-center ">
          <>
            <img
              src="/codepen-home_logo.png"
              alt="Code Pen"
              className="w-40 text-center select-none"
            />
          </>

          <>
            <small className="text-slate-700">
              by{" "}
              <a
                href="https://github.com/joblessgod/"
                target="_blank"
                className="text-blue-600">
                @JobLessGod
              </a>
            </small>
          </>
        </div>

        <>
          <p className="text-gray-500 text-center">
            Online HTML, CSS & JavaScript Code Editor <br /> GO try and share it
            with your friends!
          </p>
        </>
      </div>
      <Footer />
    </div>
  );
}
