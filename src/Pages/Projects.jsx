import React, { useEffect } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

const projects = [
  {
    title: 'DevConnect',
    description: 'A social media platform for developers to connect, collaborate, and share portfolios.',
    tech: 'React, Firebase, Tailwind CSS',
    link: '#',
  },
  {
    title: 'E-Shop Admin Dashboard',
    description: 'Interactive dashboard for managing orders, customers, and revenue with charts.',
    tech: 'React, Redux Toolkit, Chart.js',
    link: '#',
  },
  {
    title: 'MyBlog CMS',
    description: 'A markdown-based blogging platform with category filters and a custom editor.',
    tech: 'Next.js, MongoDB, Tailwind',
    link: '#',
  },
  {
    title: 'TaskTracker',
    description: 'Kanban-style drag-and-drop task management app.',
    tech: 'React, Supabase, DnD Kit',
    link: '#',
  },
  {
    title: 'CodeSnaps Portfolio',
    description: 'Personal portfolio site with Framer Motion animations and light/dark themes.',
    tech: 'Vite, Tailwind CSS, Framer Motion',
    link: '#',
  },
  {
    title: 'Weatherly',
    description: 'Weather app with live location data and 5-day forecast view.',
    tech: 'React, OpenWeather API',
    link: '#',
  },
];

const Projects = () => {
  useEffect(() => {
    document.title = 'Projects | Dashboard';
  }, []);

  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <Card key={index}>
          <h3 className="text-lg font-semibold text-[var(--text-color)]">{project.title}</h3>
          <p className="text-sm text-gray-500 mt-1">{project.description}</p>
          <p className="text-sm text-gray-400 mt-1 italic">Tech Stack: {project.tech}</p>
          <div className="mt-3">
            <Button>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project →
              </a>
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Projects;
