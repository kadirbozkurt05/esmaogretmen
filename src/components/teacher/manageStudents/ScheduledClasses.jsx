import { useEffect, useState } from "react";
import { format } from "date-fns";
import useFetch from "../../../hooks/useFetch";

const ScheduledClasses = ({ id }) => {
  const [scheduledClasses, setscheduledClasses] = useState([]);
  const today = new Date();

  const onSuccess = (data) => {
    const classes = data?.scheduledClasses;
    
    const filteredClasses = classes.filter((clas) => new Date(clas.date.seconds*1000) >= today)
    setscheduledClasses(filteredClasses);
  }

  const {error, isLoading, performFetch} = useFetch(`/user/${id}`,onSuccess)

  useEffect(() => {
    performFetch();
  }, []);

  if(error){
   //MODAL
  }


  return (
    <div className="bg-gray-800 rounded-md shadow-md mb-6 border p-2">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col ">
          <ol>
            {scheduledClasses.map((nextClass, index) => {
              return (
                <li key={index} className=" text-white border p-2 rounded-xl mb-1 flex flex-row justify-between">
                  <div>
                    <h1>Ders : {nextClass?.title} </h1>
                    <h6>
                      Tarih : {format(new Date(nextClass.date.seconds*1000), "dd/MM/yyyy")}{" "}
                    </h6>
                  </div>
                  <div></div>
                  
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ScheduledClasses;
