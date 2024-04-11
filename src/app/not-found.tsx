"use client";
import {redirect} from 'next/navigation';

export default function NotFound(){
    return (
        <html>
            <body className="text-center">
                <h1 className="mt-10 font-semibold">Something went wrong xd!</h1>
            </body>
        </html>
    )
}