import { Fragment } from "react";

export default function ColorPalette({ colors }) {
  return (
    <div
      className="rounded-md overflow-hidden"
      style={{ height: 120, width: 400 }}
    >
      <div
        className="grid h-full"
        style={{ gridTemplateColumns: `repeat(${colors.length}, 1fr)` }} // repeat(count, size)
      >
        {colors.length > 0 && (
          <Fragment>
            {colors[0] && <div style={{ backgroundColor: colors[0] }} />}
            {colors[1] && <div style={{ backgroundColor: colors[1] }} />}
            {colors[2] && <div style={{ backgroundColor: colors[2] }} />}
            {colors[3] && <div style={{ backgroundColor: colors[3] }} />}
            {colors[4] && <div style={{ backgroundColor: colors[4] }} />}
          </Fragment>
        )}
      </div>
    </div>
  );
}
