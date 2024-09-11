// import { useState } from "react";
// import Modal from "../Modal/Modal";
// import useFetch from "../../../hooks/useFetch";

// const ResetPassword = () => {
//   const [error, setError] = useState(false);
//   const [errorMessage, setErrorMessage] = useState(
//     "Bir hata oluştu. İnternet bağlantınızı kontrol edip tekrar deneyin."
//   );
//   const [email, setEmail] = useState("");

//   const { isLoading, error:errorFetch, performFetch, cancelFetch } = useFetch(
//     "/user/create",
//     onSuccess
//   );


//   const handleSubmit = async () => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       setErrorMessage("Lütfen geçerli bir email adresi yazın.");
//       setError(true);
//       return;
//     }

//     try {
      
//       await sendPasswordResetEmail(auth, email);
//       window.location.reload();

//     } catch (error) {
//       console.log(error);
//       setErrorMessage("Bir hata oluştu. Daha sonra yeniden deneyin.");
//       setError(true)
//     }

    

//   };
//   return (
//     <>
//       {error && (
//         <Modal
//           title={"Hata"}
//           text={errorMessage}
//           positiveButton={"Anladım"}
//           positiveFunction={() => setError(false)}
//         />
//       )}
//       <main id="content" role="main" className="w-full max-w-md mx-auto p-6">
//         <div className="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
//           <div className="p-4 sm:p-7">
//             <div className="text-center">
//               <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
//                 Şifremi Unuttum
//               </h1>
//               <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
//                 Şifreni Hatırladın mı?
//                 <div
//                   onClick={() => window.location.reload()}
//                   className="text-blue-600 decoration-2 hover:underline font-medium cursor-pointer"
//                 >
//                   Giriş Yap
//                 </div>
//               </div>
//             </div>

//             <div className="mt-5">
//               <form>
//                 <div className="grid gap-y-4">
//                   <div>
//                     <label
//                       htmlFor="email"
//                       className="block text-sm font-bold ml-1 mb-2 dark:text-white"
//                     >
//                       Email
//                     </label>
//                     <div className="relative">
//                       <input
//                         type="email"
//                         id="email"
//                         onChange={(e) => setEmail(e.target.value)}
//                         name="email"
//                         className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
//                         required
//                         aria-describedby="email-error"
//                       />
//                     </div>
//                     <p
//                       className="hidden text-xs text-red-600 mt-2"
//                       id="email-error"
//                     >
//                       Lütfen siteye kaydolurken kullandığınız email adresini
//                       girin. Size bir şifre yenileme bağlantısı göndereceğiz.
//                     </p>
//                   </div>
//                   <button
//                     onClick={handleSubmit}
//                     type="submit"
//                     className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
//                   >
//                     Reset password
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// };

// export default ResetPassword;
