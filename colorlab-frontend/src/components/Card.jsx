export default function Card({ children }) {
  return (
    <div className="p-10 my-5 border border-gray-300 shadow-lg rounded-xl w-full">
      {children}
    </div>
  );
}
