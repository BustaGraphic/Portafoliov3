"use client"

import React, { useState, useEffect } from "react"
import HeaderSection from "./Header"
import { ArrowUpRightIcon, MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBehance, faCss3Alt, faDiscord, faFigma, faGithub, faHtml5, faJava, faLinkedin, faLinkedinIn, faReact, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { useLocale, useTranslations } from "next-intl";
import { faCss3 } from "@fortawesome/free-brands-svg-icons/faCss3"
import { faSquareJs } from "@fortawesome/free-brands-svg-icons/faSquareJs"
import Link from "next/link"

interface HeroProps {

}

const HeroSection: React.FC<HeroProps> = ({ }) => {
    const t = useTranslations('HeroSection');
    const locale = useLocale();

    return (

        <div className=" grid lg:grid-rows-2 max-lg:grid-rows-2 gap-6 lg:h-full   ">

            <div className="grid 2xl:grid-cols-2 max-lg:grid-rows-4 lg:max-2xl:grid-rows-3 gap-6 md:bg-primary  ">
                <Link href={`/${locale}/about`} className="max-2xl:row-span-2 grid sm:grid-cols-11 bg-white rounded-xl  p-6 hover:shadow-lg cursor-pointer dark:bg-darkgray" >
                    <div className="max-sm:hiddenbg-whitegray  rounded-lg  col-span-4 dark:bg-gray">

                    </div>
                    <div className="flex-col flex justify-between col-span-7  group sm:pl-6">
                        <div className="  flex justify-end items-center text-whitegray space-x-1 dark:text-gray">
                            <div>
                                {t('about')}

                            </div>
                            <ArrowUpRightIcon className=" w-4 h-4" />

                        </div>
                        <div className=" h-full flex-col flex justify-center pb-9">
                            <div className="text-whitegray pl-3 dark:text-gray">
                                {t('im')}

                            </div>
                            <div className="text-5xl font-bold text-black dark:text-whitebg">
                                Developer                           </div>
                        </div>
                        <div className="  flex justify-end items-center text-whitegray space-x-1 dark:text-gray ">
                            <div>
                                Barcelona, <span className="font-semibold">                    {t('country')}
                                </span>
                            </div>
                            <MapPinIcon className=" text-primary w-4 h-4 " />

                        </div>
                    </div>
                </Link>
                <div className="lg:grid lg:grid-row-3 gap-6 max-lg:row-span-1  max-2xl:row-span-2   ">
                    <Link href={`/${locale}/skills`} className="lg:flex-col flex justify-between max-lg:items-center bg-white rounded-lg row-span-3 p-6 hover:shadow-lg cursor-pointer dark:bg-darkgray">
                        <div className="w-full flex justify-between">
                            <div className=" text-2xl font-bold text-black dark:text-whitebg">
                                {t('myskills')}

                            </div>
                            <div className="max-lg:hidden  flex justify-end items-start h-full  text-whitegray space-x-1 dark:text-gray">
                                <div className="flex items-center ">
                                    <div>
                                        {t('skills')}

                                    </div>
                                    <ArrowUpRightIcon className=" w-4 h-4 " />

                                </div>

                            </div>
                        </div>

                        <div className=" w-full flex justify-end -space-x-2 overflow-hidden">
                            <div className="flex justify-center items-center h-12 w-12 bg-whitebg  rounded-full ring-2 ring-white text-2xl text-primary dark:bg-black dark:ring-darkgray">
                                <FontAwesomeIcon icon={faHtml5} />
                            </div>
                            <div className="flex justify-center items-center h-12 w-12 bg-whitebg  rounded-full ring-2 ring-white text-2xl text-primary dark:bg-black dark:ring-darkgray">
                                <FontAwesomeIcon icon={faCss3Alt} />
                            </div>
                            <div className="flex justify-center items-center h-12 w-12 bg-whitebg  rounded-full ring-2 ring-white text-2xl text-primary dark:bg-black dark:ring-darkgray">
                                <FontAwesomeIcon icon={faSquareJs} />
                            </div>
                            <div className="max-[480px]:hidden flex justify-center items-center h-12 w-12 bg-whitebg  rounded-full ring-2 ring-white text-2xl text-primary dark:bg-black dark:ring-darkgray">
                                <FontAwesomeIcon icon={faReact} />
                            </div>
                            <div className="max-[580px]:hidden flex justify-center items-center h-12 w-12 bg-whitebg  rounded-full ring-2 ring-white text-2xl text-primary dark:bg-black dark:ring-darkgray">
                                <FontAwesomeIcon icon={faFigma} />
                            </div>
                            <div className="max-sm:hidden flex justify-center items-center h-12 w-12 bg-whitebg  rounded-full ring-2 ring-white text-2xl text-primary dark:bg-black dark:ring-darkgray">
                                <FontAwesomeIcon icon={faJava} />
                            </div>
                        </div>
                    </Link>
                    <div className="max-2xl:hidden grid grid-cols-3 gap-6 ">
                        <div className="bg-white rounded-lg flex-col flex items-center justify-center py-1 dark:bg-darkgray">
                            <div className="text-primary font-bold text-2xl">
                                +05
                            </div>
                            <div className="text-whitegray font-semibold dark:text-gray">

                                {t('yearexp')}

                            </div>

                        </div>
                        <div className="bg-white rounded-lg flex-col flex items-center justify-center dark:bg-darkgray ">
                            <div className="text-primary font-bold text-2xl">
                                +50
                            </div>
                            <div className="text-whitegray font-semibold dark:text-gray">
                                {t('clients')}

                            </div>
                        </div>
                        <div className="bg-white rounded-lg flex-col flex items-center justify-center dark:bg-darkgray">
                            <div className="text-primary font-bold text-2xl">
                                +50
                            </div>
                            <div className="text-whitegray font-semibold dark:text-gray">
                                {t('projectscompleted')}

                            </div>
                        </div>
                    </div>
                </div>
                <div className="2xl:hidden lg:col-span-2 grid grid-cols-3 gap-6 ">
                    <div className="bg-white rounded-lg flex-col flex items-center justify-center py-1 dark:bg-darkgray">
                        <div className="text-primary font-bold text-2xl">
                            +05
                        </div>
                        <div className="text-whitegray font-semibold dark:text-gray">
                            <span className="block md:hidden">Years</span>
                            <span className="hidden md:block"> {t('yearexp')}</span>

                        </div>

                    </div>
                    <div className="bg-white rounded-lg flex-col flex items-center justify-center dark:bg-darkgray ">
                        <div className="text-primary font-bold text-2xl">
                            +50
                        </div>
                        <div className="text-whitegray font-semibold dark:text-gray">
                            <span className="block md:hidden">Clients</span>
                            <span className="hidden md:block">
                                {t('clients')}
                            </span>


                        </div>
                    </div>
                    <div className="bg-white rounded-lg flex-col flex items-center justify-center dark:bg-darkgray">
                        <div className="text-primary font-bold text-2xl">
                            +50
                        </div>
                        <div className="text-whitegray font-semibold dark:text-gray">
                            <span className="block md:hidden">Projects</span>
                            <span className="hidden md:block">
                                {t('projectscompleted')}
                            </span>


                        </div>
                    </div>
                </div>
            </div>
            <div className="grid lg:grid-cols-5 max-lg:grid-rows-2  gap-6 ">
                <Link href={`/${locale}/projects`} className=" lg:col-span-3 max-lg:row-span-2 flex-col flex justify-between bg-white rounded-lg hover:shadow-lg cursor-pointer p-6 dark:bg-darkgray">
                    <div className="flex justify-between">
                        <div className="text-2xl font-bold text-black dark:text-whitebg">
                            {t('myprojects')}

                        </div>
                        <div className="  flex justify-end items-start h-full  text-whitegray space-x-1 dark:text-gray">
                            <div className="flex items-center ">
                                <div>
                                    {t('projects')}

                                </div>
                                <ArrowUpRightIcon className=" w-4 h-4 " />

                            </div>

                        </div>
                    </div>
                    <div>

                    </div>
                </Link>
                <div className="lg:col-span-2 max-lg:row-span-1 grid  lg:grid-row-3 max-lg:grid-rows-2 gap-6 ">
                    <div className=" max-lg:row-span-1 bg-white rounded-lg   flex justify-between items-center max-xl:w-full max-xl:p-6 px-6 py-4 dark:bg-darkgray ">
                        <div className=" max-2xl:hidden text-2xl font-bold text-black dark:text-whitebg">
                            {t('social')}

                        </div>
                        <div className="flex max-2xl:justify-between max-2xl:w-full 2xl:space-x-3">
                            <div onClick={() => { window.open("https://github.com/BustaGRAPHIC", "_blank"); }} className=" h-12 w-12 bg-whitebg  dark:bg-black rounded-full flex justify-center items-center hover:shadow-lg cursor-pointer">
                                <FontAwesomeIcon icon={faGithub} className="text-2xl text-primary" />
                            </div>
                            <div onClick={() => { window.open("https://be.net/BustaGRAPHIC", "_blank"); }} className=" h-12 w-12 bg-whitebg dark:bg-black rounded-full flex justify-center items-center hover:shadow-lg cursor-pointer">
                                <FontAwesomeIcon icon={faBehance} className="text-2xl text-primary" />
                            </div>
                            <div onClick={() => { window.open("https://www.discordapp.com/users/345233242992934913", "_blank"); }} className=" h-12 w-12 bg-whitebg dark:bg-black rounded-full flex justify-center items-center hover:shadow-lg cursor-pointer">
                                <FontAwesomeIcon icon={faDiscord} className="text-2xl text-primary" />
                            </div>
                            <div onClick={() => { window.open("https://twitter.com/BustaGRAPHIC", "_blank"); }} className=" h-12 w-12 bg-whitebg dark:bg-black rounded-full flex justify-center items-center hover:shadow-lg cursor-pointer">
                                <FontAwesomeIcon icon={faXTwitter} className="text-2xl text-primary" />
                            </div>
                            <div onClick={() => { window.open("https://www.linkedin.com/in/josuebusta/", "_blank"); }} className=" h-12 w-12 bg-whitebg dark:bg-black rounded-full flex justify-center items-center hover:shadow-lg cursor-pointer">
                                <FontAwesomeIcon icon={faLinkedinIn} className="text-2xl text-primary" />
                            </div>
                        </div>
                    </div>
                    <div className="  bg-white rounded-lg cursor-pointer p-6 max-sm:grid max-sm:grid-cols-2 max-2xl:flex-col xl:space-y-3 dark:bg-darkgray ">
                        <div className="max-2xl:hidden  text-2xl font-bold text-black dark:text-whitebg">
                            {t('gettouch')}
                        </div>
                        <div className="min-[580px]:hidden flex items-center  text-2xl font-bold text-black dark:text-whitebg">
                            Contact
                        </div>
                        <div className="lg:max-2xl:flex-col  flex max-[580px]:justify-end max-[580px]:space-x-6 justify-between lg:max-2xl:space-y-6  ">
                            <div className="flex items-center  space-x-2 bg-whitebg dark:bg-black  h-12 px-5 rounded-full hover:shadow-lg text-black dark:text-whitebg ">
                                <EnvelopeIcon className=" text-primary w-4 h-4 " />
                                <div className="max-[580px]:hidden">
                                    josuebustatr@gmail.com
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center space-x-2 bg-whitebg dark:bg-black h-12  px-5 rounded-full hover:shadow-lg text-black dark:text-whitebg">
                                    <PhoneIcon className=" text-primary w-4 h-4 " />
                                    <div className="max-[580px]:hidden">
                                        640030355
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;