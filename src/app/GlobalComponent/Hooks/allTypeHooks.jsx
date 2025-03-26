"use client";
import { useState } from "react";

export function useCart() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartOpen = (bool) => {
    setIsCartOpen(bool);
  };

  return { isCartOpen, handleCartOpen };
}
