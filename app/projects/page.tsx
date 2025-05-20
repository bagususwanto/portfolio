"use client";

import { useState } from "react";
import CardProject from "@/components/CardProject";
import { ProjectDetail } from "@/components/ProjectDetail";
import { projects } from "@/data/projects";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div className="flex flex-col px-4 w-full overflow-y-auto">
      {selectedProject ? (
        <ProjectDetail
          project={selectedProject}
          onBack={() => setSelectedProject(null)}
        />
      ) : (
        <div className="gap-4 grid grid-cols-1 md:grid-cols-3 mt-2">
          {projects.map((project, index) => (
            <CardProject
              key={index}
              title={project.title}
              img={project.image}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
