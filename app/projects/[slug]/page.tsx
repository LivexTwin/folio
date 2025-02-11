"use client";

import { useParams, useRouter } from "next/navigation";
import { projects } from "data/projects"; // Import the project data
import ProjectDetail from "app/components/ProjectDetail";

function RightArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width="15"
      height="15"
    >
      <path
        fillRule="evenodd"
        d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

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
      <div className="flex flex-col items-center justify-center custom-h-screen">
        <h1 className="text-2xl font-medium mb-6">Project Not Found</h1>
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
      <div className="flex flex-col gap-8 items-center custom-h-screen  justify-center">
        <h1 className="text-2xl font-black uppercase">Under Construction</h1>
        <p className="dark:text-neutral-400 text-center">
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

  // Logic for navigating between projects
  const getValidProjects = () => {
    // Filter out projects that are under construction
    return projects.filter((project) => !project.isUnderConstruction);
  };

  const goToNextProject = () => {
    const validProjects = getValidProjects();
    const nextIndex =
      (validProjects.findIndex((p) => p.slug === slug) + 1) %
      validProjects.length;
    router.push(`/projects/${validProjects[nextIndex].slug}`);
  };

  const goToPreviousProject = () => {
    const validProjects = getValidProjects();
    const prevIndex =
      (validProjects.findIndex((p) => p.slug === slug) -
        1 +
        validProjects.length) %
      validProjects.length;
    router.push(`/projects/${validProjects[prevIndex].slug}`);
  };

  // Render the ProjectDetail component
  // Render the ProjectDetail component and Pagination buttons
  return (
    <div>
      <ProjectDetail projectNumber={projectNumber} project={project} />

      {/* Pagination Controls */}
      <div className="flex justify-between my-m my-container mx-auto">
        {/* Previous Project Button */}
        <button
          onClick={goToPreviousProject}
          disabled={projectIndex === 0}
          className="disabled:opacity-0 flex items-center gap-2 hover:underline"
          aria-label="Go to previous project"
        >
          <span className="inline-block transform rotate-180">
            <RightArrowIcon />
          </span>
          Previous Project
        </button>

        {/* Next Project Button */}
        <button
          onClick={goToNextProject}
          disabled={projectIndex === projects.length - 1}
          className="disabled:opacity-0 flex items-center gap-2 hover:underline"
          aria-label="Go to next project"
        >
          Next Project
          <span>
            <RightArrowIcon />
          </span>
        </button>
      </div>
    </div>
  );
};

export default SlugPage;
