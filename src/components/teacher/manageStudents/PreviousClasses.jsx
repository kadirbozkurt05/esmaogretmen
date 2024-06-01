import { useEffect, useState } from "react";
import { format } from "date-fns";
import useFetch from "../../../hooks/useFetch";

const PreviousClasses = ({ id }) => {
  const today = new Date();
  const [previousLessons, setPreviousLessons] = useState([]);
  const [requestBody, setRequestBody] = useState(null);


  const onSuccess = (data) => {
    const classes = data?.scheduledClasses;
    
    const filteredClasses = classes.filter((clas) => new Date(clas.date.seconds*1000) < today)

    setPreviousLessons(filteredClasses);
  };

  const onSuccessLesson = (data) => {
    window.location.reload();
  };

  useEffect(()=>{
    if(requestBody){
      performFetchLesson({
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: requestBody,
      });

    }



  },[requestBody])

  const { error, isLoading, performFetch } = useFetch(
    `/user/${id}`,
    onSuccess
  );

  const { error:errorPerformLesson, performFetch:performFetchLesson } = useFetch(
    "/user/update-lesson",
    onSuccessLesson
  );

  useEffect(()=>{
    performFetch();
  },[])

  if (errorPerformLesson) {
    //MODAL
  }

  return (
    <div className="bg-gray-800 rounded-md shadow-md mb-6 border p-2">
      <div className="flex flex-col ">
        <ol>
          {previousLessons.map((previousClass,index) => {
            return (
              <li key={index} className=" text-white  border p-2 rounded-xl mb-1 flex flex-row justify-between">
                <div>
                  <h1>Ders : {previousClass?.title} </h1>
                  <h6>
                    Tarih : {format(new Date(previousClass.date.seconds*1000), "dd/MM/yyyy")}{" "}
                  </h6>
                </div>
                <div></div>
                <div>
                  {!previousClass?.isDone ? (
                    <>
                      {" "}
                      <label htmlFor="checkbox" className="mr-2">
                        Yapıldı olarak işaretle!
                      </label>
                      <input
                        type="checkbox"
                        onChange={(e) => {
                          const reqBody = {
                            userId:id,
                            classId:previousClass?.id,
                            isDone:e.target.checked,
                          }
                          setRequestBody(JSON.stringify(reqBody))

                        }}
                      />
                    </>
                  ) : (
                    <div className="rounded-full h-10 w-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="#83f745"
                          d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                        />
                      </svg>{" "}
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default PreviousClasses;
