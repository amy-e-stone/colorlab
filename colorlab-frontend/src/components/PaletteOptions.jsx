import { generatePalette } from "./utils";
import Button from "./Button";
import Card from "./Card";
import ColorPalette from "./ColorPalette";
import Option from "./Option";
import { useState } from "react";

export default function PaletteOptions({
  hsva,
  selectedOption,
  setSelectedOption,
  generatedColors,
  setGeneratedColors,
}) {
  const [paletteName, setPaletteName] = useState("");
  const handleSave = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;
    const payload = {
      name: paletteName || "Untitled Palette",
      colors: generatedColors,
    };

    try {
      // const res = await axios.post("http://localhost:8080/palettes", payload, {
      const res = await axios.post(
        "https://colorlab-3c35c0233d02.herokuapp.com/palettes",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      alert("Palette saved!");
    } catch (err) {
      console.error("Error saving palette:", err);
    }
  };

  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <Card>
      <div className="text-center">
        <h1 className="mb-6 mt-6 sm:mb-8 sm:mt-10 sm:text-xl">
          Choose a palette option:
        </h1>
        <div className="space-y-1 text-left text-sm sm:text-md">
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
        <div className="mt-7">
          <Button
            buttontext="Generate"
            onClick={() => {
              const baseColor = hsva;
              const palette = generatePalette(baseColor, selectedOption);
              setGeneratedColors(palette);
            }}
          />
        </div>
        <div className="mt-7">
          <ColorPalette colors={generatedColors} />
        </div>

        {isLoggedIn && generatedColors.length > 0 && (
          <div className="mt-15 space-y-2">
            <div className="flex justify-center">
              <input
                type="text"
                placeholder="Name your palette"
                value={paletteName}
                onChange={(e) => setPaletteName(e.target.value)}
                className="flex px-2 py-1 mb-4 text-sm border sm:px-3 sm:py-2 sm:text-base"
              />
            </div>
            <Button buttontext="Save Palette" onClick={handleSave} />
          </div>
        )}
      </div>
    </Card>
  );
}
