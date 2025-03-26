"use client";
import { useState } from "react";
import FAQHeader from "./Element/faqHeader";
import FAQQuestion from "./Element/faqQuestion";

const FAQSubPage = () => {
  const [isOpen, setIsOpen] = useState(null);
  const handleOpen = (question) => {
    isOpen === question ? setIsOpen(null) : setIsOpen(question);
  };
  return (
    <div className="w-[80%]  ml-[3.3%] grid grid-rows-[70px_280px] pt-[15px]">
      <FAQHeader />
      <FAQQuestion isOpen={isOpen} handleOpen={handleOpen} />
    </div>
  );
};

export default FAQSubPage;
