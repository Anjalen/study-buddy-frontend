import { useState } from "react";
import axios from "axios";

const UploadArea = ({ setText, setQuestions }) => {
  const [localFile, setLocalFile] = useState(null);

  const handleUpload = async () => {
    if (!localFile) return alert("Please select a PDF file.");
    const formData = new FormData();
    formData.append("file", localFile);
    const response = await axios.post("http://localhost:8000/upload/", formData);
    setText(response.data.text);
    localStorage.setItem("lastUploaded", JSON.stringify(localFile));
  };

  const handleQuestions = async () => {
    if (!localFile) return alert("Please upload a PDF first.");
    const formData = new FormData();
    formData.append("file", localFile);
    const res = await axios.post("http://localhost:8000/generate-questions/", formData);
    setQuestions(res.data.questions);
  };

  return (
    <div className="flex flex-wrap items-center gap-4 mb-6">
      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setLocalFile(e.target.files[0])}
        className="border p-2 rounded-md"
      />
      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Upload PDF
      </button>
      <button
        onClick={handleQuestions}
        className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
      >
        Generate Q&A
      </button>
    </div>
  );
};

export default UploadArea;
