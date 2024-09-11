import SignInForm from "../../components/general/SignIn/SignInForm";
import Nav from "../../components/general/Nav/Nav";
import Footer from "../../components/general/Footer/Footer"

const SignIn = () => {

  return (<>
    <Nav/>
    <div className=" back-ground h-screen ">
      <SignInForm />
    </div>
    <Footer/>
    </>
  );
};

export default SignIn;
