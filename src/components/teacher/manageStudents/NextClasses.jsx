import { useEffect, useState } from "react";
import { format } from "date-fns";
import useFetch from "../../../hooks/useFetch";

const NextClasses = ({ id }) => {
  const [nextClasses, setNextClasses] = useState([]);




  useEffect(()=>{
    cancelFetch();
  },[])

  const onSuccess = (data) => {
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
                      Tarih : {format(nextClass.date.toDate(), "dd/MM/yyyy")}{" "}
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
