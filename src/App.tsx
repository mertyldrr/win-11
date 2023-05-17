import { Desktop } from "./components/desktop/Desktop";
import { Taskbar } from "./components/taskbar/Taskbar";

const App = () => {
  return (
    <div className="bg-win11 bg-cover bg-center h-screen overflow-hidden">
      <Desktop />
      <Taskbar />
    </div>
  );
};

export default App;
