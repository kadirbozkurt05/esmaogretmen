import MainComponent from "../../components/student/dashboard/MainComponent";

const StudentDashboard = ({user}) => {

  return (
    < div className="flex justify-center px-6 md:px-10 flex-col">
      <MainComponent user = {user} />
    </div>
  );
};

export default StudentDashboard;
