import React from "react";
import Footer from "./components/general/Footer/Footer";
import Nav from "./components/general/Nav/Nav";
import MainPage from "./pages/general/MainPage";
import { useUser } from "./context/userContext";

function App() {
  const { user } = useUser();

  return (
    <div className="back-ground">
      <Nav user={user} />
      <MainPage user={user} />
      <Footer />
    </div>
  );
}

export default App;
