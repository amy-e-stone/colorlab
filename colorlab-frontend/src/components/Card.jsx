export default function Card({ children }) {
  return (
    <div className="w-full p-10 my-5 border border-gray-300 shadow-lg rounded-xl">
      {children}
    </div>
  );
}
