import Navbar from "../../navbar/Navbar";
import Note from "../note/Note";
import "./Home.css";

const Home = () => {
  const isLogin = sessionStorage.getItem("isLogin");

  if (isLogin) {
    return (
      <>
        <Navbar />
        <main className="home">
          <h1>Catatanmu..</h1>
          <Note />
        </main>
      </>
    );
  } else {
    window.location.href = "/";
  }
};

export default Home;
