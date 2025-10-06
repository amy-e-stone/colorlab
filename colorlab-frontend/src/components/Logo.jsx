export default function Logo({ height = 40 }) {
  return (
    <div className="flex items-center" style={{ height }}>
      <div
        className="rounded-md overflow-hidden"
        style={{ height: "100%", width: height * 1.5 }}
      >
        <div className="grid grid-cols-4 h-full">
          <div className="bg-[#f72585]" />
          <div className="bg-[#7209b7]" />
          <div className="bg-[#3a0ca3]" />
          <div className="bg-[#4361ee]" />
        </div>
      </div>
      <h1
        className="font-bold"
        style={{ marginLeft: height * 0.25, fontSize: height * 0.6 }}
      >
        ColorLab
      </h1>
    </div>
  );
}
