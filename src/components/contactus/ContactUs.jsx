import React, { useState } from 'react'
import IMAGES from '../../assets/Images'
import { phoneNumber, emailAddress, officeAddress } from './ContactUsData';
import { ClientsAndPartnersData } from '../home/ClientsAndPartnersData';
import { TiTickOutline } from "react-icons/ti";
import { BiMap } from "react-icons/bi";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FooterNavbarData, FooterNavbarData2 } from "../navbar/NavbarData";
import { useNavigate } from "react-router-dom";


function ContactUs() {
  
  const [numbers, setNumbers] = useState(phoneNumber);
  const [mails, setMails] = useState(emailAddress);
  const [offadd, setOffAdd] = useState(officeAddress);
  const state = ["Bihar", "Jharkhand"];
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
                Contact Us
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


      <div className="  mt-10 mb-18 pb-8">
        <div className="md:max-w-[1180px] mx-auto selection:bg-[#222222] selection:text-white">
          <div className="grid lg:grid-cols-3 gap-6 pt-10 mr-4 ml-4">
            <div className="bg-[#1d304f] ">
            <div className='px-7 p-7'>
                 <img src={IMAGES.image98} alt="" className='border border-white p-3  cursor-pointer' />

               </div>
               {numbers.map((item, index) => (
                <div key={index} className='text-white px-6 pb-20 font-bold text-lg '>
                   <h1 className=''>{item.name}</h1>
                  <div className='leading-8 '>
                  <p>{item.number1}</p>
                   <p>{item.number2}</p>
                  </div>
               </div>
               ))}
                
              </div> 

              <div className="bg-[#0a78bf] ">
              <div className='px-7 p-7'>
                 <img src={IMAGES.image99} alt="" className='border border-white p-3 cursor-pointer' />

               </div>
               {mails.map((item1, index1) => (
                <div key={index1} className='text-white px-6 pb-20 font-bold text-lg '>
                   <h1 className=''>{item1.name}</h1>
                  <div className='leading-8 '>
                  <p>{item1.mail1}</p>
                   <p>{item1.mail2}</p>
                   <p>{item1.mail3}</p>
                  </div>
               </div>
               ))}
                
              </div> 
 

              <div className="bg-[#23bae4] ">
               <div className='px-7 p-7'>
                 <img src={IMAGES.image100} alt="" className='border border-white p-3 cursor-pointer' />

               </div>
               {offadd.map((item2, index2) => (
                <div key={index2} className='text-white px-6 pb-20 font-bold text-lg '>
                   <h1 className=''>{item2.name}</h1>
                  <div className='leading-8 '>
                  <p>{item2.address}</p>
                   
                  </div>
               </div>
               ))}
                
              </div> 

            </div>
          </div>
          </div>



          <div className="mb-10 mt-20 pb-20 selection:bg-[#222222] selection:text-white">
        <p className="text-center uppercase underline underline-offset-8 text-blue-600 font-semibold pb-6 text-lg pt-10  tracking-widest ">
        Send Us Message
        </p>

        <h1 className="text-center text-4xl font-bold  ">
        Don’t Hesited To Send Us Message
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
                  placeholder="Contact Number"
                  name="contactnumber"
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
              </div>
              
              <div className="flex flex-wrap pb-4">
               <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              {/* <input
                  type="text"
                  placeholder="Address (State/City/District)"
                  name="address"
                  className="appearance-none block w-full   border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100"
                /> 
                
              */}
              <select
                  className="appearance-none block w-full   border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100"
                  name="country"
                >
                  <option>Select State</option>
                  {state.map((item, index) => {
                    return <option value={item}>{item}</option>;
                  })}
                </select>
                </div> 

                <div class="w-full md:w-1/2  px-3 mb-6 md:mb-0">
                <input
                  type="textext"
                  placeholder="Message"
                  name="message"
                  className="appearance-none block w-full  h-full border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100"
                />
              </div>
              </div>

              <div className="flex flex-wrap pb-4">
               <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
               <input
                  type="text"
                  placeholder="Town/City"
                  name="subject"
                  className="appearance-none block w-full   border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100"
                />
                </div>
              </div>


              <div className="flex flex-wrap pb-4">
               <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
               <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  className="appearance-none block w-full   border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100"
                />
                </div>
              </div>



              <div className="flex flex-wrap ">
              <div class="w-full  px-3 mb-6 md:mb-0">
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
                      Solar For School/College
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
                      Solar For Home
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
                      Opex Model
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
                      Capex Model
                    </label>
                  </div>

                  <div class="form-check form-check-inline ">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="checkbox3"
                      value="for-business"
                    />
                    <label class="form-check-label" for="checkbox3">
                      {" "}
                      Solar For Industries
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
                      Solar/Wind Power Purchase/Sale
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

      <div className="mb-12  pl-5 pr-5 selection:bg-[#222222] selection:text-white">
        <p className="text-center text-lg">
          Copyright © 2023 Sologix. All Rights Reserved. (Made by Kumar Atul
          Jaiswal)
        </p>
      </div>

      {/* Copyright end from here */}


    </div>
  )
}

export default ContactUs