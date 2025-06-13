import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact | Dashboard';
  }, []);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = form;

    if (!name.trim() || !email.trim() || !message.trim()) {
      alert('Please fill in all fields before submitting!');
      return;
    }

    alert('Form submitted successfully!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Card>
        <h2 className="text-2xl font-bold text-[var(--text-color)] mb-4">Get in Touch</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-400 block">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-2 rounded-md border bg-transparent border-[var(--border-color)] text-[var(--text-color)] placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-400 block">Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full p-2 rounded-md border bg-transparent border-[var(--border-color)] text-[var(--text-color)] placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-400 block">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows="4"
              className="w-full p-2 rounded-md border bg-transparent border-[var(--border-color)] text-[var(--text-color)] placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>
          <Button type="submit">Send Message</Button>
        </form>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold mb-3 text-[var(--text-color)]">Connect</h3>
        <div className="flex gap-4 text-indigo-600 text-xl">
          <a href="mailto:your.email@example.com" target="_blank" rel="noreferrer" className="hover:text-indigo-800 transition">
            <FiMail />
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="hover:text-indigo-800 transition">
            <FiGithub />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="hover:text-indigo-800 transition">
            <FiLinkedin />
          </a>
        </div>
      </Card>
    </div>
  );
};

export default Contact;
