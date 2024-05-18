import { useEffect, useState } from "react";
import MainComponent from "../../components/teacher/manageStudents/MainComponent";
import { useParams } from "react-router-dom";
import Nav from "../../components/general/Nav/Nav";
import Footer from "../../components/general/Footer/Footer";
import useFetch from "../../hooks/useFetch";
import { useUser } from "../../context/userContext";

const ManageStudent = () => {
  const {user} = useUser(user);
  const { id } = useParams();
  const [teacherName, setTeacherName] = useState("");

  const [userId, setUserId] = useState("");

  useEffect(() => {
    cancelFetch();
    cancelFetchCurrentUser();
  }, []);

  const onSuccessCurrentUser = (data) => {
    setUserId(data.uid);
    performFetch();
  };

  const onSuccess = (data) => {
    setTeacherName(`${userFromDb?.firstName} ${userFromDb?.lastName}`);
  };

  const { error, isLoading, performFetch, cancelFetch } = useFetch(
    `/user/${userId}`,
    onSuccess
  );
  const {
    error: errorCurrentUser,
    performFetch: performFetchCurrentUser,
    cancelFetch: cancelFetchCurrentUser,
  } = useFetch(`/user/current-user`, onSuccessCurrentUser);

  if (error || errorCurrentUser) {
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
