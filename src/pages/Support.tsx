import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { toast } from "sonner";

export default function Support() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="h-[calc(100dvh-60px)] bg-slate-950 flex items-center justify-center">
        <div className=" h-[calc(100dvh-60px)] font-[sans-serif]">
          <div className="grid lg:grid-cols-3 items-center max-lg:justify-center gap-6 h-full sm:p-12 p-8 max-sm:p-4">
            <div className="max-w-lg max-lg:mx-auto max-lg:text-center max-lg:mb-6">
              <h2 className="text-4xl font-extrabold text-white">
                Get In Touch
              </h2>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Have a specific inquiry or looking to explore new opportunities?
                Our experienced team is ready to engage with you.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  toast.success("Messsage sent.");
                  navigate("/");
                }}
                className="mx-auto mt-8  rounded-lg p-6 shadow-md space-y-4"
              >
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-md h-12 px-6 bg-gray-700 text-sm outline-none"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-md h-12 px-6 bg-gray-700 text-sm outline-none"
                  required
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-md h-12 px-6 bg-gray-700 text-sm outline-none"
                  required
                />
                <textarea
                  placeholder="Message"
                  className="w-full rounded-md px-6 bg-gray-700 text-sm pt-3 outline-none"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="text-gray-800 bg-primary-600 hover:bg-primary-700 font-semibold rounded-md text-sm px-6 py-3 block w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
                
            <div className="z-10 relative lg:col-span-2">
              <img
                src="https://readymadeui.com/images/analtsis.webp"
                className="w-3/4 object-contain block mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
