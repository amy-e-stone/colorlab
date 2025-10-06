/* See documentation https://uiwjs.github.io/react-color/#/convert */

import { hexToHsva } from "@uiw/color-convert";

export default function HexInput({ setHsva }) {
  return (
    <div className="w-full max-w-xs sm:max-w-sm mx-auto">
      <input
        name="hex"
        type="text"
        className="border px-2 py-1 mb-4 text-sm sm:text-base sm:px-3 sm:py-2"
        placeholder="#000000"
        onChange={(event) => {
          const val = event.target.value;
          if (/^#?[0-9A-Fa-f]{6}$/.test(val)) {
            const hex = val.startsWith("#") ? val : `#${val}`;
            const newHsva = hexToHsva(hex);
            setHsva(newHsva);
          }
        }}
      />
    </div>
  );
}
