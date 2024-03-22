import Nav from "../../components/general/Nav/Nav";
import ServicesComponent from "../../components/general/Services/ServicesComponent";
import Footer from "../../components/general/Footer/Footer"


const Services = () => {
  return (
    <div>
      <Nav />
      <div className="xl:px-32 p-6">
        <ServicesComponent />
      </div>
      <Footer />
    </div>
  );
};

export default Services;
