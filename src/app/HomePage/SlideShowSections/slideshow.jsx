/* eslint-disable*/
"use client";

import { ButtonProvider } from "../../GlobalComponent/Hooks/activeButtonContext.jsx";
import SlideShowContent from "./Element/slide.jsx";

export default function SlideShow() {
  return (
    <ButtonProvider>
      <SlideShowContent />
    </ButtonProvider>
  );
}
