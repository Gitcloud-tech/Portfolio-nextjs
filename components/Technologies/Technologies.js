import { Separator } from "@/components/ui/separator";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
  FaBootstrap,
  FaGitlab,
  FaDocker,
  FaAndroid,
  FaApple,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaCode,
  FaServer,
  FaGitAlt,
  FaLaptopCode,
} from "react-icons/fa6";

export default function Technologies() {
  return (
    <div className="w-full mt-10">
      {/* Heading with separator */}
      <div className="w-full flex items-center gap-4 mb-4">
        <h2 className="text-2xl font-bold whitespace-nowrap">Technologies</h2>
        <Separator className="flex-1 h-[2px] bg-gray-300 dark:bg-gray-700" />
      </div>

      {/* Subheading */}
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        I work with the following technologies and tools:
      </p>

      {/* Grid: 4 Equal Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <TechnologySection
          title="Mobile"
          icons={[
            { icon: <FaAndroid className="text-green-600" />, name: "Android" },
            {
              icon: <FaApple className="text-gray-900 dark:text-white" />,
              name: "iOS",
            },
          ]}
        />
        <TechnologySection
          title="Front-end"
          icons={[
            { icon: <FaReact className="text-blue-500" />, name: "React" },
            { icon: <FaJs className="text-yellow-500" />, name: "JavaScript" },
            { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
            { icon: <FaCss3Alt className="text-blue-700" />, name: "CSS3" },
            {
              icon: <FaBootstrap className="text-purple-600" />,
              name: "Bootstrap",
            },
          ]}
        />
        <TechnologySection
          title="Back-end"
          icons={[
            { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
            {
              icon: <FaDatabase className="text-orange-500" />,
              name: "Databases",
            },
            {
              icon: <FaServer className="text-gray-700" />,
              name: "Server-side",
            },
          ]}
        />
        <TechnologySection
          title="Other Tools"
          icons={[
            { icon: <FaGitlab className="text-orange-600" />, name: "GitLab" },
            {
              icon: <FaGithub className="text-gray-700 dark:text-gray-300" />,
              name: "GitHub",
            },
            { icon: <FaDocker className="text-blue-400" />, name: "Docker" },
            { icon: <FaGitAlt className="text-red-500" />, name: "Git" },
            {
              icon: <FaLaptopCode className="text-blue-600" />,
              name: "Coding",
            },
            {
              icon: <FaCode className="text-gray-700 dark:text-gray-300" />,
              name: "Development",
            },
          ]}
        />
      </div>
    </div>
  );
}

// Technology section (column)
function TechnologySection({ title, icons }) {
  return (
    <div className="flex flex-col">
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <div className="grid grid-cols-3 gap-4">
        {icons.map((tech, i) => (
          <TechIcon key={i} icon={tech.icon} name={tech.name} />
        ))}
      </div>
    </div>
  );
}

// Icon with tooltip
function TechIcon({ icon, name }) {
  return (
    <div className="relative group flex flex-col items-start">
      <div className="text-3xl">{icon}</div>
      <span className="absolute bottom-10 left-3 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition bg-gray-800 text-white text-xs px-2 py-1 rounded-md z-10">
        {name}
      </span>
    </div>
  );
}
