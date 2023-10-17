import React from "react";
import { useState } from "react";
import IMAGES from "../../../assets/Images";

import { TestimonialData } from "./TestimonialData";
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";

const TestimonialSlider = ({ images }) => {
  const [avataricon, setAvatarIcon] = useState(TestimonialData);

  const [current, setIndex] = useState(0);

  const previousImage = () => {
    setIndex(current === 0 ? images.length - 1 : current - 1);
  };

  const nextImage = () => {
    setIndex(current === images.length - 1 ? 0 : current + 1);
  };

  return (
    <div>
      <div className=" relative">
        <div className=" md:max-w-[1080px] mt-20 mx-auto  ">
          <div className="absolute top-0 bottom-0 left-0 flex justify-center items-center">
            <button
              className="p-2 rounded-full bg-gray-800 bg-opacity-50 text-white"
              onClick={previousImage}
            >
              <BiSolidLeftArrow />
            </button>
          </div>

          <div className="grid lg:grid-cols-2 ml-4 mr-4 ">
            <div className="  ">
              {avataricon.map((item, index) => (
                <div
                  className={
                    index === current
                      ? "slide active "
                      : "slide"
                  }
                  key={index}
                >
                  {index === current && (
                    <img src={item.image} alt="travel image" className="w-auto" />
                  )}
                </div>
              ))}
            </div>

            <div className="  ">
              {avataricon.map((item1, index1) => (
                <div
                  className={
                    index1 === current
                      ? "slide active gird lg:grid-cols-2"
                      : "slide"
                  }
                  key={index1}
                >
                  {index1 === current && (
                    <img
                      src={item1.avatar}
                      alt=""
                      className="float-left pr-6"
                    />
                  )}

                  {index1 === current && <p>{item1.name}</p>}

                  {index1 === current && (
                    <p className="font-bold text-blue-700">
                      {item1.professionNbelong}
                    </p>
                  )}

                  {index1 === current && (
                    <p className="pt-8">{item1.description}</p>
                  )}

                  {index1 === current && (
                    <div className="mt-4 text-[12px]">
                      <table className=" w-auto  text-left ">
                        <tr className="border border-collapse border-l-0 border-r-0">
                          <th className="p-2 ">System Capacity</th>
                          <th className="p-2 ">System Type</th>
                          <th className="p-2 ">Location</th>
                          <th className="p-2 ">Annual Generation</th>
                          <th className="p-2 ">Annual Savings</th>
                        </tr>

                        <tr className=" ">
                          <td className="p-3">
                            {item1.systemCapacity}
                          </td>
                          <td className="pl-2 ">
                            {item1.systemType}
                          </td>
                          <td className="pl-2 ">
                            {item1.Location}
                          </td>
                          <td className="pl-2 ">
                            {item1.AnnualGeneration}
                          </td>
                          <td className="pl-2 ">
                            {item1.AnnualSavings}
                          </td>
                        </tr>
                      </table>
                    </div>
                  )}
                </div>
              ))}
              <div className="absolute top-0 bottom-0 right-0 flex justify-center items-center">
                <button
                  className="p-2 rounded-full bg-gray-800 bg-opacity-50 text-white"
                  onClick={nextImage}
                >
                  <BiSolidRightArrow />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
