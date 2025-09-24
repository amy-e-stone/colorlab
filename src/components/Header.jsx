import Logo from "./Logo";
import Button from "./Button";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-100">
      <Logo />
      <div className="space-x-3">
        <button className="w-24 py-1 text-[#7209b7] hover:text-[#4361ee] cursor-pointer">
          Login
        </button>
        <Button buttontext="Register" />
      </div>
    </header>
  );
}
