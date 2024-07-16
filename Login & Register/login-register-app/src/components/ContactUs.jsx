import { useState } from 'react';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6">Love to hear from you, Get in touch 👋</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1">Your Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2 border rounded-md" required />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Your Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 border rounded-md" required />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Message</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="w-full px-4 py-2 border rounded-md" required></textarea>
          </div>
          <button type="submit" className="w-full bg-black text-white py-2 rounded-md">Just Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
