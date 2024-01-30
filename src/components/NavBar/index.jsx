import React from "react";

import { Button, Text } from "components";

const NavBar = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex flex-col items-center justify-start md:mt-0 mt-1.5">
          <Text
            className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700 tracking-[-0.60px]"
            size="txtOpenSansRomanBold30"
          >
            Logo
          </Text>
        </div>
        <ul className="flex sm:flex-col flex-row gap-10 sm:hidden items-start justify-start md:ml-[0] ml-[293px] md:mt-0 my-3 w-auto sm:w-full common-row-list">
          <li>
            <a
              href="javascript:"
              className="hover:font-medium text-base text-deep_purple-A200"
            >
              <Text size="txtInterMedium16DeeppurpleA200">Home</Text>
            </a>
          </li>
          <li>
            <a
              href="javascript:"
              className="hover:font-medium text-base text-blue_gray-100 hover:text-deep_purple-A200"
            >
              <Text size="txtInterRegular16Bluegray100">About</Text>
            </a>
          </li>
          <li>
            <a
              href="javascript:"
              className="hover:font-medium text-base text-blue_gray-100 hover:text-deep_purple-A200"
            >
              <Text size="txtInterRegular16Bluegray100">Services</Text>
            </a>
          </li>
          <li>
            <a
              href="javascript:"
              className="hover:font-medium text-base text-blue_gray-100 hover:text-deep_purple-A200"
            >
              <Text size="txtInterRegular16Bluegray100">Portfolio</Text>
            </a>
          </li>
          <li>
            <a
              href="javascript:"
              className="hover:font-medium text-base text-blue_gray-100 hover:text-deep_purple-A200"
            >
              <Text size="txtInterRegular16Bluegray100">Contact</Text>
            </a>
          </li>
        </ul>
        <Button
          className="cursor-pointer font-inter min-w-[119px] md:ml-[0] ml-[243px] text-base text-center"
          shape="round"
          color="deep_purple_A200"
          size="sm"
          variant="fill"
        >
          Hire Me
        </Button>
      </header>
    </>
  );
};

NavBar.defaultProps = {};

export default NavBar;
