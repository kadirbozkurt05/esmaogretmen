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
    <div className=" border rounded-xl bg-pink-200 w-full h-full p-4">

      <form className=" h-full"  onSubmit={handleSubmit(onSubmit)}>
      <div className=" h-full flex flex-col justify-between">
      <div className="flex flex-col ">
        <label htmlFor="title" className=" text-black">Başlık : </label>
        <input {...register("title")}  required />
        <label htmlFor="message">Not : </label>
        <textarea {...register("message")} className="mt-2" required/>
        </div>

      <div className=" text-center "><input className="cursor-pointer border p-2 rounded-xl bg-slate-300" value={"GÖNDER"} type="submit" /></div>

</div >
        



      </form>
    </div>
  );
};

export default SendNote;