import Nav from "../../components/general/Nav/Nav";
import Footer from "./../../components/general/Footer/Footer";
import DrawComponent from "../../components/teacher/DrawComponent";
import { useUser } from "../../context/userContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Draw = () => {
  const { user } = useUser();
  const navigate = useNavigate();


  useEffect(() => {
    if (user.role!=="teacher") {
      navigate("/");
    }
  }, [ user]);

  return (
    <div className="flex justify-center flex-col">
      <Nav />
      <DrawComponent />
      <Footer />
    </div>
  );
};

export default Draw;
