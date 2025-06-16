import { useState } from "react";
import axios from "axios";

const UploadBox = () => {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return alert("Please choose a file first.");
    const formData = new FormData();
    formData.append("file", file);

    await axios.post("http://localhost:8000/upload/", formData);
    alert("Uploaded successfully! Ready to generate summaries or questions.");
  };

  return (
    <div className="border-dashed border-2 border-blue-300 p-6 rounded-lg bg-blue-50">
      <h2 className="text-xl font-semibold mb-2 text-blue-700">📄 Upload Study Material</h2>
      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4"
      />
      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Upload PDF
      </button>
    </div>
  );
};

export default UploadBox;
