import Footer from "../../components/general/Footer/Footer";
import Nav from "../../components/general/Nav/Nav";
import MainComponent from "../../components/student/settings/MainComponent";
import { useUser } from "../../context/userContext";


const Settings = ()=>{
    const {user} = useUser();

    return(
    <>
    <Nav user={user} />
    <MainComponent/>
    <Footer />
    </>
    )

}

export default Settings;