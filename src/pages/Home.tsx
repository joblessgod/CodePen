import { useEffect, useState } from "react";
import Header from "../components/Header";
import Skeleton from "react-loading-skeleton";
import Footer from "../components/Footer";

export default function Home() {
  const [isApiLoading, setIsApiLoading] = useState(false);

  useEffect(() => {
    setIsApiLoading(false);
    console.log("before time");
    console.log(isApiLoading);

    setTimeout(function () {
      setIsApiLoading((prevState) => {
        console.log("after time");
        console.log(prevState);
        return true;
      });
    }, 1000);
  }, []);

  return (
    <div>
      <Header />
      <div className=" bg-slate-950 w-full h-[calc(100dvh-60px)] text-white flex justify-center items-center flex-col gap-4">
        <div className="gap-1 px-10 text-center ">
          {/* <h1 className="text-center text-4xl font-bold">Code Pen</h1> */}
          {isApiLoading ? (
            <>
              <img
                src="/codepen-home_logo.png"
                alt="Code Pen"
                className="w-40 text-center select-none"
              />
            </>
          ) : (
            <>
              <Skeleton
                duration={2}
                baseColor="#9b9b9b"
                className="h-8 !w-40"
              />
            </>
          )}
          {isApiLoading ? (
            <>
              <small className="text-slate-700">
                by{" "}
                <a
                  href="https://github.com/joblessgod/"
                  target="_blank"
                  className="text-slate-200"
                >
                  @JobLessGod
                </a>
              </small>
            </>
          ) : (
            <>
              <Skeleton
                duration={2}
                baseColor="#9b9b9b"
                className="h-3 !w-28"
              />
            </>
          )}
        </div>
        {isApiLoading ? (
          <>
            <p className="text-gray-500 text-center">
              Online HTML, CSS & JavaScript Code Editor <br /> GO try and share
              it with your friends!
            </p>
          </>
        ) : (
          <>
            <Skeleton duration={2} baseColor="#9b9b9b" className="h-3 !w-80" />
            <Skeleton duration={2} baseColor="#9b9b9b" className="h-3 !w-80" />
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}
