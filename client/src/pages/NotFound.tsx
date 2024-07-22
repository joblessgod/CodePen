import Header from "../components/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="w-full h-[calc(100dvh-60px)] bg-gray-900 text-white p-3 flex justify-center items-center text-2xl font-bold">
        404 - Page nahi mila bhai 😜
      </div>
    </>
  );
}
