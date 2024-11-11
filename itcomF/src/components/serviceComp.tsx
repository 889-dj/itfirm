/* eslint-disable @typescript-eslint/no-unused-vars */
import { LucideFileBadge } from 'lucide-react'
import { FcOnlineSupport } from 'react-icons/fc'
import { Button } from './ui/button'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const ServiceComp = ({ name, text, cards }: { name: string, text: string, cards: string[] }) => {
    return (
        <div className="w-full py-8 flex flex-col gap-y-4 items-center">
            <h2 className="text-blue-500 text-2xl font-bold">{name}</h2>
            <p className="text-lg text-gray-700 p-6">{text}</p>
            <div className="w-full flex flex-col px-6 lg:flex-row gap-x-4 py-4 gap-y-4">
                <div className=" w-full flex gap-x-16 lg:gap-x-36 bg-gray-950 p-6 py-12 text-white">
                    <div className="flex items-center p-2"><LucideFileBadge className="scale-[2.5] ml-8" /></div>
                    <div className="flex flex-col">
                        <p className="text-2xl font-bold">Why It soft?</p>
                        <p>We're making room for self care today with plan.</p>
                    </div>
                </div>
                <div className="w-full flex gap-x-16 lg:gap-x-36 bg-gray-950 p-6 py-12 text-white">
                    <div className="flex items-center p-2"><LucideFileBadge className="scale-[2.5] ml-8" /></div>
                    <div className="flex flex-col">
                        <p className="text-2xl font-bold">Why It soft?</p>
                        <p>We're making room for self care today with plan.</p>
                    </div>
                </div>
            </div>
            {/* 3 sec */}
            <div className="flex flex-col lg:flex-row">
                <div className="lg:w-[50%]">
                    <img src="../../../public/home.jpg" alt="team" className="h-full w-full" />
                </div>
                <div className="lg:w-[50%] px-6 flex flex-col justify-center shadow-lg gap-y-3 py-2">
                    <h2 className="text-2xl lg:text-4xl font-bold">We serve the <span className="text-blue-500">best work</span></h2>
                    <p className="text-lg lg:text-xl font-semibold">
                        A hosted desktop solution allows for the delivery of a consistent and scalable IT experience for all users in an organisation. With this solution, users gain access via a desktop icon or link.
                    </p>
                </div>
            </div>
            {/* 4 sec */}
            {/* card section */}
            <div className='w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 px-6 py-2 gap-x-3 gap-y-6'>
                {
                    cards.map((item, index) => (
                        <div key={index} className='p-2 py-8 bg-gradient-to-r from-violet-500 to-cyan-500 flex items-center justify-center'>
                            <p className='text-center'>{item}</p>
                            <Button className='bg-transparent hover:bg-transparent animate-pulse'>
                                <Link to={`/service/${name.toLowerCase().split(' ')[0]}/${item.split(' ').join("").toLowerCase()}`}>
                                    <FaArrowRight />
                                </Link>
                            </Button>
                        </div>
                    ))
                }
            </div>

            {/* card section end */}
            <div className="w-[95%] py-0">
                <div className="w-full flex flex-col justify-evenly lg:flex-row p-6 text-white bg-gray-800">
                    <div className="flex items-center gap-x-4">
                        <div className="flex items-center">
                            <FcOnlineSupport className="text-white scale-[2]" />
                        </div>
                        <div>
                            <p className="text-xl">Best quality
                                support</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-4">
                        <div className="flex items-center">
                            <FcOnlineSupport className="text-white scale-[2]" />
                        </div>
                        <div>
                            <p className="text-xl">Customer Satisfaction</p>

                        </div>
                    </div>
                    <div className="flex items-center gap-x-4">
                        <div className="flex items-center">
                            <FcOnlineSupport className="text-white scale-[2]" />
                        </div>
                        <div>
                            <p className="text-xl">Best Prices</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceComp