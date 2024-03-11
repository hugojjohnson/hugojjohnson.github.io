import { useState } from "react";
import { UserContext } from "./Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import Navbar from "./components/Navbar";
import ProjectTemplate from "./components/projects/ProjectTemplate";
import Search from "./components/projects/Search";
import BlogDev from "./components/projects/BlogDev";

function App() {
  const [tags, setTags] = useState([]);
  return (
    <UserContext.Provider value={[tags, setTags]}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Search />} />
          <Route path="projects/:query" element={<ProjectTemplate />} />
          <Route path="dev/blogs" element={<BlogDev />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
export { UserContext };