/* See documentation https://uiwjs.github.io/react-color/#/convert */

import { hsvaToHex } from "@uiw/color-convert";

export default function ColorDisplay({ hsva }) {
  return (
    <div className="flex justify-center mt-5 mb-10">
      <div
        className="h-[200px] w-[180px] rounded sm:w-[320px] md:w-[360px]"
        style={{
          background: hsvaToHex(hsva),
        }}
      />
    </div>
  );
}
