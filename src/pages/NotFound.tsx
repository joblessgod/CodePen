import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      {/* <div className="w-full h-[calc(100dvh-60px)] bg-black text-white p-3 flex justify-center items-center text-2xl font-bold">
        <p className="text-gray-500 text-center">
          404 - Page nahi mila bhai 😜
        </p>
      </div> */}

      {/* <!-- component --> */}
      <main className="w-full h-[calc(100dvh-60px)]  text-white p-3 flex justify-center items-center text-2xl font-bold flex-col bg-slate-950">
        <h1 className=" select-none rotate-[-15deg] text-9xl font-extrabold text-white tracking-widest">
          404
        </h1>
        <div className="select-none  bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
          Page Not Found
        </div>
        <button className="mt-5">
          <a className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>

            <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
              <Link to="/">Go Home</Link>
            </span>
          </a>
        </button>
      </main>
    </>
  );
}
