import { Link } from "react-router-dom";
import Logo from "./Logo";
import Button from "./Button";

export default function Header() {
  return (
    <header className="bg-gray-100 p-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto w-full">
        {/* Unified Logo Wrapper */}
        <Link to="/ColorLab" className="block">
          <div className="sm:block hidden">
            <Logo height={40} />
          </div>
          <div className="block sm:hidden">
            <Logo height={28} />
          </div>
        </Link>

        {/* Login and Register buttons */}
        <div className="flex space-x-2">
          <Link
            to="ColorLab/login"
            className="w-20 sm:w-24 py-1 text-sm sm:text-base text-[#7209b7] hover:text-[#4361ee] cursor-pointer inline-flex items-center justify-center"
          >
            Login
          </Link>
          <div className="w-20 sm:w-24 text-sm sm:text-base">
            <Button buttontext="Register" to="ColorLab/register" />
          </div>
        </div>
      </div>
    </header>
  );
}
