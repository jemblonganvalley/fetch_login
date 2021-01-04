import "./NoteCard.css";

const NoteCard = ({ id, title, body }) => {
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
      <h3 className="note_title">{title}</h3>
      <p className="note_body">{body}</p>
    </div>
  );
};

export default NoteCard;
