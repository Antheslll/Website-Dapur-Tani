"use client";
import { createContext, useContext, useReducer } from "react";

const CatalogNavContext = createContext();

const initialFilter = {
  cart: [],
  isPageActive: 1,
  isOpenAdvanceFilter: false,
  isTypeFilter: "",
  isStarPicked: 0,
  isCertified: "",
  isMinStorageTime: 0,
  isMaxStorageTime: 0,
  timeFrame: "Day",
  isPromotion: "",
  isLocation: "-",
  isMinPrice: 0,
  isMaxPrice: 1000000,
  isTypeExecute: "",
  isStarExecute: null,
  isCertifiedExecute: null,
  isMinStorageTimeExecute: null,
  isMaxStoreageTimeExecute: null,
  timeFrameExecute: null,
  isPromotionExecute: null,
  isLocationExecute: null,
  isMinPriceExecute: null,
  isMaxPriceExecute: null,
  isFilterApplied: false,
  isSearchTerm: "",
  isSearchApplied: false,
  isFastFilter: false,
  addToCart: false,
  productName: "",
  imgSrc: "",
  isVegetableAdded: false,
  productKey: "",
  productPrice: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PAGE_ACTIVE":
      return { ...state, isPageActive: action.payload };
    case "SET_ADVANCE_FILTER":
      return { ...state, isOpenAdvanceFilter: action.payload };
    case "SET_TYPE_FILTER":
      return { ...state, isTypeFilter: action.payload };
    case "SET_STAR_PICKED":
      return { ...state, isStarPicked: action.payload };
    case "SET_CERTIFIED":
      return { ...state, isCertified: action.payload };
    case "SET_MIN_STORAGE_TIME":
      return { ...state, isMinStorageTime: action.payload };
    case "SET_MAX_STORAGE_TIME":
      return { ...state, isMaxStorageTime: action.payload };
    case "SET_TIME_FRAME":
      return { ...state, timeFrame: action.payload };
    case "SET_PROMOTION":
      return { ...state, isPromotion: action.payload };
    case "SET_LOCATION":
      return { ...state, isLocation: action.payload };
    case "SET_MIN_PRICE":
      return { ...state, isMinPrice: action.payload };
    case "SET_MAX_PRICE":
      return { ...state, isMaxPrice: action.payload };
    case "SET_EXECUTION_STATE":
      return { ...state, [action.payload.key]: action.payload.value };
    case "SET_FILTER_APPLIED":
      return { ...state, isFilterApplied: action.payload };
    case "SET_SEARCH_TERM":
      return { ...state, isSearchTerm: action.payload };
    case "SET_FAST_FILTER":
      return { ...state, isFastFilter: action.payload };
    case "ADD_TO_CART":
      return { ...state, addToCart: action.payload };
    case "SET_PRODUCT_KEY":
      return { ...state, productKey: action.payload };
    case "SET_PRODUCT_NAME":
      return { ...state, productName: action.payload };
    case "SET_PRODUCT_PRICE":
      return { ...state, productPrice: action.payload };
    case "SET_PRODUCT_IMAGE":
      return { ...state, imgSrc: action.payload };
    case "SET_ADD_TO_CART":
      return { ...state, addToCart: action.payload };
    case "SET_SEARCH_APPLIED":
      return { ...state, cart: [...state.cart, action.payload] };
  }
};

export default function CatalogNavProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialFilter);
  return (
    <CatalogNavContext.Provider value={{ state, dispatch }}>
      {children}
    </CatalogNavContext.Provider>
  );
}

export function useCatalogHooks() {
  const context = useContext(CatalogNavContext);
  if (context === undefined) {
    throw new Error("useCatalogHooks must be used within a CatalogNavProvider");
  }
  return context;
}
