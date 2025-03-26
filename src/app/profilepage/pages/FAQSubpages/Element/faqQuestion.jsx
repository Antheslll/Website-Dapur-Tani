export default function FAQQuestion({ isOpen, handleOpen }) {
  return (
    <div className="pt-10">
      <FAQSentence
        question="1. What is Dapur Tani"
        answer="Dapur Tani is a web platform that connects local farmers with consumers, providing fresh produce directly without intermediaries while supporting farmers' welfare."
        isOpen={isOpen}
        handleOpen={handleOpen}
      />

      <FAQSentence
        question="2. Does Dapur Tani Provide Delivery throughout Indonesia?"
        answer="No, Dapur Tani does not provide delivery throughout Indonesia. Currently, delivery is available only in selected regions to ensure the freshness and quality of the produce. As the platform grows, it plans to expand its delivery coverage to reach more consumers nationwide."
        isOpen={isOpen}
        handleOpen={handleOpen}
      />
      <FAQSentence
        question="3. Does Dapur Tani have a loyalty program or discount?"
        answer="Yes, Dapur Tani offers a loyalty program where customers earn points for every purchase, which can be redeemed for discounts on future orders. Additionally, seasonal promotions and special discounts are available for first-time buyers and loyal customers."
        isOpen={isOpen}
        handleOpen={handleOpen}
      />
    </div>
  );
}

const FAQSentence = ({ question, answer, isOpen, handleOpen }) => {
  return (
    <>
      <div className="w-full h-[30px] border-b-2 grid grid-cols-[95%_5%]">
        <div>
          <h3 className="text-[#9F9F9F] ">{question}</h3>
        </div>
        <div>
          <button
            className="text-[#9F9F9F]"
            onClick={() => {
              handleOpen(question);
            }}
          >
            {isOpen === question ? "-" : "+"}
          </button>
        </div>
      </div>
      <div
        className={`px-4 border-b-2 ${
          isOpen === question ? "h-[70px]" : "h-0"
        }`}
      >
        <p
          className={`text-[#646464] text-[12px] ${
            isOpen === question ? "" : "hidden"
          }`}
        >
          {answer}
        </p>
      </div>
    </>
  );
};
