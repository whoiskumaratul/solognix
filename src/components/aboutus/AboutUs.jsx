import React from "react";
import IMAGES from "../../assets/Images";
import { TiTickOutline } from 'react-icons/ti'
import { FaArrowRightLong } from "react-icons/fa6";
import { BiMap } from "react-icons/bi";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

import { useState } from "react";
import { TeamMembersData } from "./TeamMembersData";
import { CompanyStatistics } from "../home/WhySolarEneryData";
import { TestimonialData } from "../home/testimonialslider/TestimonialData";
import TestimonialSlider from "../home/testimonialslider/TestimonialSlider";

import { ClientsAndPartnersData } from "../home/ClientsAndPartnersData";

import "../../components/css/ClientAndPartnersStyle.css";
import { FooterNavbarData, FooterNavbarData2 } from "../navbar/NavbarData";
import { useNavigate } from "react-router-dom";


function AboutUs() {

  const state = ["Bihar", "Jharkhand"];
  const [members, setMembers] = useState(TeamMembersData)
  const [statistics, setStatistics] = useState(CompanyStatistics)
  const [client, setClient] = useState(ClientsAndPartnersData);
  const [footernavdata, setFooterNavData] = useState(FooterNavbarData);
  const [footernavdata2, setFooterNavData2] = useState(FooterNavbarData2);

  const navigate = useNavigate();


  return (
    <div>
      <div className="mx-auto ">
        <div className="max-h-full relative ">
          <div className="absolute text-white bg-black/60  w-full h-full  flex flex-col justify-center items-center  ">
            <div className="tracking-wide">
              <h1 className="md:text-[50px] text-center capitalize selection:bg-[#222222]">
                about us
              </h1>
            </div>
          </div>

          <div className="">
            <img
              src={IMAGES.image26}
              alt=""
              className=" w-full h-48 object-cover"
            />
          </div>
        </div>
      </div>

      <div className="md:max-w-[1180px] mt-20 mx-auto selection:bg-[#222222] selection:text-white">
        <div className="grid lg:grid-cols-2 gap-6 mr-4 ml-4">
          <div className="">
            <img
              src={IMAGES.image59}
              alt="not found"
              className="w-full h-full"
            />
          </div>

          <div className="">
            <p className="uppercase underline underline-offset-8 text-blue-600 font-semibold pb-6">
              About Comapny
            </p>
            <h1 className="text-4xl font-bold ">What Makes Us Different</h1>
            <p className="pt-8 text-lg">
              We are a Renewable Energy Company founded by a team of Engineering
              Graduates from IIT, NIT, and DTU with in-depth sectoral knowledge
              and skills. With the increasing GHG emission and Global Warming
              threat, we realized that there is a need to counter the adverse
              impact of climate change and limit the Earth’s rising temperature.
              We are on a mission to make this planet a better place to live and
              we are committed to make clean energy available to all which is,
              Renewable, Reliable, and Affordable.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100  mt-20 mb-20 pb-24">
        <div className="md:max-w-[1180px] mx-auto selection:bg-[#222222] selection:text-white">
          <div className="grid lg:grid-cols-2 gap-6 pt-24 mr-4 ml-4">
            <div className="">
              <p className="uppercase underline underline-offset-8 text-blue-600 font-semibold pb-6 ">
                {" "}
                Get A Quote{" "}
              </p>
              <h1 className="text-4xl font-bold pb-6">
                Submit a Solar Project Enquiry
              </h1>
              <p className="text-lg">
                We will contact you for further discussion.
              </p>
            </div>

            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="appearance-none block w-full   border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100"
                />
              </div>
              <div class="w-full md:w-1/2  px-3">
                <input
                  type="text"
                  placeholder="Contact Number"
                  name="contactnumber"
                  className="appearance-none block w-full   border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100"
                />
              </div>

              <div class="w-full px-3 pl-0">
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  className="appearance-none block w-full   border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100"
                />
              </div>
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                {/* <input
                  type="text"
                  placeholder="Select State"
                  name="state"
                  className="appearance-none block w-full   border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100"
                /> */}
                <select
               className="appearance-none block w-full   border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100"
                name="country">
                <option>Select State</option>
                {state.map((item, index) => {
                  return <option value={item}>{item}</option>;
                })}
                </select>
              </div>
              <div class="w-full md:w-1/2 px-3">
                <input
                  type="text"
                  placeholder="Town/City"
                  name="towncity"
                  className="appearance-none block w-full   border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100"
                />
              </div>

              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <input
                  type="text"
                  placeholder="Pin Code (6 digits)"
                  name="pincode"
                  className="appearance-none block w-full   border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100"
                />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <input
                  type="text"
                  placeholder="Avg. Monthly Electrical Bill"
                  name="bill"
                  className="appearance-none block w-full   border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100"
                />
              </div>

              <div class="w-full md:w-1/2  ">
                <label class="m-0">Solar For</label>
                <div className="flex flex-inline gap-4">
                  <div class="form-check ">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="checkbox2"
                      value="for-home"
                    />
                    <label class="form-check-label" for="checkbox2">
                      {" "}
                      Home
                    </label>
                  </div>

                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="checkbox1"
                      value="for-commercial"
                    />
                    <label class="form-check-label" for="checkbox1">
                      {" "}
                      Commercial
                    </label>
                  </div>

                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="checkbox3"
                      value="for-business"
                    />
                    <label class="form-check-label" for="checkbox3">
                      {" "}
                      Business
                    </label>
                  </div>
                </div>
              </div>
              <div class="w-full px-3 pl-0 mt-4">
        <button className='uppercase  text-white bg-[#46b6d4] hover:bg-[#4d6eb7]  pt-3 pb-3 pl-5 pr-5 rounded-md tracking-wider ' > Submit</button> 
        </div>
            </div>
          </div>
        </div>
      </div>

      
     <div className="mt-20 mb-18 pb-24">
      <div className="md:max-w-[1180px] mx-auto selection:bg-[#222222] selection:text-white">
        <div className="grid lg:grid-cols-2 gap-6 pt-24 mr-4 ml-4">
          <div className="">
            <p className="uppercase underline underline-offset-8 text-blue-800 font-semibold pb-6">Sologix Energy</p>
            <h1 className="text-4xl font-bold pb-6">
            What We Do 
            </h1>
          <ul className="list-none pt-8 text-lg">
            <TiTickOutline size={20}
            className="float-left mt-1 text-blue-800 border border-black rounded-full hover:bg-[#2331BC] hover:text-white"
            />
            <li className="pl-6 pb-4"> We provide design, engineering, procurement and installation services for solar PV systemto residential, institutional, industrial, and commercial consumers in both CAPEX and OPEX/RESCO models.
            </li>
            <TiTickOutline size={20}
            className="float-left mt-1 text-blue-800 border border-black rounded-full hover:bg-[#2331BC] hover:text-white"
            /><li className="pl-6 pb-4"> We not only integrate the system, but also care for it with the endeavour to give you the fastest possible break-even on your investment.
            </li>
            <TiTickOutline size={20}
            className="float-left mt-1 text-blue-800 border border-black rounded-full hover:bg-[#2331BC] hover:text-white"
            /><li className="pl-6 pb-4"> We help large corporate and bulk power consumers to source green power (Solar/Wind/Hybrid PPA) through Open Access power procurement mechanism.
            </li>
          </ul>

          </div>
         
         <div className="">
          <img src={IMAGES.image59} alt=""
          className="pb-6 float-right" />
          <img src={IMAGES.image60} alt=""
          className=" border-b-8 border-r-8 border-blue-800" />
         </div>
   

        </div>
      </div> 
     </div> 
     
   
   <div className="mb-20 pb-18 selection:bg-[#222222] selection:text-white ">
    <p className="text-center uppercase underline underline-offset-8 text-blue-600 font-semibold pb-6 text-lg pt-16 tracking-widest">
    Sologix Energy
    </p>
    <h1 className=" text-center text-4xl font-bold pb-4">Our Work Process</h1>
    <div className=" max-w-[1140px] mx-auto pt-10">
          <img src={IMAGES.image61} alt=""
          className="" />
             </div>
   </div>


   <div className="bg-gray-100   pb-24 selection:bg-[#222222] selection:text-white ">
    <p className="text-center uppercase underline underline-offset-8 text-blue-600 font-semibold pb-6 text-lg pt-16 tracking-widest">
    Meet Our Team
    </p>
    <h1 className=" text-center text-4xl font-bold pb-10">Meet Our Exclusive Team Members</h1>

    
    <div className="max-w-[1040px] mx-auto">
    <div className="grid lg:grid-cols-3 gap-6 gap-y-10 pt-10 px-6 ">
        {members.map((item, index) => (
          <div key={index} className="">
          <div className=" ">
          <img src={item.membersImg} alt="" className="rounded-full w-32 h-32 mx-auto" />
          </div>
          <div className="">
          <p className="text-center">{item.membersName}</p>
          <p className="text-center">{item.profession}</p>
          </div>
          
          </div>
        ))}
      
    </div>
    </div>  

  
  </div>

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

        <TestimonialSlider images={TestimonialData } />
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

export default AboutUs;
