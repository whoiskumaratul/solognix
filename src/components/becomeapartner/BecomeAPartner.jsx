import React from "react";
import IMAGES from "../../assets/Images";
import { TiTickOutline } from "react-icons/ti";
import { BiMap } from "react-icons/bi";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import "../../components/css/ClientAndPartnersStyle.css";
import { FooterNavbarData, FooterNavbarData2 } from "../navbar/NavbarData";
import { useNavigate } from "react-router-dom";


import { useState } from "react";
import {
  BecomeAPartnerData,
  BecomeAPartnerData1,
  BecomeAPartnerData3,
} from "./BecomeAPartnerData";
import { ClientsAndPartnersData } from "../home/ClientsAndPartnersData";

function BecomeAPartner() {
  const [partnership, setPartnership] = useState(BecomeAPartnerData);
  const [partnership1, setPartnership1] = useState(BecomeAPartnerData1);
  const [partnership3, setPartnership3] = useState(BecomeAPartnerData3);
  const [client, setClient] = useState(ClientsAndPartnersData);

   const state = ["Bihar", "Jharkhand"];
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
                Become A Partner
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

      <div className="  mt-10 mb-18 pb-24">
        <div className="md:max-w-[1180px] mx-auto selection:bg-[#222222] selection:text-white">
          <div className="grid lg:grid-cols-2 gap-6 pt-24 mr-4 ml-4">
            <div className="">
              <p className="uppercase underline underline-offset-8 text-blue-800 font-semibold pb-6">
                Become A Partner
              </p>
              <h1 className="text-4xl font-bold pb-6">
                Wonderful Opportunity to Earn and Grow
              </h1>
              <ul className="list-none pt-8 text-lg">
                <TiTickOutline
                  size={20}
                  className="float-left mt-1 text-blue-800 border border-black rounded-full hover:bg-[#2331BC] hover:text-white"
                />
                <li className="pl-6 pb-4">
                  {" "}
                  With more than 100 satisfied customers, Sologix is a leading
                  rooftop solar company in Northern and Eastern region of India.
                </li>
                <TiTickOutline
                  size={20}
                  className="float-left mt-1 text-blue-800 border border-black rounded-full hover:bg-[#2331BC] hover:text-white"
                />
                <li className="pl-6 pb-4">
                  {" "}
                  We believe in collaborative approach and engage with partners
                  across the India. Our partners can create lead and generate
                  on-line quotations instantly.
                </li>
                <TiTickOutline
                  size={20}
                  className="float-left mt-1 text-blue-800 border border-black rounded-full hover:bg-[#2331BC] hover:text-white"
                />
                <li className="pl-6 pb-4">
                  {" "}
                  We train our channel partners and ensure that any individuals
                  having a good marketing skill and business net-working can
                  partner with us and start earning immediately.
                </li>
                <TiTickOutline
                  size={20}
                  className="float-left mt-1 text-blue-800 border border-black rounded-full hover:bg-[#2331BC] hover:text-white"
                />
                <li className="pl-6 pb-4">
                  {" "}
                  Even a non-technical and non-solar background person can
                  become our channel partnerand start earning immediately. We
                  provide efficient end-to-end support to our solar channel
                  partners.
                </li>
              </ul>
            </div>

            <div className="">
              <img src={IMAGES.image59} alt="" className="pb-6 float-right" />
              <img
                src={IMAGES.image60}
                alt=""
                className=" border-b-8 border-r-8 border-blue-800"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 mt-20 pt-20">
        <div className=" md:max-w-[1180px]  mb-20 pb-24 mx-auto  selection:bg-[#222222] selection:text-white">
          <div className="">
            <p className="uppercase underline underline-offset-8 text-blue-800 font-semibold pb-6">
              What You Get
            </p>
          </div>
          {/* for only partnership advantage */}
          <div className="grid lg:grid-cols-4 ml-4 mr-4 gap-4 relative">
            {partnership1.map((item1, index1) => (
              <div className="" key={index1}>
                <p className={`${item1.style}`}>{item1.para}</p>
                <p className="font-bold text-lg "></p>
              </div>
            ))}

            {partnership.map((item, index) => (
              <div
                className="bg-white px-12 py-8   hover:bg-blue-200 "
                key={index}
              >
                <div className=" px-auto mx-auto inline-block  border-none pb-2   ">
                  <img src={item.icon} alt="" className="" />
                </div>
                <p className={`${item.style1}`}>{item.para}</p>
                <p className="font-bold text-lg "></p>
              </div>
            ))}

            {partnership3.map((item3, index3) => (
              <div className="relative pb-48" key={index3}>
                <div className=" bg-[#23bae4]  lg:pb-24  rounded-full ">
                  <img
                    src={item3.icon}
                    alt=""
                    className=" border-none  pb-2 absolute"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      
      <div className="mb-10 mt-20 pb-20 selection:bg-[#222222] selection:text-white">
        <p className="text-center uppercase underline underline-offset-8 text-blue-600 font-semibold pb-6 text-lg pt-10  tracking-widest ">
        Send Us Message
        </p>

        <h1 className="text-center text-4xl font-bold  ">
          To Become a Partner Please Fill up the Below Details
        </h1>
        <div className="md:max-w-[1180px] mx-auto ">
          <div className="grid lg:grid-cols-1 gap-4 mx-auto pt-14 ">
            <div>
              
            <div className="flex flex-wrap pb-4">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  className="appearance-none block w-full   border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100"
                />
              </div>
             

              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  className="appearance-none block w-full   border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100"
                />
              </div>

              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <input
                  type="text"
                  placeholder="Contact Number"
                  name="contactnumber"
                  className="appearance-none block w-full   border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100"
                />
              </div>
              </div>

              <div className="flex flex-wrap pb-4">
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
               <input
                  type="text"
                  placeholder="Address (State/City/District)"
                  name="address"
                  className="appearance-none block w-full   border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100"
                /> 
                
              </div>
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <input
                  type="text"
                  placeholder="Aadhar Number"
                  name="aadharnumber"
                  className="appearance-none block w-full   border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100"
                />
              </div>

              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <input
                  type="text"
                  placeholder="PAN Number"
                  name="pannumber"
                  className="appearance-none block w-full   border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100"
                />
              </div>
              </div>

              <div className="flex flex-wrap ">
              <div class="w-full  px-3 mb-6 md:mb-0">
                <label class="m-0">Lead Generation & Installation Partner</label>
                <div className="flex flex-inline gap-4 pt-3">
                  <div class="form-check ">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="checkbox2"
                      value="for-home"
                    />
                    <label class="form-check-label" for="checkbox2">
                      {" "}
                      Lead Generation
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
                      Installation Partner
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
                      Lead Generation & Installation Partner
                    </label>
                  </div>
                </div>
              </div>
              <div class="w-full  flex justify-center pl-0 mt-8 mr-4 ml-4">
                <button className="uppercase  text-white bg-[#46b6d4] hover:bg-[#4d6eb7]  pt-3 pb-3 w-9/12 rounded-md tracking-wider ">
                  {" "}
                  send message
                </button>
              </div>
            </div>
              

            </div>
          </div>
        </div>
      </div>



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

export default BecomeAPartner;
