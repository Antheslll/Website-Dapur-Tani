"use client";
import { useState, useEffect } from "react";
export function useMenuHover() {
  const [menuHover, setMenuHover] = useState(null);

  return { menuHover, setMenuHover };
}

export function useHovered() {
  const [isHovered, setIsHovered] = useState(false);
  return { isHovered, setIsHovered };
}

export function usePromotionFilterClick() {
  const [click, setClick] = useState("");
  return { click, setClick };
}
