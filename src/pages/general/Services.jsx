import Nav from "../../components/general/Nav/Nav";
import ServicesComponent from "../../components/general/Services/ServicesComponent";
import Footer from "../../components/general/Footer/Footer"
import { useUser } from "../../context/userContext";


const Services = () => {
  const {user} = useUser();
  return (
    <div>
      <Nav user = {user}/>
      <div className="xl:px-32 p-6">
        <ServicesComponent />
      </div>
      <Footer />
    </div>
  );
};

export default Services;
