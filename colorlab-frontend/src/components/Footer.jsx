import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-gray-100 p-4 text-sm text-gray-600">
      <div className="max-w-6xl mx-auto flex items-center justify-center space-x-2 text-center flex-wrap">
        <span>© {new Date().getFullYear()}</span>
        <Logo height={20} />
        <span>— Designed & coded by Amy Stone</span>
      </div>
    </footer>
  );
}
