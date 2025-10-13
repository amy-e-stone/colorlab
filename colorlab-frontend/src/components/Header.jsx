import { Link } from "react-router-dom";
import Logo from "./Logo";
import Button from "./Button";

export default function Header() {
  return (
    <header className="p-4 bg-gray-100">
      <div className="flex w-full max-w-6xl mx-auto justify-between items-center">
        {/* Unified Logo Wrapper */}
        <Link to="/" className="block">
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
            to="login"
            className="inline-flex w-20 py-1 items-center justify-center text-sm text-[#7209b7] hover:text-[#4361ee] cursor-pointer sm:w-24 sm:text-base"
          >
            Login
          </Link>
          <div className="text-sm w-20 sm:text-base sm:w-24">
            <Button buttontext="Register" to="register" />
          </div>
        </div>
      </div>
    </header>
  );
}
