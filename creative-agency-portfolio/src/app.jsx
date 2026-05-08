import { useState } from "react";
import Header from "./header";
import SearchBar from "./searchbar";
import ProjectForm from "./projectform";
import ProjectList from "./projectlist";
import "./app.css";

function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Portfolio Website",
      description: "A modern website project"
    },
    {
      id: 2,
      title: "Brand Design",
      description: "Creative branding project"
    }
  ]);

  const [search, setSearch] = useState("");

  function addProject(project) {
    setProjects([...projects, { ...project, id: Date.now() }]);
  }

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <Header />

      <SearchBar setSearch={setSearch} />

      <ProjectForm addProject={addProject} />

      <ProjectList projects={filteredProjects} />
    </div>
  );
}

export default App;