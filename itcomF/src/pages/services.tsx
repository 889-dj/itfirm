import ServicesSection from "@/components/servicesec"
import { Button } from "@/components/ui/button"
import { FaCloud, FaWind } from "react-icons/fa6"
import { Link } from "react-router-dom"

const Services = () => {
  return (
    <section className="w-full">
      <div className="bg-woman bg-cover w-full lg:min-h-[20vh] min-h-[50%] flex flex-col items-center py-24 backdrop-grayscale-1 gap-y-1">
        <h1 className='text-3xl text-gray-800 font-bold mt-6'>Services</h1>
        <h2 className='text-lg text-gray-800 font-bold'><Link to={'/'}>Home</Link>{'>'}Services</h2>
      </div>
      {/*section 2*/}
      <div className="w-full flex flex-col items-center gap-y-6">
        <div className="flex flex-col items-center gap-y-1 px-4 py-8">
          <p className="text-blue-500 font-bold text-xl flex justify-center gap-x-2">
            <span className="flex items-center"><FaWind className="rotate-180" /></span>
            Our Services
            <span className="flex items-center"><FaWind /></span>
          </p>
          <h2 className="text-3xl font-bold text-center max-w-[85%]">We provide the necessary services to you</h2>
        </div>
      </div>
      <div className="w-full flex justify-center py-10">
        <ServicesSection/>
      </div>
      <div className="py-10 flex flex-col lg:flex-row">
        <div className="lg:w-[50%] shadow-2xl relative">
          <div className="w-full">
            <img src="../../public/team.png" alt="team" className="w-full h-full"/>
          </div>
          <div className="absolute -bottom-28 lg:bottom-0 px-4 flex flex-col">
            <p className="flex items-center gap-x-2 text-blue-800 font-bold text-xl"><FaWind/>Case Study</p>
            <h3 className="text-gray-900 font-bold text-3xl">Information Technology</h3>
            <p className="text-lg text-gray-700">10 things u should know about  IT infrastructure to reduce your recurring cost </p>
          </div>
        </div>
        <div className="lg:w-[50%] px-6 mt-36 lg:mt-0">
          <div className="flex flex-col gap-y-1">
            <p className="text-2xl font-semibold font-mono">who we are?</p>
            <h2 className="text-4xl font-bold font-mono">we are a team of <span className="text-blue-500">seasoned professional</span></h2>
          </div>
          <div className="py-4">
            <p className="text-xl">We provide the full spectrum of IT services and consulting for various industries.</p>
          </div>
          <div className="flex flex-col lg:flex-row justify-around gap-y-6 gap-x-3 py-8">
            <div className="flex flex-col p-4 justify-center items-center bg-gradient-to-r from-violet-600 to-pink-400 gap-y-3">
              <div className="flex justify-center"><FaCloud className="scale-[2.5]"/></div> 
              <h2 className="text-xl font-bold font-mono">Digital Marketer</h2>
              <p className="text-center text-gray-200">Our customers get solutions and business opportunities instead of just projects. Our mission is to accelerate.</p>
            </div>
            <div className="flex flex-col p-4 lg:gap-x-3 justify-center items-center bg-gradient-to-r from-violet-600 to-pink-400 gap-y-3">
              <div className="flex justify-center"><FaCloud className="scale-[2.5]"/></div> 
              <h2 className="text-xl font-bold font-mono">Digital Marketer</h2>
              <p className="text-center text-gray-200">Our customers get solutions and business opportunities instead of just projects. Our mission is to accelerate.</p>
            </div>
          </div>
          <div>
            <Button className="bg-blue-500 rounded-full">
              <Link to={'/about'}>About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services