"use client";

import { useParams, useRouter } from "next/navigation";
import { projects } from "data/projects"; // Import the project data
import ProjectDetail from "app/components/ProjectDetail";

const SlugPage = () => {
  const router = useRouter();
  const { slug } = useParams(); // Get the slug from the URL

  // Ensure the slug is available
  if (!slug) {
    return <p>Loading...</p>; // Show a loading state if slug is undefined
  }

  // Find the project index by matching the slug
  const projectIndex = projects.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold">Project Not Found</h1>
        <button
          onClick={() => router.push("/")}
          className="btn text-lg uppercase"
        >
          Go Home
        </button>
      </div>
    );
  }

  // Get the actual project data
  const project = projects[projectIndex];

  // Check if the project is under construction
  if (project.isUnderConstruction) {
    return (
      <div className="flex flex-col gap-4 items-center justify-center">
        <h1 className="text-2xl font-bold">🚧 Under Construction 🚧</h1>
        <p className=" text-lg mb-4 dark:text-neutral-400">
          This project is currently under construction. Please check back later!
        </p>
        <button
          onClick={() => router.push("/")}
          className="btn text-lg uppercase"
        >
          Go Home
        </button>
      </div>
    );
  }

  // Pad the project index to double digits
  const projectNumber = String(projectIndex).padStart(2, "0"); // 1-based numbering

  // Render the ProjectDetail component
  return <ProjectDetail projectNumber={projectNumber} project={project} />;
};

export default SlugPage;
