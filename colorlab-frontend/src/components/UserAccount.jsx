import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";
import ColorPalette from "../components/ColorPalette";
import axios from "axios";

export default function UserAccount() {
  const [palettes, setPalettes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const BASE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchPalettes = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const response = await axios.get(`${BASE_URL}/palettes`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPalettes(response.data);
      } catch (err) {
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPalettes();
  }, []);

  const handleAddNew = () => {
    navigate("/");
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const response = await axios.delete(`${BASE_URL}/palettes/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        setPalettes((prev) => prev.filter((palette) => palette.id !== id));
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  if (loading) return <div className="p-10">Loading palettes...</div>;

  return (
    <div className="flex flex-col items-center px-4 py-10 max-w-[870px] mx-auto">
      <h2 className="mb-6 sm:text-xl">Your Saved Palettes</h2>
      {palettes.length === 0 ? (
        <p className="mb-6 text-gray-600">
          You haven't saved any palettes yet.
        </p>
      ) : (
        palettes.map((palette) => (
          <Card key={palette.id}>
            <h3 className="mb-2 font-semibold md:text-lg">{palette.name}</h3>
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
      <div className="mt-6 mb-15">
        <Button buttontext="Add New Palette" onClick={handleAddNew} />
      </div>
    </div>
  );
}
