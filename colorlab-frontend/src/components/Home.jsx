import { useState } from "react";
import ColorPicker from "./ColorPicker";
import PaletteOptions from "./PaletteOptions";

export default function Home() {
  const [hsva, setHsva] = useState({ h: 214, s: 43, v: 90 });
  const [selectedOption, setSelectedOption] = useState("");
  const [generatedColors, setGeneratedColors] = useState([]);
  return (
    <div className="flex flex-col">
      <main className="flex flex-grow items-center px-5 mt-5 mb-15 md:mt-10">
        <div className="grid grid-cols-1 w-full max-w-6xl mx-auto md:grid-cols-2 md:gap-5">
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
