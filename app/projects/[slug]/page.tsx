"use client";

import { useParams } from "next/navigation"; // Correct way to access route parameters in Next.js 13 App Router
import { projects } from "data/projects";

const ProjectDetail = () => {
  const { slug } = useParams();

  // Find the project by matching the slug
  const projectIndex = projects.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    return <p>Project not found</p>;
  }

  // Pad the project index to double digits (starting from 00)
  const projectNumber = String(projectIndex).padStart(2, "0");

  return (
    <div>
      <h1 className="text-2xl font-semibold ">Project {projectNumber}</h1>
    </div>
  );
};

export default ProjectDetail;
