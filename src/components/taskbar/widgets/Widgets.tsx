import { useSelector } from "react-redux";
import { selectIsSidebarActive } from "../../../redux/slices/newsSlice";
import { DateTime } from "../DateTime";
import { apiCache } from "../../../constants";
import { NewsColumn } from "./NewsColumn";
import "./Widgets.css";

export const Widgets = () => {
  const isSidebarActive = useSelector(selectIsSidebarActive);
  return (
    <div
      className={`sidebar absolute inset-3 px-10 py-6 rounded-lg overflow-y-scroll transform ease-out duration-500 ${
        isSidebarActive ? "translate-x-0 " : "sidebar-animation"
      }`}
    >
      <div className="flex justify-center text-xl mb-4">
        <DateTime showDate={false} fontSizeRule={"text-2xl"} />
      </div>
      <div className="flex w-full min-w-0 flex-1 ">
        {[0, 1].map((colIndex) => (
          <div key={colIndex} className="flex w-1/2 px-2 flex-col space-y-4">
            {apiCache.articles.map((article, index) => {
              // return null if image is not available
              if (!article.urlToImage || index % 2 !== colIndex) return null;
              return <NewsColumn key={index} article={article} index={index} />;
            })}
          </div>
        ))}
      </div>
      <div className="flex flex-row flex-wrap gap-0"></div>
    </div>
  );
};
