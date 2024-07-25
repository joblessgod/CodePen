import { Copyright } from "lucide-react";

export default function Footer() {
  return (
    <>
      <div className="bg-black text-[#9b9dad]">
        <div className="!px-12 !py-10 flex justify-between font-light">
          <ul>
            <div className="flex gap-3">
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
                Avertise
              </a>
            </div>
            <div className="flex gap-3">
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
            <div className="flex gap-3">
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
            <div className="flex  gap-3">
              <li className="font-sans font-semibold ">Community</li>
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
                Code of Cunduct
              </a>
            </div>
          </ul>
          <ul className=" text-right">
            <li>
              <a href="/">
                <img
                  src="/codepen-home_logo.png"
                  alt="Code Pen"
                  className="w-40 inline-flex text-right"
                />
              </a>
            </li>
            <li className="flex gap-1 text-[12px] justify-end items-center">
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
            <div className="flex gap-1 text-[12px]gap-1">
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
