import { useNavigate } from "react-router-dom";

export default function Button({ buttontext, onClick, to }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className="px-3 py-1 bg-[#7209b7] text-gray-100 font-semibold rounded-full hover:bg-[#4361ee] duration-300 cursor-pointer"
    >
      {buttontext}
    </button>
  );
}
