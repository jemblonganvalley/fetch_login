import "./NoteContainer.css";
import NoteCard from "./NoteCard";
import { useState, useEffect } from "react";

const NoteContainer = () => {
  //buat penampung data statenya
  const [notes, setNotes] = useState();

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
    </section>
  );
};

export default NoteContainer;
