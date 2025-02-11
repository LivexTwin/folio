// app/projects/page.tsx
import ProjectCard from "app/components/ProjectCard";
import { projects } from "../../data/projects"; // Import your project data
import FeaturedProjectCard from "app/components/FeaturedProjectCard";
import FemProjectCard from "app/components/FemProjectCard";

const featuredProject = projects.find((p) => p.isFeatured);
const regularProjects = projects.filter((p) => !p.isFeatured);

const Projects = () => {
  return (
    <section className="my-container xl:min-h-[100dvh] mx-auto my-p mb-4">
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Selected Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProject && (
          <div className="lg:col-span-3">
            <FeaturedProjectCard project={featuredProject} />
          </div>
        )}

        {regularProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        <FemProjectCard />
      </div>
    </section>
  );
};

export default Projects;
