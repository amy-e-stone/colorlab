import { useState } from "react";
import ColorPicker from "./ColorPicker";
import PaletteOptions from "./PaletteOptions";

export default function Home() {
  const [hsva, setHsva] = useState({ h: 214, s: 43, v: 90 });
  const [selectedOption, setSelectedOption] = useState("");
  const [generatedColors, setGeneratedColors] = useState([]);
  return (
    <div className="flex flex-col">
      <main className="flex flex-grow px-4 items-center mt-10 sm:mt-15">
        <div className="grid grid-cols-1 w-full max-w-6xl mx-auto gap-6 md:grid-cols-2 md:gap-10">
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
