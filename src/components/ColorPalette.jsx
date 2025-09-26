export default function ColorPalette({ colors = [] }) {
  return (
    <div
      className="rounded-md overflow-hidden"
      style={{ height: 120, width: 400 }}
    >
      <div className="grid grid-cols-5 h-full">
        <div style={{ backgroundColor: colors[0] || "#aaaaaa" }} />
        <div style={{ backgroundColor: colors[1] || "#bbbbbb" }} />
        <div style={{ backgroundColor: colors[2] || "#cccccc" }} />
        <div style={{ backgroundColor: colors[3] || "#dddddd" }} />
        <div style={{ backgroundColor: colors[4] || "#eeeeee" }} />
      </div>
    </div>
  );
}
