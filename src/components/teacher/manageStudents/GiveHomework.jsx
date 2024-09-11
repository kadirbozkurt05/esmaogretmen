import { useState } from "react";
import DatePicker from "react-datepicker";
import Modal from "../../general/Modal/Modal";
import useFetch from "../../../hooks/useFetch";
import { useForm } from "react-hook-form";
import { Button } from "@material-tailwind/react";

const GiveHomework = ({ student }) => {
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

  console.log(student);

  const { error, loading, performFetch } = useFetch(
    `/user/${student._id}`,
    onSuccess
  );

  const onSubmit = async (formData) => {
    const homework = { title: formData.title, message: formData.message, date };
    const homeworkList = student.homework;
    homeworkList.push(homework);

    setUpdatedList(homeworkList);

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
      method: "PUT",
      body: JSON.stringify({ homework: updatedList }),
    });
  };

  return (
    <>
      <div className="mb-6 md:mb-0 h-96 overflow-y-auto no-scrollbar border p-2  rounded-2xl">
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
            <input
              {...register("title")}
              required
              className=" text-black border border-black p-2 rounded-md"
            />
            <label htmlFor="message" className="mt-2">
              Ödev :{" "}
            </label>
            <textarea
              {...register("message")}
              required
              className=" text-black border border-black p-2 rounded-md"
            />
            <label className="mt-2" htmlFor="date">
              Son Tarih :{" "}
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
    </>
  );
};

export default GiveHomework;
