"use client"
import React, { useState } from "react"
import { ArrowUpRightIcon, MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBehance, faCss3Alt, faDiscord, faFigma, faGithub, faHtml5, faJava, faLinkedin, faLinkedinIn, faReact, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { useTranslations } from "next-intl";

export default function Page() {
    const t = useTranslations('AboutSection');

    return (
        <div className="mx-auto  px-24 h-4/5 max-w-[120rem] pb-12  ">

            <div className=" grid grid-rows-2 gap-6 h-full ">
                <div className="flex  space-x-6">
                    <div className="bg-white rounded-lg  aspect-square p-6 dark:bg-darkgray">
                        <div className="bg-whitegray aspect-square rounded-md dark:bg-gray">

                        </div>
                    </div>
                    <div className="grid grid-rows-3 gap-6 w-full">
                        <div className="row-span-1  flex justify-between items-end px-6">

                            <div className="text-5xl font-bold text-black dark:text-whitebg">
                                BustaLover
                            </div>
                            <div className="  flex justify-end items-center text-whitegray space-x-1 dark:text-gray ">
                                <div>
                                    Barcelona, <span className="font-semibold">                    {t('country')}
                                    </span>
                                </div>
                                <MapPinIcon className=" text-primary w-4 h-4 " />

                            </div>
                        </div>
                        <div className="row-span-2  bg-white rounded-lg text-primary p-6 space-y-2 dark:bg-darkgray">
                            <div>
                                {t('description')}

                            </div>
                            <div className="text-sm text-whitegray dark:text-gray">
                                {t('descriptiontext')}
                            </div>

                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-5 gap-6 ">
                    <div className="col-span-3 flex-col flex justify-between bg-white rounded-lg hover:shadow-lg cursor-pointer p-6 dark:bg-darkgray">
                        <div className="flex justify-between">
                            <div className="text-2xl font-bold text-black dark:text-whitebg">
                                {t('experience')}

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
                                {t('education')}
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
        </div>
    )
}