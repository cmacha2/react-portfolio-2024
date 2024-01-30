import React from "react";

import { Img, Text } from "components";

const ProjectCard = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[350px] sm:h-auto object-cover rounded-bl-[15px] rounded-br-[15px] w-full"
          src="images/img_rectangle10097.png"
          alt="rectangle10097"
        />
        <div className="flex flex-col gap-3 items-start justify-start w-auto">
          <Text
            className="text-white-A700 text-xl w-auto"
            size="txtBaiJamjureeSemiBold20"
          >
            Beauty Landing Page
          </Text>
          <div className="flex flex-row gap-2 items-center justify-start w-auto">
            <div className="bg-blue_gray-500_01 h-0.5 rounded-[1px] w-[14%]"></div>
            <Text
              className="text-base text-blue_gray-300 w-auto"
              size="txtInterRegular16Bluegray300"
            >
              Web Development
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

ProjectCard.defaultProps = {};

export default ProjectCard;
