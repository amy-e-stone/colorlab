/* See documentation https://uiwjs.github.io/react-color/#/convert */

import { hsvaToHex, hsvaToRgba, hsvaToHsla } from "@uiw/color-convert";

export default function ColorDisplay({ hsva }) {
  return (
    <div className="w-fit mx-auto mt-4 mb-10 text-left text-sm text-gray-800">
      <p>
        <span className="font-medium">HEX:</span>{" "}
        {hsvaToHex(hsva).toUpperCase()}
      </p>
      <p>
        <span className="font-medium">RGB:</span>{" "}
        {(() => {
          const { r, g, b } = hsvaToRgba(hsva);
          return `${r}, ${g}, ${b}`;
        })()}
      </p>
      <p>
        <span className="font-medium">HSL:</span>{" "}
        {(() => {
          const { h, s, l } = hsvaToHsla(hsva);
          const hsl = `${Math.round(h)}, ${s.toFixed(0)}%, ${l.toFixed(0)}%`;
          return hsl;
        })()}
      </p>
    </div>
  );
}
