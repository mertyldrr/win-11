import { useDispatch } from "react-redux";
import { setSearchText } from "../../../redux/slices/searchSlice";

type Props = {
  name: string;
  link: string;
  icon: string;
};

export const Bookmark = ({ name, link, icon }: Props) => {
  const dispatch = useDispatch();
  return (
    <div
      className="flex flex-row items-center space-x-1 hover:bg-gray-400 hover:bg-opacity-30 p-2 rounded-sm"
      onClick={() => dispatch(setSearchText(link))}
    >
      <img className="w-5 h-5" src={icon} alt="" />
      <span>{name}</span>
    </div>
  );
};