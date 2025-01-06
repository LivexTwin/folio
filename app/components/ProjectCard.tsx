// components/ProjectCard.tsx
const ProjectCard = ({
  project,
}: {
  project: { name: string; description: string; url: string };
}) => {
  return (
    <div className="border p-4 rounded-lg shadow-md hover:shadow-lg">
      <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
      <p className=" mb-4">{project.description}</p>
      <a href={project.url} className="text-blue-500 hover:underline">
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
