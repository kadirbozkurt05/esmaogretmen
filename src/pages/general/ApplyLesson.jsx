import Nav from "../../components/general/Nav/Nav";
import Footer from "../../components/general/Footer/Footer"
import ApplyForm from "../../components/general/Pricing/ApplyForm";


const ApplyLesson = ()=>{
    return(
        <>
        <Nav />
        <div className=" xl:px-32 p-6 md: h-screen">
        <ApplyForm />
        </div>
        <Footer/>

        </>
        
    )
}

export default ApplyLesson;