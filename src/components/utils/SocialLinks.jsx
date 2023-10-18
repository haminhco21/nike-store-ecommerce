/* eslint-disable react/prop-types */
const SocialLinks = ({ icon }) => {
  return (
    <>
      <img
        src={icon}
        alt="icon/social"
        className="flex  items-center w-8 h-8 md:w-6 md:h-6 sm:h-5 sm:w-5 transition-all hover:scale-110 duration-400 cursor-pointer"
      />
    </>
  );
};

export default SocialLinks;
