export default function Card({ children }) {
  return (
    <div className="p-10 border border-gray-300 shadow-lg rounded-xl">
      <div className="w-fit mx-auto text-center">{children}</div>
    </div>
  );
}
