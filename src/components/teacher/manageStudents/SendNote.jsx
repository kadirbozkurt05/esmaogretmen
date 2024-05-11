import { useForm } from "react-hook-form";
import addNoteToUser from "../../../utils/database/AddData/AddNote";
import { Timestamp } from "firebase/firestore";


const SendNote = ({id, teacherName}) => {


  const {
    register,
    handleSubmit,
    formState: {  },
  } = useForm();
  
  const onSubmit = async (formData) => {
    formData.date = Timestamp.fromDate(new Date()),
    formData.teacher = teacherName;
    try {
        await addNoteToUser(id,formData)
        console.log("ADDED");
    } catch (error) {
        console.log(error);
    }
    console.log(formData);
}

  return (
    <div className=" border rounded-xl bg-pink-200 p-4">
      <form className="  flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="title" className=" text-black">Başlık : </label>
        <input {...register("title")}  required />
        <label htmlFor="message">NOT : </label>
        <textarea {...register("message")} className="mt-2" required/>

        <input type="submit" />
      </form>
    </div>
  );
};

export default SendNote;