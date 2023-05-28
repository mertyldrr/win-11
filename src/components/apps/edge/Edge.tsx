import account from "../../../assets/ui/defAccount.png";
import arrowClockwise from "../../../assets/ui/arrowClockwise.svg";
import { VscArrowLeft } from "react-icons/vsc";
import { VscArrowRight } from "react-icons/vsc";

import { Bookmarks } from "./Bookmarks";
import { useEffect, useState } from "react";
import { SearchInput } from "../../SearchInput";
import {
  goBack,
  goForward,
  selectIsBackActive,
  selectIsForwardActive,
  selectSearchText,
  setBrowserHistory,
} from "../../../redux/slices/browserSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks";

interface EdgeProps {
  url?: string;
}

export const Edge: React.FC<EdgeProps> = ({ url }) => {
  const [localSearchText, setLocalSearchText] = useState<string>("");
  const searchText = useAppSelector(selectSearchText);
  const isForwardActive = useAppSelector(selectIsForwardActive);
  const isBackActive = useAppSelector(selectIsBackActive);

  const dispatch = useAppDispatch();

  const searchTextUpdate = (searchText: string) => {
    setLocalSearchText(searchText);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      dispatch(setBrowserHistory(localSearchText));
    }
  };

  useEffect(() => {
    if (searchText !== localSearchText) {
      setLocalSearchText(searchText);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  useEffect(() => {
    if (url) {
      dispatch(setBrowserHistory(url));
    }
  }, [dispatch, url]);

  return (
    <div className="flex flex-col w-full h-full bg-slate-200 rounded-b-lg">
      <div className="w-full flex flex-row justify-between items-center h-12">
        <div className="flex flex-row justify-center items-center h-4/5 space-x-2 mx-2">
          <button
            disabled={!isBackActive ? true : false}
            className="h-full cursor-default hover:bg-gray-400 hover:bg-opacity-30 px-2 rounded-sm disabled:bg-slate-200 disabled:opacity-30"
            onClick={() => dispatch(goBack())}
          >
            {/* <img src={arrowLeft} alt="" /> */}
            <VscArrowLeft size={20} />
          </button>

          <button
            disabled={!isForwardActive ? true : false}
            className="h-full cursor-default hover:bg-gray-400 hover:bg-opacity-30 px-2 rounded-sm disabled:bg-slate-200 disabled:opacity-30"
            onClick={() => dispatch(goForward())}
          >
            <VscArrowRight size={20} />
          </button>

          <button className="h-full cursor-default hover:bg-gray-400 hover:bg-opacity-30 px-2 rounded-sm">
            <img src={arrowClockwise} alt="" />
          </button>
        </div>
        <div className="bg-white flex-1 px-4 mr-2 h-4/5 rounded-2xl">
          <div className="text-sm w-full h-full">
            <SearchInput
              twClassName={"text-sm w-full h-full outline-none"}
              type={"search"}
              value={localSearchText}
              onChange={(e) => searchTextUpdate(e.target.value)}
              onKeyDown={handleKeyDown}
            />
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
        src={searchText}
        className="w-full h-full rounded-b-lg"
      />
    </div>
  );
};
