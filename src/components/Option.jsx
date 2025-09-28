export default function Option({ title, description, isSelected, onClick }) {
  return (
    <div
      role="button"
      className={`cursor-pointer rounded-lg transition-colors p-1 ${
        isSelected ? "bg-gray-200" : "hover:bg-gray-100"
      }`}
      onClick={onClick}
    >
      <p className="font-medium text-gray-800">{title}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
