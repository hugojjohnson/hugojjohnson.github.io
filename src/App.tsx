import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Home from "./components/main/Home";
import Navbar from "./components/projects/Navbar";
import Search from "./components/projects/Search";
import ProjectTemplate from "./components/projects/ProjectTemplate";
import { UserContext } from "./Context";
import { Tags } from "./Interfaces";

function App() {
  const [tags, setTags] = useState<Tags[]>([]);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.search.endsWith("?/")) {
      // Remove the '?/' from the URL and navigate to the cleaned-up path
      const newPath = location.pathname + location.search.replace("?/", "");
      navigate(newPath, { replace: true });
    }
  }, [location, navigate]);

  return (
    <UserContext.Provider value={[tags, setTags]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Search />} />
            <Route path="project/:query" element={<ProjectTemplate />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
export { UserContext };