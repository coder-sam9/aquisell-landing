import logo from '../assets/icons/logo.svg';
import CustomButton from '../components/UI/Button/CustomButton';

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-16 py-4 border-b">
      {/* Left Logo */}
      <div className="flex items-center space-x-2">
        <img src={logo} className="h-8 w-auto" alt="logo" />
        <h1 className="text-2xl font-bold">AcquiSell</h1>
      </div>

      {/* Middle Navigation */}
      <nav className="hidden md:flex gap-x-6 relative right-64">
        <button className="text-black hover:text-black">Sellers</button>
        <button className="text-black hover:text-black">Buyers</button>
        <button className="text-black hover:text-black">View Listings</button>
      </nav>

      {/* Right Actions */}
      <div className="flex items-center space-x-4">
        <button className="text-black hover:text-black mr-4">Login</button>
        <CustomButton title="Get Started" />
      </div>
    </header>
  );
}