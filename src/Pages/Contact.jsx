import React, { useEffect } from 'react';
import Button from '../components/Button';

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact | Dashboard';
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-[var(--card-bg)] p-6 rounded-xl shadow"
      style={{
        boxShadow: 'var(--card-shadow)',
        border: '1px solid var(--border-color)',
      }}
    >
      <h2 className="text-2xl font-bold text-[var(--text-color)] mb-4">Get in Touch</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-400">Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-transparent text-[var(--text-color)] focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-400">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-transparent text-[var(--text-color)] focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-400">Message</label>
          <textarea
            rows="4"
            placeholder="Type your message..."
            className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-transparent text-[var(--text-color)] focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
        </div>
        <Button type="submit">Send Message</Button>
      </div>
    </form>
  );
};

export default Contact;
