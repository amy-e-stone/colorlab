/* See documentation https://uiwjs.github.io/react-color/#/convert */

import { hsvaToHex } from "@uiw/color-convert";

export default function ColorDisplay({ hsva }) {
  return (
    <div className="flex justify-center mt-5 mb-10">
      <div
        className="w-[260px] sm:w-[320px] md:w-[360px] h-[200px] rounded"
        style={{
          background: hsvaToHex(hsva),
        }}
      />
    </div>
  );
}
