import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="flex justify-center space-x-2 bg-gray-100 p-4 text-sm text-gray-600">
      <span>© {new Date().getFullYear()}</span>
      <Logo height={20} />
      <span>— Designed & coded by Amy Stone</span>
    </footer>
  );
}
