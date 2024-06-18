import Footer from "./components/general/Footer/Footer";
import Nav from "./components/general/Nav/Nav";
import MainPage from "./pages/general/MainPage";
import { useUser } from "./context/userContext";
import { auth } from "../firebase";
import { browserLocalPersistence, setPersistence } from "firebase/auth";

function App() {
  const { user } = useUser();

  setPersistence(auth, browserLocalPersistence);  

  return (
    <div className="back-ground">
      <Nav user={user} />
      <MainPage user={user} />
      <Footer />
    </div>
  );
}

export default App;
