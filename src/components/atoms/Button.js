import React from "react";

export default function Button({ title, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#317773] text-white text-base md:text-lg font-semibold px-8 py-2 shadow-[3px_3px_0_black] hover:shadow-[1px_1px_0_black] hover:translate-x-[3px] hover:translate-y-[3px] transition-all font-mono"
    >
      {title}
    </button>
  );
}
