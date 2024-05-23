import { format } from "date-fns";
const ScheduledClasses = (props) => {



  return ( 
    <div className=" bg-gray-800 rounded-md shadow-md mb-6 border p-2">
      <div className="flex md:flex-row flex-col">
        <div className="ml-4 flex flex-col justify-between">
          <div className="flex items-center mb-2">
            <h2 className="text-xl font-semibold text-white">DERS : {props.name}</h2>
          </div>
          <div className="flex flex-col">
            <div className="mr-4 text-gray-400">
              <p>Tarih : {format(new Date(props.date.seconds*1000), "dd/MM/yyyy")}</p>
            </div>
          </div>
        </div>
      </div>
      <br />

      <div className=" flex-1 pl-4 text-gray-200">
        <p>
         Öğretmen: {props.teacher}
        </p>
      </div>
    </div>
  );
};

export default ScheduledClasses;
