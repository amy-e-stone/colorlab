import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";
import ColorPalette from "../components/ColorPalette";

export default function UserAccount() {
  const [palettes, setPalettes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // TODO: Fetch user's palettes from backend using stored JWT token

    // Simulate fetching with dummy palettes
    setTimeout(() => {
      setPalettes([
        {
          id: 1,
          name: "Sunset",
          colors: ["#ff5733", "#ff8d1a", "#ffd300", "#ffb347", "#ffcccb"],
        },
        {
          id: 2,
          name: "Ocean",
          colors: ["#001f3f", "#0074D9", "#7FDBFF", "#39CCCC", "#3D9970"],
        },
      ]);
      setLoading(false);
    }, 500); // simulate network delay
  }, []);

  const handleDelete = (id) => {
    // TODO: Send DELETE request to backend to delete palette by ID
  };

  const handleAddNew = () => {
    navigate("/ColorLab");
  };

  if (loading) return <div className="p-10">Loading palettes...</div>;

  return (
    <div className="flex flex-col items-center px-4 py-10 min-h-screen">
      <h2 className="mb-6 text-2xl">Your Saved Palettes</h2>
      {palettes.length === 0 ? (
        <p className="mb-6 text-gray-600">
          You haven't saved any palettes yet.
        </p>
      ) : (
        palettes.map((palette) => (
          <Card key={palette.id}>
            <h3 className="mb-2 text-lg font-semibold">{palette.name}</h3>
            <ColorPalette colors={palette.colors} />
            <div className="mt-4">
              <Button
                buttontext="Delete"
                onClick={() => handleDelete(palette.id)}
              />
            </div>
          </Card>
        ))
      )}
      <div className="mt-6">
        <Button buttontext="Add New Palette" onClick={handleAddNew} />
      </div>
    </div>
  );
}
