import { useEmote } from "@/app/GlobalComponent/Store/feedbackStore";
import {
  Amazing,
  Happy,
  Okay,
  Sad,
  Terrible,
} from "@/app/icons/feedbackEmotion-icon";

export default function EmotionPick() {
  const { emote } = useEmote();
  return (
    <div className="xl:w-[80%] md:w-[90%] ">
      <div className=" rounded-xl grid grid-cols-5 gap-3">
        <EmotionCard
          emoticon={<Terrible opacity={emote === "Terrible" ? 1 : 0.5} />}
          emoticonphrase="Terrible"
        />
        <EmotionCard
          emoticon={<Sad opacity={emote === "Sad" ? 1 : 0.5} />}
          emoticonphrase="Sad"
        />
        <EmotionCard
          emoticon={<Okay opacity={emote === "Okay" ? 1 : 0.5} />}
          emoticonphrase="Okay"
        />
        <EmotionCard
          emoticon={<Happy opacity={emote === "Happy" ? 1 : 0.5} />}
          emoticonphrase="Happy"
        />
        <EmotionCard
          emoticon={<Amazing opacity={emote === "Amazing" ? 1 : 0.5} />}
          emoticonphrase="Amazing"
        />
      </div>
    </div>
  );
}
const EmotionCard = ({ emoticon, emoticonphrase }) => {
  const { emote, setEmote } = useEmote();

  return (
    <>
      <div
        className={`${
          emote === emoticonphrase ? "border-black" : ""
        } h-[150px] border-4 grid grid-rows-[100px_50px] rounded-xl mx-[1%]`}
        onClick={() => setEmote(emoticonphrase)}
      >
        <div className="flex justify-center pt-7 scale-[80%]">{emoticon}</div>
        <div>
          <p
            className={`text-center font-[Roboto-bold] ${
              emote === emoticonphrase ? "" : "text-[#9F9F9F]"
            }  text-[14px]`}
          >
            {emoticonphrase}
          </p>
        </div>
      </div>
    </>
  );
};
