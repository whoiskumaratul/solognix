import React, { useState } from "react";
import IMAGES from "../../assets/Images";
import { TiTickOutline } from 'react-icons/ti'
import { FaArrowRightLong } from "react-icons/fa6";
import { BiMap } from "react-icons/bi";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { CaseStudiesData } from "./CaseStudiesData";
import { ClientsAndPartnersData } from "../home/ClientsAndPartnersData";
import { FooterNavbarData, FooterNavbarData2 } from "../navbar/NavbarData";
import { useNavigate } from "react-router-dom";


function ForBusiness() {
  const state = ["Bihar", "Jharkhand"];
  const [casestudeis, setCaseStudies] = useState(CaseStudiesData);
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
                Solar For Business
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

      <div className="  mb-8 ">
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
         <div>
            <div className="flex flex-wrap pb-4">
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="appearance-none block w-full   border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100"
                />
              </div>
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <input
                  type="text"
                  placeholder="Contact Number"
                  name="contactnumber"
                  className="appearance-none block w-full   border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100"
                />
              </div>
              </div>

              <div className="flex flex-wrap pb-4">
              <div class="w-full px-3 pl-0">
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  className="appearance-none block w-full   border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100"
                />
              </div>
</div>
              
              <div className="flex flex-wrap pb-4">
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                {/* <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="appearance-none block w-full   border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100"
                /> */}
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
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <input
                  type="text"
                  placeholder="Town/City"
                  name="towncity"
                  className="appearance-none block  w-full   border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100"
                />
              </div>
              </div>

              <div className="flex flex-wrap pb-4">
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
              </div>
                  
              <div className="flex flex-wrap pb-4">
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
            
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
              </div>
              <div class="w-full px-3 pl-0 mt-2">
                <button className="uppercase  text-white bg-[#46b6d4] hover:bg-[#4d6eb7]  pt-3 pb-3 pl-5 pr-5 rounded-md tracking-wider ">
                  {" "}
                  Submit
                </button>
              </div>
          
          </div>
          </div>
        </div>
      </div>

      <div className="mt-20 mb-18 pb-24">
        <div className="md:max-w-[1180px] mx-auto selection:bg-[#222222] selection:text-white">
          <div className="grid lg:grid-cols-2 gap-6 pt-24 mr-4 ml-4">
            <div className="">
              <p className="uppercase underline underline-offset-8 text-blue-800 font-semibold pb-6">
                Solar For Business
              </p>
              <h1 className="text-4xl font-bold pb-6">
                Your Ideal Solar Partner!
              </h1>

              <TiTickOutline
                size={20}
                className="float-left mt-1 text-blue-800 border border-black rounded-full hover:bg-[#2331BC] hover:text-white"
              />
              <p className="pl-6 pb-4">
                We install solar PV systems on the roofs of Industries,
                Schools/Colleges/Universities, Hospitals/IT/ Business Parks/Mall
                /Shopping Complexes and Cold Storages.
              </p>
              <TiTickOutline
                size={20}
                className="float-left mt-1 text-blue-800 border border-black rounded-full hover:bg-[#2331BC] hover:text-white"
              />
              <p className="pl-6 pb-4">
                {" "}
                We design for You! - By partnering with us, you'll get the
                smartest solar energy solution, customized to your specific
                needs.
              </p>

              <div className="grid lg:grid-cols-2 gap-4">
                <div className="">
                  <img
                    src={IMAGES.image73}
                    alt=""
                    className="float-left mt-1 pr-4 text-blue-800"
                  />
                  <h4 className="font-bold text-lg pb-2">Industrial</h4>
                  <ul className="ml-20">
                    <TiTickOutline
                      size={20}
                      className="float-left mt-1 text-blue-800 border border-black rounded-full hover:bg-[#2331BC] hover:text-white"
                    />{" "}
                    <li className="pl-8 pb-3">Manufacturing Units</li>
                    <TiTickOutline
                      size={20}
                      className="float-left mt-1 text-blue-800 border border-black rounded-full hover:bg-[#2331BC] hover:text-white"
                    />{" "}
                    <li className="pl-8 pb-3">Production Units</li>
                    <TiTickOutline
                      size={20}
                      className="float-left mt-1 text-blue-800 border border-black rounded-full hover:bg-[#2331BC] hover:text-white"
                    />{" "}
                    <li className="pl-8 pb-3">Go downs/Cold Storages</li>
                  </ul>
                </div>
                <div className="">
                  <img
                    src={IMAGES.image74}
                    alt=""
                    className="float-left mt-1 pr-4 text-blue-800"
                  />
                  <h4 className="font-bold text-lg pb-2">Commercial</h4>
                  <ul className="ml-20">
                    <TiTickOutline
                      size={20}
                      className="float-left mt-1 text-blue-800 border border-black rounded-full hover:bg-[#2331BC] hover:text-white"
                    />{" "}
                    <li className="pl-8 pb-3">IT/Business Parks</li>
                    <TiTickOutline
                      size={20}
                      className="float-left mt-1 text-blue-800 border border-black rounded-full hover:bg-[#2331BC] hover:text-white"
                    />{" "}
                    <li className="pl-8 pb-3">Office Complexes</li>
                    <TiTickOutline
                      size={20}
                      className="float-left mt-1 text-blue-800 border border-black rounded-full hover:bg-[#2331BC] hover:text-white"
                    />{" "}
                    <li className="pl-8 pb-3">Go downs/Cold Storages</li>
                  </ul>
                </div>
                <div className="">
                  <img
                    src={IMAGES.image75}
                    alt=""
                    className="float-left mt-1 pr-4 text-blue-800"
                  />
                  <h4 className="font-bold text-lg pb-2">institution</h4>
                  <ul className="ml-20">
                    <TiTickOutline
                      size={20}
                      className="float-left mt-1 text-blue-800 border border-black rounded-full hover:bg-[#2331BC] hover:text-white"
                    />{" "}
                    <li className="pl-8 pb-3">Schools</li>
                    <TiTickOutline
                      size={20}
                      className="float-left mt-1 text-blue-800 border border-black rounded-full hover:bg-[#2331BC] hover:text-white"
                    />{" "}
                    <li className="pl-8 pb-3">Colleges / University</li>
                    <TiTickOutline
                      size={20}
                      className="float-left mt-1 text-blue-800 border border-black rounded-full hover:bg-[#2331BC] hover:text-white"
                    />{" "}
                    <li className="pl-8 pb-3">Health Centres/ Hospital</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="">
              <img src={IMAGES.image70} alt="" className="pb-6 float-right" />
              <img src={IMAGES.image71} alt="" className="pb-6 " />
              <img src={IMAGES.image72} alt="" className=" " />
              <p className=" float-right -mt-44 inline-block border-b-4 border-red-500 border-r-4 border-r-gray-600  w-[270px]  h-44"></p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:max-w-[1180px] mt-20 mb-10 pb-10 mx-auto selection:bg-[#222222] selection:text-white">
        <div className="grid lg:grid-cols-2 gap-6 mr-4 ml-4">
          <div className="">
            <img
              src={IMAGES.image76}
              alt="not found"
              className="w-full h-full"
            />
          </div>

          <div className="">
            <p className="uppercase underline underline-offset-8 text-blue-600 font-semibold pb-6">
              Business Model
            </p>
            <h1 className="text-4xl font-bold ">Capex Model</h1>
            <p className="pt-8 text-lg">
              In this model, the entire investment comes from the consumer.
              Consumers hire a solar EPC company who provide turnkey
              installation of entire solar power system and hand over assets to
              consumers.
            </p>

            <p className="uppercase underline underline-offset-8 text-blue-600 font-semibold pb-6 pt-8">
              CAPEX: More Investment and More Saving
            </p>

            <ul className="list-none  text-lg">
              <TiTickOutline
                size={20}
                className="float-left mt-1 text-blue-800 border border-black rounded-full hover:bg-[#2331BC] hover:text-white"
              />
              <li className="pl-6 pb-4">
                {" "}
                Upfront capital investment made by consumer.
              </li>
              <TiTickOutline
                size={20}
                className="float-left mt-1 text-blue-800 border border-black rounded-full hover:bg-[#2331BC] hover:text-white"
              />
              <li className="pl-6 pb-4">
                {" "}
                Sologix provides EPC service to install the Solar plant.
              </li>
              <TiTickOutline
                size={20}
                className="float-left mt-1 text-blue-800 border border-black rounded-full hover:bg-[#2331BC] hover:text-white"
              />
              <li className="pl-6 pb-4">
                {" "}
                Consumer generates savings on monthly electricity bill under
                net-metering arrangement.
              </li>
              <TiTickOutline
                size={20}
                className="float-left mt-1 text-blue-800 border border-black rounded-full hover:bg-[#2331BC] hover:text-white"
              />
              <li className="pl-6 pb-4">
                {" "}
                Consumer can claim accelerated depreciation (AD) on the
                investment made in the Solar plant.
              </li>
              <TiTickOutline
                size={20}
                className="float-left mt-1 text-blue-800 border border-black rounded-full hover:bg-[#2331BC] hover:text-white"
              />
              <li className="pl-6 pb-4">
                Payback period can vary between 3-5 years depending on utility
                tariff and AD benefit is utilized.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 mt-20 pt-20">
        <div className=" md:max-w-[1180px]  mb-10 pb-20 mx-auto selection:bg-[#222222] selection:text-white">
          <div className="grid lg:grid-cols-2 gap-6 mr-4 ml-4">
            <div className="">
              <p className="uppercase underline underline-offset-8 text-blue-600 font-semibold pb-6">
                Business Model
              </p>
              <h1 className="text-4xl font-bold ">Opex Model</h1>
              <p className="pt-8 text-lg">
                In this model, an investor invests the capital and consumer pays
                for the energy supplied to it by solar power project. Both
                consumer and developer sign a long-term power purchase agreement
                (PPA) for an agreed tenure & tariff.
              </p>

              <p className="uppercase underline underline-offset-8 text-blue-600 font-semibold pb-6 pt-8">
                OPEX: Less Investments and Less Saving
              </p>

              <ul className="list-none  text-lg">
                <TiTickOutline
                  size={20}
                  className="float-left mt-1 text-blue-800 border border-black rounded-full hover:bg-[#2331BC] hover:text-white"
                />
                <li className="pl-6 pb-4">
                  {" "}
                  Investor provides upfront capital to set up the Solar plant
                </li>
                <TiTickOutline
                  size={20}
                  className="float-left mt-1 text-blue-800 border border-black rounded-full hover:bg-[#2331BC] hover:text-white"
                />
                <li className="pl-6 pb-4">
                  {" "}
                  Investor and the consumer enter into a power purchase
                  agreement (PPA)
                </li>
                <TiTickOutline
                  size={20}
                  className="float-left mt-1 text-blue-800 border border-black rounded-full hover:bg-[#2331BC] hover:text-white"
                />
                <li className="pl-6 pb-4">
                  {" "}
                  The consumer pays for the units which it consumed from the
                  Solar the Solar plant.
                </li>
                <TiTickOutline
                  size={20}
                  className="float-left mt-1 text-blue-800 border border-black rounded-full hover:bg-[#2331BC] hover:text-white"
                />
                <li className="pl-6 pb-4">
                  {" "}
                  The consumer saveson the monthly electricity bill as the
                  tariff offered by is lower than the utility tariff.
                </li>
                <TiTickOutline
                  size={20}
                  className="float-left mt-1 text-blue-800 border border-black rounded-full hover:bg-[#2331BC] hover:text-white"
                />
                <li className="pl-6 pb-4">
                  The consumer need not worry about the O&M of the system as
                  Investor will take care of it.
                </li>
              </ul>
            </div>

            <div className="">
              <img
                src={IMAGES.image76}
                alt="not found"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-20 pb-18 selection:bg-[#222222] selection:text-white ">
        <p className="text-center uppercase underline underline-offset-8 text-blue-600 font-semibold pb-6 text-lg pt-16 tracking-widest">
          Sologix Advantage
        </p>
        <h1 className=" text-center text-4xl font-bold pb-4">
          From Concept to Commissioning
        </h1>
        <div className=" max-w-[1140px] mx-auto pt-10">
          <img src={IMAGES.image78} alt="" className="" />
        </div>
      </div>

      <div className="bg-gray-100 mt-20 pt-20">
        <div className="md:max-w-[1180px]  mb-6 pb-20 mx-auto selection:bg-[#222222] selection:text-white">
          <div className="grid lg:grid-cols-2  mr-4 ml-4 ">
            <div className="">
              <p className="uppercase underline underline-offset-8 text-blue-600 font-semibold pb-6">
                Design By Sologix
              </p>
              <h1 className="text-4xl font-bold ">
                Design and Delivered by Engineers from IIT & NIT
              </h1>

              <ul className="list-none pt-6 text-lg">
                <TiTickOutline
                  size={20}
                  className="float-left mt-1 text-blue-800 border border-black rounded-full hover:bg-[#2331BC] hover:text-white"
                />
                <li className="pl-6 pb-4">
                  {" "}
                  Latest technology and quality equipment
                </li>
                <TiTickOutline
                  size={20}
                  className="float-left mt-1 text-blue-800 border border-black rounded-full hover:bg-[#2331BC] hover:text-white"
                />
                <li className="pl-6 pb-4"> Competitive costing /tariff</li>
                <TiTickOutline
                  size={20}
                  className="float-left mt-1 text-blue-800 border border-black rounded-full hover:bg-[#2331BC] hover:text-white"
                />
                <li className="pl-6 pb-4"> Easy financing scheme</li>
                <TiTickOutline
                  size={20}
                  className="float-left mt-1 text-blue-800 border border-black rounded-full hover:bg-[#2331BC] hover:text-white"
                />
                <li className="pl-6 pb-4"> Faster Net-meter approval</li>
                <TiTickOutline
                  size={20}
                  className="float-left mt-1 text-blue-800 border border-black rounded-full hover:bg-[#2331BC] hover:text-white"
                />
                <li className="pl-6 pb-4">Complete Operation & Maintenance</li>
                <TiTickOutline
                  size={20}
                  className="float-left mt-1 text-blue-800 border border-black rounded-full hover:bg-[#2331BC] hover:text-white"
                />
                <li className="pl-6 pb-4">24* 7 Customer support</li>
              </ul>
            </div>

            <div className="">
              <img src={IMAGES.image79} alt="not found" className="" />
            </div>
          </div>
        </div>
      </div>

      <div className=" pb-24 selection:bg-[#222222] selection:text-white ">
        <p className="text-center uppercase underline underline-offset-8 text-blue-600 font-semibold pb-6 text-lg pt-16 tracking-widest">
          Our Projects
        </p>
        <h1 className=" text-center text-4xl font-bold pb-10">
          Our Case Studies
        </h1>

        <div className="md:max-w-[1180px] mx-auto">
          <div className="grid lg:grid-cols-4 gap-6 gap-y-10 pt-10 px-6 ">
            {casestudeis.map((item1, index1) => (
              <div key={index1} className="">
                <div className=" ">
                  <img src={item1.caseImg} alt="" className=" mx-auto" />
                </div>
                <div className="p-8 border ">
                  <p className="text-center">{item1.caseName}</p>
                </div>
                <div className=" -mt-5">
                  <p className="mx-auto bg-white border  w-10 h-10 "></p>
                </div>
              </div>
            ))}
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

export default ForBusiness;
