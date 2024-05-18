import SignUpForm from "../../components/general/SignUp/SignUpForm";
import Nav from "../../components/general/Nav/Nav";
import Footer from "../../components/general/Footer/Footer"
import { useUser } from "../../context/userContext";

const SignUp = () => {
  const {user} = useUser();
  return (<>
    <Nav user={user}/>
    <div className="p-4 md:p-20 ">
      <SignUpForm />
    </div>
    <Footer/>
    </>
  );
};

export default SignUp;
