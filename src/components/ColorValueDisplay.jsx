import { hsvaToHex, hsvaToRgba, hsvaToHsla } from "@uiw/color-convert";

export default function ColorDisplay({ hsva }) {
  return (
    <div className="mt-4 text-left text-sm">
      <p>
        <strong>HEX:</strong> {hsvaToHex(hsva).toUpperCase()}
      </p>
      <p>
        <strong>RGB:</strong>{" "}
        {(() => {
          const { r, g, b } = hsvaToRgba(hsva);
          return `${r}, ${g}, ${b}`;
        })()}
      </p>
      <p>
        <strong>HSL:</strong>{" "}
        {(() => {
          const { h, s, l } = hsvaToHsla(hsva);
          const hsl = `${Math.round(h)}, ${s.toFixed(0)}%, ${l.toFixed(0)}%`;
          return hsl;
        })()}
      </p>
    </div>
  );
}
