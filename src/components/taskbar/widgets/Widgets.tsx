import { selectNews, setNews } from "../../../redux/slices/newsSlice";
import { DateTime } from "../DateTime";
import { NewsColumn } from "./NewsColumn";
import "./Widgets.css";
import axios from "axios";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { selectIsNewsSidebarActive } from "../../../redux/slices/modalSlice";

export const Widgets = () => {
  const dispatch = useAppDispatch();
  const isSidebarActive = useAppSelector(selectIsNewsSidebarActive);
  const news = useAppSelector(selectNews);

  useEffect(() => {
    const fetchNews = async () => {
      const res = await axios.get(`${process.env.REACT_APP_NEWS_ENDPOINT}`);
      dispatch(setNews(res.data));
    };
    fetchNews();
  }, [dispatch]);

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
            {news &&
              news.map((article, index) => {
                // return null if image is not available
                if (!article.urlToImage || index % 2 !== colIndex) return null;
                return (
                  <NewsColumn key={index} article={article} index={index} />
                );
              })}
          </div>
        ))}
      </div>
      <div className="flex flex-row flex-wrap gap-0"></div>
    </div>
  );
};
