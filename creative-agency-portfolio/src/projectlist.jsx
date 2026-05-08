import ProjectCard from "./projectcard";

function ProjectList({ projects }) {
  return (
    <section className="section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectList;