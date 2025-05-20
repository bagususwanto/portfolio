import { IoMdCloseCircle } from "react-icons/io";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";

interface ProjectDetailProps {
  project: {
    title: string;
    description: string;
    github: string;
    project: string;
    image: string;
    techStack: React.ComponentType[];
  };
  onBack: () => void;
}

export function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  if (!project) return null;

  return (
    <div className="relative bg-white/30 dark:bg-gray-100/10 backdrop-blur-xl mt-4 p-4 rounded-lg w-full h-full">
      <Button
        aria-label="Close"
        className="top-1 right-1 absolute rounded-full"
        onClick={() => onBack()}
        variant={"ghost"}>
        <IoMdCloseCircle className="w-4 h-4" />
      </Button>

      {/* Konten */}
      <div className="flex flex-row justify-between gap-4 mt-8">
        <div className="flex flex-col justify-center items-center gap-4">
          <img
            src={project.image}
            alt={project.title}
            className="w-md object-fit"
          />
          <div className="flex flex-row justify-arround items-center gap-2">
            <Link href={project.github} target="_blank">
              <Button aria-label="Github" variant={"secondary"}>
                <FaGithub className="w-4 h-4" />
                <span className="ml-2">View on Github</span>
              </Button>
            </Link>
            <Link href={project.project} target="_blank">
              <Button aria-label="Project" variant={"secondary"}>
                <AiFillProject className="w-4 h-4" />
                <span className="ml-2">View on Project</span>
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <h1 className="font-bold text-xl">{project.title}</h1>
          <p className="text-sm">{project.description}</p>
          <div className="gap-2 grid grid-cols-4 mt-8">
            {project.techStack.map((Tech, i) => (
              <Tech key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
