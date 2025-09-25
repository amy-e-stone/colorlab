import { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ColorPicker from "./Colorpicker";
import PaletteOptions from "./PaletteOptions";

export default function Home() {
  return (
    <Fragment>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="grid grid-cols-2 gap-10">
            <ColorPicker />
            <PaletteOptions />
          </div>
        </main>
        <Footer />
      </div>
    </Fragment>
  );
}
