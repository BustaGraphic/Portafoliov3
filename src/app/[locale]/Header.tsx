"use client"

import React, { ChangeEvent, useState, useTransition, useEffect } from "react"
import Link from "next/link";
import { MoonIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { ChatBubbleLeftEllipsisIcon } from '@heroicons/react/20/solid'
import { SunIcon } from '@heroicons/react/20/solid'
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter, } from "next/navigation";
import { useSearchParams } from "next/navigation";

interface HeaderProps {

}

const HeaderSection: React.FC<HeaderProps> = ({ }) => {


    const [lenguageHover, setLenguageHover] = useState(false);
    const t = useTranslations('Header');
    const [page, setPage] = useState('')
    const [isPending, startTransition] = useTransition();
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const onSelectChange = (e: any) => {
        const nextLocale = e.target.value;
        const currentPath = window.location.pathname.split('/').slice(2).join('/');
        window.location.href = `/${nextLocale}/${currentPath}`;
    };
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        if (theme == "dark") {
            document.querySelector('html')?.classList.add('dark')
        } else {
            document.querySelector('html')?.classList.remove('dark')

        }
    }, [theme])

    const handleChangeTheme = () => {
        setTheme(prevTheme => {
            const newTheme = prevTheme === "light" ? "dark" : "light";
            localStorage.setItem("theme", newTheme);  
            return newTheme;
        });
    }
    
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") || "light";
        setTheme(storedTheme);
        document.querySelector('html')?.classList.toggle('dark', storedTheme === "dark");
    }, []);
    
    const isActive = (path: string) => {
        if (path === '') {
            return pathname === `/${locale}` || pathname === '/';
        }
        return pathname === `/${locale}/${path}`;
    };
    return (
        <div className="  flex justify-between items-center w-full max-w-[120rem] mx-auto md:px-24 px-12  text-black dark:text-whitebg">
            <div>
                Busta Graphic
            </div>
            <div className="max-xl:hidden flex justify-between w-[35%]">
                {['', 'about', 'skills', 'projects'].map((path) => (
                    <Link
                        key={path}
                        href={`/${locale}/${path}`}
                        locale={locale}
                        className={`tabname  hover:text-primary font-medium  ${isActive(path) ? 'text-primary' : 'text-whitegray dark:text-gray'}`}
                    >
                        {t(path || 'home')}
                    </Link>
                ))}
            </div>

            <div className="flex space-x-6 items-center">
                <div className="relative  group flex space-x-6 ">
                    <button onClick={handleChangeTheme} className="rounded-full h-12 w-12 bg-white flex justify-center items-center hover:shadow-lg dark:bg-darkgray group">
                        {theme == 'dark' ? <MoonIcon className="text-primary w-4 h-4" /> : <SunIcon className="text-primary w-5 h-5" />}

                    </button>
                    <select defaultValue={locale} onChange={onSelectChange} className="appearance-none outline-none rounded-full pr-6 pl-3 font-semibold  h-12 bg-white flex justify-center items-center hover:shadow-lg dark:bg-darkgray dark:text-whitebg " onMouseEnter={() => setLenguageHover(true)} onMouseLeave={() => setLenguageHover(false)}>
                        <option value="en"> EN</option>
                        <option value="es">ES</option>
                    </select>


                    <div
                        className="pointer-events-none absolute inset-y-0 right-0 flex items-center  text-whitegray h-12 group-hover:text-whitebg mr-1"
                    >
                        <ChevronDownIcon className="group-hover:text-primary w-6 h-6" />
                    </div>

                </div>

                <button className="bg-primary font-semibold rounded-full h-16 w-56 text-whitebg flex items-center justify-center space-x-3 group hover:shadow-lg dark:text-black 
                ">
                    <div className="group-hover:text-lg">
                        {t('contact')}
                    </div>
                    <ChatBubbleLeftEllipsisIcon className=" w-4 h-4 group-hover:w-5 group-hover:h-5" />

                </button>
            </div>

        </div>
    )
}

export default HeaderSection;

