import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import PageNotFound from "../pages/NotFound.jsx";

import Home from "../pages/Home.jsx";
import All from "../pages/All.jsx";
import Projects from "../pages/Projects.jsx";
import Experience from "../pages/Experience.jsx";
import Education from "../pages/Education.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/all" element={<All />} />
      <Route path="/todo" element={<All />} />
      <Route path="/education" element={<Education />} />
      <Route path="/educacion" element={<Education />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/experiencia" element={<Experience />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/proyectos" element={<Projects />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;