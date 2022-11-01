import "./App.css";
import BodyApp from "./components/BodyApp";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting={"Bienvenidos a tu tienda de informatica"} />
      <BodyApp />
      <Footer />
    </>
  );
}

export default App;
