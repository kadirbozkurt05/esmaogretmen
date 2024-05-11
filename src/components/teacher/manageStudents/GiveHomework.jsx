import { useForm } from "react-hook-form";
import { useState } from "react";
import DatePicker from "react-datepicker";
import addHomeworkToUser from "../../../utils/database/AddData/AddHomework";


const GiveHomework = ({id}) => {
    const [date, setDate] = useState(new Date());

    const handleDateChange = (selectedDate) => {
        setDate(selectedDate);
      };

  const {
    register,
    handleSubmit,
    formState: {  },
  } = useForm();
  
  const onSubmit = async (formData) => {
    formData.date = date;
    try {
        await addHomeworkToUser(id,formData)
    } catch (error) {
        console.log(error);
    }
    console.log(formData);
}

  return (
    <div className=" border rounded-xl bg-pink-200 p-4 w-full h-full">
      <form className="  flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="title" className=" text-black">Ders : </label>
        <input {...register("title")}  required />
        <label htmlFor="message">Ödev : </label>
        <textarea {...register("message")} className="mt-2" required/>
        <label htmlFor="date">Son Tarih : </label>
        <DatePicker
        
        required
            selected={date}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
          />
        <input value={"GÖNDER"} type="submit" />
      </form>
    </div>
  );
};

export default GiveHomework;