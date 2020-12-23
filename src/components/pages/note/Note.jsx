import { useEffect, useState } from "react";
import "./Note.css";
import NoteForm from "./NoteForm";

const Note = () => {
  const [idNote, setIdNote] = useState({
    id: null,
  });
  const [edited, setEdited] = useState({
    note_user: sessionStorage.getItem("user"),
    note_title: "",
    note_body: "",
  });
  const user = sessionStorage.getItem("user");
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetch(`https://jvalleylogin.herokuapp.com/api/notes?note_user=${user}`)
      .then((res) => res.json())
      .then((data) => {
        setNotes(data);
      });
  }, [notes]);

  const deleteNote = (e) => {
    fetch(`https://jvalleylogin.herokuapp.com/api/notes/${e}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const editNote = (e) => {
    fetch(`https://jvalleylogin.herokuapp.com/api/notes/${e}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(edited),
    });
    setIdNote({ id: null });
  };

  return (
    <>
      <NoteForm />
      <div className="note_container">
        {notes.map((e, i) => (
          <div className="note" key={i}>
            <div
              className="options"
              style={{
                position: "absolute",
                right: "5px",
                top: "5px",
              }}
            >
              <i
                className="fa fa-trash"
                style={{ color: "red" }}
                onClick={() => {
                  deleteNote(e.id);
                }}
              ></i>
              <i
                className="fa fa-edit"
                style={{ color: "green", marginLeft: "5px" }}
                onClick={() => {
                  if (idNote.id === null) {
                    setIdNote({ id: e.id });
                    setEdited({
                      ...edited,
                      note_title: e.note_title,
                      note_body: e.note_body,
                    });
                  } else {
                    setIdNote({ id: null });
                  }
                }}
              ></i>
            </div>

            {idNote.id === e.id ? (
              <form
                className="form_edit"
                onSubmit={(x) => {
                  x.preventDefault();
                  editNote(e.id);
                }}
              >
                <label htmlFor="edit_title">title</label>
                <input
                  type="text"
                  id="edit_title"
                  value={edited.note_title}
                  onChange={(e) => {
                    setEdited({
                      ...edited,
                      note_title: e.target.value,
                    });
                  }}
                />
                <label htmlFor="edit_body">notes</label>
                <textarea
                  id="edit_body"
                  id=""
                  cols="20"
                  rows="10"
                  value={edited.note_body}
                  onChange={(e) => {
                    setEdited({
                      ...edited,
                      note_body: e.target.value,
                    });
                  }}
                ></textarea>
                <button className="btn_edit" type="submit">
                  edit
                </button>
              </form>
            ) : (
              <>
                <h3 className="note_title">{e.note_title}</h3>
                <p
                  className="note_body"
                  dangerouslySetInnerHTML={{ __html: e.note_body }}
                ></p>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Note;
