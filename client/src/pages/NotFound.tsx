import Header from "../components/Header";
import "./NotFoundStyle.css";

export default function NotFound() {
  return (
    <>
      <Header />
      {/* <div classNameName="w-full h-[calc(100dvh-60px)] bg-gray-900 text-white p-3 flex justify-center items-center text-2xl font-bold">
        404 - Page nahi mila bhai 😜
      </div> */}
      <div className="room !h-[calc(100dvh-60px)]">
        <div className="cuboid">
          <div className="side"></div>
          <div className="side"></div>
          <div className="side"></div>
        </div>
        <div className="oops">
          <h2>OOPS!</h2>
          <p>We can't find the page that you're looking for :(</p>
        </div>
        <div className="center-line">
          <div className="hole">
            <div className="ladder-shadow"></div>
            <div className="ladder"></div>
          </div>
          <div className="four">4</div>
          <div className="four">4</div>
          <div className="btn">
            <a href="/">BACK TO HOME</a>
          </div>
        </div>
      </div>
    </>
  );
}
