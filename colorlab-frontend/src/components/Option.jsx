export default function Option({ title, description, isSelected, onClick }) {
  return (
    <div
      role="button"
      className={`p-1 transition-colors cursor-pointer rounded-lg ${
        isSelected ? "bg-gray-200" : "hover:bg-gray-100"
      }`}
      onClick={onClick}
    >
      <p className="text-gray-800 font-medium">{title}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
