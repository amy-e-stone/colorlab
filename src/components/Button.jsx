export default function Button({ buttontext }) {
  return (
    <button className="w-24 py-1 bg-[#7209b7] text-gray-100 font-semibold rounded-full duration-300 hover:bg-[#4361ee] cursor-pointer">
      {buttontext}
    </button>
  );
}
