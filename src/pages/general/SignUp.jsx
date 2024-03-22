import SignUpForm from "../../components/general/SignUp/SignUpForm";
import Nav from "../../components/general/Nav/Nav";
import Footer from "../../components/general/Footer/Footer"

const SignUp = () => {
  return (<>
    <Nav/>
    <div className="p-4 md:p-20 ">
      <SignUpForm />
    </div>
    <Footer/>
    </>
  );
};

export default SignUp;
