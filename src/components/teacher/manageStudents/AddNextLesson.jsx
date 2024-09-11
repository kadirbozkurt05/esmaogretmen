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
    <div className="mb-6 md:mb-0 h-96 overflow-y-auto no-scrollbar border p-2  rounded-2xl">
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
          text={"Sıradaki dersi eklemek istediğinizden emin misiniz?"}
          positiveButton={"EVET"}
          positiveFunction={approveLesson}
        />
      )}

      <form
        className="flex flex-col justify-between h-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col">
          <label htmlFor="title">Ders : </label>
          <input
            {...register("title")}
            required
            className=" text-black border border-black p-2 rounded-md"
          />
          <label className="mt-2" htmlFor="date">
            Tarih :{" "}
          </label>
          <DatePicker
            required
            selected={date}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            className=" text-black border w-full border-black p-2 rounded-md cursor-pointer"
          />
        </div>

        <div className="flex justify-center">
          <Button type="submit" color="red">
            GÖNDER
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddNextLesson;
