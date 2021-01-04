import "./NoteContainer.css";
import NoteCard from "./NoteCard";
import { useState, useEffect } from "react";

const NoteContainer = () => {
  //buat penampung data statenya
  const [notes, setNotes] = useState();

  //buat nilai boolean untuk show modal
  const [modal, setModal] = useState(false);

  //buat state penampung nilai sementara dari add form
  const [addNote, setAddNote] = useState({
    user_email: sessionStorage.getItem("user"),
    title: "",
    body: "",
  });

  //kita buat sebuah function untuk menambah data ke DB
  const handleDataStore = () => {
    // alert(`
    //   user_email : ${addNote.user_email}
    //   title : ${addNote.title}
    //   body : ${addNote.body}
    // `);

    fetch("http://localhost:5000/notes", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addNote),
    });
  };

  useEffect(() => {
    //mengambil data dari database
    //tangkap user yang login
    const user = sessionStorage.getItem("user");

    //ambil data notes
    fetch(`http://localhost:5000/notes?user_email=${user}`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        //kita simpan ke STATE
        setNotes(data);
      });
  }, []);

  return (
    <section className="note_container">
      {/* kita check apakah notes sudah berisi data */}
      {notes && (
        <>
          {notes.map((e) => (
            <NoteCard key={e.id} id={e.id} title={e.title} body={e.body} />
          ))}
        </>
      )}

      {/* ICON MODAL */}
      <i
        className="fa fa-plus add_icon"
        onClick={() => {
          setModal(!modal);
        }}
      ></i>

      {/* CONDITIONAL RENDERING */}
      {modal === true ? (
        <>
          {/* FORM INPUT NOTE */}
          <div className="form_modal">
            <form className="add_note" onSubmit={handleDataStore}>
              <label htmlFor="add_title">masukan judul note</label>
              <input
                type="text"
                id="add_title"
                name="title"
                onChange={(e) => {
                  setAddNote({
                    ...addNote,
                    title: e.target.value,
                  });
                }}
              />

              <label htmlFor="add_body">masukan note</label>
              <textarea
                name="body"
                id="add_body"
                cols="30"
                rows="10"
                onChange={(e) => {
                  setAddNote({
                    ...addNote,
                    body: e.target.value,
                  });
                }}
              ></textarea>
              {/* 
              <label htmlFor="note_image">upload image</label>
              <input
                type="file"
                name="note_image"
                id="note_image"
                onChange={(e) => {
                  console.log(e.target.files[0]);
                }}
              /> */}

              <button className="btn_add_note" type="submit">
                tambah note
              </button>
            </form>
          </div>
        </>
      ) : null}
    </section>
  );
};

export default NoteContainer;
