import { useEffect, useState } from "react";
import axios from "axios";

const SummaryViewer = () => {
  const [summaries, setSummaries] = useState({});

  const handleGenerate = async () => {
    const file = JSON.parse(localStorage.getItem("lastUploaded"));
    if (!file) return alert("Please upload a file first.");

    const formData = new FormData();
    formData.append("file", file);
    const res = await axios.post("http://localhost:8000/summarize/", formData);
    setSummaries(res.data.summaries);
  };

  return (
    <div className="bg-white p-4 rounded-md shadow">
      <h3 className="text-lg font-bold text-blue-800 mb-3">📖 AI Summaries</h3>
      <button onClick={handleGenerate} className="bg-blue-600 text-white px-3 py-1 rounded">Generate Summaries</button>
      <div className="mt-4 space-y-3">
        {Object.entries(summaries).map(([chapter, summary]) => (
          <div key={chapter}>
            <h4 className="font-semibold text-blue-600">{chapter}</h4>
            <p className="text-sm text-gray-700 whitespace-pre-wrap">{summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SummaryViewer;
