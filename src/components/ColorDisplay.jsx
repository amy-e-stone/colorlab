import { hsvaToHex } from "@uiw/color-convert";

export default function ColorDisplay({ hsva }) {
  return (
    <div
      className="mb-10"
      style={{
        width: "360px",
        height: 200,
        marginTop: 20,
        background: hsvaToHex(hsva),
      }}
    ></div>
  );
}
