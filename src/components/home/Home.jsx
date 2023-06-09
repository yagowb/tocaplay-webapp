import Carrosel from "./Carrosel";
import Footer from "./Footer";
import Navbar from "./Navbar";  
import Cards from "./Cards";
import Header from "./Header";


function Home() {
  return (
    <>
      <div className="home-container">
        <Header />
        <Navbar />
        <div className="home-content">
          <Carrosel />
          <br></br>
          <br></br>
          <Cards />
        </div>
        <div className="home-footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;