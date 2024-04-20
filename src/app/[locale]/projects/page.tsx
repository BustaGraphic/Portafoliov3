import { FunnelIcon } from "@heroicons/react/20/solid"

export default function Page() {
    return (
        <div className="mx-auto flex-col flex  h-full    max-w-[120rem]  space-y-6 overflow-hidden">
            <div className="flex justify-between px-24">
                <div className="flex justify-between bg-white dark:bg-darkgray rounded-full h-12 items-center space-x-6 px-6 text-whitegray dark:text-gray">

                    <div className="cursor-pointer hover:text-primary">
                        All
                    </div>
                    <div className="cursor-pointer hover:text-primary">
                        Web Developer
                    </div>
                    <div className="cursor-pointer hover:text-primary">
                        UI/UX Designs
                    </div>
                    <div className="cursor-pointer hover:text-primary">
                        Brand Designs
                    </div>  
                </div>
                <div className="flex justify-center items-center bg-white dark:bg-darkgray h-12 rounded-full px-6 space-x-2 text-whitegray dark:text-gray cursor-pointer">
                    <div>
                        Filter
                    </div>
                    <FunnelIcon className=" h-4 w-4" />
                </div>
            </div>
            <div className=" grid grid-cols-2  gap-6 max-h-full w-full px-24  pb-12 overflow-y-auto ">
                <div className="grid grid-cols-5 gap-6 bg-white dark:bg-darkgray rounded-lg h-60 p-6 ">
                    <div className=" bg-whitegray col-span-2 w-full h-full rounded-md dark:bg-gray">

                    </div>
                    <div className="w-full h-full col-span-3 grid grid-rows-4 ">
                        <div className=" w-full flex items-end font-bold text-xl pb-2 text-darkgray dark:text-whitebg ">
                            Project Name
                        </div>
                        <div className=" flex items-center row-span-2 w-full text-whitegray dark:text-gray ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel libero elit. Aliquam ut tellus magna. Donec dignissim congue dui, quis tristique.
                        </div>

                        <div className="w-full pt-2 text-darkgray dark:text-whitebg">
                            WASD
                        </div>


                    </div>
                </div>

                <div className="grid grid-cols-5 gap-6 bg-white dark:bg-darkgray rounded-lg h-60 p-6 ">
                    <div className=" bg-whitegray col-span-2 w-full h-full rounded-md dark:bg-gray">

                    </div>
                    <div className="w-full h-full col-span-3 grid grid-rows-4 ">
                        <div className=" w-full flex items-end font-bold text-xl pb-2 text-darkgray dark:text-whitebg ">
                            Project Name
                        </div>
                        <div className=" flex items-center row-span-2 w-full text-whitegray dark:text-gray ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel libero elit. Aliquam ut tellus magna. Donec dignissim congue dui, quis tristique.
                        </div>

                        <div className="w-full pt-2 text-darkgray dark:text-whitebg">
                            WASD
                        </div>


                    </div>
                </div>
                
                <div className="grid grid-cols-5 gap-6 bg-white dark:bg-darkgray rounded-lg h-60 p-6 ">
                    <div className=" bg-whitegray col-span-2 w-full h-full rounded-md dark:bg-gray">

                    </div>
                    <div className="w-full h-full col-span-3 grid grid-rows-4 ">
                        <div className=" w-full flex items-end font-bold text-xl pb-2 text-darkgray dark:text-whitebg ">
                            Project Name
                        </div>
                        <div className=" flex items-center row-span-2 w-full text-whitegray dark:text-gray ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel libero elit. Aliquam ut tellus magna. Donec dignissim congue dui, quis tristique.
                        </div>

                        <div className="w-full pt-2 text-darkgray dark:text-whitebg">
                            WASD
                        </div>


                    </div>
                </div>
                
                <div className="grid grid-cols-5 gap-6 bg-white dark:bg-darkgray rounded-lg h-60 p-6 ">
                    <div className=" bg-whitegray col-span-2 w-full h-full rounded-md dark:bg-gray">

                    </div>
                    <div className="w-full h-full col-span-3 grid grid-rows-4 ">
                        <div className=" w-full flex items-end font-bold text-xl pb-2 text-darkgray dark:text-whitebg ">
                            Project Name
                        </div>
                        <div className=" flex items-center row-span-2 w-full text-whitegray dark:text-gray ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel libero elit. Aliquam ut tellus magna. Donec dignissim congue dui, quis tristique.
                        </div>

                        <div className="w-full pt-2 text-darkgray dark:text-whitebg">
                            WASD
                        </div>


                    </div>
                </div>
                
                
            </div>
        </div>
    )
}