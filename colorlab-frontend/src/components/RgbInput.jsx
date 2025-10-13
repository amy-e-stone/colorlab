/* See documentation https://uiwjs.github.io/react-color/#/convert */

import { rgbaToHsva } from "@uiw/color-convert";

export default function RgbInput({ setHsva }) {
  return (
    <div className="w-full max-w-xs mx-auto sm:max-w-sm">
      <input
        name="rgb"
        type="text"
        className="px-2 py-1 mb-4 text-sm border sm:px-3 sm:py-2 sm:text-base"
        placeholder="R, G, B"
        onChange={(event) => {
          const val = event.target.value;
          const match = val.match(/^(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})$/);
          // If the returned array is not null ...
          if (match) {
            // match returns an array so destructuring is position-based - with the first element being the full match, followed by the components of the match
            const [fullMatch, rStr, gStr, bStr] = match;
            const r = Number(rStr);
            const g = Number(gStr);
            const b = Number(bStr);
            // Ensure all values are within valid RGB range
            // Callback function where the function passed as the param is run for every element in the array literal
            if ([r, g, b].every((n) => n >= 0 && n <= 255)) {
              const newHsva = rgbaToHsva({ r, g, b });
              setHsva(newHsva);
            }
          }
        }}
      />
    </div>
  );
}
