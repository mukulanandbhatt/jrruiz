"use client";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

const Form = () => {
  const [files, setFiles] = useState([]);

  const onDrop = (acceptedFiles) => {
    setFiles(acceptedFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
      "text/plain": [".txt"],
      "application/vnd.ms-excel": [".xls"],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
        ".xlsx",
      ],
    },
  });

  const CloudUploadIcon = ({ className }) => (
    <img
      src="/images/HomePage/Group 1261156558.svg"
      alt="cloud Icon"
      className={className}
    />
  );

  return (
    <div className="bg-white flex items-center justify-center min-h-screen font-inter">
      <div className="p-8 bg-white shadow-xl rounded-2xl w-full max-w-2xl mx-4 my-8">
        <div className="flex justify-center mb-8 mt-2">
          <img
            src="/images/HomePage/Group 1597883952.svg"
            alt="Four PDF icons with B2B Software Agreement labels"
            className="w-full max-w-lg rounded-xl shadow-sm"
          />
        </div>

        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors duration-200 cursor-pointer 
                                ${
                                  isDragActive
                                    ? "border-blue-500 bg-gray-50"
                                    : "border-gray-300"
                                }`}
        >
          <input {...getInputProps()} />
          <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
            <CloudUploadIcon />
          </div>
          <p className="text-gray-700 text-lg ">
            Drag & drop files here, or click to select files
          </p>
          <p className="text-gray-500 text-sm mt-1">
            Support for PDF, DOC, DOCX, TXT, XLS, XLSX
          </p>
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full  shadow-md hover:bg-blue-700 transition-colors">
            Select Files
          </button>
        </div>

        {files.length > 0 && (
          <div id="file-list" className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Selected Files:
            </h3>
            <ul className="space-y-2">
              {files.map((file, index) => (
                <li
                  key={index}
                  className="px-4 py-2 bg-gray-100 rounded-md flex justify-between items-center shadow-sm"
                >
                  {file.name}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="mt-8 space-y-4">
          <input
            type="email"
            id="email-input"
            placeholder="Email address here..."
            className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          />
          <button
            id="analyze-button"
            className="w-full px-4 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition-colors"
          >
            Start myData.ai analysis
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
