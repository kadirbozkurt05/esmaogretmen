import ContactForm from "../../components/general/Contact/ContactForm";
import Nav from "../../components/general/Nav/Nav";
import Footer from "../../components/general/Footer/Footer"


const Contact = ()=>{
    return(
        <>
        <Nav />
        <div className=" xl:px-32 p-6 md: h-screen">
        <ContactForm />
        </div>
        <Footer/>

        </>
        
    )
}

export default Contact;