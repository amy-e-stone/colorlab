/* Base code gotten from https://uiwjs.github.io/react-color/#/wheel */

import React, { useState, Fragment } from "react";
import Wheel from "@uiw/react-color-wheel";
import ShadeSlider from "@uiw/react-color-shade-slider";
import {
  hsvaToHex,
  hsvaToRgba,
  hsvaToHsla
} from "@uiw/color-convert";

function Demo() {
  const [hsva, setHsva] = useState({ h: 214, s: 43, v: 90, a: 1 });
  return (
    <Fragment>
      <div className="w-fit mx-auto text-center">
        <h1 className="text-2xl mb-10 mt-10">Pick a color to get started!</h1>
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
