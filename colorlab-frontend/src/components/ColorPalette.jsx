import { Fragment } from "react";

export default function ColorPalette({ colors }) {
  return (
    <div className="flex flex-col items-center">
      {/* Generated color palette */}
      <div
        className="w-full max-w-[400px] rounded-md overflow-hidden"
        style={{ height: 120 }}
      >
        <div
          className="grid h-full"
          style={{ gridTemplateColumns: `repeat(${colors.length}, 1fr)` }} // repeat(count, size)
        >
          {colors.length > 0 && (
            <Fragment>
              {/* Tailwind can’t generate utility classes at runtime. */}
              {colors[0] && <div style={{ backgroundColor: colors[0] }} />}
              {colors[1] && <div style={{ backgroundColor: colors[1] }} />}
              {colors[2] && <div style={{ backgroundColor: colors[2] }} />}
              {colors[3] && <div style={{ backgroundColor: colors[3] }} />}
              {colors[4] && <div style={{ backgroundColor: colors[4] }} />}
            </Fragment>
          )}
        </div>
      </div>
      {/* Hex values below */}
      {colors.length > 0 && (
        <div
          className="grid w-full max-w-[400px] mt-2 text-center text-[10px] text-gray-800 lg:text-[14px]"
          style={{ gridTemplateColumns: `repeat(${colors.length}, 1fr)` }}
        >
          {colors[0] && <p>{colors[0].toUpperCase()}</p>}
          {colors[1] && <p>{colors[1].toUpperCase()}</p>}
          {colors[2] && <p>{colors[2].toUpperCase()}</p>}
          {colors[3] && <p>{colors[3].toUpperCase()}</p>}
          {colors[4] && <p>{colors[4].toUpperCase()}</p>}
        </div>
      )}
    </div>
  );
}
