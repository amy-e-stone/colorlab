/* Base code gotten from https://uiwjs.github.io/react-color/#/wheel */

import { useState, Fragment } from "react";
import Wheel from "@uiw/react-color-wheel";
import ShadeSlider from "@uiw/react-color-shade-slider";
import {
  hsvaToHex,
  hsvaToRgba,
  hsvaToHsla,
  hexToHsva,
} from "@uiw/color-convert";

function Demo() {
  const [hsva, setHsva] = useState({ h: 214, s: 43, v: 90 });
  return (
    <Fragment>
      <div className="w-fit mx-auto text-center">
        <h1 className="text-2xl mb-10 mt-10">Pick a color to get started!</h1>

        {/* HEX user input */}
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

        <Wheel
          className="cursor-pointer"
          width={360}
          height={360}
          color={hsva}
          onChange={(color) => setHsva({ ...hsva, ...color.hsva })}
        />
        <ShadeSlider
          className="cursor-pointer"
          hsva={hsva}
          style={{ width: 360, marginTop: 20 }}
          onChange={(newShade) => {
            setHsva({ ...hsva, ...newShade });
          }}
        />
        {/* Color display */}
        <div
          className="mb-10"
          style={{
            width: "360px",
            height: 200,
            marginTop: 20,
            background: hsvaToHex(hsva),
          }}
        ></div>
        {/* Color values display */}
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
              const hsl = `${Math.round(h)}, ${s.toFixed(0)}%, ${l.toFixed(
                0
              )}%`;
              return hsl;
            })()}
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default Demo;
