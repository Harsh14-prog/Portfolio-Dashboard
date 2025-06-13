import React, { useEffect } from 'react';
import Card from '../components/Card';
import AOS from 'aos';
import 'aos/dist/aos.css';

const stats = [
  { title: 'Projects Completed', value: '12', description: 'React, Node, Firebase apps deployed' },
  { title: 'GitHub Repositories', value: '24', description: 'Open source contributions & personal builds' },
  { title: 'Skills', value: 'MERN Stack', description: 'React, MongoDB, Node, Express, Tailwind, Redux' },
  { title: 'Certifications', value: '6+', description: 'Frontend, Backend & AI tools' },
  { title: 'Years of Experience', value: '2+', description: 'Project & hackathon experience' },
  { title: 'Portfolio Last Updated', value: 'June 2025', description: 'Actively maintained & improved' },
];

const Overview = () => {
  useEffect(() => {
    document.title = 'Overview | Dashboard';
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="space-y-8">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat, index) => (
          <div data-aos="fade-up" key={index}>
            <Card>
              <h3 className="text-xs uppercase tracking-wide text-gray-500">{stat.title}</h3>
              <p className="text-3xl font-bold text-[var(--text-color)] mt-1">{stat.value}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{stat.description}</p>
            </Card>
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
        <div data-aos="fade-up">
          <Card>
            <h3 className="text-lg font-semibold mb-2 text-[var(--text-color)]">Tools & Technologies</h3>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 list-disc list-inside">
              <li>React, Redux Toolkit, TailwindCSS</li>
              <li>Node.js, Express, MongoDB</li>
              <li>Firebase, Supabase</li>
              <li>Git, GitHub, Vercel, Postman</li>
            </ul>
          </Card>
        </div>

        <div data-aos="fade-up">
          <Card>
            <h3 className="text-lg font-semibold mb-2 text-[var(--text-color)]">Achievements</h3>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 list-disc list-inside">
              <li>Smart India Hackathon 2024 Finalist</li>
              <li>Top 5 in CodeByte Coding Challenge</li>
              <li>Built 3 full-stack projects in 2 months</li>
              <li>Hosted live projects on GitHub Pages</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Overview;
