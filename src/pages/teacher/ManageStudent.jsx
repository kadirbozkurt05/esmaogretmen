import { useEffect, useState } from "react";
import auth from "../../utils/config/firebaseConfig";
import getUserInfo from "../../utils/database/GetData/GetUserInfo";
import MainComponent from "../../components/teacher/manageStudents/MainComponent";
import { useParams } from "react-router-dom";
import Nav from "../../components/general/Nav/Nav";
import Footer from "../../components/general/Footer/Footer";

const ManageStudent = () => {
  const { id } = useParams();
  const [teacherName, setTeacherName] = useState("");

  useEffect(() => {
    const getUser = async () => {
      try {
        const userFromDb = await getUserInfo(auth?.currentUser?.uid);
        setTeacherName(`${userFromDb?.firstName} ${userFromDb?.lastName}`);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [auth]);

  return (
    <div className=" bg-orange-200 w-full">
      <Nav />
      <MainComponent id={id} teacher={teacherName} />
      <Footer />
    </div>
  );
};

export default ManageStudent;
