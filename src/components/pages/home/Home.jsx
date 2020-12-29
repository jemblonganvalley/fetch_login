import Navbar from "../../navbar/Navbar";
import "./Home.css";

const Home = () => {
  const isLogin = sessionStorage.getItem("isLogin");

  if (isLogin) {
    return (
      <>
        <Navbar />
        <main className="home">
          <h1>Wellcome Home..</h1>
        </main>

        <main className="about">
          <h1>hello about</h1>
        </main>

        <main className="info">
          <h1>hello info</h1>
        </main>
      </>
    );
  } else {
    window.location.href = "/";
  }
};

export default Home;
