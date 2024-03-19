import SignInForm from "../../components/general/SignIn/SignInForm";
import Nav from "../../components/general/Nav/Nav";

const SignIn = () => {
  return (<>
    <Nav/>
    <div className=" h-screen bg-slate-400">
      <SignInForm />
    </div>
    </>
  );
};

export default SignIn;
