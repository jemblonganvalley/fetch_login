import "./NoteCard.css";

const NoteCard = ({ id, title, body }) => {
  return (
    <div className="note_card" id={id}>
      <h3 className="note_title">{title}</h3>
      <p className="note_body">{body}</p>
    </div>
  );
};

export function coba() {
  alert("ehlo");
}

export function Socmed() {
  return (
    <div className="socmed">
      <h1>hello</h1>
    </div>
  );
}

export default NoteCard;
