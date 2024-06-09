import MainComponent from "../../components/student/dashboard/MainComponent";
import { useUser } from "../../context/userContext";

const StudentDashboard = () => {
  const {user} = useUser();


  return (
    < div className="flex justify-center px-6 md:px-10 flex-col">
      <MainComponent user = {user} />
    </div>
  );
};

export default StudentDashboard;
