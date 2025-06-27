const RecordCard = ({ id, name, age, medicalHistory, onDelete }) => {
  return (
    <div className="record-card">
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Medical History: {medicalHistory}</p>
      <button onClick={() => onDelete(id)}>Delete</button> {/* 🗑 Delete Button */}
    </div>
  );
};

export default RecordCard;
