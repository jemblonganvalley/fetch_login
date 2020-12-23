import { useState } from "react";
import Navbar from "../../navbar/Navbar";
import Note from "../note/Note";
import NoteForm from "../note/NoteForm";
import "./Home.css";

const Home = () => {
  const isLogin = sessionStorage.getItem("isLogin");
  const [show, setShow] = useState(false);
  if (isLogin) {
    return (
      <>
        <Navbar />
        {show && <NoteForm setShow={setShow} />}
        <main className="home">
          <h1>Catatanmu..</h1>
          <Note />
        </main>
        <i
          className="fa fa-plus"
          style={{
            fontSize: "2rem",
            color: "white",
            position: "fixed",
            bottom: "20px",
            right: "8%",
            zIndex: "150",
            backgroundColor: "orange",
            padding: "10px",
          }}
          onClick={() => {
            setShow(!show);
          }}
        ></i>
      </>
    );
  } else {
    window.location.href = "/";
  }
};

export default Home;
