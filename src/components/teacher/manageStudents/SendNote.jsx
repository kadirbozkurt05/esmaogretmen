import { useForm } from "react-hook-form";
import useFetch from "./../../../hooks/useFetch";
import { useState } from "react";
import Modal from "../../general/Modal/Modal";
import { Button } from "@material-tailwind/react";


const SendNote = ({ student, teacherName }) => {
  const [showApproveModal, setApproveModal] = useState(false);
  const [updatedList, setUpdatedList] = useState([])
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailModal, setShowFailModal] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: {},
  } = useForm();

  const onSuccess = (data) => {
    setShowSuccessModal(true);
    reset();
    setTimeout(() => {
      setShowSuccessModal(false);
    }, 1000);
  };
  const { error, loading, performFetch } = useFetch(
    `/user/${student._id}`,
    onSuccess
  );

  const onSubmit = async (formData) => {
    const list = student.teacherNotes;
    formData.id = (Math.floor(Math.random()*100000000)).toString();    
    
    formData.date = new Date();
    formData.teacher = teacherName;
    formData.isRead = false;

    list.push(formData)

    
    setUpdatedList(list);
    setApproveModal(true);
  };
  if (error) {
    console.log(error);
    
    setShowFailModal(true);
  }

  const approveNote = () => {
    setApproveModal(false);

    performFetch({
      method: "PUT",
      body: JSON.stringify({teacherNotes:updatedList}),
    });
  };

  return (
    <div className="mb-6 md:mb-0 h-96 overflow-y-auto no-scrollbar border p-2  rounded-2xl">
      {showSuccessModal && (
        <Modal title={"Not Eklendi"} text={"Not başarıyla eklenmiştir."} />
      )}
      {showFailModal && (
        <Modal
          title={"Hata"}
          text={
            "Not eklenirken bir hata oluştu. Lütfen internet bağlantınızı kontrol edin ve daha sonra yeniden deneyin."
          }
          positiveButton={"Anladım"}
          positiveFunction={() => setShowFailModal(false)}
        />
      )}
      {showApproveModal && (
        <Modal
          title={"Not Ekle"}
          text={"Notu eklemek istediğinizden emin misiniz?"}
          positiveButton={"EVET"}
          positiveFunction={approveNote}
        />
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-between h-full">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col ">
            <label htmlFor="title" className=" text-black">
              Başlık :{" "}
            </label>
            <input {...register("title")} required className=" text-black border border-black p-2 rounded-md"/>
            <label htmlFor="message">Not : </label>
            <textarea {...register("message")} className=" text-black border border-black p-2 rounded-md" required />
          </div>

          
        </div>
        <div className="flex justify-center">
          <Button type="submit" color="red">GÖNDER</Button>
        </div>
      </form>
    </div>
  );
};

export default SendNote;
