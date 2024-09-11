import { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { useForm } from "react-hook-form";
import Modal from "../Modal/Modal";

const NewsLetter = () => {
  const [showModal, setShowModal] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: {},
  } = useForm();

  const onSuccess = () => {
    setShowModal(true);
    setTimeout(()=>{
      setShowModal(false);
    },2000)
    reset();
  }


  const {error, loading, performFetch} = useFetch("/newsletter",onSuccess);

  const onSubmit = (formData) => {
    performFetch({
      method:"POST",
      body: JSON.stringify(formData)
    })
  }

  return (<>
{ showModal && <Modal
          title={"Abonelik"}
          text={"Artık bizden bilgilendirme e-postaları alacaksınız."}
        />}


<div className="px-3 md:px-48 py-6 bg-black text-white">
      <div className=" flex flex-col gap-6 items-center md:gap-32 justify-between  md:flex-row">
        <div className="sm:w-7/12">
          <div className="text-3xl font-bold">
            SON FIRSATLARI
            <span className="bg-gradient-to-br from-sky-500  text-cyan-400 bg-clip-text">{" "}
              KAÇIRMA!
            </span>
          </div>
          <p className="mt-3 text-gray-300">
            E-posta adresini kaydet ve üye olmasan bile son gelişmelerden, kampanya veya yarışmalardan habedar ol.
          </p>
        </div>
        <div className="w-full sm:w-5/12">
          <form onSubmit={handleSubmit(onSubmit)} className="flex border border-cyan-900 rounded-full bg-slate-800 px-4 py-2 focus-within:ring-2 focus-within:ring-cyan-600 hover:ring-2 hover:ring-cyan-600">
            <input type="email" {...register("email")} required className="w-full text-black p-2 appearance-none bg-slate-800 focus:outline-none" />
            <button
              className="ml-2 shrink-0 rounded-full bg-gradient-to-br from-sky-500 to-cyan-400 px-3 py-1 text-sm font-medium hover:from-sky-700 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600/50"
              
            >
              Abone Ol
            </button>
          </form>
        </div>
      </div>
    </div>


  </>
    
  );
};

export default NewsLetter;