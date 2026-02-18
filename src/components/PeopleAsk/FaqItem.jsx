import { useState } from "react";

const FaqItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex justify-between items-center"
      >
        <span className="font-medium text-gray-800">
          {question}
        </span>

        <span className="text-xl">
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <p className="mt-3 text-gray-600 text-sm leading-relaxed">
          {answer}
        </p>
      )}
    </div>
  );
};

export default FaqItem;
