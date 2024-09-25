import MainComponent from "../../components/student/dashboard/MainComponent";

const StudentDashboard = ({user}) => {

  return (
    < div className="flex justify-center flex-col">
      <MainComponent user = {user} />
    </div>
  );
};

export default StudentDashboard;
