import { hsvaToHex } from '@uiw/react-color';

export function generatePalette(hsva, option) {

  // Monochromatic - One hue with varying shades, tints, and tones
  if (option === "Monochromatic") {
    const { h, s } = hsva;
    // Adjusts the brightness by 20 for each color
    return [
      { h, s, v: 20 },
      { h, s, v: 40 },
      { h, s, v: 60 },
      { h, s, v: 80 },
      { h, s, v: 100 },
    ].map((color) => hsvaToHex(color)); // Convert to hex for color palette on UI
  }

  // Greyscale default (fallback)
  return ["#aaaaaa", "#bbbbbb", "#cccccc", "#dddddd", "#eeeeee"];
}
