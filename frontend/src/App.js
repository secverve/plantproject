import { Routes, Route, BrowserRouter } from "react-router-dom";
import LeeApp from "./lee";
import MainApp from "./An";

const App = () => {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainApp/>}></Route>
        <Route path="/test1" element={<LeeApp/>}></Route>
        <Route path="/test2" element={<LeeApp/>}></Route>
      </Routes>
    </BrowserRouter>
  </>
  );
};

export default App;
