import { useState } from "react";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle login logic
    console.log("Logging in with:", { email, password });
  };

  return (
    <div className="flex flex-col min-h-screen px-10">
      <main className="flex-grow">
        <div className="max-w-md mx-auto mt-20 p-10 border border-gray-300 shadow-lg rounded-xl w-full">
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
              className="w-full bg-[#7209b7] text-white py-2 rounded hover:bg-[#4361ee]"
            >
              Log In
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
