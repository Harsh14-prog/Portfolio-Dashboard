import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const App = () => {
  const dark = useSelector((state) => state.theme.dark);
  const isOpen = useSelector((state) => state.sidebar.isOpen); // add this line

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e) => {
      if (!localStorage.getItem('theme')) {
        document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, [dark]);

  return (
    <div>
      <Sidebar />
      <div
        className="transition-all duration-300 min-h-screen"
        style={{
          marginLeft: isOpen ? '16rem' : '5rem',
          backgroundColor: 'var(--bg-color)',
          color: 'var(--text-color)',
        }}
      >
        <Navbar />
        <main className="p-6">
          <h1 className="text-3xl font-bold mb-4">Welcome to your Portfolio Dashboard</h1>
          <p className="text-lg">Start building a modern and responsive portfolio here.</p>
        </main>
      </div>
    </div>
  );
};

export default App;
