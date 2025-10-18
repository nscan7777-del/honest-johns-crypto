import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function TokenMaker() {
  const [tokenName, setTokenName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [supply, setSupply] = useState("");
  const [network, setNetwork] = useState("Solana");
  const [status, setStatus] = useState("");

  const handleSaveDraft = async () => {
    try {
      setStatus("Saving draft...");
      const { data, error } = await supabase
        .from("token_drafts")
        .insert([{ token_name: tokenName, symbol, supply, network }]);

      if (error) throw error;
      setStatus("✅ Draft saved successfully!");
    } catch (error) {
      setStatus("❌ Error saving draft");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f2eb] flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-[#3c2f1c] mb-4">
        Honest John’s Token Maker
      </h1>
      <p className="text-[#5c4a2f] mb-8">Create your own token in minutes!</p>

      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md border border-[#d9cbb3]">
        <label className="block mb-4">
          <span className="text-[#3c2f1c] font-semibold">Token Name</span>
          <input
            type="text"
            className="w-full mt-1 p-2 border rounded"
            value={tokenName}
            onChange={(e) => setTokenName(e.target.value)}
          />
        </label>

        <label className="block mb-4">
          <span className="text-[#3c2f1c] font-semibold">Symbol</span>
          <input
            type="text"
            className="w-full mt-1 p-2 border rounded"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
          />
        </label>

        <label className="block mb-4">
          <span className="text-[#3c2f1c] font-semibold">Total Supply</span>
          <input
            type="number"
            className="w-full mt-1 p-2 border rounded"
            value={supply}
            onChange={(e) => setSupply(e.target.value)}
          />
        </label>

        <label className="block mb-6">
          <span className="text-[#3c2f1c] font-semibold">Select Network</span>
          <select
            className="w-full mt-1 p-2 border rounded"
            value={network}
            onChange={(e) => setNetwork(e.target.value)}
          >
            <option>Solana</option>
            <option>Ethereum</option>
            <option>Base</option>
            <option>Binance Smart Chain</option>
          </select>
        </label>

        <button
          onClick={handleSaveDraft}
          className="bg-[#c39b63] hover:bg-[#a98450] text-white font-bold py-2 px-4 rounded w-full"
        >
          Save Draft
        </button>

        <p className="mt-4 text-center text-[#3c2f1c]">{status}</p>
      </div>
    </div>
  );
}