import React from "react";

import { Img, Line, Text } from "components";

const FAQComponent = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row sm:gap-10 items-start justify-between w-[99%] md:w-full">
          <Text
            className="mt-0.5 text-gray-200 text-xl"
            size="txtBaiJamjureeSemiBold20Gray200"
          >
            How much will my website cost?
          </Text>
          <Img
            className="h-6 w-6"
            src="images/img_arrowdown.svg"
            alt="arrowdown"
          />
        </div>
        <Line className="bg-blue_gray-500 h-px w-full" />
      </div>
    </>
  );
};

FAQComponent.defaultProps = {};

export default FAQComponent;
