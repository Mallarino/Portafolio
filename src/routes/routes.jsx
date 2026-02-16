import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import PageNotFound from "../pages/PageNotFound.jsx";

import Home from "../pages/home.jsx";
import All from "../pages/All.jsx";
import Projects from "../pages/Projects.jsx";
import Images from "../pages/Images.jsx";
import Experience from "../pages/Experience.jsx";
import Education from "../pages/Education.jsx";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/All" element={<All />} />
        <Route path="/Todo" element={<All />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Educacion" element={<Education />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Experiencia" element={<Experience />} />
        <Route path="/Images" element={<Images />} />
        <Route path="/Imagenes" element={<Images />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Projectos" element={<Projects />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;