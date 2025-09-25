/* Base code gotten from https://uiwjs.github.io/react-color/#/wheel */

import { useState, Fragment } from "react";
import Wheel from "@uiw/react-color-wheel";
import ShadeSlider from "@uiw/react-color-shade-slider";
import HexInput from "./HexInput";
import RgbInput from "./RgbInput";
import HslInput from "./HslInput";
import ColorDisplay from "./ColorDisplay";
import ColorValueDisplay from "./ColorValueDisplay";

function ColorPicker() {
  const [hsva, setHsva] = useState({ h: 214, s: 43, v: 90 });
  return (
    <Fragment>
      <div className="w-fit mx-auto text-center">
        <h1 className="text-2xl mb-10 mt-10">Pick a color to get started!</h1>
        <HexInput setHsva={setHsva} />
        <RgbInput setHsva={setHsva} />
        <HslInput setHsva={setHsva} />
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
        <ColorDisplay hsva={hsva} />
        <ColorValueDisplay hsva={hsva} />
      </div>
    </Fragment>
  );
}

export default ColorPicker;
