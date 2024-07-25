import { Copyright } from "lucide-react";

export default function Footer() {
  return (
    <>
      <div className="bg-black text-[#9b9dad]">
        <div className="!px-12 !py-10  justify-between font-light">
          <ul className="grid grid-cols-2 gap-4">
            <div className="grid md:gap-3 text-red-600">
              <li className="font-sans font-semibold">CodePen</li>
              <a href="#" className="hover:text-white">
                About
              </a>
              <a href="#" className="hover:text-white">
                Blog
              </a>
              <a href="#" className="hover:text-white">
                Podcast
              </a>
              <a href="#" className="hover:text-white">
                Documentation
              </a>
              <a href="#" className="hover:text-white">
                Support
              </a>
              <a href="#" className="hover:text-white">
                Advertise
              </a>
            </div>

            <div className="grid md:gap-3">
              <li className="font-sans font-semibold">For</li>
              <a href="#" className="hover:text-white">
                Teams
              </a>
              <a href="#" className="hover:text-white">
                Education
              </a>
              <a href="#" className="hover:text-white">
                Privacy
              </a>
              <a href="#" className="hover:text-white">
                Embeds
              </a>
              <a href="#" className="hover:text-white">
                Assets Hosting
              </a>
            </div>

            <div className="grid md:gap-3">
              <li className="font-sans font-semibold">Social</li>
              <a href="#" className="hover:text-white">
                YouTube
              </a>
              <a href="#" className="hover:text-white">
                𝕏
              </a>
              <a href="#" className="hover:text-white">
                Instagram
              </a>
              <a href="#" className="hover:text-white">
                Mastodon
              </a>
            </div>

            <div className="grid md:gap-3">
              <li className="font-sans font-semibold">Community</li>
              <a href="#" className="hover:text-white">
                Spark
              </a>
              <a href="#" className="hover:text-white">
                Challenge
              </a>
              <a href="#" className="hover:text-white">
                Topics
              </a>
              <a href="#" className="hover:text-white">
                Code of Conduct
              </a>
            </div>
          </ul>

          <ul className="mt-7  md:text-right">
            <li>
              <a href="/">
                <img
                  src="/codepen-home_logo.png"
                  alt="Code Pen"
                  className="hidden w-40 md:inline-flex text-right"
                />
                <img
                  src="/codepen_logo.png"
                  alt="Code Pen"
                  className="w-10 mb-2 h-10 md:hidden inline-flex text-right"
                />
              </a>
            </li>
            <li className="flex gap-1 text-[12px]  md:justify-end items-center">
              <Copyright size={"20"} /> 2024
              <a
                href="http://mindrisers.com.np/"
                target="_blank"
                className="hover:text-lime-500"
              >
                MindRisers Institute
              </a>
            </li>
            <li className="italic text-[12px]">Demo or it didn' happen.</li>
            <div className="flex gap-1 text-[12px]">
              <a href="#" className="hover:text-white">
                Terms of Service
              </a>
              <span> · </span>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
