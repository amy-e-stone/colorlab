import { useState } from "react";
import ColorPicker from "./ColorPicker";
import PaletteOptions from "./PaletteOptions";

export default function Home() {
  const [hsva, setHsva] = useState({ h: 214, s: 43, v: 90 });
  const [selectedOption, setSelectedOption] = useState("");
  const [generatedColors, setGeneratedColors] = useState([]);
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow px-4 flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 w-full max-w-6xl mx-auto">
          <ColorPicker hsva={hsva} setHsva={setHsva} />
          <PaletteOptions
            hsva={hsva}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            generatedColors={generatedColors}
            setGeneratedColors={setGeneratedColors}
          />
        </div>
      </main>
    </div>
  );
}
