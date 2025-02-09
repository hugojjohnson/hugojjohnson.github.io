import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/main/Home";
import Navbar from "./components/projects/Navbar";
import Search from "./components/projects/Search";
import ProjectTemplate from "./components/projects/ProjectTemplate";
import { UserContext } from "./Context";
import { Tags } from "./Interfaces";

function App() {
  const [tags, setTags] = useState<Tags[]>([]);
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