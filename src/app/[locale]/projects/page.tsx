import { FunnelIcon } from "@heroicons/react/20/solid"

export default function Page() {
    return (
        <div className="mx-auto  px-24 h-4/5 max-w-[120rem] pb-12 ">

            <div className=" flex-col h-full bg-primary space-y-6">
                <div className="flex justify-between ">
                    <div className="flex justify-between bg-white rounded-full h-12 items-center space-x-6 px-6 text-whitegray">

                        <div className="cursor-pointer">
                            All
                        </div>
                        <div className="cursor-pointer">
                            Web Developer
                        </div>
                        <div className="cursor-pointer">
                            UI/UX Designs
                        </div>
                        <div className="cursor-pointer">
                            Brand Designs
                        </div>
                    </div>
                    <div className="flex justify-center items-center bg-white h-12 rounded-full px-6 space-x-2 text-whitegray cursor-pointer">
                        <div>
                            Filter
                        </div>
                        <FunnelIcon className=" h-4 w-4" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6   max-h-[27.25rem] overflow-y-auto ">
                    <div className="bg-white rounded-lg h-52 p-6">
                        <div className=" bg-whitegray h-full w-48 rounded-md">

                        </div>
                    </div>
                    <div className="bg-white rounded-lg h-52 p-6">
                        <div className=" bg-whitegray h-full w-48 rounded-md">

                        </div>
                    </div>
                    <div className="bg-white rounded-lg h-52 p-6">
                        <div className=" bg-whitegray h-full w-48 rounded-md">

                        </div>
                    </div>
                    <div className="bg-white rounded-lg h-52 p-6">
                        <div className=" bg-whitegray h-full w-48 rounded-md">

                        </div>
                    </div>
                    <div className="bg-white rounded-lg h-52 p-6">
                        <div className=" bg-whitegray h-full w-48 rounded-md">

                        </div>
                    </div>
                     <div className="bg-white rounded-lg h-52 p-6">
                        <div className=" bg-whitegray h-full w-48 rounded-md">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}