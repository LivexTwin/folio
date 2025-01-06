// app/projects/page.tsx
import ProjectCard from "app/components/ProjectCard";
import { projects } from "../../data/projects"; // Import your project data

const Projects = () => {
  return (
    <div>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
