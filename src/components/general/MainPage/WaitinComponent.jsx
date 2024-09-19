const WaitingComponent = () => {
  return (
    <div className="flex flex-col items-center p-10 text-justify justify-center min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
      <div className="relative w-20 h-20 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin">
        <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 opacity-30 animate-pulse"></div>
      </div>

      <h2 className="text-xl font-semibold text-indigo-600 mt-6">
        Sayfa Yükleniyor...
      </h2>

      <p className="text-sm text-gray-500 mt-2">
        Bu işlem 30 saniye kadar sürebilir. Lütfen bekelyiniz. 1 dakika sonra
        hala bu ekranı görüyorsanız sayfayı yenileyin ve internet bağlantınızı
        kontrol edin. Sabrınız için teşekkürler...
      </p>
    </div>
  );
};

export default WaitingComponent;
