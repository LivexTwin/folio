// /app/projects/[slug]/page.tsx
"use client";

import { useParams } from "next/navigation"; // Correct way to access route parameters in Next.js 13 App Router
import { projects } from "data/projects";

const ProjectDetail = () => {
  const { slug } = useParams();

  // Find the project by matching the slug
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      {/* Other project details */}
      <img
        width="200px"
        height="300px"
        src={project.image}
        alt={project.title}
      />
    </div>
  );
};

export default ProjectDetail;
