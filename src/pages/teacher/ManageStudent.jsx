import { useEffect, useState } from "react";
import MainComponent from "../../components/teacher/manageStudents/MainComponent";
import { useParams } from "react-router-dom";
import Nav from "../../components/general/Nav/Nav";
import Footer from "../../components/general/Footer/Footer";
import useFetch from "../../hooks/useFetch";
import { useUser } from "../../context/userContext";

const ManageStudent = () => {
  const {user} = useUser();
  const { id } = useParams();
  const [teacherName, setTeacherName] = useState("");


  useEffect(()=>{
    performFetch();
  },[])

  const onSuccess = (data) => {
    setTeacherName(`${data?.firstName} ${data?.lastName}`);
  };

  const { error, performFetch } = useFetch(
    `/user/${user?.uid}`,
    onSuccess
  );


  if (error) {
    console.log("Error : ", error || errorCurrentUser);
  }

  return (
    <div className=" bg-orange-200 w-full">
      <Nav user={user} />
      <MainComponent id={id} teacher={teacherName} />
      <Footer />
    </div>
  );
};

export default ManageStudent;
