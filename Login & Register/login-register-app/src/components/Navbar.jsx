import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">OpenTome</Link>
          </div>
          <div className="flex">
            <Link to="/login" className="px-3 py-2 rounded-md text-sm font-medium">Login</Link>
            <Link to="/register" className="px-3 py-2 rounded-md text-sm font-medium">Register</Link>
            <Link to="/contact-us" className="px-3 py-2 rounded-md text-sm font-medium">Contact Us</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
