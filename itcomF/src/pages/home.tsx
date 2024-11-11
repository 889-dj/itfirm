import { Button } from "@/components/ui/button";
import { SiTicktick } from "react-icons/si";
import { MdEngineering } from "react-icons/md";
import { FaArrowRight, FaCompassDrafting, FaGlobe, FaGoogle, FaSketch, FaSlack, FaStar, FaThumbsUp } from "react-icons/fa6";
import { BiSolidBuilding, BiSupport } from "react-icons/bi";
import { IoCall } from "react-icons/io5";
import { GoVerified } from "react-icons/go";
import { Link } from "react-router-dom";
import CountUp from 'react-countup';


const Home = () => {
  return (
    <section className="w-full">
      <div className="bg-home bg-cover w-full min-h-screen flex flex-col justify-center px-8 backdrop-grayscale-1 gap-y-6 relative">
        <h1 className="lg:text-8xl text-5xl text-white font-bold">Efficient thinking with us</h1>
        <div className="flex gap-x-4">
          <p className="text-white font-semibold flex gap-x-1"><span className="flex items-center"><SiTicktick /></span> Microsoft Partner</p>
          <p className="text-white font-semibold flex gap-x-1"><span className="flex items-center"><SiTicktick /></span> ISO 270001 Certified</p>
          <div className=""></div>
        </div>
        <div className="flex flex-wrap lg:max-w-[50%]">
          <p className="text-white">your business needs an IT service that supports your development plans. it solve works closely with you to analyse your current service and suggest solutions</p>
        </div>
        <Button className="bg-blue-500 hover:bg-blue-800 rounded-full lg:max-w-[10%] max-w-[30%]">
          <Link to={'/contact'}>contact us</Link>
        </Button>
        {/* stylish section */}
        <div className=" w-full flex flex-col lg:flex-row gap-y-2 justify-between p-8 lg:rounded-full border lg:rounded-tr-none lg:rounded-br-none absolute lg:-bottom-20 -bottom-32 right-0 bg-white shadow-lg lg:px-9">
          <div className="flex gap-x-5">
            <div className="flex items-center"><MdEngineering className="scale-200 text-blue-800" /></div>
            <div>
              <h3 className="text-lg font-semibold">Support Inqueries</h3>
              <p>using any of our products and need help</p>
              <p className="flex gap-x-1">Get Support <span className="flex items-center"><FaArrowRight /></span></p>
            </div>
          </div>
          <div className="flex gap-x-5 lg:mr-36">
            <div className="flex items-center"><MdEngineering className="scale-200 text-blue-800" /></div>
            <div>
              <h3 className="text-lg font-semibold">Support Inqueries</h3>
              <p>using any of our products and need help</p>
              <p className="flex gap-x-1">Get Support <span className="flex items-center"><FaArrowRight /></span></p>
            </div>
          </div>
        </div>
      </div>
      {/* second section*/}
      <div className="py-1 flex flex-col gap-y-6 lg:flex-row lg:pt-[8%] pt-[11%] px-10 bg-gradient-to-r from-gray-300 to-blue-100">
        <div className="flex flex-col flex-wrap lg:max-w-[70%] gap-y-6">
          <p className="text-blue-500 text-md font-semibold pt-20 md:pt-0 lg:pt-0">About Our Company</p>
          <div className="flex flex-col gap-y-3">
            <h2 className="text-lg font-bold">Choose The Best IT Service Company</h2>
            <div dir="ltr">
              <p className="max-w-[70%] border-s-4 border-solid border-indigo-600 px-2">an it firm or MSP who keeps your IT running smoothly at all times is like a plumber who fixes your pipes that's what the are supposed to do many IT firm struggles</p>
            </div>
            <div className="bg-gray-700 h-[0.5px] w-[80%] "></div>
          </div>
          <div className="flex flex-col gap-y-3">
            <p className="flex gap-x-4"><span className="flex items-center rounded-full border-solid border-blue-600 bg-blue-200 border px-1"><FaThumbsUp /></span>moneyback gurantee</p>
            <p className="flex gap-x-4"><span className="flex items-center rounded-full border-solid border-blue-600 bg-blue-200 border px-1"><BiSupport /></span>technical support</p>
          </div>
          <div className="bg-gray-700 h-[0.5px] w-[80%] mt-"></div>
          <div className="flex justify-between max-w-[80%]">
            <Button className="rounded-full bg-blue-500">
              <Link to={'/contact'}>contact us</Link><span className="flex items-center"><FaArrowRight /></span></Button>
            <div className="flex flex-col lg:flex-row">
              <div className=" rounded-full lg:px-3 flex items-center gap-3">
                <IoCall className="text-blue-500 text-xl" />
              </div>
              <div className="flex flex-col justify-center">
                <p>call for help</p>
                <p className="text-blue-500 font-semibold">+91 987 654 3210</p>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:w-full flex justify-center py-3">
          <img src="../../public/girly.png" alt="girl" className="w-[100%] h-[100%] object-cover object-center" />
        </div>
      </div>
      {/* section 3 */}
      <div className=" w-full py-4 flex flex-col items-center px-2 gap-y-3">
        <p className="text-blue-500 text-lg font-bold">Fun Fact</p>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold text-center">Gain productivity and performance</h2>
          <h3 className="text-xl">with simple IT</h3>
        </div>
        {/* cards */}
        <div className="flex flex-col lg:flex-row gap-y-8 justify-evenly w-full p-16 py-8">
          <div className="flex flex-col items-center">
            <div className="flex items-center p-2"><BiSolidBuilding className="scale-[3] text-blue-500" /></div>
            <h2 className="text-3xl font-bold">
              <CountUp start={0} end={25} delay={2}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />+
                  </div>
                )}
              </CountUp>
            </h2>
            <p className="text-gray-800">world wide branches</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center p-2"><BiSolidBuilding className="scale-[3] text-blue-500" /></div>
            <h2 className="text-3xl font-bold">
              <CountUp start={0} end={105} delay={2}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />+
                  </div>
                )}
              </CountUp>
            </h2>
            <p className="text-gray-800">Executive team members</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center p-2"><BiSolidBuilding className="scale-[3] text-blue-500" /></div>
            <h2 className="text-3xl font-bold">
              <CountUp start={0} end={15} delay={2}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />+
                  </div>
                )}
              </CountUp>
            </h2>
            <p className="text-gray-800">Awards winning company</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center p-2"><BiSolidBuilding className="scale-[3] text-blue-500" /></div>
            <h2 className="text-3xl font-bold">
              <CountUp start={0} end={45} delay={2}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />+
                  </div>
                )}
              </CountUp>
            </h2>
            <p className="text-gray-800">Satisfied team members</p>
          </div>
        </div>
        {/* companies */}
        <div className="lg:w-full flex flex-wrap w-[80%] justify-between lg:px-32 px-10 gap-20 align-middle py-16">
          <p className="flex gap-x-4"><span className="flex scale-[2.2] items-center text-gray-500"><FaGoogle />oogle</span></p>
          <p className="flex gap-x-4"><span className="flex scale-[2.2] items-center text-gray-500"><FaSlack />Slack</span></p>
          <p className="flex gap-x-4"><span className="flex scale-[2.2] items-center text-gray-500"><FaSketch />Sketch</span></p>
          <p className="flex gap-x-4"><span className="flex scale-[2.2] items-center text-gray-500"><FaCompassDrafting />abeo</span></p>
        </div>
      </div>

      {/* services */}
      <div className="w-full bg-gradient-to-r from-cyan-400 to-blue-400 flex flex-col gap-y-6 py-6 items-center">
        <p className="text-blue-900 text-lg font-bold">Our Services</p>
        <h2 className="text-2xl font-bold">One Platform Built to Transform Your Business</h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 p-6 gap-x-6 gap-y-6">
          <div className="flex flex-col lg:p-4 p-8 gap-y-3 shadow-lg border border-cyan-500 items-center">
            <div className="w-full flex justify-between">
              <div className="flex items-center px-1 bg-orange-300 rounded-md"><FaGlobe className="text-orange-600" /></div>
              <p className='text-gray-700 font-bold'>Netwok Management</p>
            </div>
            <p>simple powerful and secure monitoring for hybrid networks-highly scalable and built to reduce outages</p>
          </div>
          <div className="flex flex-col p-8 lg:p-2 gap-y-3 shadow-lg border border-cyan-500 items-center">
            <div className="w-full flex justify-between">
              <div className="flex items-center px-1 bg-orange-300 rounded-md"><FaGlobe className="text-orange-600" /></div>
              <p className='text-gray-700 font-bold'>cloud solutions</p>
            </div>
            <p>Leverage the power of cloud computing with our highly adaptable solutions, designed to support business growth.
            </p>
          </div>
          <div className="flex flex-col lg:p-4 p-8 gap-y-3 shadow-lg border border-cyan-500 items-center">
            <div className="w-full flex justify-between">
              <div className="flex items-center px-1 bg-orange-300 rounded-md"><FaGlobe className="text-orange-600" /></div>
              <p className='text-gray-700 font-bold'>App Development</p>
            </div>
            <p>Our mobile development services deliver innovative, user-centric applications tailored to your business needs.</p>
          </div>
          <div className="flex flex-col lg:p-4 p-8 gap-y-3 shadow-lg border border-cyan-500 items-center">
            <div className="w-full flex justify-between">
              <div className="flex items-center px-1 bg-orange-300 rounded-md"><FaGlobe className="text-orange-600" /></div>
              <p className='text-gray-700 font-bold'>Web Development</p>
            </div>
            <p>We create powerful, responsive websites that offer an exceptional user experience and drive business results.</p>
          </div>
        </div>
        <div>
          <Button className="bg-blue-500 rounded-full"><Link to={'/contact'}>contact us</Link></Button>
        </div>

      </div>


      {/* reviews */}
      <div className="py-6 flex flex-col items-center gap-y-4">
        <p className="text-lg text-blue-500 font-bold">Customer Review's</p>
        <h2 className="text-2xl font-bold px-3
        text-center">Highly Satisfied clients world wide</h2>
        {/* review cards */}
        <div className="flex flex-col lg:flex-row p-8 gap-x-4 gap-y-6">
          <div className="flex flex-col p-2 gap-y-2 shadow-lg border">
            <div className="flex gap-x-2">
              <p className="text-2xl font-extrabold">5.0</p>
              <div className="flex items-center">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
              </div>
            </div>
            <p>“The website built for us is nothing short of amazing. It’s fast, responsive, and visually stunning. Our online traffic and customer engagement have both increased since the launch. They nailed the design and functionality we were after, and we couldn’t be happier with the result.”</p>
            <p className='font-semibold text-gray-500'>VP of network</p>
            <p className="flex items-center gap-x-2 text-violet-600">
              <span className="flex items-center">
                <GoVerified />
              </span>
              verified Review
            </p>
          </div>
          <div className="flex flex-col p-2 gap-y-2 shadow-lg border">
            <div className="flex gap-x-2">
              <p className="text-2xl font-extrabold">5.0</p>
              <div className="flex items-center">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
              </div>
            </div>
            <p>“Our company experienced a major server crash a few months ago, but thanks to [Your IT Firm]'s backup solutions, we had all our data restored within hours. The peace of mind their backup and recovery systems provide is invaluable. They saved us from what could have been a major loss.”</p>
            <p className='font-semibold text-gray-500'>VP of network</p>
            <p className="flex items-center gap-x-2 text-violet-600">
              <span className="flex items-center">
                <GoVerified />
              </span>
              verified Review
            </p>
          </div>
          <div className="flex flex-col p-2 gap-y-2 shadow-lg border">
            <div className="flex gap-x-2">
              <p className="text-2xl font-extrabold">5.0</p>
              <div className="flex items-center">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
              </div>
            </div>
            <p>“Working with them has been a game changer for our business. Their team is always available, and their quick response times have helped us avoid multiple potential disasters. The level of customer service they provide is unmatched. We trust them with all our IT needs, and they never let us down!”</p>
            <p className='font-semibold text-gray-500'>VP of network</p>
            <p className="flex items-center gap-x-2 text-violet-600">
              <span className="flex items-center">
                <GoVerified />
              </span>
              verified Review
            </p>
          </div>
          <div className="flex flex-col p-2 gap-y-2 shadow-lg border">
            <div className="flex gap-x-2">
              <p className="text-2xl font-extrabold">5.0</p>
              <div className="flex items-center">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
              </div>
            </div>
            <p>“We needed a flexible and scalable cloud solution as our business was growing fast. [Your IT Firm] delivered exactly what we were looking for. Their cloud infrastructure is reliable, secure, and has significantly improved our team’s productivity. I can’t recommend them enough for any business looking to migrate to the cloud.”
            </p>
            <p className='font-semibold text-gray-500'>VP of network</p>
            <p className="flex items-center gap-x-2 text-violet-600">
              <span className="flex items-center">
                <GoVerified />
              </span>
              verified Review
            </p>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Home