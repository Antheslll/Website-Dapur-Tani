"use client";
import { useEmote } from "@/app/GlobalComponent/Store/feedbackStore";
import { useState } from "react";
export default function AddingFeedbackArea() {
  const [text, setText] = useState("");
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  return (
    <div className="mt-[20px] h-[200px]">
      <p className="text-[13px] text-[#9F9F9F]">
        What are the main reasonse for your rating?
      </p>
      <textarea
        className="w-[505px] h-[80px] resize-none border border-black rounded-md pl-1 text-[12px]"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <br />
      <FeedbackCheckbox
        Name="contact"
        value="Agree to Contact"
        checkText="I may be contacted about this feedback"
        setChecked={setChecked1}
        checked={checked1}
      />

      <FeedbackCheckbox
        Name="Research-group"
        value="Agree to Join"
        checkText=" I’d like to help improve by joining the research group"
        setChecked={setChecked2}
        checked={checked2}
      />
      <br />

      <div className="h-[100px] grid grid-cols-[90px_90px] mt-5 ml-[53%]">
        <FeedbackExcuteButton execute="Submit" customStyle="bg-[#04E824]" />
        <FeedbackExcuteButton
          execute="Cancel"
          customStyle="bg-[#D9D9D9]"
          setText={setText}
          setChecked1={setChecked1}
          setChecked2={setChecked2}
        />
      </div>
    </div>
  );
}

function FeedbackCheckbox({ Name, value, checkText, checked, setChecked }) {
  return (
    <label className="text-[13px] text-[#9F9F9F] flex">
      <input
        type="checkbox"
        className="hover:bg-[#9F9F9F]"
        name={Name}
        checked={checked}
        value={value}
        onChange={(e) => setChecked(e.target.value)}
      />
      <p className="ml-2">{checkText}</p>
    </label>
  );
}

function FeedbackExcuteButton({
  execute,
  customStyle,
  setText,
  setChecked1,
  setChecked2,
}) {
  const { setFinishedFeedback, setEmote } = useEmote();
  return (
    <button
      className={`w-[80px] h-[30px] ${customStyle}  text-[13px] text-white rounded-sm`}
      onClick={
        execute === "Submit"
          ? () => setFinishedFeedback(true)
          : () => {
              setText("");
              setEmote("");
              setChecked1(false);
              setChecked2(false);
            }
      }
    >
      {execute}
    </button>
  );
}
