import { hexToHsva } from "@uiw/color-convert";

export default function HexInput({ setHsva }) {
  return (
    <div className="w-[360px] mx-auto">
      <input
        name="hex"
        type="text"
        className="border px-2 py-1 mb-4"
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
