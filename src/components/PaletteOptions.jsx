import Button from "./Button";
import Card from "./Card";
import ColorPalette from "./ColorPalette";
import { Fragment } from "react";
import Option from "./Option";

export default function PaletteOptions() {
  return (
    <Fragment>
      <Card>
        <div className="w-fit mx-auto text-center">
          <h1 className="text-2xl mb-8 mt-10">Choose a palette option ...</h1>
          <div className="text-left space-y-1">
            <Option
              title="Monochromatic"
              description="One hue with varying shades, tints, and tones"
            />
            <Option
              title="Analogous"
              description="Colors next to each other on the wheel"
            />
            <Option
              title="Complementary"
              description="Opposite colors on the wheel"
            />
            <Option
              title="Split Complementary"
              description="Base color plus two adjacent to its complement"
            />
            <Option title="Triadic" description="Three evenly spaced colors" />
            <Option title="Tetradic" description="Two complementary pairs" />
            <Option title="Square" description="Four evenly spaced colors" />
          </div>
          <div className="mt-5">
            <Button buttontext="Generate" />
          </div>
          <div className="mt-5">
            <ColorPalette />
          </div>
        </div>
      </Card>
    </Fragment>
  );
}
