import Nav from "../../components/general/Nav/Nav";
import PricingComponent from "../../components/general/Pricing/PricingComponent";
import Footer from "../../components/general/Footer/Footer"

const Pricing = () => {
  return (
    <>
      <Nav />
      <div className="xl:px-32 p-6">
        <PricingComponent />
      </div>
      <Footer />
    </>
  );
};

export default Pricing;
