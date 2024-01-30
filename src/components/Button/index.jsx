import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded-md" };
const variants = {
  fill: {
    gray_900_02: "bg-gray-900_02 text-white-A700",
    deep_purple_A200: "bg-deep_purple-A200 text-gray-50",
    blue_gray_700_4c: "bg-blue_gray-700_4c",
  },
  outline: {
    deep_purple_A200:
      "border border-deep_purple-A200 border-solid text-deep_purple-A200",
  },
};
const sizes = {
  xs: "p-1.5",
  sm: "p-3.5",
  md: "p-[17px]",
  lg: "pl-3 pr-4 py-6",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "gray_900_02",
    "deep_purple_A200",
    "blue_gray_700_4c",
  ]),
};

export { Button };
