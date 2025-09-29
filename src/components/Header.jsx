import Logo from "./Logo";
import Button from "./Button";

export default function Header() {
  return (
    <header className="bg-gray-100 p-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto w-full">
        <Logo />
        <div className="flex space-x-0">
          <button className="w-15 py-1 text-[#7209b7] hover:text-[#4361ee] cursor-pointer">
            Login
          </button>
          <Button buttontext="Register" />
        </div>
      </div>
    </header>
  );
}
