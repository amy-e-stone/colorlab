import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="p-4 text-sm bg-gray-100 text-gray-600">
      <div className="flex flex-wrap max-w-6xl mx-auto items-center justify-center space-x-2 text-center">
        <span>© {new Date().getFullYear()}</span>
        <Logo height={20} />
        <span>— Designed & coded by Amy Stone</span>
      </div>
    </footer>
  );
}
