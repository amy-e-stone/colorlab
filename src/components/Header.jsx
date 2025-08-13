import Logo from "./Logo";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-100">
      <Logo />
      <div className="space-x-3">
        <button className="w-24 py-1 text-[#7209b7] hover:text-[#4361ee]">
          Login
        </button>
        <button className="w-24 py-1 bg-[#7209b7] text-gray-100 rounded-full transform-gpu will-change-transform transition delay-150 duration-300 ease-in-out hover:scale-110 hover:bg-[#4361ee]">
          Register
        </button>
      </div>
    </header>
  );
}
