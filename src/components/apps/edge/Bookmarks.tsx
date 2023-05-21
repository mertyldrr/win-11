import github from "../../../assets/startmenu/github.png";

export const Bookmarks = () => {
  return (
    <div className="flex flex-row items-center text-[0.75rem] h-12 space-x-4 ml-2">
      <div className="flex flex-row items-center space-x-1 hover:bg-gray-400 hover:bg-opacity-30 p-2 rounded-sm">
        <button className="h-full cursor-default px-1 rounded-full">
          <img className="w-5 h-5" src={github} alt=""></img>
        </button>
        <span>GitHub</span>
      </div>
      <div className="flex flex-row items-center space-x-1 hover:bg-gray-400 hover:bg-opacity-30 p-2 rounded-sm">
        <button className="h-full cursor-default px-1">
          <img className="w-5 h-5" src={github} alt=""></img>
        </button>
        <span>GitHub</span>
      </div>
      <div className="flex flex-row items-center space-x-1 hover:bg-gray-400 hover:bg-opacity-30 p-2 rounded-sm">
        <button className="h-full cursor-default px-1">
          <img className="w-5 h-5" src={github} alt=""></img>
        </button>
        <span>GitHub</span>
      </div>
    </div>
  );
};
