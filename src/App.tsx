import { BrowserRouter, Route, Routes } from "react-router-dom";
import Quotes from "./pages/Home/Index";
import Days from "./pages/Days/Index";
import Day from "./pages/Day/Index";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/jobhunt" element={<Quotes />} />
          <Route path="/days" element={<Days />} />
          <Route path="/day" element={<Day />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
