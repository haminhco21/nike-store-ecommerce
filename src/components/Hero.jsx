/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Clips from "./utils/Clips";
import SocialLinks from "./utils/SocialLinks";

const Hero = ({
  heroapi: { title, subtitle, btntext, img, sociallinks, videos },
}) => {
  console.log(videos);
  return (
    <div className="relative w-auto h-auto flex flex-col">
      <div className="bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-auto absolute left-0 top-0 right-0 opacity-100 z-10"></div>
      <div className="relative opacity-100 z-20 grid nike-container justify-items-center  filter drop-shadow-sm-center">
        <div className="grid items-center justify-items-center mt-20 lg:mt-40">
          <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-sky-500">
            {title}
          </h1>
          <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-100 ">
            {subtitle}
          </h1>
          <button
            type="button"
            className="button-theme bg-slate-200 my-10 shadow-xl rounded-xl py-2 hover:bg-slate-100 hover:scale-[1.1]"
          >
            {btntext}
          </button>
          <div className="grid items-center absolute left-[11%] top-[40vh] lg:top-[48vh] w-auto h-auto lg:left-0 gap-5 lg:gap-3 md:gap-2 sm:gap-1">
            {videos?.map((val, i) => (
              <Clips clip={val.clip} imgsrc={val.imgsrc} key={i} />
            ))}
          </div>
          <div className="absolute grid items-center right-0 top-[40vh] lg:top-[48vh] w-auto h-auto lg:right-0 gap-4 lg:gap-3 md:gap-2 sm:gap-1">
            {sociallinks?.map((val, i) => (
              <SocialLinks key={i} icon={val.icon} />
            ))}
          </div>
        </div>
        <div className="flex">
          <img
            src={img}
            alt="hero-img/img"
            className="w-auto h-[45vh] lg:h-[35vh] md:h-[31vh] sm:h-[21vh] xsm:h-[19vh] transitions-theme -rotate-[25deg] hover:-rotate-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
