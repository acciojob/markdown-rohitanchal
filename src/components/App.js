import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "./App.css"; 

function App() {
  const [markdown, setMarkdown] = useState("# Hello World!");

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div className="app">
      <div className="textarea-container">
        <textarea
          className="textarea"
          value={markdown}
          onChange={handleChange}
          placeholder="Write your markdown here"
        ></textarea>
      </div>
      <div className="preview">
        {markdown ? (
          <ReactMarkdown>{markdown}</ReactMarkdown>
        ) : (
          <p className="loading">Loading...</p>
        )}
      </div>
    </div>
  );
}

export default App;
