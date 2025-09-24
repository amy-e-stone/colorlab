import Button from "./Button";

export default function PaletteOptions() {
  return (
    <>
      <div className="w-fit mx-auto text-center">
        <h1 className="text-2xl mb-8 mt-10">Choose a palette option ...</h1>
        <div className="text-left space-y-1">
          <div
            role="button"
            className="cursor-pointer rounded-lg hover:bg-gray-100 transition-colors p-1"
          >
            <p className="font-medium text-gray-800">Monochromatic</p>
            <p className="text-gray-600">
              One hue with varying shades, tints, and tones
            </p>
          </div>
          <div
            role="button"
            className="cursor-pointer rounded-lg hover:bg-gray-100 transition-colors p-1"
          >
            <p className="font-medium text-gray-800">Analogous</p>
            <p className="text-gray-600">
              Colors next to each other on the wheel
            </p>
          </div>
          <div
            role="button"
            className="cursor-pointer rounded-lg hover:bg-gray-100 transition-colors p-1"
          >
            <p className="font-medium text-gray-800">Complementary</p>
            <p className="text-gray-600">Opposite colors on the wheel</p>
          </div>
          <div
            role="button"
            className="cursor-pointer rounded-lg hover:bg-gray-100 transition-colors p-1"
          >
            <p className="font-medium text-gray-800">Split Complementary</p>
            <p className="text-gray-600">
              Base color plus two adjacent to its complement
            </p>
          </div>
          <div
            role="button"
            className="cursor-pointer rounded-lg hover:bg-gray-100 transition-colors p-1"
          >
            <p className="font-medium text-gray-800">Triadic</p>
            <p className="text-gray-600">Three evenly spaced colors</p>
          </div>
          <div
            role="button"
            className="cursor-pointer rounded-lg hover:bg-gray-100 transition-colors p-1"
          >
            <p className="font-medium text-gray-800">Tetradic</p>
            <p className="text-gray-600">Two complementary pairs</p>
          </div>
          <div
            role="button"
            className="cursor-pointer rounded-lg hover:bg-gray-100 transition-colors p-1"
          >
            <p className="font-medium text-gray-800">Square</p>
            <p className="text-gray-600">Four evenly spaced colors</p>
          </div>
        </div>
        <div className="mt-5">
          <Button buttontext="Generate" />
        </div>
      </div>
    </>
  );
}
