export default function Option({ title, description }) {
  return (
    <div
      role="button"
      className="cursor-pointer rounded-lg hover:bg-gray-100 transition-colors p-1"
    >
      <p className="font-medium text-gray-800">{title}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
