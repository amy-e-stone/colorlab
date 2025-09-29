import { generatePalette } from "./utils";
import Button from "./Button";
import Card from "./Card";
import ColorPalette from "./ColorPalette";
import Option from "./Option";

export default function PaletteOptions({
  hsva,
  selectedOption,
  setSelectedOption,
  generatedColors,
  setGeneratedColors,
}) {
  return (
    <Card>
      <div className="text-center">
        <h1 className="text-xl sm:text-2xl mb-6 sm:mb-8 mt-6 sm:mt-10">Choose a palette option:</h1>
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
        <div className="mt-15 mb-10">
          <Button
            buttontext="Generate"
            onClick={() => {
              const baseColor = hsva;
              const palette = generatePalette(baseColor, selectedOption);
              setGeneratedColors(palette);
            }}
          />
        </div>
        <div className="mt-17">
          <ColorPalette colors={generatedColors} />
        </div>
      </div>
    </Card>
  );
}
