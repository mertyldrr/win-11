import { bookmarks } from "../../../constants";
import { Bookmark } from "./Bookmark";

export const Bookmarks = () => {
  return (
    <div className="flex flex-row items-center text-[0.75rem] h-12 space-x-4 ml-2">
      {bookmarks.map((bookmark, index) => (
        <Bookmark
          key={index}
          name={bookmark.name}
          link={bookmark.link}
          icon={bookmark.icon}
        />
      ))}
    </div>
  );
};
