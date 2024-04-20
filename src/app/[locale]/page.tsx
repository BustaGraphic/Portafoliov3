
"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image";
import HeroSection from "./HeroSection";
import HeaderSection from "./Header"
import AboutSection from "./about/page";
import { useRouter } from "next/navigation";
import { useSearchParams } from 'next/navigation'
import { ChatBubbleLeftEllipsisIcon } from '@heroicons/react/20/solid'

export default function Home() {




  return (



    <div className="mx-auto w-screen md:px-24 px-12 sm:h-4/5 max-w-[120rem] pb-12 overflow-x-hidden max-sm:pt-12">

      <HeroSection />


      

    </div>


  );
}
