import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirm) {
      alert("Passwords do not match.");
      return;
    }
    // TODO: Handle registration logic
    console.log("Registering:", { email, password });
  };

  return (
    <div className="flex flex-col min-h-screen px-10">
      <main className="flex-grow">
        <div className=" w-full max-w-md mx-auto mt-20 p-10 border border-gray-300 shadow-lg rounded-xl">
          <h2 className="mb-4 text-md sm:text-xl">Register</h2>
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
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-2 border rounded"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full py-2 bg-[#7209b7] text-white rounded hover:bg-[#4361ee]"
            >
              Register
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
