import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response = await axios.post("http://localhost:8080/auth/login", {
      const response = await axios.post(
        "https://colorlab-3c35c0233d02.herokuapp.com/auth/login",
        {
          username: email,
          password,
        }
      );
      const data = response.data;
      localStorage.setItem("token", data.token);
      navigate("/account");
    } catch (error) {
      console.error(error);
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="flex flex-col px-10">
      <main className="flex-grow">
        <div className="w-full max-w-md mx-auto mt-20 p-10 border border-gray-300 shadow-lg rounded-xl">
          <h2 className="text-md mb-4 sm:text-xl">Log In</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full py-2 bg-[#7209b7] text-white rounded hover:bg-[#4361ee]"
            >
              Log In
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
