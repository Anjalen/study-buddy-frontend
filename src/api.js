import axios from "axios";

export const uploadPDF = (file) => {
  const formData = new FormData();
  formData.append("file", file);
  return axios.post("http://localhost:8000/upload/", formData);
};

export const generateQA = (file) => {
  const formData = new FormData();
  formData.append("file", file);
  return axios.post("http://localhost:8000/generate-questions/", formData);
};

export const summarizeChapters = (file) => {
  const formData = new FormData();
  formData.append("file", file);
  return axios.post("http://localhost:8000/summarize/", formData);
};

export const getDiagrams = (file) => {
  const formData = new FormData();
  formData.append("file", file);
  return axios.post("http://localhost:8000/visualize/", formData);
};
