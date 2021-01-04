import { useState } from "react";
import "./NoteCard.css";

const NoteCard = ({ id, title, body }) => {
  //kita buat togler view untuk form edit
  const [showEditForm, setShowEditForm] = useState(false);
  const [defaultValue, setDefaultValue] = useState({
    id: id,
    title: title,
    body: body,
  });

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

  //fungsi untuk store ke database
  const handleEdit = (e) => {
    //agar url tetap
    e.preventDefault();
    //fetch
    fetch(`http://localhost:5000/notes/${id}`, {
      method: "PATCH",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: defaultValue.title,
        body: defaultValue.body,
      }),
    });
    //buat oage me refresh
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
        <form className="form_edit" onSubmit={handleEdit}>
          <label htmlFor="title">judul</label>
          <input
            type="text"
            id="title"
            name="title"
            value={defaultValue.title}
            onChange={(e) => {
              // e.preventDefault();
              setDefaultValue({
                ...defaultValue,
                title: e.target.value,
              });
            }}
          />

          <label htmlFor="body">isi note</label>
          <textarea
            name="body"
            id="body"
            value={defaultValue.body}
            onChange={(e) => {
              // e.preventDefault();
              setDefaultValue({
                ...defaultValue,
                body: e.target.value,
              });
            }}
          ></textarea>

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
