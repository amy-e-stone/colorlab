/* See documentation https://uiwjs.github.io/react-color/#/convert */

import { hslaToHsva } from "@uiw/color-convert";

export default function HslInput({ setHsva }) {
  return (
    <div className="w-full max-w-xs mx-auto sm:max-w-sm">
      <input
        name="hsl"
        type="text"
        className="px-2 py-1 mb-4 text-sm border sm:px-3 sm:py-2 sm:text-base"
        placeholder="H, S%, L%"
        onChange={(event) => {
          const val = event.target.value;
          const match = val.match(/^(\d{1,3}),\s*(\d{1,3})%?,\s*(\d{1,3})%?$/);
          // If the returned array is not null ...
          if (match) {
            // match returns an array so destructuring is position-based - with the first element being the full match, followed by the components of the match
            const [fullMatch, hStr, sStr, lStr] = match;
            const h = Number(hStr);
            const s = Number(sStr);
            const l = Number(lStr);
            // Ensure all values are within valid HSL ranges (not all have the same range, so we do not apply a callback function here)
            if (
              h >= 0 &&
              h <= 360 &&
              s >= 0 &&
              s <= 100 &&
              l >= 0 &&
              l <= 100
            ) {
              const newHsva = hslaToHsva({ h, s, l });
              setHsva(newHsva);
            }
          }
        }}
      />
    </div>
  );
}
