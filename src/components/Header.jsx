import Logo from "./Logo";
import Button from "./Button";

export default function Header() {
  return (
    <header className="bg-gray-100 p-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto w-full">
        {/* Responsive logo height */}
        <div className="sm:block hidden">
          <Logo height={40} />
        </div>
        <div className="block sm:hidden">
          <Logo height={28} />
        </div>

        {/* Responsive button sizing */}
        <div className="flex">
          <button className="w-20 sm:w-24 py-1 text-sm sm:text-base text-[#7209b7] hover:text-[#4361ee] cursor-pointer">
            Login
          </button>
          <div className="text-sm sm:text-base">
            <Button buttontext="Register" />
          </div>
        </div>
      </div>
    </header>
  );
}
