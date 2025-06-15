import React, { useEffect } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import AOS from "aos";
import "aos/dist/aos.css";

const projectList = [
  {
    title: "DevConnect",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=400&q=80",
    type: "Social Platform",
    role: "Full Stack Developer",
    description: "Connect, collaborate, and share portfolios with fellow developers.",
    features: ["Authentication", "Post sharing", "Follow system"],
    tech: ["React", "Firebase", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
  {
    title: "E-Shop Admin Dashboard",
    image: "https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=400&q=80",
    type: "Dashboard UI",
    role: "Frontend Developer",
    description: "Manage products, orders, and revenue with data visualizations.",
    features: ["Revenue charts", "Order management", "User table"],
    tech: ["React", "Redux Toolkit", "Chart.js"],
    github: "#",
    live: "#",
  },
  {
    title: "MyBlog CMS",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    type: "Blogging CMS",
    role: "Full Stack Developer",
    description: "Write and publish markdown posts with a modern UI.",
    features: ["Live markdown editor", "Category filters", "MongoDB integration"],
    tech: ["Next.js", "MongoDB", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    title: "Weatherly",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80",
    type: "Weather App",
    role: "Frontend Developer",
    description: "Real-time weather tracking with location and forecast support.",
    features: ["Current weather", "5-day forecast", "Dark mode"],
    tech: ["React", "OpenWeather API", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    title: "PortfolioX",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80",
    type: "Portfolio Site",
    role: "Frontend Developer",
    description: "Animated developer portfolio with projects and contact form.",
    features: ["Light/dark toggle", "Framer Motion", "Mobile responsive"],
    tech: ["Vite", "Framer Motion", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
  {
    title: "TaskTracker",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
    type: "Productivity Tool",
    role: "Solo Developer",
    description: "Manage your projects visually with drag and drop boards.",
    features: ["Drag & drop", "Project labels", "Collaboration"],
    tech: ["React", "DnD Kit", "Supabase"],
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  useEffect(() => {
    document.title = "Projects | Dashboard";
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projectList.map((project, index) => (
        <div key={index} data-aos="fade-up" className="relative group">
          {/* Tooltip Box */}
          <div className="absolute top-0 left-0 z-20 bg-white shadow-md border border-slate-200 p-3 text-xs text-slate-700 rounded-lg opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition duration-300 transform translate-y-[-10px] w-60 pointer-events-none">
            <p className="font-semibold mb-1">{project.title} Overview</p>
            <ul className="list-disc list-inside space-y-1">
              {project.features.slice(0, 2).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Main Card */}
          <Card className="relative">
            <img
              src={project.image}
              alt={project.title}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/400x200?text=Preview+Unavailable";
              }}
              className="rounded-md mb-4 object-cover h-40 w-full"
            />
            <h3 className="text-xl font-bold text-slate-800">{project.title}</h3>
            <p className="text-xs text-gray-500 italic">
              {project.type} — {project.role}
            </p>
            <p className="text-sm text-gray-600 mt-2">{project.description}</p>

            <ul className="text-xs text-gray-500 mt-2 list-disc list-inside">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-3">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-100 text-xs px-2 py-1 rounded-full text-gray-800"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-4 flex gap-3">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Button>GitHub</Button>
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <Button>Live Demo</Button>
              </a>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Projects;
