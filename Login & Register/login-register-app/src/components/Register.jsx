import { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Sign up</h2>
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
            <label className="block mb-1">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 border rounded-md" required />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Repeat your password</label>
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="w-full px-4 py-2 border rounded-md" required />
          </div>
          <div className="mb-4">
            <input type="checkbox" className="mr-2" required />
            <label>I agree all statements in <a href="#" className="text-blue-500">Terms of service</a></label>
          </div>
          <button type="submit" className="w-full bg-black text-white py-2 rounded-md">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
