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
  
  // Analogous - Colors next to each other on the wheel
  } else if (option === "Analogous") {
    const { h, s, v } = hsva;
    return [
      { h: (h + 60) % 360, s, v },
      { h: (h + 30) % 360, s, v },
      { h, s, v },
      { h: (h - 30 + 360) % 360, s, v },
      { h: (h - 60 + 360) % 360, s, v },
    ].map((color) => hsvaToHex(color));
  
  // Complementary - Opposite colors on the wheel
  } else if (option === "Complementary") {
    const { h, s, v } = hsva;
    return [
      { h, s, v },
      { h: (h + 180) % 360, s, v },
    ].map((color) => hsvaToHex(color));

  // Split Complementary - Base color plus two adjacent to its complement
  } else if (option === "Split Complementary") {
    const { h, s, v } = hsva;
    return [        
      { h, s, v },          
      { h: (h + 150) % 360, s, v },  
      { h: (h - 150 + 360) % 360, s, v },  
    ].map((color) => hsvaToHex(color));
  
  // Triadic - Three evenly spaced colors
  } else if (option === "Triadic") {
    const { h, s, v } = hsva;
    return [
      { h, s, v },
      { h: (h + 120) % 360, s, v },
      { h: (h + 240) % 360, s, v },
    ].map((color) => hsvaToHex(color));

  // Tetradic - Two complementary pairs
  } else if (option === "Tetradic") {
    const { h, s, v } = hsva;
    return [
      { h, s, v },
      { h: (h + 180) % 360, s, v },
      { h: (h + 60) % 360, s, v },
      { h: (h + 240) % 360, s, v },
    ].map((color) => hsvaToHex(color));

  // Square - Four evenly spaced colors
  } else if (option === "Square") {
    const { h, s, v } = hsva;
    const h2 = (h + 90) % 360;
    const h3 = (h + 180) % 360;
    const h4 = (h + 270) % 360;
    return [
      { h, s, v },
      { h: h2, s, v },
      { h: h3, s, v },
      { h: h4, s, v },
    ].map((color) => hsvaToHex(color));
  }

  // Greyscale default (fallback)
  return ["#aaaaaa", "#bbbbbb", "#cccccc", "#dddddd", "#eeeeee"];
}
