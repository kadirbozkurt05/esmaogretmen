import { useState } from "react";

const AboutMe = () => {
  const [aboutMeInput, setAboutMeInput] = useState(false);
  const [text, setText] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sit repudiandae eaque neque nostrum quidem quis accusamus, totam enim sequi ab veritatis maiores consectetur soluta, nulla fugit perspiciatis odit unde?Nisi, facilis eveniet sit tempore ab fugit suscipit temporibus. Magni eum commodi debitis eligendi non? Quis molestias, tenetur eos qui totam aliquid commodi odio dolor nisi reprehenderit eveniet, earum debitis.Optio cumque eum facilis dolorem quae ipsam vitae exercitationem harum eius at. Placeat, ipsa aliquam qui laboriosam nulla quo cum. Sapiente saepe quos consequatur asperiores, libero et officia tempore. Provident!"
  );
  return (
    <div className="">
      <div className="flex flex-col">
        <h1 className=" text-white mb-2">Hakkımda</h1>
        <div className="mb-4 bg-gray-800 border border-gray-800 shadow-lg flex flex-row justify-between rounded-2xl p-2">
          {!aboutMeInput ? (
            <div className="w-11/12 rounded-md border p-4 flex flex-row text-gray-200 cursor-default">{text}</div>
          ) : (
            <textarea
              className="bg-gray-800 placeholder-slate-500 rounded-md border p-4 flex flex-row text-gray-200 w-11/12"
              placeholder={text}
              type="text"
              rows={6}
              maxLength={300}            
            />
          )}
          <div
            className=" self-center bg-gray-600 rounded-xl p-2 ml-2 cursor-pointer"
            onClick={() => setAboutMeInput(!aboutMeInput)}
          >
            Düzenle
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
