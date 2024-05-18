import { useForm } from "react-hook-form";
import { Timestamp } from "firebase/firestore";
import { useState } from "react";
import DatePicker from "react-datepicker";
import useFetch from "../../../hooks/useFetch";
const AddNextLesson = ({ id, teacherName }) => {
  const [date, setDate] = useState(null);



  const {
    register,
    handleSubmit,
    formState: {},
  } = useForm();


  const onSuccess = () => {};

  const { error, loading, performFetch, cancelFetch } = useFetch(
    "/user/add-lesson",
    onSuccess
  );

  const onSubmit = async (formData) => {
    formData.date = Timestamp.fromDate(date),
      formData.teacher = teacherName;
      formData.isDone = false;

      performFetch({
        method: "POST",
        body: { userId: id, formData },
      });
  };

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
  };

  if (error) {
    console.log("ERROR IN SEND NOTE", error);
  }

  return (
    <div className="bg-gray-800 rounded-md shadow-md mb-6 border h-72 p-2">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col ">
            <label htmlFor="title" className=" text-black">
              Ders :{" "}
            </label>
            <input {...register("title")} required />
            <label htmlFor="date">Tarih : </label>
            <DatePicker
              required
              selected={date}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
            />
          </div>

          <div className=" text-center ">
            <input
              className="cursor-pointer border p-2 rounded-xl bg-slate-300"
              value={"GÖNDER"}
              type="submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddNextLesson;
