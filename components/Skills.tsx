import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiGit,
} from "react-icons/si";
import { motion } from "framer-motion";

export default function Skills() {
  // Expanded skills array
  const skills = [
    { icon: SiJavascript, name: "JavaScript", color: "text-yellow-400" },
    { icon: SiTypescript, name: "TypeScript", color: "text-blue-600" },
    { icon: SiPython, name: "Python", color: "text-blue-500" },
    { icon: SiReact, name: "React", color: "text-cyan-400" },
    { icon: SiNodedotjs, name: "Node.js", color: "text-green-500" },
    {
      icon: SiNextdotjs,
      name: "Next.js",
      color: "text-gray-100 dark:text-gray-300",
    },
    { icon: SiTailwindcss, name: "Tailwind", color: "text-cyan-500" },
    { icon: SiPostgresql, name: "PostgreSQL", color: "text-blue-700" },
    { icon: SiGit, name: "Git", color: "text-orange-600" },
  ];

  return (
    <div className="w-full px-4 mt-2">
      <div className="grid grid-cols-3 gap-2 max-h-32 pr-1">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.05,
              ease: "easeOut",
            }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center justify-center p-2 rounded-lg bg-gray-100/20 dark:bg-gray-800/30 cursor-pointer pointer-events-auto">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}>
              <skill.icon className={`w-5 h-5 ${skill.color}`} />
            </motion.div>
            <span className="text-xs mt-1 font-medium">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
