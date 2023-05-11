import { Taskbar } from "./components/Taskbar";

const App = () => {
  return (
    <div className="flex flex-col justify-between h-screen bg-win11 bg-cover">
      <div className="flex flex-row"></div>

      <Taskbar />
    </div>
  );
};

export default App;
