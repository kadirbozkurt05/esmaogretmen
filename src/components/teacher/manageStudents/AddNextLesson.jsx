import { useForm } from "react-hook-form";
import { useState } from "react";
import DatePicker from "react-datepicker";
import useFetch from "../../../hooks/useFetch";
import Modal from "../../general/Modal/Modal";
import { Button } from "@material-tailwind/react";
import { useEffect } from "react";

const AddNextLesson = ({ student, teacherName }) => {
  const [date, setDate] = useState(new Date());
  const [showApproveModal, setApproveModal] = useState(false);
  const [updatedList, setUpdatedList] = useState([]);
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
    setTimeout(() => {
      setShowSuccessModal(false);
    }, 1000);
  };

  useEffect(() => {
    console.log(student._id);
  }, []);

  const { error, loading, performFetch } = useFetch(
    `/user/${student._id}`,
    onSuccess
  );

  const onSubmit = async (formData) => {
    const scheduledClasses = student.scheduledClasses;
    formData.id = Math.floor(Math.random() * 1000000).toString();
    formData.date = date;
    formData.teacher = teacherName;
    (formData.isDone = false), scheduledClasses.push(formData);

    setUpdatedList(scheduledClasses);
    setApproveModal(true);
  };

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
  };

  // if (error) {
  //   setShowFailModal(true);
  // }
  const approveLesson = () => {
    setApproveModal(false);

    performFetch({
      method: "PUT",
      body: JSON.stringify({ scheduledClasses: updatedList }),
    });
  };

  return (
<div className="mb-6 md:mb-0 h-96 overflow-y-auto no-scrollbar border border-gray-300 p-4 rounded-2xl bg-white shadow-lg">
  {/* Success Modal */}
  {showSuccessModal && (
    <Modal
      title="Ders Eklendi"
      text="Ders başarıyla eklenmiştir."
      icon="✅" // Optional: Add an icon for visual enhancement
      className="bg-green-100 border-green-300"
    />
  )}
  
  {/* Failure Modal */}
  {showFailModal && (
    <Modal
      title="Hata"
      text="Ders eklenirken bir hata oluştu. Lütfen internet bağlantınızı kontrol edin ve daha sonra yeniden deneyin."
      positiveButton="Anladım"
      positiveFunction={() => setShowFailModal(false)}
      icon="❌" // Optional: Add an icon for visual enhancement
      className="bg-red-100 border-red-300"
    />
  )}
  
  {/* Approval Modal */}
  {showApproveModal && (
    <Modal
      title="Ders Ekle"
      text="Sıradaki dersi eklemek istediğinizden emin misiniz?"
      positiveButton="EVET"
      positiveFunction={approveLesson}
      negativeButton="HAYIR"
      negativeFunction={() => setShowApproveModal(false)}
      icon="❓" // Optional: Add an icon for visual enhancement
      className="bg-yellow-100 border-yellow-300"
    />
  )}

  {/* Form */}
  <form
    className="flex flex-col gap-4 h-full"
    onSubmit={handleSubmit(onSubmit)}
  >
    <div className="flex flex-col gap-4">
      <label htmlFor="title" className="font-semibold text-gray-700">Ders:</label>
      <input
        {...register("title")}
        required
        className="text-black border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
        placeholder="Ders başlığı"
      />
      
      <label htmlFor="date" className="font-semibold text-gray-700">Tarih:</label>
      <DatePicker
        required
        selected={date}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        className="text-black border border-gray-300 w-full p-3 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
      />
    </div>

    <div className="flex justify-center mt-4">
      <Button type="submit" color="red" className="w-full py-2 px-4 rounded-md shadow-md hover:bg-red-700 transition">
        GÖNDER
      </Button>
    </div>
  </form>
</div>

  );
};

export default AddNextLesson;
