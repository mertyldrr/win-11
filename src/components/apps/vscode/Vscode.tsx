import { sandboxUrl } from "../../../constants";

export const Vscode = () => {
  return (
    <div className="flex flex-col w-full h-full bg-slate-200 rounded-lg">
      <iframe
        title="vscode"
        src={sandboxUrl}
        className="w-full h-full rounded-lg"
      />
    </div>
  );
};
