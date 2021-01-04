import { useState } from "react";
import "./NoteCard.css";

const NoteCard = ({ id, title, body }) => {
  //kita buat togler view untuk form edit
  const [showEditForm, setShowEditForm] = useState(false);

  const handleDelete = (args) => {
    fetch(`http://localhost:5000/notes/${args}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });

    window.location.href = "/home";
  };

  return (
    <div className="note_card" id={id}>
      <i
        className="fa fa-trash del_icon"
        onClick={() => {
          handleDelete(id);
        }}
      ></i>
      <i
        className="fa fa-edit edit_icon"
        onClick={() => {
          setShowEditForm(!showEditForm);
        }}
      ></i>

      {showEditForm ? (
        <form>
          <input type="text" id="title" name="title" />
          <textarea name="body" id="body" cols="30" rows="10"></textarea>
          <button type="submit">simpan</button>
        </form>
      ) : (
        <>
          <h3 className="note_title">{title}</h3>
          <p className="note_body">{body}</p>
        </>
      )}
    </div>
  );
};

export default NoteCard;
