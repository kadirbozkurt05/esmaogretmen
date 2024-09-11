import SignUpForm from "../../components/general/SignUp/SignUpForm";
import Nav from "../../components/general/Nav/Nav";
import Footer from "../../components/general/Footer/Footer";
import { useUser } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase";
import { useEffect } from "react";

const SignUp = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && auth.currentUser) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <Nav user={user} />
      <div className="p-4 md:p-20 ">
        <SignUpForm />
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
