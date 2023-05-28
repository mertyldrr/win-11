import { useAppDispatch } from "../../../hooks";
import { toggleSearchMenu } from "../../../redux/slices/modalSlice";
import { openApp } from "../../../utils";

type Props = {
  label: string;
  launchName: string;
  url: string;
  Icon: any;
};

export const SearchMenuLink = ({ label, launchName, url, Icon }: Props) => {
  const dispatch = useAppDispatch();
  const handleOnClick = () => {
    dispatch(toggleSearchMenu());
    openApp(launchName, dispatch, url);
  };
  return (
    <div className="flex flex-row items-center">
      <button
        className="hover:bg-white hover:bg-opacity-80 rounded-sm w-full flex justify-start items-center px-4 py-3"
        onClick={handleOnClick}
      >
        <Icon size={24} />
        <span className="quicksearch-text">{label}</span>
      </button>
    </div>
  );
};
