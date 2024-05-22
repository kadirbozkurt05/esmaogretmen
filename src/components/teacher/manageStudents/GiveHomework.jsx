import { useState } from "react";
import DatePicker from "react-datepicker";
import Modal from "../../general/Modal/Modal";
import { Timestamp } from "firebase/firestore";
import useFetch from "../../../hooks/useFetch";
import { useForm } from "react-hook-form";

const GiveHomework = ({ id }) => {
  const [date, setDate] = useState(new Date());
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

  const onSuccess = () => {
    setShowSuccessModal(true);
    reset();
    setTimeout(()=>{
      setShowSuccessModal(false);
    },1000)
  };

  const { error, loading, performFetch } = useFetch(
    "/user/give-homework",
    onSuccess
  );

  const onSubmit = async (formData) => {
    formData.date = Timestamp.fromDate(date);

    setRequestBody(JSON.stringify({ userId: id, formData }));
    setApproveModal(true);
  };

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
  };

  
  if (error) {
    setShowFailModal(true);
  }

  const approveHomework = () => {
    setApproveModal(false);

    performFetch({
      method: "POST",
      body: requestBody,
    });
  };

  return (
    <div className="bg-gray-800 rounded-md shadow-md mb-6 border p-2 h-72 text-white">
      {showSuccessModal && (
        <Modal title={"Ödev Eklendi"} text={"Ödev başarıyla eklenmiştir."} />
      )}
      {showFailModal && (
        <Modal
          title={"Hata"}
          text={
            "Ödev eklenirken bir hata oluştu. Lütfen internet bağlantınızı kontrol edin ve daha sonra yeniden deneyin."
          }
          positiveButton={"Anladım"}
          positiveFunction={() => setShowFailModal(false)}
        />
      )}
      {showApproveModal && (
        <Modal
          title={"Ödev Ekle"}
          text={"Ödevi eklemek istediğinizden emin misiniz?"}
          positiveButton={"EVET"}
          positiveFunction={approveHomework}
        />
      )}

      <form
        className="flex flex-col justify-between h-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col">
          <label htmlFor="title">Ders : </label>
          <input {...register("title")} required className=" text-black"/>
          <label htmlFor="message" className="mt-2">
            Ödev :{" "}
          </label>
          <textarea {...register("message")} required className=" text-black" />
          <label className="mt-2" htmlFor="date">
            Son Tarih :{" "}
          </label>
          <DatePicker
            required
            selected={date}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
          />
        </div>

        <div className="flex justify-center">
          <input
            className="cursor-pointer middle none center rounded-lg bg-orange-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            value="GÖNDER"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default GiveHomework;
