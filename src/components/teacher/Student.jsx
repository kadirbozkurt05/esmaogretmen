import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
const Student = ({ student }) => {
  const [user, setUser] = useState(null);

  const onSuccess = (data) => {
    setUser(user);
  }


  const {error, isLoading, performFetch, cancelFetch} = useFetch(`/user/${student}`,onSuccess);


  useEffect(() => {

performFetch();
  }, []);
  return (
    <Link
      to={`/${student}`}
      className="p-4 flex flex-row justify-between items-center  bg-gray-800 border border-gray-800 shadow-lg rounded-2xl"
    >
      <div className="flex flex-col justify-center">
        <div className=" text-gray-100 font-medium">
          {user?.firstName} {user?.lastName}
        </div>
        <div className="text-sm text-gray-500">
          {user?.educationDetails?.class}. Sınıf
        </div>
      </div>
      <img className=" h-14 rounded-lg" src={user?.picture} />
    </Link>
  );
};

export default Student;
