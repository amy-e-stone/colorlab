import { Fragment, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ColorPicker from "./Colorpicker";
import PaletteOptions from "./PaletteOptions";

export default function Home() {
  const [hsva, setHsva] = useState({ h: 214, s: 43, v: 90 });
  const [selectedOption, setSelectedOption] = useState("");
  const [generatedColors, setGeneratedColors] = useState([]);

  return (
    <Fragment>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="grid grid-cols-2 gap-10">
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
        <Footer />
      </div>
    </Fragment>
  );
}
