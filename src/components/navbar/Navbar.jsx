import React, { useState } from 'react'
import IMAGES from '../../assets/Images';

import {NavbarData, ResponsiveNavbarData, GoSolar} from './NavbarData.js';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';


function Navbar() {

  const [toggle, setToggle] = useState(false);

  const [navdata, setNavData ] = useState(NavbarData)
  const [responsivenavdata, setResponsiveNavData] = useState(ResponsiveNavbarData)
  const [gosolar, setGoSolar] = useState(GoSolar)

  const navigate = useNavigate();

  return (
    <div>
    
      <div className='p-4 w-full  '>
         <div className='max-w-[1440px] flex justify-between items-center   '>
         <div className='pl-4 max-w-[124px] '>
          <img src={IMAGES.image1} alt="" className='w-28 ' />
         </div>

         <ul className='hidden md:flex uppercase gap-6 font-semibold text-sm '>
          {navdata.map((item, index) => (
           <div key={index}>
         <li onClick={() => navigate(`${item.url}`) } className='cursor-pointer '>{item.nav}</li>
</div>
          ))}
          </ul>
            
            {/* Responsive menu start */}
            { toggle ?  <div className="bg-black/80 fixed w-full h-screen z-10 top-0 right-0 "></div> : ''}
              
              <div className={toggle ? `fixed top-0 right-0 w-[300px] h-screen bg-gray-800 text-white z-10 duration-300` : `fixed top-0 right-[-100%] w-[300px] h-screen bg-white text-white z-10 duration-300`}>
                 <AiOutlineClose  onClick={() => setToggle(!toggle)}  size={20} className="absolute left-6 top-6 cursor-pointer" />
            <ul className=' uppercase flex flex-col font-semibold my-16 text-white gap-y-4'>
            {responsivenavdata.map((item1, index1) => (
              <div key={index1}>
         <li  onClick={() => navigate(`${item1.url}`) } className='cursor-pointer text-[16px] py-3  px-7 flex items-center hover:text-blue-700 '>{item1.nav}</li>
</div>
                ))}
              </ul>
              </div>
 
            {/* Responsive menu end */}

          
            <div className='bg-[#23BAE4] pb-2 pt-2 pl-4 pr-4 rounded-md text-white hidden md:flex'>
             {gosolar.map((item2, index2) =>
             (
              <div key={index2}>
           
              <button onClick={() => navigate(`${item2.url}`)} className='uppercase'>Go Solar</button>
              </div>
              ))}
            </div>
          
          {/* {
            toggle ?
            <AiOutlineClose onClick={() => setToggle(!toggle)} className=' text-2xl md:hidden block  ' />
            :
            <AiOutlineMenu onClick={() => setToggle(!toggle)} className=' text-2xl md:hidden block  ' />
          }
  */}

 
            
         <AiOutlineMenu size={40} onClick={() => setToggle(!toggle)} className=' text-2xl md:hidden block  ' />
         
 
         </div>
      </div>
    
    
    </div>
  )
}

export default Navbar