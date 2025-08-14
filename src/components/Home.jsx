import Header from "./Header";
import Footer from "./Footer";
import ColorPicker from "./Colorpicker";
import PaletteOptions from "./PaletteOptions";
import ColorPalette from "./ColorPalette";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="grid grid-cols-2 gap-10">
            <div className="p-10 border border-gray-300 shadow-lg rounded-xl">
              <ColorPicker />
            </div>
            <div className="p-10 border border-gray-300 shadow-lg rounded-xl">
              <PaletteOptions />
              <div className="mt-8 flex justify-center">
                <ColorPalette />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
