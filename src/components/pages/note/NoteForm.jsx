import { useState } from "react";
import "./NoteForm.css";

const NoteForm = ({ setShow }) => {
  const [inputdata, setInputdata] = useState({
    note_user: sessionStorage.getItem("user"),
    note_title: "",
    note_body: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://jvalleylogin.herokuapp.com/api/notes", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputdata),
    });
    setShow(false);
  };

  return (
    <div className="container_note">
      <form className="note_form" onSubmit={handleSubmit}>
        <div className="form_group">
          <label htmlFor="title">title</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={(e) => {
              setInputdata({
                ...inputdata,
                note_title: e.target.value,
              });
            }}
            autoComplete="none"
          />
        </div>
        <div className="form_group">
          <label htmlFor="note">note</label>
          <textarea
            type="text"
            name="note"
            id="note"
            onChange={(e) => {
              setInputdata({
                ...inputdata,
                note_body: e.target.value,
              });
            }}
            autoComplete="none"
          />
        </div>
        <div className="form_group">
          <button className="btn_submit" type="submit">
            add note
          </button>
        </div>
      </form>
    </div>
  );
};

export default NoteForm;
