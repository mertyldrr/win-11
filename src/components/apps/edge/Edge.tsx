import account from "../../../assets/ui/defAccount.png";
import arrowClockwise from "../../../assets/ui/arrowClockwise.svg";
import arrowLeft from "../../../assets/ui/arrowLeft.svg";
import { Bookmarks } from "./Bookmarks";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSearchText,
  setSearchText,
} from "../../../redux/slices/searchSlice";
import { useEffect, useState } from "react";
import { SearchInput } from "../../SearchInput";

interface EdgeProps {
  url?: string;
}

export const Edge: React.FC<EdgeProps> = ({ url }) => {
  const [localSearchText, setLocalSearchText] = useState<string>("");
  const searchText = useSelector(selectSearchText);
  const dispatch = useDispatch();

  const debouncedSearchTextUpdate = (searchText: string) => {
    setLocalSearchText(searchText);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      dispatch(setSearchText(localSearchText));
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
      dispatch(setSearchText(url));
    }
  }, [dispatch, url]);

  return (
    <div className="flex flex-col w-full h-full bg-slate-200 rounded-b-lg">
      <div className="w-full flex flex-row justify-between items-center h-12">
        <div className="flex flex-row justify-center items-center h-4/5 space-x-2 mx-2">
          <button className="h-full cursor-default hover:bg-gray-400 hover:bg-opacity-30 px-2 rounded-sm">
            <img src={arrowLeft} alt="" />
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
              onChange={(e) => debouncedSearchTextUpdate(e.target.value)}
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
