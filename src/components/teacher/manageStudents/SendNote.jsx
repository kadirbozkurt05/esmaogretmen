import { useForm } from "react-hook-form";
import { Timestamp } from "firebase/firestore";
import useFetch from "./../../../hooks/useFetch";
import { useState } from "react";
import Modal from "../../general/Modal/Modal";

const SendNote = ({ id, teacherName }) => {
  const [showApproveModal, setApproveModal] = useState(false);
  const [requestBody, setRequestBody] = useState("");
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
  const { error, loading, performFetch, cancelFetch } = useFetch(
    "/user/add-note",
    onSuccess
  );

  const onSubmit = async (formData) => {
    formData.date = Timestamp.fromDate(new Date());
    formData.teacher = teacherName;

    setRequestBody(JSON.stringify({ userId: id, formData }));
    setApproveModal(true);
  };
  if (error) {
    setShowFailModal(true);
  }

  const approveNote = () => {
    setApproveModal(false);

    performFetch({
      method: "POST",
      body: requestBody,
    });
  };

  return (
    <div className="bg-gray-800 rounded-md shadow-md mb-6 border h-72 p-2">
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col ">
            <label htmlFor="title" className=" text-black">
              Başlık :{" "}
            </label>
            <input {...register("title")} required />
            <label htmlFor="message">Not : </label>
            <textarea {...register("message")} className="mt-2" required />
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

export default SendNote;
