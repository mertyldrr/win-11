// import Iframe from "react-iframe";
import account from "../../assets/ui/defAccount.png";
import { ReactComponent as ArrowClockwise } from "../../assets/ui/arrowClockwise.svg";
import { ReactComponent as ArrowLeft } from "../../assets/ui/arrowLeft.svg";

export const Edge = () => {
  return (
    <div className="flex flex-col relative w-4/5 h-4/5 bg-slate-200">
      <div className="w-full flex flex-row justify-between items-center h-12">
        <div className="flex flex-row justify-center items-center h-4/5 space-x-2 mx-2">
          <button className="h-full cursor-default hover:bg-gray-400 hover:bg-opacity-40 px-2 rounded-sm">
            <ArrowLeft />
          </button>
          <button className="h-full cursor-default hover:bg-gray-400 hover:bg-opacity-40 px-2 rounded-sm">
            <ArrowClockwise />
          </button>
        </div>
        <div className="bg-white flex-1 px-4 mr-2 h-4/5 rounded-2xl">
          <div className="text-sm w-full h-full">
            <input
              className="text-sm w-full h-full outline-none"
              type="search"
              autoFocus={true}
            ></input>
          </div>
        </div>

        <div className="flex flex-row space-x-3 mr-2 h-4/5">
          <button className="h-full cursor-default hover:bg-gray-400 hover:bg-opacity-40 px-1 rounded-full">
            <img className="w-7 h-7" src={account} alt=""></img>
          </button>
          <button className="h-full cursor-default hover:bg-gray-400 hover:bg-opacity-40 px-1 rounded-md">
            •••
          </button>
        </div>
      </div>
      <div className="flex flex-row"></div>
      <iframe
        title="edge"
        src="https://www.bing.com/"
        className="w-full h-full"
      ></iframe>
    </div>
  );
};
