import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");

  const generateImage = async () => {
    console.log(prompt);
  };

  return (
    <div className="bg-black text-white min-h-screen p-4 flex flex-col">
      <input
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        type="text"
        className="text-black"
      />
      <button onClick={generateImage}>Generate</button>
    </div>
  );
}
