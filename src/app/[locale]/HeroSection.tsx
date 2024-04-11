"use client"

import React, { useState , useEffect} from "react"
import HeaderSection from "./Header"
import { ArrowUpRightIcon, MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBehance, faCss3Alt, faDiscord, faFigma, faGithub, faHtml5, faJava, faLinkedin, faLinkedinIn, faReact, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { useTranslations } from "next-intl";
import { faCss3 } from "@fortawesome/free-brands-svg-icons/faCss3"
import { faSquareJs } from "@fortawesome/free-brands-svg-icons/faSquareJs"

interface HeroProps {

}

const HeroSection: React.FC<HeroProps> = ({ }) => {
    const t = useTranslations('HeroSection');
   

    return (

        <div className=" grid grid-rows-2 gap-6 h-full ">
            <div className="grid grid-cols-2 gap-6">
                <div className="grid grid-cols-11 bg-white rounded-xl  p-6 hover:shadow-lg cursor-pointer dark:bg-darkgray" >
                    <div className="bg-whitegray  rounded-lg  col-span-4 dark:bg-gray">

                    </div>
                    <div className="flex-col flex justify-between col-span-7  group pl-6">
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
                                Name                            </div>
                        </div>
                        <div className="  flex justify-end items-center text-whitegray space-x-1 dark:text-gray ">
                            <div>
                                Barcelona, <span className="font-semibold">                    {t('country')}
                                </span>
                            </div>
                            <MapPinIcon className=" text-primary w-4 h-4 " />

                        </div>
                    </div>
                </div>
                <div className="grid grid-row-3 gap-6   ">
                    <div className="flex-col flex justify-between bg-white rounded-lg row-span-3 p-6 hover:shadow-lg cursor-pointer dark:bg-darkgray">
                        <div className="w-full flex justify-between ">
                            <div className="text-2xl font-bold text-black dark:text-whitebg">
                                {t('myskills')}

                            </div>
                            <div className="  flex justify-end items-start h-full  text-whitegray space-x-1 dark:text-gray">
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
                            <div className="flex justify-center items-center h-12 w-12 bg-whitebg  rounded-full ring-2 ring-white text-2xl text-primary dark:bg-black dark:ring-darkgray">
                            <FontAwesomeIcon icon={faReact} />
                            </div>
                            <div className="flex justify-center items-center h-12 w-12 bg-whitebg  rounded-full ring-2 ring-white text-2xl text-primary dark:bg-black dark:ring-darkgray">
                            <FontAwesomeIcon icon={faFigma} />
                            </div>
                            <div className="flex justify-center items-center h-12 w-12 bg-whitebg  rounded-full ring-2 ring-white text-2xl text-primary dark:bg-black dark:ring-darkgray">
                            <FontAwesomeIcon icon={faJava} />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-6 ">
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
            </div>
            <div className="grid grid-cols-5 gap-6 ">
                <div className="col-span-3 flex-col flex justify-between bg-white rounded-lg hover:shadow-lg cursor-pointer p-6 dark:bg-darkgray">
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
                </div>
                <div className="col-span-2 grid grid-row-3 gap-6 ">
                    <div className="row-span-1 bg-white rounded-lg   flex justify-between items-center px-6 py-4 dark:bg-darkgray">
                        <div className="text-2xl font-bold text-black dark:text-whitebg">
                            {t('social')}

                        </div>
                        <div className="flex space-x-2">
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
                    <div className="row-span-3 bg-white rounded-lg cursor-pointer p-6 flex-col space-y-3 dark:bg-darkgray">
                        <div className="text-2xl font-bold text-black dark:text-whitebg">
                        {t('gettouch')}
                        </div>
                        <div className=" flex justify-between ">
                            <div className="flex items-center space-x-2 bg-whitebg dark:bg-black  py-3 px-5 rounded-full hover:shadow-lg text-black dark:text-whitebg ">
                                <EnvelopeIcon className=" text-primary w-4 h-4 " />
                                <div>
                                    josuebustatr@gmail.com
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center space-x-2 bg-whitebg dark:bg-black py-3 px-5 rounded-full hover:shadow-lg text-black dark:text-whitebg">
                                    <PhoneIcon className=" text-primary w-4 h-4 " />
                                    <div>
                                        +34 640030355
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