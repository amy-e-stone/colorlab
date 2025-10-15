import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import Button from "./Button";

export default function Header() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("You have sucessfully logged out");
    navigate("login");
  };

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

        {/* Login and Register buttons (or Account and Logout if logged in) */}
        <div className="flex items-center">
          {isLoggedIn ? (
            <>
              {/* Account button */}
              <Link
                to="/account"
                className="inline-flex items-center justify-center px-3 py-1 text-sm text-[#7209b7] hover:text-[#4361ee] cursor-pointer sm:w-24 sm:text-base"
              >
                Account
              </Link>
              {/* Logout button */}
              <button
                onClick={handleLogout}
                className="inline-flex items-center justify-center px-3 py-1 text-sm text-[#7209b7] hover:text-[#4361ee] cursor-pointer sm:w-24 sm:text-base"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              {/* Login button */}
              <Link
                to="login"
                className="inline-flex items-center justify-center px-3 py-1 text-[#7209b7] hover:text-[#4361ee] cursor-pointer sm:w-24 sm:text-base"
              >
                Login
              </Link>
              {/* Register button */}
              <div className="text-sm w-20 sm:text-base sm:w-24">
                <Button buttontext="Register" to="register" />
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
