import { useForm } from "react-hook-form";
import { Timestamp } from "firebase/firestore";
import { useState } from "react";
import DatePicker from "react-datepicker";
import useFetch from "../../../hooks/useFetch";
import Modal from "../../general/Modal/Modal";


const AddNextLesson = ({ id, teacherName }) => {
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

  const onSuccess = (data) => {
    console.log(data);
    setShowSuccessModal(true);
    reset();
    setTimeout(()=>{
      setShowSuccessModal(false);
    },1000)
  };

  const { error, loading, performFetch } = useFetch(
    "/user/add-lesson",
    onSuccess
  );

  const onSubmit = async (formData) => {
    formData.date = Timestamp.fromDate(date);
    formData.teacher = teacherName;
    formData.isDone = false;

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
    <div className="bg-gray-800 rounded-md shadow-md mb-6 border h-72 p-2">
            {showSuccessModal && (
        <Modal title={"Ders Eklendi"} text={"Ders başarıyla eklenmiştir."} />
      )}
      {showFailModal && (
        <Modal
          title={"Hata"}
          text={
            "Ders eklenirken bir hata oluştu. Lütfen internet bağlantınızı kontrol edin ve daha sonra yeniden deneyin."
          }
          positiveButton={"Anladım"}
          positiveFunction={() => setShowFailModal(false)}
        />
      )}
      {showApproveModal && (
        <Modal
          title={"Ders Ekle"}
          text={"Dersi eklemek istediğinizden emin misiniz?"}
          positiveButton={"EVET"}
          positiveFunction={approveHomework}
        />
      )}
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
