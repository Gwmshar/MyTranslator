import { useState, useEffect } from "react";
import axios from "axios";
import Box from "./Components/Box";
import keys from "../keys";
function App() {
  const [select, setSelect] = useState(false);
  const [getLang, setGetLang] = useState({});
  const [pLang, setPLang] = useState("en");
  const [gLang, setGLang] = useState("hi");
  const [sTemp, selectTemp] = useState(0);
  const [text, setText] = useState("What is your name ?");
  const [result, setResult] = useState("");
  const getLanguage = async () => {
    const options = {
      method: "GET",
      url: "https://text-translator2.p.rapidapi.com/getLanguages",
      headers: {
        "X-RapidAPI-Key": keys,
        "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);
      setGetLang(response.data.data.languages);
    } catch (error) {
      console.error(error);
    }
  };
  const postLanguage = async () => {
    const encodedParams = new URLSearchParams();
    encodedParams.set("source_language", pLang);
    encodedParams.set("target_language", gLang);
    encodedParams.set("text", text);
    const options = {
      method: "POST",
      url: "https://text-translator2.p.rapidapi.com/translate",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": keys,
        "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
      },
      data: encodedParams,
    };

    try {
      const response = await axios.request(options);
      setResult(response.data.data.translatedText);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    postLanguage();
    getLanguage();
  }, []);
  return (
    <>
      <div className="text-center text-2xl font-bold my-10">My Translator</div>
      <div className="flex justify-center items-start gap-10">
        <Box
          select={select}
          setSelect={setSelect}
          getLang={getLang}
          pLang={pLang}
          setPLang={setPLang}
          gLang={gLang}
          setGLang={setGLang}
          sTemp={sTemp}
          selectTemp={selectTemp}
          text={text}
          setText={setText}
          result={result}
          postLanguage={postLanguage}
        />
      </div>
    </>
  );
}

export default App;
