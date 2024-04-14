import Footer from "./components/general/Footer/Footer";
import Nav from "./components/general/Nav/Nav";
import MainPage from "./pages/general/MainPage";

function App() {
  return (
    <div className=" bg-gray-900">
      <Nav />
      <MainPage/>
      <Footer/>
    </div>
  );
}

export default App;
