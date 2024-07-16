import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <div className=" w-full h-[calc(100dvh-60px)] text-white flex justify-center items-center flex-col gap-4">
        <h1 className="text-6xl font-bold flex">WD Compiler</h1>
        <p className="text-gray-500 text-center">
          Compiler HTML, CSS JavaScript Code on the go and share it with your
          friends
        </p>
      </div>
    </>
  );
}
