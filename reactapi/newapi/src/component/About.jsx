import React from 'react'
import  boy from '../assets/about.png'
import talha from '../assets/talha.png'
import {TypeAnimation} from 'react-type-animation'
import { FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
const About = () => {
  return (
    <div className='container menu'>
      <div>
       <h1 className='head1'>
       <TypeAnimation
      sequence={[
       
        'I AM Mern Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'I AM Php Developer',
        1000,
        'I AM Frontend Developer',
        1000,
        'I AM Flutter Developer',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    /></h1> 
       <p className=' para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
         Veritatis magnam reiciendis rerum voluptatum vel quo ut voluptates
         cidunt quis voluptate aliquam nihil, tempore obcaecati iste libero 
         laborum. Quaerat tempora nemo, sapiente autem illo voluptates 
         inventore reprehenderit ducimus deleniti aspernatur et consectetur
         velit repellat accusantium? Inventore repellat perspiciatis voluptatibus nobis in.</p>
         <button className=' mt-7 bg-cyan-500 font-semibold  rounded-full text-center  md:mx-0 mx-auto px-6  py-3 text-3xl'>Contact us</button>
         <div className='flex py-6 space-x-3 text-center px-3  text-3xl'>
          <Link to="https://www.facebook.com/talhahussain.talha.716/" className=' bg-white hover:bg-white rounded-full'><FaFacebook/></Link>
          <Link to="https://www.linkedin.com/in/talha-hussain-b3a743267/" className=' bg-white hover:bg-white rounded-full'><IoLogoLinkedin/></Link>
          <Link to="https://github.com/talha12hussain" className=' bg-white hover:bg-white rounded-full'><FaGithub/></Link>
         </div>

      </div>
      <div className=' lg:grid-cols-2 py-6 justify-right '>
        <img src={talha} alt="" className=' w-[400px] h-[400px] rounded-full float-right bg-white'    />
      </div>
    </div>
  )
}

export default About
