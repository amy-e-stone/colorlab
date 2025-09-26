import Button from "./Button";
import Card from "./Card";
import ColorPalette from "./ColorPalette";
import { Fragment } from "react";
import Option from "./Option";

export default function PaletteOptions({
  hsva,
  selectedOption,
  setSelectedOption,
}) {
  return (
    <Fragment>
      <Card>
        <div className="w-fit mx-auto text-center">
          <h1 className="text-2xl mb-8 mt-10">Choose a palette option ...</h1>
          <div className="text-left space-y-1">
            <Option
              title="Monochromatic"
              description="One hue with varying shades, tints, and tones"
              isSelected={selectedOption === "Monochromatic"}
              onClick={() => setSelectedOption("Monochromatic")}
            />
            <Option
              title="Analogous"
              description="Colors next to each other on the wheel"
              isSelected={selectedOption === "Analogous"}
              onClick={() => setSelectedOption("Analogous")}
            />
            <Option
              title="Complementary"
              description="Opposite colors on the wheel"
              isSelected={selectedOption === "Complementary"}
              onClick={() => setSelectedOption("Complementary")}
            />
            <Option
              title="Split Complementary"
              description="Base color plus two adjacent to its complement"
              isSelected={selectedOption === "Split Complementary"}
              onClick={() => setSelectedOption("Split Complementary")}
            />
            <Option
              title="Triadic"
              description="Three evenly spaced colors"
              isSelected={selectedOption === "Triadic"}
              onClick={() => setSelectedOption("Triadic")}
            />
            <Option
              title="Tetradic"
              description="Two complementary pairs"
              isSelected={selectedOption === "Tetradic"}
              onClick={() => setSelectedOption("Tetradic")}
            />
            <Option
              title="Square"
              description="Four evenly spaced colors"
              isSelected={selectedOption === "Square"}
              onClick={() => setSelectedOption("Square")}
            />
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
