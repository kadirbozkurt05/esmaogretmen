import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import Modal from "../../general/Modal/Modal";
import useFetch from "../../../hooks/useFetch";

const GiveHomework = ({ id }) => {
  const [showSuccessModal, setShowSuccesModal] = useState(false);
  const [showFailModal, setShowFailModal] = useState(false);
  const [a,setA] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    message: '',
    date: new Date()
  });

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      date: date
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  const onSuccess = () => {
    setShowSuccesModal(true);
  };

  const { error, loading, performFetch, cancelFetch } = useFetch(
    "/user/give-homework",
    onSuccess
  );


  useEffect(() => {
    if (a) {
      performFetch({
        method: "POST",
        body: JSON.stringify({ userId: id, ...formData }),
      });
    }
  }, [a]);

  const handleSubmit = (e) => {
    e.preventDefault();
  setA(true);



     
  };

  if(error){
    console.log(error);
    setShowFailModal(true);
  }

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

<form className="flex flex-col justify-between h-full" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label htmlFor="title">Ders : </label>
        <input
          className="rounded-l text-black"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <label htmlFor="message" className="mt-2">
          Ödev :{' '}
        </label>
        <textarea
          className="rounded-l text-black"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <label className="mt-2" htmlFor="date">
          Son Tarih :{' '}
        </label>
        <DatePicker
          required
          selected={formData.date}
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
