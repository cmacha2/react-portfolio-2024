import React from "react";

const sizeClasses = {
  txtInterRegular16Gray200: "font-inter font-normal",
  txtInterMedium24: "font-inter font-medium",
  txtBaiJamjureeBold48: "font-baijamjuree font-bold",
  txtBaiJamjureeMedium40: "font-baijamjuree font-medium",
  txtInterBold24: "font-bold font-inter",
  txtUrbanistMedium18: "font-medium font-urbanist",
  txtBaiJamjureeBold40: "font-baijamjuree font-bold",
  txtInterSemiBold20WhiteA700: "font-inter font-semibold",
  txtBaiJamjureeBold64: "font-baijamjuree font-bold",
  txtOpenSansRomanBold30: "font-bold font-opensans",
  txtInterRegular16Bluegray100: "font-inter font-normal",
  txtOpenSansRomanBold50: "font-bold font-opensans",
  txtInterRegular16Gray50: "font-inter font-normal",
  txtBaiJamjureeSemiBold20: "font-baijamjuree font-semibold",
  txtBaiJamjureeSemiBold20Gray200: "font-baijamjuree font-semibold",
  txtInterMedium16DeeppurpleA100: "font-inter font-medium",
  txtInterMedium16DeeppurpleA200: "font-inter font-medium",
  txtInterMedium18: "font-inter font-medium",
  txtBaiJamjureeSemiBold20DeeppurpleA100: "font-baijamjuree font-semibold",
  txtInterRegular16Bluegray300: "font-inter font-normal",
  txtInterRegular16WhiteA700: "font-inter font-normal",
  txtInterSemiBold14: "font-inter font-semibold",
  txtInterSemiBold12: "font-inter font-semibold",
  txtInterMedium16: "font-inter font-medium",
  txtInterSemiBold18: "font-inter font-semibold",
  txtInterMedium14: "font-inter font-medium",
  txtBaiJamjureeBold48WhiteA700: "font-baijamjuree font-bold",
  txtBaiJamjureeBold32Gray50: "font-baijamjuree font-bold",
  txtInterBold30: "font-bold font-inter",
  txtInterMedium20: "font-inter font-medium",
  txtNunitoSansRegular16: "font-normal font-nunitosans",
  txtInterSemiBold20: "font-inter font-semibold",
  txtBaiJamjureeBold32: "font-baijamjuree font-bold",
  txtBaiJamjureeRegular20: "font-baijamjuree font-normal",
  txtInterRegular16: "font-inter font-normal",
  txtInterRegular18: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
