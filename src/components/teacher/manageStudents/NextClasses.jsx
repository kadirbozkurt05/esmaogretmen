import { useEffect, useState } from "react";
import { format } from "date-fns";
import useFetch from "../../../hooks/useFetch";
import { Timestamp } from "firebase/firestore";

const NextClasses = ({ id }) => {
  const [nextClasses, setNextClasses] = useState([]);

  const onSuccess = (data) => {
    console.log(new Date(data.nextClasses[0].date.seconds*1000));
    setNextClasses(data?.nextClasses);
  }

  const {error, isLoading, performFetch, cancelFetch} = useFetch(`/user/${id}`,onSuccess)

  useEffect(() => {
    performFetch();
  }, []);

  if(error){
    console.log(console.log(error.message));
  }


  return (
    <div className="bg-gray-800 rounded-md shadow-md mb-6 border p-2">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col ">
          <ol>
            {nextClasses.map((nextClass) => {
              return (
                <li className=" text-white border p-2 rounded-xl mb-1 flex flex-row justify-between">
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

export default NextClasses;
