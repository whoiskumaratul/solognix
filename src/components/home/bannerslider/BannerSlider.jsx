import React, { useState } from 'react'
import IMAGES from '../../../assets/Images';
import { FaArrowRightLong } from 'react-icons/fa6';
import { BiSolidRightArrow, BiSolidLeftArrow } from 'react-icons/bi';

//import Slider from 'react-animated-slider';

//import { SliderData } from './SliderData';

 
//const [content, setcontent] =  useState([SliderData]);
 

  const BannerSlider = ({ images }) => {
    const [index, setIndex] = useState(0);

    const previousImage = () => {
      setIndex(index === 0 ? images.length - 1 : index - 1);
    };

    const nextImage = () => {
      setIndex(index === images.length - 1 ? 0 : index + 1);
    };
  
  return (
    <div>
      {/* <div className='mx-auto'>
      <div className='max-h-full relative '>
      <div className='absolute text-white bg-black/60  w-full h-full  flex flex-col justify-center items-center font-bold leading-tight'>
      <div className='tracking-wide'>
        <h1 className='md:text-[60px] text-center capitalize'>Invest In clean And <br />environment Friendly<br  /> Energy Generation</h1>
        <p className='text-center mt-5 md:mt-2 font-bold md:text-2xl'>We believe we can make a difference to this world, to <br />this very earth on which we live.</p>
        <div className='flex justify-center mt-5  font-semibold'>
        <button className='uppercase flex items-center text-white bg-[#46b6d4] hover:bg-[#4d6eb7] absolute  pt-3 pb-3 pl-5 pr-5 rounded-md tracking-wider ' >get a quote &nbsp; <FaArrowRightLong  /> </button> 
        </div>
      </div>
      </div>
      
        <div className=''>
            <img src={IMAGES.image2} alt="" className=' w-full object-cover' />
        </div>
        </div>
      </div> */}
{/* 
      <Slider autoplay={3000}>
      {SliderData.map((item, index) => (
		<div
			key={index} className={`${item.style}`}		>
      <img src={item.banner} className={`${item.style}`}		 />
			<div className="center">
				<h1>{item.title}</h1>
				<p>{item.para}</p>
				<button>{item.button}</button>
			</div>
		</div>
	))}
</Slider> */}

<div className='mx-auto'>
      <div className='max-h-full relative '>
      <div className='absolute text-white bg-black/60  w-full h-full  flex flex-col justify-center items-center font-bold leading-tight'>
      <div className='tracking-wide'>
        <h1 className='md:text-[60px] text-center capitalize'>Invest In clean And <br />environment Friendly<br  /> Energy Generation</h1>
        <p className='text-center mt-5 md:mt-2 font-bold md:text-2xl'>We believe we can make a difference to this world, to <br />this very earth on which we live.</p>
        <div className='flex justify-center mt-5  font-semibold'>
        <button className='uppercase flex items-center text-white bg-[#46b6d4] hover:bg-[#4d6eb7] absolute  pt-3 pb-3 pl-5 pr-5 rounded-md tracking-wider ' >get a quote &nbsp; <FaArrowRightLong  /> </button> 
        </div>
      </div>
      </div>
       
        <div className=''>
            <img
          src={images[index]}
          alt="Slider"
          className="object-cover w-full h-full"
        />
        </div>
        <div className="absolute top-0 bottom-0 left-0 flex justify-center items-center">
     
        <button
          className="p-2 rounded-full bg-gray-800 bg-opacity-50 text-white"
          onClick={previousImage}
        >
          <BiSolidLeftArrow />
        </button>
      </div>
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
  )
}
 

export default BannerSlider;