/* See documentation https://uiwjs.github.io/react-color/#/convert */

import { hexToHsva } from "@uiw/color-convert";

export default function HexInput({ setHsva }) {
  return (
    <div className="w-full mx-auto max-w-xs sm:max-w-sm">
      <input
        name="hex"
        type="text"
        className="px-2 py-1 mb-4 text-sm border sm:px-3 sm:py-2 sm:text-base"
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
