import Google from "../assets/google.png";
import Github from "../assets/Github.png";

const SocialLogins = () => {
  return (
    <div className="flex items-center justify-center gap-10">
      <div className="hover:bg-slate-500/20 hover:cursor-pointer p-3 rounded-md">
        <img className="w-11 h-11" src={Google} alt="" />
      </div>
      <div className="hover:bg-slate-500/20 hover:cursor-pointer p-3 rounded-md">
        <img className="w-11 h-11" src={Github} alt="" />
      </div>
    </div>
  );
};

export default SocialLogins;
