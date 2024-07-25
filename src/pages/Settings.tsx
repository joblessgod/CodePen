import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Settings() {
  return (
    <>
      <Header />
      <div className="h-[calc(100dvh-60px)]">
        <div className="bg-slate-950 h-full">Settings</div>
        <Footer />
      </div>
    </>
  );
}
