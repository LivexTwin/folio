// app/projects/page.tsx
import ProjectCard from "app/components/ProjectCard";
import { projects } from "../../data/projects"; // Import your project data

const Projects = () => {
  return (
    <section className="my-container xl:min-h-[100dvh] mx-auto my-p mb-4">
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Selected Projects
      </h1>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isFeatured={project.isFeatured}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
