import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  Slider,
  Text,
} from "components";
import FAQComponent from "components/FAQComponent";
import NavBar from "components/NavBar";
import ProjectCard from "components/ProjectCard";

const HomePageOnePage = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="md:h-[1120px] sm:h-[849px] h-[860px] md:px-5 relative w-full">
              <div className="md:h-[1120px] sm:h-[849px] h-[860px] m-auto w-full">
                <div className="md:h-[578px] sm:h-[849px] h-[860px] m-auto w-full">
                  <div className="absolute md:h-[578px] sm:h-[849px] h-[850px] inset-[0] justify-center m-auto w-full">
                    <div className="md:h-[578px] sm:h-[849px] h-[850px] m-auto w-full">
                      <div className="bg-gradient  flex flex-col md:gap-10 gap-[428px] h-full justify-start m-auto p-[30px] sm:px-5 w-full">
                        <div className="flex flex-col gap-[31px] justify-start mx-auto w-[85%] md:w-full">
                          <NavBar className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
                          <div className="flex flex-row gap-[249px] items-center justify-start md:ml-[0] ml-[270px] w-[41%] md:w-full">
                            <Img
                              className="h-[68px] w-[68px]"
                              src="images/img_close.svg"
                              alt="close"
                            />
                            <Img
                              className="h-[174px]"
                              src="images/img_highlight04.svg"
                              alt="highlightFour"
                            />
                          </div>
                        </div>
                        <Img
                          className="h-[49px] mb-[59px] md:ml-[0] ml-[3px] w-[49px]"
                          src="images/img_close_deep_purple_a200.svg"
                          alt="close_One"
                        />
                      </div>
                      <div className="absolute h-[370px] left-[0] top-[21%] w-[14%]">
                        <Img
                          className="h-[370px] m-auto object-cover w-full"
                          src="images/img_ellipse1175.png"
                          alt="ellipse1175"
                        />
                        <Img
                          className="absolute backdrop-opacity-[0.5] blur-[5.00px] h-[61px] left-[31%] rotate-[15deg] top-[23%] w-[61px]"
                          src="images/img_ornament70.svg"
                          alt="ornamentSeventy"
                        />
                      </div>
                    </div>
                    <Img
                      className="absolute bottom-[0] h-[565px] object-cover right-[0] w-[36%]"
                      src="images/img_ellipse1176.png"
                      alt="ellipse1176"
                    />
                  </div>
                  <Img
                    className="absolute bottom-[0] h-[226px] right-[2%]"
                    src="images/img_highlight11.svg"
                    alt="highlightEleven"
                  />
                </div>
                <div className="absolute bottom-[9%] flex md:flex-col flex-row gap-[30px] items-start justify-between right-[1%] w-[90%]">
                  <div className="flex flex-col gap-[30px] items-start justify-start md:mt-0 mt-[121px] w-auto md:w-full">
                    <div className="flex flex-col gap-[18px] items-start justify-start w-auto md:w-full">
                      <div className="flex flex-col gap-3 items-start justify-start w-auto md:w-full">
                        <Text
                          className="text-deep_purple-A200 text-xl w-auto"
                          size="txtInterSemiBold20"
                        >
                          Hello There,
                        </Text>
                        <Text
                          className="leading-[130.00%] md:text-5xl text-[64px] text-white-A700 tracking-[-1.28px]"
                          size="txtBaiJamjureeBold64"
                        >
                          <>
                            Transforming Your Digital Dreams Into
                            <br />
                            Code Realities.
                          </>
                        </Text>
                      </div>
                      <Text
                        className="leading-[26.00px] max-w-[422px] md:max-w-full text-base text-gray-100"
                        size="txtInterRegular16"
                      >
                        Innovative code development for growth, engagement, &
                        legacy. Every code line benefits your business.
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[194px]"
                      leftIcon={
                        <Img
                          className="h-5 mr-2.5"
                          src="images/img_24_download.svg"
                          alt="24 / Download"
                        />
                      }
                      shape="round"
                      color="deep_purple_A200"
                      size="md"
                      variant="fill"
                    >
                      <div className="font-medium text-base text-left">
                        Download CV
                      </div>
                    </Button>
                  </div>
                  <div className="md:h-[648px] h-[651px] relative w-[52%] md:w-full">
                    <div className="md:h-[648px] h-[651px] m-auto w-full">
                      <Img
                        className="absolute h-[648px] inset-[0] justify-center m-auto rounded-[60px]"
                        src="images/img_rectangle10096.svg"
                        alt="rectangle10096"
                      />
                      <div
                        className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[620px] inset-x-[0] items-center justify-start mx-auto p-[22px] sm:px-5 rounded-[60px] w-[90%]"
                        style={{
                          backgroundImage: "url('images/img_group8.svg')",
                        }}
                      >
                        <Img
                          className="h-[575px] md:h-auto object-cover rounded-[60px] w-full"
                          src="images/img_rectangle10095.png"
                          alt="rectangle10095"
                        />
                      </div>
                    </div>
                    <div className="absolute bg-white-A700 bottom-[34%] flex flex-col items-center justify-start left-[0] p-3.5 rounded-lg shadow-bs1 w-[23%]">
                      <div className="flex flex-col items-center justify-start w-[96%] md:w-full">
                        <div className="flex flex-col gap-2 items-center justify-start w-auto">
                          <Text
                            className="text-3xl sm:text-[26px] md:text-[28px] text-deep_purple-A200 w-auto"
                            size="txtInterBold30"
                          >
                            5+
                          </Text>
                          <Text
                            className="text-blue_gray-900 text-xs w-auto"
                            size="txtInterSemiBold12"
                          >
                            Years of Experience
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                className="absolute bottom-[18%] h-[184px] left-[26%]"
                src="images/img_vector1.svg"
                alt="vectorOne"
              />
            </div>
            <div className="md:h-[1266px] h-[545px] sm:h-[605px] mt-[84px] md:px-5 relative w-full">
              <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                <div className="flex md:flex-col flex-row gap-[13px] items-start justify-between w-full">
                  <div className="md:h-[319px] h-[520px] relative w-[36%] md:w-full">
                    <Img
                      className="absolute h-[319px] left-[0] object-cover top-[0] w-[53%]"
                      src="images/img_ellipse1178.png"
                      alt="ellipse1178"
                    />
                    <div className="absolute bg-gray-900_02 border border-gray-700 border-solid bottom-[0] flex flex-col items-start justify-start p-[19px] right-[0] rounded-[20px] w-[74%]">
                      <div className="bg-blue_gray-900 flex flex-col h-20 items-center justify-start md:ml-[0] ml-[11px] mt-[5px] p-[18px] rounded-[50%] w-20">
                        <Img
                          className="h-11 w-11"
                          src="images/img_frame.svg"
                          alt="frame"
                        />
                      </div>
                      <div className="flex flex-col gap-3 items-start justify-start md:ml-[0] ml-[11px] mt-6 w-auto">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[-0.64px] w-auto"
                          size="txtBaiJamjureeBold32"
                        >
                          Web Development
                        </Text>
                        <Text
                          className="leading-[150.00%] max-w-[321px] md:max-w-full text-base text-white-A700"
                          size="txtInterRegular16WhiteA700"
                        >
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout.
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start mb-[5px] md:ml-[0] ml-[11px] mt-[18px] w-auto">
                        <a
                          href="javascript:"
                          className="text-base text-white-A700 w-auto"
                        >
                          <Text size="txtInterMedium16">Learn More</Text>
                        </a>
                        <Img
                          className="h-6 w-6"
                          src="images/img_firrarrowsmallright.svg"
                          alt="firrarrowsmallr"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[50px] items-center justify-start w-[29%] md:w-full">
                    <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                      <div className="flex flex-col gap-3 items-center justify-start w-auto sm:w-full">
                        <Text
                          className="text-deep_purple-A200 text-xl w-auto"
                          size="txtInterSemiBold20"
                        >
                          My Services
                        </Text>
                        <Text
                          className="sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 tracking-[-0.80px] w-auto"
                          size="txtBaiJamjureeBold40"
                        >
                          The services i provide
                        </Text>
                      </div>
                      <Text
                        className="leading-[150.00%] text-base text-center text-gray-100 w-[99%] sm:w-full"
                        size="txtInterRegular16"
                      >
                        Your Ideas Need Top-Tier Development with Quality Code
                        and Cutting-Edge Innovation.
                      </Text>
                    </div>
                    <div className="bg-gray-900_02 border-b-[3px] border-deep_purple-A200 border-l border-r-2 border-solid border-t flex flex-col items-start justify-start p-[19px] rounded-[20px] w-[92%] md:w-full">
                      <div className="bg-deep_purple-A200 flex flex-col h-20 items-center justify-start md:ml-[0] ml-[11px] mt-[5px] p-[18px] rounded-[50%] w-20">
                        <Img
                          className="h-11 w-11"
                          src="images/img_frame_white_a700.svg"
                          alt="frame_One"
                        />
                      </div>
                      <div className="flex flex-col gap-3 items-start justify-start md:ml-[0] ml-[11px] mt-6 w-auto">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-gray-50 tracking-[-0.64px] w-auto"
                          size="txtBaiJamjureeBold32Gray50"
                        >
                          App Development
                        </Text>
                        <Text
                          className="leading-[150.00%] max-w-[321px] md:max-w-full text-base text-white-A700"
                          size="txtInterRegular16WhiteA700"
                        >
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout.
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start mb-[5px] md:ml-[0] ml-[11px] mt-[18px] w-auto">
                        <a
                          href="javascript:"
                          className="text-base text-deep_purple-A100 w-auto"
                        >
                          <Text size="txtInterMedium16DeeppurpleA100">
                            Learn More
                          </Text>
                        </a>
                        <Img
                          className="h-6 w-6"
                          src="images/img_firrarrowsmallright_deep_purple_a100.svg"
                          alt="firrarrowsmallr_One"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="md:h-[319px] h-[391px] md:mt-0 mt-[130px] relative w-[36%] md:w-full">
                    <Img
                      className="absolute h-[319px] object-cover right-[0] top-[0] w-[46%]"
                      src="images/img_ellipse1179.png"
                      alt="ellipse1179"
                    />
                    <div className="absolute bg-gray-900_02 border border-gray-700 border-solid bottom-[0] flex flex-col items-start justify-start left-[0] p-[19px] rounded-[20px] w-[74%]">
                      <div className="bg-blue_gray-900 flex flex-col h-20 items-center justify-start md:ml-[0] ml-[11px] mt-[5px] p-[18px] rounded-[50%] w-20">
                        <Img
                          className="h-11 w-11"
                          src="images/img_frame_white_a700_44x44.svg"
                          alt="frame_Two"
                        />
                      </div>
                      <div className="flex flex-col gap-3 items-start justify-start md:ml-[0] ml-[11px] mt-6 w-auto">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[-0.64px] w-auto"
                          size="txtBaiJamjureeBold32"
                        >
                          Game Development
                        </Text>
                        <Text
                          className="leading-[150.00%] max-w-[321px] md:max-w-full text-base text-white-A700"
                          size="txtInterRegular16WhiteA700"
                        >
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout.
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start mb-[5px] md:ml-[0] ml-[11px] mt-[18px] w-auto">
                        <a
                          href="javascript:"
                          className="text-base text-white-A700 w-auto"
                        >
                          <Text size="txtInterMedium16">Learn More</Text>
                        </a>
                        <Img
                          className="h-6 w-6"
                          src="images/img_firrarrowsmallright.svg"
                          alt="firrarrowsmallr_Two"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                className="absolute h-[49px] right-[5%] top-[0] w-[49px]"
                src="images/img_close_deep_purple_a200.svg"
                alt="close_Two"
              />
              <Img
                className="absolute bottom-[1%] h-[143px] left-[0] object-cover w-[5%]"
                src="images/img_vector.png"
                alt="vector"
              />
            </div>
            <div className="h-[1020px] md:h-[1143px] sm:h-[1291px] mt-[120px] md:px-5 relative w-full">
              <div className="h-[1020px] md:h-[1023px] sm:h-[1171px] m-auto w-full">
                <div className="h-[1020px] md:h-[1023px] sm:h-[1171px] m-auto w-full">
                  <div className="bg-gray-900_03 flex flex-col h-full justify-end m-auto pt-[117px] w-full">
                    <div className="flex flex-col gap-[22px] items-center justify-start md:ml-[0] ml-[754px] mr-[220px] w-[33%] md:w-full">
                      <div className="flex flex-col gap-[18px] items-start justify-start w-auto sm:w-full">
                        <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
                          <Text
                            className="text-deep_purple-A200 text-xl w-auto"
                            size="txtInterSemiBold20"
                          >
                            About Us
                          </Text>
                          <Text
                            className="leading-[130.00%] max-w-[466px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-white-A700 tracking-[-0.80px]"
                            size="txtBaiJamjureeBold40"
                          >
                            Transform your ideas into digital masterpieces
                          </Text>
                        </div>
                        <Text
                          className="leading-[150.00%] max-w-[463px] md:max-w-full text-base text-gray-100"
                          size="txtInterRegular16"
                        >
                          We are passionate software developers developing
                          exceptional digital experiences. We use agile and
                          cutting-edge technologies to realize ideas.{" "}
                        </Text>
                      </div>
                      <div className="flex flex-col gap-3.5 justify-start w-[99%] md:w-full">
                        <Text
                          className="md:ml-[0] ml-[15px] text-base text-white-A700"
                          size="txtInterMedium16"
                        >
                          My Skill
                        </Text>
                        <Img
                          className="h-px"
                          src="images/img_line.svg"
                          alt="line"
                        />
                      </div>
                    </div>
                    <Img
                      className="h-12 md:ml-[0] ml-[1353px] mr-[39px] mt-[300px] w-12"
                      src="images/img_contrast.svg"
                      alt="contrast"
                    />
                    <div className="h-[200px] md:h-[270px] sm:h-[418px] mt-[70px] relative w-full">
                      <div className="bg-gradient1  flex flex-col h-full items-center justify-start m-auto w-full">
                        <Img
                          className="h-[200px]"
                          src="images/img_maskgroup.svg"
                          alt="maskgroup"
                        />
                      </div>
                      <div className="absolute flex sm:flex-col flex-row md:gap-10 h-max inset-[0] items-center justify-between m-auto w-[82%]">
                        <div className="flex flex-col gap-2 items-center justify-start w-auto">
                          <Text
                            className="text-5xl sm:text-[38px] md:text-[44px] text-gray-50 tracking-[-0.96px] w-auto"
                            size="txtBaiJamjureeBold48"
                          >
                            127+
                          </Text>
                          <Text
                            className="text-gray-50 text-lg w-auto"
                            size="txtInterMedium18"
                          >
                            Happy Clients
                          </Text>
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-start w-auto">
                          <Text
                            className="text-5xl sm:text-[38px] md:text-[44px] text-gray-50 tracking-[-0.96px] w-auto"
                            size="txtBaiJamjureeBold48"
                          >
                            03
                          </Text>
                          <Text
                            className="text-gray-50 text-lg w-auto"
                            size="txtInterMedium18"
                          >
                            Total Degrees
                          </Text>
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-start w-auto">
                          <Text
                            className="text-5xl sm:text-[38px] md:text-[44px] text-gray-50 tracking-[-0.96px] w-auto"
                            size="txtBaiJamjureeBold48"
                          >
                            5+
                          </Text>
                          <Text
                            className="text-gray-50 text-lg w-auto"
                            size="txtInterMedium18"
                          >
                            Years of Experience
                          </Text>
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-start w-auto">
                          <Text
                            className="text-5xl sm:text-[38px] md:text-[44px] text-gray-50 tracking-[-0.96px] w-auto"
                            size="txtBaiJamjureeBold48"
                          >
                            750+
                          </Text>
                          <Text
                            className="text-gray-50 text-lg w-auto"
                            size="txtInterMedium18"
                          >
                            Projects Done!
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Img
                    className="absolute h-[373px] left-[0] object-cover top-[20%] w-[15%]"
                    src="images/img_ellipse1176_373x215.png"
                    alt="ellipse1176_One"
                  />
                </div>
                <Img
                  className="absolute h-[319px] object-cover right-[0] top-[13%] w-[15%]"
                  src="images/img_ellipse1177.png"
                  alt="ellipse1177"
                />
                <div className="absolute md:h-[620px] h-[640px] left-[4%] top-[12%] w-[44%] md:w-full">
                  <div className="absolute md:h-[620px] h-[640px] inset-y-[0] left-[0] my-auto w-[87%] sm:w-full">
                    <Img
                      className="absolute bottom-[0] h-[222px] left-[0] w-[222px]"
                      src="images/img_group.svg"
                      alt="group"
                    />
                    <Img
                      className="absolute h-[620px] inset-y-[0] my-auto object-cover right-[0] rounded-[30px] w-[87%]"
                      src="images/img_rectangle10089.png"
                      alt="rectangle10089"
                    />
                  </div>
                  <div className="absolute bg-white-A700 bottom-[26%] flex flex-col items-center justify-start p-[19px] right-[0] rounded-lg shadow-bs2 w-[27%]">
                    <div className="flex flex-col gap-1 items-center justify-start w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-deep_purple-A200 sm:text-xl w-auto"
                        size="txtInterBold24"
                      >
                        350+
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-sm w-auto"
                        size="txtInterSemiBold14"
                      >
                        Notable Projects
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-col gap-[18px] h-max inset-y-[0] items-center justify-start my-auto right-[8%] w-auto">
                <div className="flex flex-col gap-3.5 justify-start w-full">
                  <Text
                    className="md:ml-[0] ml-[15px] text-base text-white-A700"
                    size="txtInterMedium16"
                  >
                    My Skill
                  </Text>
                  <Img
                    className="h-px"
                    src="images/img_line.svg"
                    alt="line_One"
                  />
                </div>
                <div className="flex flex-col font-baijamjuree items-start justify-start w-[570px] sm:w-full">
                  <div className="flex flex-col gap-6 items-start justify-start w-full">
                    <div className="flex sm:flex-col flex-row gap-6 items-center justify-between w-full">
                      <Input
                        name="group1767"
                        placeholder="HTML"
                        className="font-bold md:text-[22px] p-0 placeholder:text-white-A700 sm:text-xl text-2xl text-left w-full"
                        wrapClassName="border border-gray-700 border-solid flex sm:flex-1 sm:w-full"
                        prefix={
                          <Img
                            className="h-9 mr-[17px] my-auto"
                            src="images/img_html5.svg"
                            alt="html_5"
                          />
                        }
                        shape="round"
                        size="md"
                      ></Input>
                      <Input
                        name="group1768"
                        placeholder="React"
                        className="font-bold md:text-[22px] p-0 placeholder:text-white-A700 sm:text-xl text-2xl text-left w-full"
                        wrapClassName="border border-gray-700 border-solid flex sm:flex-1 sm:w-full"
                        prefix={
                          <Img
                            className="h-9 mr-[17px] my-auto"
                            src="images/img_react.svg"
                            alt="react"
                          />
                        }
                        shape="round"
                        size="md"
                      ></Input>
                      <Input
                        name="weburl"
                        placeholder="Vue.js"
                        className="font-bold md:text-[22px] p-0 placeholder:text-white-A700 sm:text-xl text-2xl text-left w-full"
                        wrapClassName="border border-gray-700 border-solid flex sm:flex-1 sm:w-full"
                        prefix={
                          <div className="h-[54px] mr-2 w-[54px] border-deep_purple-A200_3f border border-solid bg-deep_purple-A200_26 p-[9px] rounded-[50%] flex justify-center items-center">
                            <Img
                              className="h-9 my-auto"
                              src="images/img_lightbulb.svg"
                              alt="light_bulb"
                            />
                          </div>
                        }
                        shape="round"
                        size="sm"
                      ></Input>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-[66%] md:w-full">
                      <Button
                        className="border border-gray-700 border-solid cursor-pointer flex items-center justify-center min-w-[174px] rounded-[20px]"
                        leftIcon={
                          <div className="h-[53px] mr-2 w-[53px] border-deep_purple-A200_3f border border-solid bg-deep_purple-A200_26 p-2 rounded-[26px] flex justify-center items-center">
                            <Img
                              className="h-[35px]"
                              src="images/img_laravel2_1.svg"
                              alt="laravel-2 1"
                            />
                          </div>
                        }
                        color="gray_900_02"
                        size="lg"
                        variant="fill"
                      >
                        <div className="font-bold md:text-[22px] sm:text-xl text-2xl text-left">
                          Laravel
                        </div>
                      </Button>
                      <Input
                        name="group1771"
                        placeholder="Php"
                        className="font-bold md:text-[22px] p-0 placeholder:text-white-A700 sm:text-xl text-2xl text-left w-full"
                        wrapClassName="border border-gray-700 border-solid flex w-[47%] sm:w-full"
                        prefix={
                          <div className="h-[54px] mr-2 pt-[18px] pb-4 pl-[9px] pr-[7px] w-[54px] border-deep_purple-A200_3f border border-solid bg-deep_purple-A200_26 rounded-[50%] flex justify-center items-center">
                            <Img
                              className="my-auto"
                              src="images/img_php1_1.svg"
                              alt="php-1 1"
                            />
                          </div>
                        }
                        shape="round"
                        size="sm"
                      ></Input>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                className="absolute h-[22px] left-[1%] top-[21%]"
                src="images/img_settings.svg"
                alt="settings"
              />
            </div>
            <div className="h-[1122px] mt-20 md:px-5 relative w-full">
              <Img
                className="backdrop-opacity-[0.5] blur-[5.00px] h-[50px] mb-[-11.08px] ml-[605px] w-[50px] z-[1]"
                src="images/img_ornament48.svg"
                alt="ornamentFortyEight"
              />
              <div className="flex flex-col items-center justify-start m-auto w-full">
                <div className="flex flex-col gap-[50px] justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end md:ml-[0] ml-[135px] w-[89%] md:w-full">
                    <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
                      <Text
                        className="text-deep_purple-A200 text-xl w-auto"
                        size="txtInterSemiBold20"
                      >
                        My Projects
                      </Text>
                      <Text
                        className="leading-[130.00%] max-w-[424px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-white-A700 tracking-[-0.80px]"
                        size="txtBaiJamjureeBold40"
                      >
                        Here are some successful projects
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-medium min-w-[142px] md:ml-[0] ml-[604px] md:mt-0 mt-[57px] text-base text-center"
                      shape="round"
                      color="deep_purple_A200"
                      size="md"
                      variant="outline"
                    >
                      View More
                    </Button>
                    <Img
                      className="h-[84px] md:ml-[0] ml-[51px] md:mt-0 mt-6 rounded"
                      src="images/img_minimize.svg"
                      alt="minimize"
                    />
                  </div>
                  <div className="flex md:flex-col flex-row font-baijamjuree md:gap-10 items-start justify-between w-full">
                    <div className="md:h-[1321px] sm:h-[2712px] h-[896px] relative w-[91%] md:w-full">
                      <Img
                        className="absolute h-[319px] left-[0] object-cover top-[3%] w-[13%]"
                        src="images/img_ellipse1178_319x162.png"
                        alt="ellipse1178_One"
                      />
                      <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start max-w-[1170px] my-auto right-[0] w-full">
                        <div className="md:gap-5 gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                          <ProjectCard className="flex flex-1 flex-col gap-6 items-start justify-start w-full" />
                          <div className="flex flex-1 flex-col font-inter gap-6 items-start justify-start w-full">
                            <div className="h-[350px] relative w-full">
                              <Img
                                className="h-[350px] m-auto object-cover rounded-[15px] w-full"
                                src="images/img_rectangle10098.png"
                                alt="rectangle10098"
                              />
                              <div className="absolute bg-black-900_75 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[134px] md:px-10 sm:px-5 rounded-[15px] w-full">
                                <Text
                                  className="bg-deep_purple-A200 flex h-[82px] items-center justify-center rounded-[50%] text-center text-gray-50 text-xl w-[82px]"
                                  size="txtInterMedium20"
                                >
                                  View
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col font-baijamjuree gap-3 items-start justify-start w-auto">
                              <Text
                                className="text-white-A700 text-xl w-auto"
                                size="txtBaiJamjureeSemiBold20"
                              >
                                Task Mobile App Development
                              </Text>
                              <div className="flex flex-row font-inter gap-2 items-center justify-start w-auto">
                                <div className="bg-blue_gray-500_01 h-0.5 rounded-[1px] w-[14%]"></div>
                                <Text
                                  className="text-base text-blue_gray-300 w-auto"
                                  size="txtInterRegular16Bluegray300"
                                >
                                  App Development
                                </Text>
                              </div>
                            </div>
                          </div>
                          <ProjectCard className="flex flex-1 flex-col font-baijamjuree gap-6 items-start justify-start w-full" />
                          <ProjectCard className="flex flex-1 flex-col font-baijamjuree gap-6 items-start justify-start w-full" />
                          <ProjectCard className="flex flex-1 flex-col font-baijamjuree gap-6 items-start justify-start w-full" />
                          <ProjectCard className="flex flex-1 flex-col font-baijamjuree gap-6 items-start justify-start w-full" />
                        </div>
                      </div>
                      <Img
                        className="absolute bottom-[30%] h-[130px] left-[0] object-cover w-[5%]"
                        src="images/img_ornament2.png"
                        alt="ornamentTwo"
                      />
                    </div>
                    <Img
                      className="h-[373px] md:h-auto md:mt-0 mt-[377px] object-cover"
                      src="images/img_ellipse1178_373x60.png"
                      alt="ellipse1178_Two"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-900_03 flex flex-col items-center justify-start mt-[119px] w-full">
            <div
              className="bg-cover bg-no-repeat md:h-[523px] h-[760px] p-[81px] md:px-5 relative w-full"
              style={{ backgroundImage: "url('images/img_group6.svg')" }}
            >
              <div className="absolute bottom-[44%] flex flex-row md:gap-10 inset-x-[0] items-center justify-between mx-auto w-[89%]">
                <div className="bg-deep_purple-A200_87 flex flex-col items-start justify-start px-0.5 py-2.5 rounded w-auto">
                  <Img
                    className="h-5 w-5"
                    src="images/img_arrowleft.svg"
                    alt="arrowleft"
                  />
                </div>
                <div className="bg-deep_purple-A200 flex flex-col items-start justify-start px-0.5 py-2.5 rounded w-auto">
                  <Img
                    className="h-5 w-5"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                </div>
              </div>
              <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[82%]">
                <div className="flex flex-col gap-3 items-center justify-start w-auto sm:w-full">
                  <Text
                    className="text-deep_purple-A200 text-xl w-auto"
                    size="txtInterSemiBold20"
                  >
                    Client Reviews
                  </Text>
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 tracking-[-0.80px] w-auto"
                    size="txtBaiJamjureeBold40"
                  >
                    Customer Testimonials
                  </Text>
                </div>
                <Slider
                  autoPlay
                  autoPlayInterval={2000}
                  activeIndex={sliderState}
                  responsive={{
                    0: { items: 1 },
                    550: { items: 2 },
                    1050: { items: 3 },
                  }}
                  onSlideChanged={(e) => {
                    setsliderState(e?.item);
                  }}
                  ref={sliderRef}
                  className="flex gap-[30px] mt-[50px] w-full"
                  items={[...Array(12)].map(() => (
                    <React.Fragment key={Math.random()}>
                      <div className="bg-gray-900_02 border border-gray-700 border-solid flex flex-col items-center justify-center mx-2.5 p-6 sm:px-5 rounded-[20px]">
                        <Img
                          className="h-7 mt-1.5 w-[159px]"
                          src="images/img_div.svg"
                          alt="div"
                        />
                        <Text
                          className="leading-[150.00%] mt-[18px] text-base text-blue_gray-100 text-center w-full"
                          size="txtInterRegular16Bluegray100"
                        >
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout
                        </Text>
                        <Img
                          className="h-[50px] md:h-auto mt-6 rounded-[50%] w-[50px]"
                          src="images/img_image.png"
                          alt="image"
                        />
                        <div className="flex flex-col gap-2 items-center justify-start mb-1 mt-2.5 w-auto">
                          <Text
                            className="text-lg text-white-A700 w-auto"
                            size="txtInterSemiBold18"
                          >
                            James L. Stewart
                          </Text>
                          <Text
                            className="text-blue_gray-100 text-sm w-auto"
                            size="txtInterMedium14"
                          >
                            Client
                          </Text>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                  renderDotsItem={({ isActive }) => {
                    if (isActive) {
                      return (
                        <div className="inline-block cursor-pointer rounded-[50%] h-3.5 bg-deep_purple-A200 w-3.5" />
                      );
                    }
                    return (
                      <div
                        className="inline-block cursor-pointer rounded-[50%] h-2.5 bg-deep_purple-A200_87 w-2.5"
                        role="button"
                        tabIndex={0}
                      />
                    );
                  }}
                />
                <PagerIndicator
                  className="flex gap-1 h-[22px] items-center justify-start mt-[60px] py-1 w-14"
                  count={4}
                  activeCss="inline-block cursor-pointer rounded-[50%] h-3.5 bg-deep_purple-A200 w-3.5"
                  activeIndex={sliderState}
                  inactiveCss="inline-block cursor-pointer rounded-[50%] h-2.5 bg-deep_purple-A200_87 w-2.5"
                  sliderRef={sliderRef}
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-baijamjuree gap-[29px] items-center justify-between mt-[83px] w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start mb-[3px] md:px-5 w-[8%] md:w-full">
              <Img
                className="h-[373px] md:h-auto object-cover w-full"
                src="images/img_ellipse1181.png"
                alt="ellipse1181"
              />
              <Img
                className="h-[143px] md:h-auto mt-2.5 object-cover w-[67%] sm:w-full"
                src="images/img_vector_143x71.png"
                alt="vector_One"
              />
              <Img
                className="h-[167px] md:h-auto mt-[600px] object-cover"
                src="images/img_group212.png"
                alt="group212"
              />
              <Img
                className="h-[319px] md:h-auto mt-16 object-cover w-[78%] sm:w-full"
                src="images/img_ellipse1179_319x82.png"
                alt="ellipse1179_One"
              />
            </div>
            <div className="flex md:flex-1 flex-col md:gap-10 gap-[105px] items-end justify-start md:px-5 w-[91%] md:w-full">
              <div className="sm:h-[1361px] h-[952px] md:h-[958px] relative w-full">
                <div className="absolute h-[319px] right-[0] top-1/4 w-[15%]">
                  <Img
                    className="h-[319px] m-auto object-cover w-full"
                    src="images/img_ellipse1180.png"
                    alt="ellipse1180"
                  />
                  <Img
                    className="absolute bottom-[40%] h-[38px] object-cover right-[0]"
                    src="images/img_close_deep_purple_a200_38x26.png"
                    alt="close_Three"
                  />
                </div>
                <div className="absolute flex flex-col md:gap-10 gap-20 h-max inset-y-[0] items-center justify-start left-[0] my-auto w-auto">
                  <div className="flex flex-col gap-[50px] items-center justify-start w-auto md:w-full">
                    <Text
                      className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[-0.96px] w-auto"
                      size="txtBaiJamjureeBold48WhiteA700"
                    >
                      Have any projects in Mind?
                    </Text>
                    <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between max-w-[1030px] w-full">
                      <div className="flex flex-col gap-6 items-center justify-start w-auto">
                        <div className="flex flex-col gap-[18px] items-center justify-start w-auto">
                          <Img
                            className="h-[65px] w-[67px]"
                            src="images/img_checkmark.svg"
                            alt="checkmark"
                          />
                          <Text
                            className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-auto"
                            size="txtBaiJamjureeMedium40"
                          >
                            Call
                          </Text>
                        </div>
                        <div className="flex flex-col gap-3 items-start justify-start w-auto">
                          <Text
                            className="text-blue_gray-300 text-xl w-auto"
                            size="txtBaiJamjureeRegular20"
                          >
                            +1 234 567 8900
                          </Text>
                          <Text
                            className="text-blue_gray-300 text-xl w-auto"
                            size="txtBaiJamjureeRegular20"
                          >
                            +1 234 567 8900
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-6 items-center justify-start w-[175px]">
                        <div className="flex flex-col gap-[18px] items-center justify-start w-auto">
                          <div className="md:h-[54px] h-[65px] relative w-[66%]">
                            <Img
                              className="absolute bottom-[0] h-[54px] inset-x-[0] mx-auto"
                              src="images/img_user.svg"
                              alt="user"
                            />
                            <Img
                              className="absolute h-[54px] left-[3%] top-[0] w-[54px]"
                              src="images/img_email.svg"
                              alt="email"
                            />
                          </div>
                          <Text
                            className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-auto"
                            size="txtBaiJamjureeMedium40"
                          >
                            Email
                          </Text>
                        </div>
                        <div className="flex flex-col gap-3 items-start justify-start w-auto">
                          <Text
                            className="text-blue_gray-300 text-xl w-auto"
                            size="txtBaiJamjureeRegular20"
                          >
                            info@yourmail.com
                          </Text>
                          <Text
                            className="text-blue_gray-300 text-xl w-auto"
                            size="txtBaiJamjureeRegular20"
                          >
                            info@yourmail.com
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-6 items-center justify-start w-auto">
                        <div className="flex flex-col gap-[18px] items-center justify-start w-auto">
                          <Img
                            className="h-[65px] w-[67px]"
                            src="images/img_group1732.svg"
                            alt="group1732"
                          />
                          <Text
                            className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-auto"
                            size="txtBaiJamjureeMedium40"
                          >
                            Location
                          </Text>
                        </div>
                        <Text
                          className="leading-[130.00%] text-blue_gray-300 text-center text-xl"
                          size="txtBaiJamjureeRegular20"
                        >
                          <>
                            4256 Westfall Avenue
                            <br />
                            Owatonna, MN 55060
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="font-inter h-[560px] md:h-[633px] relative w-full">
                    <div className="bg-gray-900_05 flex flex-col h-full items-center justify-start m-auto rounded-[30px] w-full">
                      <Img
                        className="h-[560px] rounded-tl-[30px] rounded-tr-[30px]"
                        src="images/img_maskgroup_blue_gray_400.svg"
                        alt="maskgroup_One"
                      />
                    </div>
                    <div className="absolute flex md:flex-col flex-row gap-[38px] h-max inset-[0] items-center justify-between m-auto w-auto">
                      <div className="flex flex-col gap-[18px] items-start justify-start w-[371px] sm:w-full">
                        <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
                          <Text
                            className="text-deep_purple-A200 text-lg w-auto"
                            size="txtUrbanistMedium18"
                          >
                            Get In Touch
                          </Text>
                          <Text
                            className="leading-[130.00%] max-w-[371px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-white-A700 tracking-[-0.80px]"
                            size="txtBaiJamjureeBold40"
                          >
                            Let’s Talk About Projects
                          </Text>
                        </div>
                        <Text
                          className="leading-[180.00%] max-w-[370px] md:max-w-full text-gray-200 text-lg"
                          size="txtInterRegular18"
                        >
                          <>
                            Have any project in mind? Partnering or working
                            together? Contact me using the form and I&#39;ll
                            respond within 48 hours.
                          </>
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[64%] md:w-full">
                        <div className="flex flex-col gap-6 items-center justify-start w-full">
                          <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-full">
                            <div className="border border-blue_gray-100 border-solid flex flex-col h-14 md:h-auto items-center justify-start px-3.5 py-2.5 rounded-lg shadow-bs w-[336px]">
                              <div className="flex flex-col items-center justify-start w-full">
                                <Text
                                  className="text-base text-gray-200 w-auto"
                                  size="txtInterRegular16Gray200"
                                >
                                  First name
                                </Text>
                              </div>
                            </div>
                            <div className="border border-blue_gray-100 border-solid flex flex-col h-14 md:h-auto items-center justify-start px-3.5 py-2.5 rounded-lg shadow-bs w-[336px]">
                              <div className="flex flex-col items-center justify-start w-full">
                                <Text
                                  className="text-base text-gray-200 w-auto"
                                  size="txtInterRegular16Gray200"
                                >
                                  Last name
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-between w-full">
                            <Input
                              name="email_Four"
                              placeholder="youmail@domain.com"
                              className="md:h-auto p-0 placeholder:text-gray-200 sm:h-auto text-base text-left w-full"
                              wrapClassName="sm:flex-1 rounded-lg sm:w-full"
                              type="email"
                              color="blue_gray_100"
                              variant="outline"
                            ></Input>
                            <Input
                              name="input"
                              placeholder="Subject"
                              className="md:h-auto p-0 placeholder:text-gray-200 sm:h-auto text-base text-left w-full"
                              wrapClassName="sm:flex-1 rounded-lg sm:w-full"
                              color="blue_gray_100"
                              variant="outline"
                            ></Input>
                          </div>
                          <div className="border border-blue_gray-100 border-solid flex flex-col h-40 md:h-auto items-start justify-start max-w-[702px] pb-3 pt-4 px-3.5 rounded-lg shadow-bs w-full">
                            <Text
                              className="text-base text-gray-200"
                              size="txtInterRegular16Gray200"
                            >
                              Your message here...
                            </Text>
                          </div>
                          <Button
                            className="!text-white-A700 border border-deep_purple-A200 border-solid cursor-pointer font-semibold h-14 max-w-[701px] rounded-lg shadow-bs text-base text-center w-full"
                            shape="round"
                            color="deep_purple_A200"
                            size="md"
                            variant="fill"
                          >
                            Send Message
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  className="absolute h-[49px] right-[7%] top-[0] w-[49px]"
                  src="images/img_close_deep_purple_a200.svg"
                  alt="close_Four"
                />
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end w-[85%] md:w-full">
                <div className="flex flex-col gap-[50px] items-center justify-start mb-[65px] md:mt-0 mt-3 w-auto md:w-full">
                  <div className="flex flex-col gap-3 items-center justify-start w-auto">
                    <a
                      href="javascript:"
                      className="text-deep_purple-A200 text-xl w-auto"
                    >
                      <Text size="txtInterSemiBold20">FAQs</Text>
                    </a>
                    <Text
                      className="leading-[130.00%] sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 tracking-[-0.80px]"
                      size="txtBaiJamjureeBold40"
                    >
                      <>
                        Do You Have Any
                        <br />
                        Questions?
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col gap-5 items-start justify-start w-auto md:w-full">
                    <div className="flex flex-col gap-[21px] items-center justify-start w-full">
                      <Line className="bg-blue_gray-500 h-px w-full" />
                      <FAQComponent className="flex flex-col gap-[18px] items-center justify-start w-full" />
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-[99%] md:w-full">
                        <Text
                          className="sm:mt-0 mt-0.5 text-deep_purple-A100 text-xl"
                          size="txtBaiJamjureeSemiBold20DeeppurpleA100"
                        >
                          How long does it take to build a Mobile application?
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="images/img_arrowup.svg"
                          alt="arrowup"
                        />
                      </div>
                      <div className="flex flex-col font-inter items-center justify-start mt-[15px] w-[98%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <Text
                            className="leading-[180.00%] text-base text-gray-200 w-full"
                            size="txtInterRegular16Gray200"
                          >
                            Website size and complexity affect timing. Simple
                            websites take 4-6 weeks, complex ones months. We can
                            give a more accurate timeframe after assessing your
                            demands.
                          </Text>
                        </div>
                      </div>
                      <Line className="bg-blue_gray-300 h-px mt-5 w-full" />
                    </div>
                    <List
                      className="flex flex-col gap-[21px] items-center w-full"
                      orientation="vertical"
                    >
                      <FAQComponent className="flex flex-1 flex-col gap-[18px] items-center justify-start w-full" />
                      <FAQComponent className="flex flex-1 flex-col gap-[18px] items-center justify-start w-full" />
                    </List>
                  </div>
                </div>
                <Img
                  className="h-[49px] md:ml-[0] ml-[122px] w-[49px]"
                  src="images/img_close_deep_purple_a200.svg"
                  alt="close_Five"
                />
                <div className="flex flex-col items-end justify-start md:ml-[0] ml-[73px] md:mt-0 mt-[104px] w-[9%] md:w-full">
                  <Img
                    className="h-[373px] md:h-auto object-cover w-full"
                    src="images/img_ellipse1178_373x93.png"
                    alt="ellipse1178_Three"
                  />
                  <Img
                    className="h-[130px] md:h-auto mt-1 object-cover w-3/5"
                    src="images/img_ornament69.png"
                    alt="ornamentSixtyNine"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="font-opensans md:h-[612px] h-[657px] mt-[55px] md:px-5 relative w-full">
            <footer className="absolute bottom-[0] flex inset-x-[0] items-center justify-center mx-auto w-full">
              <div className="md:h-[1141px] sm:h-[1248px] h-[557px] relative w-full">
                <div className="md:h-[1141px] sm:h-[1248px] h-[557px] m-auto w-full">
                  <div className="bg-gray-900_05 flex flex-col h-full items-center justify-end m-auto p-9 sm:px-5 w-full">
                    <div className="flex flex-col md:gap-10 gap-[119px] items-center justify-start mt-[133px] w-[86%] md:w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
                        <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start mb-0.5 w-1/4 md:w-full">
                          <Text
                            className="sm:text-[40px] md:text-[46px] text-[50px] text-white-A700 tracking-[-1.00px]"
                            size="txtOpenSansRomanBold50"
                          >
                            Logo
                          </Text>
                          <div className="flex flex-col font-inter gap-[30px] items-start justify-start w-full">
                            <Text
                              className="leading-[150.00%] text-base text-gray-200 w-full"
                              size="txtInterRegular16Gray200"
                            >
                              Creating and producing work we are proud of for
                              people we care about is what we do together.
                            </Text>
                            <div className="flex flex-row gap-3 items-start justify-start w-auto">
                              <Button
                                className="flex h-[30px] items-center justify-center w-[30px]"
                                shape="circle"
                                color="deep_purple_A200"
                                size="xs"
                                variant="fill"
                              >
                                <Img
                                  className="h-4"
                                  src="images/img_dribbble.png"
                                  alt="dribbble"
                                />
                              </Button>
                              <Button
                                className="flex h-[30px] items-center justify-center w-[30px]"
                                shape="circle"
                                color="blue_gray_700_4c"
                                size="xs"
                                variant="fill"
                              >
                                <Img
                                  className="h-[13px]"
                                  src="images/img_linkedin.png"
                                  alt="linkedin"
                                />
                              </Button>
                              <Button
                                className="flex h-[30px] items-center justify-center w-[30px]"
                                shape="circle"
                                color="blue_gray_700_4c"
                                size="xs"
                                variant="fill"
                              >
                                <Img
                                  className="h-[13px]"
                                  src="images/img_facebook.png"
                                  alt="facebook"
                                />
                              </Button>
                              <Button
                                className="flex h-[30px] items-center justify-center w-[30px]"
                                shape="circle"
                                color="blue_gray_700_4c"
                                size="xs"
                                variant="fill"
                              >
                                <Img
                                  className="h-[13px]"
                                  src="images/img_twitter.png"
                                  alt="twitter"
                                />
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col font-inter gap-[30px] items-start justify-start mb-4 md:ml-[0] ml-[117px] md:mt-0 mt-2.5 w-auto">
                          <Text
                            className="text-white-A700 text-xl tracking-[0.40px] w-auto"
                            size="txtInterSemiBold20WhiteA700"
                          >
                            Navigation
                          </Text>
                          <ul className="flex flex-col gap-5 items-start justify-start w-auto md:w-full common-column-list">
                            <li>
                              <a
                                href="javascript:"
                                className="text-base text-white-A700"
                              >
                                <Text size="txtInterRegular16WhiteA700">
                                  About Us
                                </Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="text-base text-white-A700"
                              >
                                <Text size="txtInterRegular16WhiteA700">
                                  Service
                                </Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="text-base text-white-A700"
                              >
                                <Text size="txtInterRegular16WhiteA700">
                                  Portfolio
                                </Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="text-base text-white-A700"
                              >
                                <Text size="txtInterRegular16WhiteA700">
                                  Contact
                                </Text>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="flex flex-col font-inter gap-[30px] items-start justify-start mb-[50px] ml-36 md:ml-[0] md:mt-0 mt-2.5 w-[149px]">
                          <Text
                            className="text-white-A700 text-xl tracking-[0.40px] w-auto"
                            size="txtInterSemiBold20WhiteA700"
                          >
                            What We Do
                          </Text>
                          <ul className="flex flex-col gap-5 items-start justify-start w-auto md:w-full common-column-list">
                            <li>
                              <a
                                href="javascript:"
                                className="text-base text-white-A700"
                              >
                                <Text size="txtInterRegular16WhiteA700">
                                  Web Development
                                </Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="text-base text-white-A700"
                              >
                                <Text size="txtInterRegular16WhiteA700">
                                  App Development
                                </Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="text-base text-white-A700"
                              >
                                <Text size="txtInterRegular16WhiteA700">
                                  Game Development
                                </Text>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="flex flex-col font-inter gap-[30px] items-start justify-start ml-36 md:ml-[0] md:mt-0 mt-2.5 w-auto">
                          <Text
                            className="text-white-A700 text-xl tracking-[0.40px] w-auto"
                            size="txtInterSemiBold20WhiteA700"
                          >
                            Contact
                          </Text>
                          <ul className="flex flex-col font-nunitosans gap-5 items-start justify-start w-auto md:w-full common-column-list">
                            <li>
                              <a href="javascript:">
                                <div className="flex flex-row gap-2 items-center justify-start">
                                  <Img
                                    className="h-5 w-5"
                                    src="images/img_call.svg"
                                    alt="call_One"
                                  />
                                  <Text
                                    className="text-base text-white-A700 w-auto"
                                    size="txtNunitoSansRegular16"
                                  >
                                    +1 703.000.000
                                  </Text>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:">
                                <div className="flex flex-row gap-2 items-center justify-start">
                                  <Img
                                    className="h-5 w-5"
                                    src="images/img_24mail.svg"
                                    alt="24mail"
                                  />
                                  <Text
                                    className="text-base text-white-A700 w-auto"
                                    size="txtNunitoSansRegular16"
                                  >
                                    info@websitename.com
                                  </Text>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:">
                                <div className="flex flex-row gap-2 items-start justify-start">
                                  <Img
                                    className="h-5 mt-1 w-5"
                                    src="images/img_24location.svg"
                                    alt="24location"
                                  />
                                  <Text
                                    className="leading-[28.00px] text-base text-white-A700"
                                    size="txtNunitoSansRegular16"
                                  >
                                    <>
                                      4256 Westfall Avenue
                                      <br />
                                      Owatonna, MN 55060
                                    </>
                                  </Text>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row font-inter md:gap-10 gap-[674px] items-start justify-between w-auto md:w-full">
                        <Text
                          className="text-base text-gray-50 w-auto"
                          size="txtInterRegular16Gray50"
                        >
                          © 2024 copyright all right reserved
                        </Text>
                        <Text
                          className="text-base text-gray-50 w-auto"
                          size="txtInterRegular16Gray50"
                        >
                          <>Terms of Use | Privacy Policy</>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Img
                    className="absolute h-[373px] inset-y-[0] left-[0] my-auto object-cover w-[10%]"
                    src="images/img_ellipse1178_373x132.png"
                    alt="ellipse1178_Four"
                  />
                  <Img
                    className="absolute bottom-[5%] h-[319px] object-cover right-[0] w-[7%]"
                    src="images/img_ellipse1179_319x99.png"
                    alt="ellipse1179_Two"
                  />
                </div>
                <Line className="absolute bg-blue_gray-800 bottom-[17%] h-px inset-x-[0] mx-auto w-full" />
              </div>
            </footer>
            <div className="absolute bg-gradient1  border border-gray-700 border-solid flex flex-col font-inter inset-x-[0] items-center justify-start mx-auto rounded-[20px] top-[0] w-[82%]">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[198px] items-center justify-end p-[50px] md:px-10 sm:px-5 w-full"
                style={{ backgroundImage: "url('images/img_group9.svg')" }}
              >
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1050px] w-full">
                  <div className="flex sm:flex-1 flex-col gap-3.5 items-start justify-start w-auto sm:w-full">
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 tracking-[-0.80px] w-auto"
                      size="txtBaiJamjureeBold40"
                    >
                      <>Interested in working with us?</>
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                      size="txtInterMedium24"
                    >
                      Book a free call
                    </Text>
                  </div>
                  <Button
                    className="!text-white-A700 capitalize cursor-pointer font-medium h-14 text-base text-center w-[140px]"
                    shape="round"
                    color="deep_purple_A200"
                    size="md"
                    variant="fill"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageOnePage;
