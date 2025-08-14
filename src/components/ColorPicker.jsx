/* Code gotten from https://uiwjs.github.io/react-color/#/wheel */

import React, { useState, Fragment } from "react";
import Wheel from "@uiw/react-color-wheel";
import ShadeSlider from "@uiw/react-color-shade-slider";
import { hsvaToHex } from "@uiw/color-convert";

function Demo() {
  const [hsva, setHsva] = useState({ h: 214, s: 43, v: 90, a: 1 });
  return (
    <Fragment>
      <Wheel
        color={hsva}
        onChange={(color) => setHsva({ ...hsva, ...color.hsva })}
      />
      <ShadeSlider
        hsva={hsva}
        style={{ width: 210, marginTop: 20 }}
        onChange={(newShade) => {
          setHsva({ ...hsva, ...newShade });
        }}
      />
      <div
        style={{
          width: "100%",
          height: 34,
          marginTop: 20,
          background: hsvaToHex(hsva),
        }}
      ></div>
    </Fragment>
  );
}

export default Demo;
