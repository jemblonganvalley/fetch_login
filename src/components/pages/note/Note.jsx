import { useState } from "react";
import "./Note.css";

const Note = () => {
  const user = sessionStorage.getItem("user");
  const [notes, setNotes] = useState([]);
  fetch(`http://localhost:5000/notes?note_user=${user}`)
    .then((res) => res.json())
    .then((data) => {
      setNotes(data);
    });

  return (
    <div className="note_container">
      {notes.map((e, i) => (
        <div className="note" key={i}>
          <h3 className="note_title">{e.note_title}</h3>
          <p className="note_body">{e.note_body}</p>
        </div>
      ))}
    </div>
  );
};

export default Note;
