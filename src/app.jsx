import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import All from "./pages/All";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/all" element={<All />} />
      <Route path="/todo" element={<All />} />
    </Routes>
  );
}

export default App;