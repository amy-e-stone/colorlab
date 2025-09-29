/* Base code gotten from https://uiwjs.github.io/react-color/#/wheel */

import Wheel from "@uiw/react-color-wheel";
import ShadeSlider from "@uiw/react-color-shade-slider";
import HexInput from "./HexInput";
import RgbInput from "./RgbInput";
import HslInput from "./HslInput";
import ColorDisplay from "./ColorDisplay";
import ColorValueDisplay from "./ColorValueDisplay";
import Card from "./Card";

function ColorPicker({ hsva, setHsva }) {
  return (
    <Card>
      <div className="text-center">
        <h1 className="text-xl sm:text-2xl mb-6 sm:mb-10 mt-6 sm:mt-10">
          Pick a color to get started!
        </h1>
        <HexInput setHsva={setHsva} />
        <RgbInput setHsva={setHsva} />
        <HslInput setHsva={setHsva} />
        <div className="mx-auto w-full max-w-[260px] sm:max-w-[320px] md:max-w-[360px]">
          <Wheel
            className="cursor-pointer mx-auto"
            width={260}
            height={260}
            color={hsva}
            onChange={(color) => setHsva({ ...hsva, ...color.hsva })}
          />
        </div>
        <div className="mx-auto w-full max-w-[260px] sm:max-w-[320px] md:max-w-[360px] mt-5">
          <ShadeSlider
            className="cursor-pointer"
            hsva={hsva}
            style={{ width: "100%" }}
            onChange={(newShade) => setHsva({ ...hsva, ...newShade })}
          />
        </div>
        <ColorDisplay hsva={hsva} />
        <ColorValueDisplay hsva={hsva} />
      </div>
    </Card>
  );
}

export default ColorPicker;
