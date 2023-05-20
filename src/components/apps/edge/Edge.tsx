import { account, arrowClockwise, arrowLeft } from "../../../constants";
import { Bookmarks } from "./Bookmarks";

interface EdgeProps {
  url: string;
}

export const Edge: React.FC<EdgeProps> = () => {
  return (
    <div className="flex flex-col w-full h-full bg-slate-200">
      <div className="w-full flex flex-row justify-between items-center h-12">
        <div className="flex flex-row justify-center items-center h-4/5 space-x-2 mx-2">
          <button className="h-full cursor-default hover:bg-gray-400 hover:bg-opacity-30 px-2 rounded-sm">
            <img src={arrowLeft} alt=""></img>
          </button>
          <button className="h-full cursor-default hover:bg-gray-400 hover:bg-opacity-30 px-2 rounded-sm">
            <img src={arrowClockwise} alt=""></img>
          </button>
        </div>
        <div className="bg-white flex-1 px-4 mr-2 h-4/5 rounded-2xl">
          <div className="text-sm w-full h-full">
            <input
              className="text-sm w-full h-full outline-none"
              type="search"
              autoFocus={true}
              defaultValue={"https://www.bing.com"}
            ></input>
          </div>
        </div>

        <div className="flex flex-row space-x-3 mr-2 h-4/5">
          <button className="h-full cursor-default hover:bg-gray-400 hover:bg-opacity-30 px-1 rounded-full">
            <img className="w-7 h-7" src={account} alt=""></img>
          </button>
          <button className="h-full cursor-default hover:bg-gray-400 hover:bg-opacity-30 px-1 rounded-md">
            •••
          </button>
        </div>
      </div>
      <Bookmarks />
      <iframe
        title="edge"
        src={"https://www.bing.com"}
        className="w-full h-full"
      />
    </div>
  );
};
