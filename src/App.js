import Navigation from "./Components/Navigation/navigation";
import "./index.css";
import "./App.css"
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/dashboard";

function App() {
  return (
    <div className="App" >
        <Navigation />
      <div className="w-full">
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
