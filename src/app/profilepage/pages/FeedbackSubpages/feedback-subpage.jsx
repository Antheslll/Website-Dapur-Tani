import { useEmote } from "@/app/GlobalComponent/Store/feedbackStore";
import AddingFeedbackArea from "./Element/addingFeedbackArea";
import EmotionPick from "./Element/emotionPick";
import FeedbackHeader from "./Element/feedbackHeader";

export default function FeedbackSubPage() {
  const { finishedFeedback } = useEmote();
  return (
    <div className="w-[80%]  ml-[3.3%] grid lg:grid-rows-[15vh_35vh] md:grid-rows-[8vh_45vh] pt-[15px] ">
      <FeedbackHeader />
      {finishedFeedback ? (
        <div className="flex justify-center">
          <p className="text-red-600">Your Feedback have been submitted!</p>
        </div>
      ) : (
        <div className="overflow-y-scroll pt-5 ">
          <EmotionPick />
          <AddingFeedbackArea />
        </div>
      )}
    </div>
  );
}
