import Footer from "../../components/general/Footer/Footer";
import Nav from "../../components/general/Nav/Nav";
import SettingsComponent from "../../components/student/settings/SettingsComponent";
import { useUser } from "../../context/userContext";


const Settings = ()=>{
    const {user} = useUser();

    return(
    <>
    <Nav user={user} />
    <SettingsComponent/>
    <Footer />
    </>
    )

}

export default Settings;