import { bookmarks } from "../../../constants";
import { Bookmark } from "./Bookmark";
import github from "../../../assets/startmenu/github.png";
import gmail from "../../../assets/bookmarks/gmail.svg";

export const Bookmarks = () => {
  return (
    <div className="flex flex-row items-center text-[0.75rem] h-12 space-x-2 ml-2">
      {bookmarks.map((bookmark, index) => (
        <Bookmark
          key={index}
          name={bookmark.name}
          link={bookmark.link}
          icon={bookmark.icon}
        />
      ))}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/mertyldrr"
        className="flex flex-row items-center space-x-2 hover:bg-gray-400 hover:bg-opacity-30 p-2 rounded-sm cursor-default"
      >
        <img className="w-5 h-5" src={github} alt="" />
        <span>GitHub</span>
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="mailto:mertyildirir14@gmail.com"
        className="flex flex-row items-center space-x-2 hover:bg-gray-400 hover:bg-opacity-30 p-2 rounded-sm cursor-default"
      >
        <img className="w-5 h-5" src={gmail} alt="" />
        <span>Gmail</span>
      </a>
    </div>
  );
};
