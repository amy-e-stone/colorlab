export default function Palette() {
  return (
    <div
      className="rounded-md overflow-hidden"
      style={{ height: 120, width: 400 }}
    >
      <div className="grid grid-cols-5 h-full">
        <div style={{ backgroundColor: "#aaaaaa" }} />
        <div style={{ backgroundColor: "#bbbbbb" }} />
        <div style={{ backgroundColor: "#cccccc" }} />
        <div style={{ backgroundColor: "#dddddd" }} />
        <div style={{ backgroundColor: "#eeeeee" }} />
      </div>
    </div>
  );
}
