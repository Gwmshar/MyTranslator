import Select from "./Select";

export default function Box({
  select,
  setSelect,
  getLang,
  pLang,
  setPLang,
  gLang,
  setGLang,
  sTemp,
  selectTemp,
  text,
  setText,
  result,
  postLanguage,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    postLanguage();
  };
  return (
    <div>
      <div className="flex justify-center items-start gap-10">
        <div className="flex justify-around w-[40vw] max-w-[40vw] my-2">
          <div className="underline underline-offset-4 decoration-blue-500">
            {pLang}
          </div>
          <button
            className="bg-gray-300 px-10"
            onClick={() => {
              selectTemp(1);
              setSelect((prev) => !prev);
            }}
          >
            Select
          </button>
        </div>
        <div className="flex justify-around w-[40vw] max-w-[40vw] my-2">
          <div className="underline underline-offset-4 decoration-blue-500">
            {gLang}
          </div>
          <button
            className="bg-gray-300 px-10"
            onClick={() => {
              selectTemp(2);
              setSelect((prev) => !prev);
            }}
          >
            Select
          </button>
        </div>
      </div>

      {select ? (
        <Select
          getLang={getLang}
          setPLang={setPLang}
          setSelect={setSelect}
          setGLang={setGLang}
          sTemp={sTemp}
        />
      ) : (
        <div className="flex justify-center flex-col md:flex-row items-start gap-10">
          <div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center items-center"
            >
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="border resize-none border-gray-500 w-[90vw] max-w-[90vw] md:w-[40vw] md:max-w-[40vw] min-h-[40vh] p-5"
              ></textarea>
              <button className="my-10 bg-blue-500 text-white px-10 py-3">
                Submit
              </button>
            </form>
          </div>
          <div>
            <p className="border resize-none border-gray-500 w-[90vw] max-w-[90vw] md:w-[40vw] md:max-w-[40vw] min-h-[40vh] p-5 mb-5">
              {result}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
