// src/App.jsx

import React, { useEffect, useState } from 'react';
import './App.css';
import FileUpload from './components/FileUpload';
import RecordCard from './components/RecordCard';

function App() {
  const [records, setRecords] = useState([]);

  // Fetch records from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/records")
      .then((res) => res.json())
      .then((data) => setRecords(data))
      .catch((err) => console.error("Error fetching records:", err));
  }, []);

  // Handle delete
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/record/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setRecords(records.filter((record) => record._id !== id));
      } else {
        console.error("Failed to delete");
      }
    } catch (err) {
      console.error("Error deleting record:", err);
    }
  };

  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>File Upload Feature</h1>
      <FileUpload />

      <hr style={{ margin: '30px 0' }} />

      <h2>All Records</h2>
      <div className="record-list">
        {records.length === 0 ? (
          <p>No records found</p>
        ) : (
          records.map((record) => (
            <RecordCard
              key={record._id}
              id={record._id}
              name={record.name}
              age={record.age}
              medicalHistory={record.medicalHistory}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
