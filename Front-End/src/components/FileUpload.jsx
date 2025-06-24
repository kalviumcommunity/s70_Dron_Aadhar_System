import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [msg, setMsg] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');
  const [gallery, setGallery] = useState([]);

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    setPreviewUrl(URL.createObjectURL(selectedFile));
    setMsg('');
  };

  const handleUpload = async () => {
    if (!file) {
      setMsg("⚠️ Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('http://localhost:5000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setMsg(`✅ File uploaded: ${res.data.filename}`);
      setPreviewUrl(res.data.url);
      fetchGallery();
    } catch (err) {
      console.error(err);
      setMsg('❌ Upload failed');
    }
  };

  const fetchGallery = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/upload/files');
      setGallery(res.data);
    } catch (err) {
      console.error('Failed to load gallery:', err);
    }
  };

  const handleDelete = async (filename) => {
    try {
      await axios.delete(`http://localhost:5000/api/upload/${filename}`);
      setGallery(prev => prev.filter(url => !url.includes(filename)));
      setMsg(`🗑️ Deleted: ${filename}`);
    } catch (err) {
      console.error("Delete failed:", err);
      setMsg("❌ Delete failed");
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ marginBottom: "10px" }}>📁 File Upload Feature</h1>
      <h3>File Upload with Preview, Gallery & Delete</h3>

      <input type="file" onChange={handleChange} />
      <button
        onClick={handleUpload}
        style={{
          marginLeft: "10px",
          padding: "6px 12px",
          background: "#000",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}
      >
        Upload
      </button>

      <p>{msg}</p>

      {previewUrl && (
        <div>
          <h3>Preview</h3>
          <img
            src={previewUrl}
            alt="Preview"
            height="200"
            style={{
              border: "1px solid #ccc",
              marginTop: "10px",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
            }}
          />
        </div>
      )}

      <hr style={{ margin: "40px 0", borderColor: "#444" }} />

      <h3>Uploaded Files Gallery</h3>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px'
      }}>
        {gallery.map((url, i) => {
          const filename = url.split("/").pop();
          return (
            <div key={i} style={{
              position: 'relative',
              width: '150px',
              height: '120px',
              overflow: 'hidden',
              borderRadius: '8px',
              border: '1px solid #ddd',
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
            }}>
              <img
                src={url}
                alt={filename}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              <button
                onClick={() => handleDelete(filename)}
                title="Delete"
                style={{
                  position: 'absolute',
                  top: '5px',
                  right: '5px',
                  background: 'red',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '50%',
                  width: '25px',
                  height: '25px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  zIndex: 10
                }}
              >
                ×
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FileUpload;
