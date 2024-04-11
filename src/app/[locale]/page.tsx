
"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image";
import HeroSection from "./HeroSection";
import HeaderSection from "./Header"
import AboutSection from "./about/page";
import { useRouter } from "next/navigation";
import { useSearchParams } from 'next/navigation'

export default function Home() {



  
  return (

   
      
      <div className="mx-auto  px-24 h-4/5 max-w-[120rem] pb-12 ">
        <HeroSection />
          
         
       

      </div>

  
  );
}
