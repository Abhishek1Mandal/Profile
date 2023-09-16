import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page1Route from "./Routes/PageRoute"

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/*" element={<Page1Route />} />
        </Routes>
    </Router>
  );
};

export default App;
