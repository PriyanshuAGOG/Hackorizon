import { SiReact, SiPython, SiJavascript, SiTypescript, SiNodedotjs, SiDocker, SiKubernetes, SiAmazon, SiGooglecloud, SiMongodb, SiPostgresql, SiRedis, SiGit, SiGithub, SiVuedotjs, SiAngular, SiDjango, SiFlask, SiTensorflow, SiPytorch, SiFigma, SiTailwindcss } from "react-icons/si";

const techLogos = [
  { Icon: SiReact, name: "React", color: "#61DAFB" },
  { Icon: SiPython, name: "Python", color: "#3776AB" },
  { Icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { Icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { Icon: SiDocker, name: "Docker", color: "#2496ED" },
  { Icon: SiKubernetes, name: "Kubernetes", color: "#326CE5" },
  { Icon: SiAmazon, name: "AWS", color: "#FF9900" },
  { Icon: SiGooglecloud, name: "GCP", color: "#4285F4" },
  { Icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { Icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
  { Icon: SiRedis, name: "Redis", color: "#DC382D" },
  { Icon: SiGit, name: "Git", color: "#F05032" },
  { Icon: SiGithub, name: "GitHub", color: "#181717" },
  { Icon: SiVuedotjs, name: "Vue", color: "#4FC08D" },
  { Icon: SiAngular, name: "Angular", color: "#DD0031" },
  { Icon: SiDjango, name: "Django", color: "#092E20" },
  { Icon: SiFlask, name: "Flask", color: "#000000" },
  { Icon: SiTensorflow, name: "TensorFlow", color: "#FF6F00" },
  { Icon: SiPytorch, name: "PyTorch", color: "#EE4C2C" },
  { Icon: SiFigma, name: "Figma", color: "#F24E1E" },
  { Icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
];

export default function TechLogos() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      {techLogos.map((tech, index) => (
        <div
          key={index}
          className="absolute animate-float"
          style={{
            left: `${(index * 137) % 90}%`,
            top: `${(index * 73) % 90}%`,
            animationDelay: `${index * 0.3}s`,
            animationDuration: `${8 + (index % 5)}s`,
          }}
        >
          <tech.Icon 
            className="w-12 h-12 md:w-16 md:h-16" 
            style={{ color: tech.color }}
          />
        </div>
      ))}
    </div>
  );
}
