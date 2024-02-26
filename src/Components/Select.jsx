import React from "react";

export default function Select({
  getLang,
  setPLang,
  setSelect,
  setGLang,
  sTemp,
}) {
  const handleSelect = (id) => {
    let b = getLang.filter((a) => a.code == id);
    if (sTemp == 1) {
      setPLang(b[0].code);
    } else if (sTemp == 2) {
      setGLang(b[0].code);
    }
    setSelect(false);
  };
  return (
    <div className="border border-gray-300 grid grid-cols-4 md:grid-cols-7 text-sm">
      {getLang &&
        getLang.map((a) => {
          return (
            <button key={a.code} onClick={() => handleSelect(a.code)}>
              {a.name}
            </button>
          );
        })}
    </div>
  );
}
