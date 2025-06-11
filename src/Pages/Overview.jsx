import React, { useEffect } from 'react';
import Card from '../components/Card';

const stats = [
  {
    title: 'Projects Completed',
    value: '12',
    description: 'Real-world apps built with React, Node.js, and Firebase.',
  },
  {
    title: 'Featured Technologies',
    value: 'React, Redux, Tailwind',
    description: 'Core stack used across most portfolio projects.',
  },
  {
    title: 'GitHub Repositories',
    value: '24',
    description: 'Open-source and personal projects hosted on GitHub.',
  },
  {
    title: 'Blog Posts',
    value: '5',
    description: 'Articles about React, UI/UX, and career tips.',
  },
  {
    title: 'Hours Coded',
    value: '180+',
    description: 'Time spent building apps, components, and learning.',
  },
  {
    title: 'Last Updated',
    value: 'June 2025',
    description: 'This portfolio is kept up to date.',
  },
];

const Overview = () => {
  useEffect(() => {
    document.title = 'Overview | Dashboard';
  }, []);

  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat, index) => (
        <Card key={index}>
          <h3 className="text-sm text-gray-400">{stat.title}</h3>
          <p className="text-3xl font-bold text-[var(--text-color)]">{stat.value}</p>
          <p className="text-sm text-gray-500 mt-2">{stat.description}</p>
        </Card>
      ))}
    </div>
  );
};

export default Overview;
