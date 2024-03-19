import SignUpForm from "../../components/general/SignUp/SignUpForm";
import Nav from "../../components/general/Nav/Nav";

const SignUp = () => {
  return (<>
    <Nav/>
    <div className="p-4 md:p-10 bg-slate-400">
      <SignUpForm />
    </div>
    </>
  );
};

export default SignUp;
