// src/components/RecordCard.jsx
const RecordCard = ({ name, age, medicalHistory }) => {
  return (
    <div className="record-card">
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Medical History: {medicalHistory}</p>
    </div>
  );
};

export default RecordCard;
