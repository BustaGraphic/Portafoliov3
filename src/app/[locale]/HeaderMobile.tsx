"use client"

import React, { ChangeEvent, useState, useTransition, useEffect } from "react"
import Link from "next/link";
import { MoonIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { ChatBubbleLeftEllipsisIcon } from '@heroicons/react/20/solid'
import { SunIcon, HomeIcon, UserIcon, FolderOpenIcon, LightBulbIcon,  } from '@heroicons/react/20/solid'
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
        <div className="  flex justify-between items-center w-full max-w-[120rem] mx-auto px-6 text-black dark:text-whitebg">

           

            {['', 'about', 'contact', 'skills', 'projects'].map((path) => (
                <Link
                    key={path}
                    href={`/${locale}/${path}`}
                    locale={locale}
                    className={` hover:text-primary font-medium  ${isActive(path) ? 'text-primary' : 'text-whitegray dark:text-gray'}`}
                >
                    {path === 'about' ?
                        <UserIcon className="h-6 w-6" /> :
                        path === 'skills' ?
                            <LightBulbIcon className="h-6 w-6" /> :
                            path === 'projects' ?
                                <FolderOpenIcon className="h-6 w-6" /> :
                                path === 'contact' ?
                                <button className="relative h-20 w-20 bg-primary rounded-full flex items-center justify-center text-whitebg mt-[-3rem] group">
                                <ChatBubbleLeftEllipsisIcon className="h-6 w-6 group-hover:w-8 group-hover:h-8" /> 
                                </button> :
                                    <HomeIcon className="h-6 w-6" />
                    }
                </Link>
            ))}




        </div>
    )
}

export default HeaderSection;

