import React, { useState } from "react";
import BannerSlider from "./bannerslider/BannerSlider";
import IMAGES from "../../assets/Images";
import { FaArrowRightLong } from "react-icons/fa6";
import { BiMap } from "react-icons/bi";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

import {
  WhySolarEneryData,
  WhyChooseUs,
  CompanyStatistics,
} from "./WhySolarEneryData";

import TestimonialSlider from "./testimonialslider/TestimonialSlider";

import { TestimonialData } from "./testimonialslider/TestimonialData";

import { ClientsAndPartnersData } from "./ClientsAndPartnersData";

import "../../components/css/ClientAndPartnersStyle.css";
import { FooterNavbarData, FooterNavbarData2 } from "../navbar/NavbarData";
import { useNavigate } from "react-router-dom";



//https://sologixenergy.in/

function Home() {
  const [solar, setSolar] = useState(WhySolarEneryData);
  const [whychooseus, setWhyChooseUs] = useState(WhyChooseUs);
  const [statistics, setStatistics] = useState(CompanyStatistics);

  const [solarimage, setSolarImage] = useState(TestimonialData);
  const [client, setClient] = useState(ClientsAndPartnersData);

  const [footernavdata, setFooterNavData] = useState(FooterNavbarData);
  const [footernavdata2, setFooterNavData2] = useState(FooterNavbarData2);

  const navigate = useNavigate();



  return (
    <div>
      <BannerSlider images={[IMAGES.image2, IMAGES.image25, IMAGES.image26]} />

      <div className="md:max-w-[1240px] mx-auto mt-20 m-10 mb-20 selection:bg-[#222222] selection:text-white">
        <div className="grid lg:grid-cols-2 ml-5 mr-5  mt-2 ">
          <div className="mb-10">
            <img src={IMAGES.image3} alt="Not Showing" />
          </div>

          <div className="tracking-wide ">
            <div className=" uppercase  underline-offset-8 text-blue-600 font-semibold underline">
              <h1 className="h-8 md:h-full">Comapny History</h1>
            </div>
            <div className="  mt-8 leading-10">
              <h1 className="text-[34px] font-bold ">
                Professional Successful Renewable Energy Storage Solutions
                Company
              </h1>

              <p className="mt-10 leading-snug font-bold  ">
                We are a Renewable Energy Company founded by a team of
                Engineering Graduates from IIT, NIT, and DTU with in-depth
                sectoral knowledge and skills.
              </p>

              <p className="mt-8 leading-snug  ">
                With the increasing GHG emission and Global Warming threat, we
                realized that there is a need to counter the adverse impact of
                climate change and limit the Earth’s rising temperature.
              </p>
            </div>

            <div className="mt-10">
              <button className="uppercase flex items-center text-white bg-[#46b6d4] hover:bg-[#4d6eb7] absolute  pt-3 pb-3 pl-5 pr-5 rounded-md tracking-wider ">
                learn More &nbsp; <FaArrowRightLong />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>

    {/* use solar energy from start here */}
    
      <div className="bg-gray-100  mb-20 pb-24 selection:bg-[#222222] selection:text-white">
        <p className="text-center uppercase underline underline-offset-8 text-blue-600 font-semibold pb-6 text-lg  pt-16 tracking-widest ">
          Why Solar
        </p>

        <h1 className=" text-center text-4xl font-bold ">Use Solar Energy</h1>

        <div className=" md:max-w-[1440px] grid lg:grid-cols-3 gap-6  text-center   mt-10 ml-5 mr-5  ">
          {solar.map((item, index) => (
            <div
              className="bg-white px-12 py-8 mx-6  shadow-xl hover:bg-blue-200 "
              key={index}
            >
              <div className=" px-auto mx-auto inline-block  border-none pb-2 ">
                <img src={item.icon} alt="" className="  " />
              </div>
              <h2 className="font-bold pb-4">{item.heading}</h2>
              <p>{item.para}</p>
            </div>
          ))}
        </div>
      </div>

      {/* use solar energy from end here */}

      {/* Why choose us from start here */}

      <div className=" mb-20 pb-24 selection:bg-[#222222] selection:text-white">
        <p className="text-center uppercase underline underline-offset-8 text-blue-600 font-semibold pb-6 text-lg  pt-10 tracking-widest ">
          Why Choose Us
        </p>

        <h1 className=" text-center text-4xl font-bold ">
          What Makes Us Different
        </h1>

        <div className=" md:max-w-[1440px] grid lg:grid-cols-4  gap-y-8 text-center   mt-10 ml-5 mr-5 ">
          {whychooseus.map((item1, index1) => (
            <div
              className="bg-gray-100  px-16 py-6 mx-8  shadow-xl hover:bg-blue-200    "
              key={index1}
            >
              <div className=" px-auto mx-auto inline-block  border-none pb-2 ">
                <img src={item1.icon} alt="" className="  " />
              </div>
              <h2 className="font-bold pb-4">{item1.heading}</h2>
              <p className="">{item1.para}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why choose us from End here */}
         
      {/* Company statistics start from here */}
          
      <div className="bg-gray-100 mb-20 pb-24 selection:bg-[#222222] selection:text-white">
        <p className="text-center uppercase underline underline-offset-8 text-blue-600 font-semibold pb-6 text-lg pt-16 tracking-widest">
          Company Statistics
        </p>

        <h1 className="text-center text-4xl font-bold">Confidence In Work</h1>

        <div className="md:max-w-[1440px] grid lg:grid-cols-4 gap-y-8 text-center mt-20 ml-5 m4-5">
          {statistics.map((item2, index2) => (
            <div className="" key={index2}>
              <div className=" px-auto mx-auto inline-block  border-none pb-2 ">
                <img src={item2.icon} alt="" className={`${item2.style}`} />
              </div>
              <h2 className=" pb-4 text-[26px] leading-tight">
                {item2.heading}
              </h2>
              <p className="text-3xl text-[#2331BC]">{item2.counting}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Company statistics end from here */}

      {/* Our Testimonials start from here  */}

      <div className="mb-20 pb-20 selection:bg-[#222222] selection:text-white">
        <p className="text-center uppercase underline underline-offset-8 text-blue-600 font-semibold pb-6 text-lg pt-10  tracking-widest ">
          Our Testimonials
        </p>

        <h1 className="text-center text-4xl font-bold">
          What Our Clients Say About Sologix
        </h1>

        <TestimonialSlider images={TestimonialData} />
      </div>

      {/* Our Testimonials end from here  */}

      {/* Our Clients & Partners start from here */}

      <div className="bg-gray-100  mb-16 pb-24  ">
        <h1 className="text-center text-4xl font-bold pt-16 selection:bg-gray-700 selection:text-white ">
          Our Clients & Partners
        </h1>
        <div className="container ml-40 mr-40 mt-24 w-auto h-auto">
          {/* <div className="max-w-[1240px] mx-auto grid grid-cols-8">
       <div>
        <img src={IMAGES.image33} alt="" className="" />
       </div>

      </div> */}
          <div className="  mx-auto   slider-track gap-8 ">
            {client.map((item4, index4) => (
              <div key={index4} className="">
                <img src={item4.clients} alt="" className="" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Clients & Partners end from here */}

      {/* Footer start from here */}

      <div className="max-w-[1240px] mx-auto border-b-2 border-gray-200 mb-10 selection:bg-[#222222] selection:text-white ">
        <div className=" grid lg:grid-cols-4 gap-2  m-0 pb-6 pt-10">
          <div className="  h-auto md:grid-cols-6 pl-5 pr-5 pb-6">
            <div className="border-b-4 border-b-gray-600  h-10 mt-auto mb-auto   text-xl ">
              {" "}
              About Company
            </div>
            <p className="pt-8 text-lg">
              We are on a mission to make this planet a better place to live and
              we are committed to make clean energy available to all which is,
              Renewable, Reliable, and Affordable.
            </p>

            <div className="pt-4">
              <ul className=" inline-flex gap-4">
                <li className="hover:bg-[#2331BC] bg-gray-400 rounded-full p-1 cursor-pointer">
                  <img src={IMAGES.image56} alt=" " />{" "}
                </li>
                <li className="hover:bg-[#2331BC] bg-gray-400 rounded-full p-1 cursor-pointer">
                  <img src={IMAGES.image57} alt=" " />{" "}
                </li>
                <li className="hover:bg-[#2331BC] bg-gray-400 rounded-full p-1 cursor-pointer">
                  <img src={IMAGES.image58} alt=" " />{" "}
                </li>
              </ul>
            </div>
          </div>

          <div className="  h-auto md:grid-cols-6  pl-5 pr-5 pb-6">
            <div className="border-b-4 border-b-gray-600  h-10 mt-auto mb-auto   text-xl  ">
              {" "}
              Quick Links
            </div>

            <ul className="pt-8  space-y-2 ">
            {footernavdata.map((item5, index5) => (
              <div key={index5}>
           
              <li onClick={() => navigate(`${item5.url}`)} className='cursor-pointer uppercase'>{item5.nav}</li>
              </div>
              ))}
            </ul>
          </div>

          <div className="  h-auto md:grid-cols-6  pl-5 pr-5 mt-10 pb-6">
            <ul className="pt-8 leading-8">
            {footernavdata2.map((item6, index6) => (
              <div key={index6}>
           
              <li onClick={() => navigate(`${item6.url}`)} className='cursor-pointer uppercase'>{item6.nav}</li>
              </div>
              ))}
            </ul>
          </div>
             

          <div className=" h-auto md:grid-cols-6 text-left pl-5 pr-5 pb-6">
            <div className="border-b-4 border-b-gray-600  h-10 mt-auto mb-auto   text-xl  ">
              {" "}
              Contact Us
            </div>

            <ul className="list-none pt-8 text-lg">
              <BiMap size={20} className="float-left mt-1 text-blue-800 " />
              <li className="pl-8 pb-4">
                STPI Building, Plot-8, Namkum Industrial Area, Ranchi, Jharkhand
                - 834010
              </li>
              <AiOutlineMail
                size={20}
                className="float-left mt-1 text-blue-800 "
              />
              <li className="pl-8 pb-4 ">
                info@sologixenergy.in, amit@sologixenergy.in,
                anil@sologixenergy.in
              </li>
              <AiOutlinePhone
                size={20}
                className="float-left mt-1 text-blue-800 "
              />
              <li className="pl-8">+91-8287766474, +91-7838498478</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer end from here */}

      {/* Copyright start from here */}

      <div className="mb-12 selection:bg-[#222222] selection:text-white  pl-5 pr-5">
        <p className="text-center text-lg">
          Copyright © 2023 Sologix. All Rights Reserved. (Made by Kumar Atul
          Jaiswal)
        </p>
      </div>

      {/* Copyright end from here */}
    </div>
  );
}

export default Home;
