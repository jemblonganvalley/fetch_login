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
      </>
    );
  } else {
    window.location.href = "/";
  }
};

export default Home;
